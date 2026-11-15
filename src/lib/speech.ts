// Browser speech layer: text-to-speech prompts, microphone recording with
// pause analysis, and live speech recognition (Chrome/Edge).
import type { Speaker } from '../data/types';

// ---------------- Text-to-speech ----------------
let voicesCache: SpeechSynthesisVoice[] = [];
function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (!('speechSynthesis' in window)) return Promise.resolve([]);
  const v = speechSynthesis.getVoices();
  if (v.length) return Promise.resolve((voicesCache = v));
  return new Promise((res) => {
    const done = () => res((voicesCache = speechSynthesis.getVoices()));
    speechSynthesis.addEventListener('voiceschanged', done, { once: true });
    setTimeout(done, 1200);
  });
}
loadVoices();

const FEMALE = /female|zira|samantha|susan|hazel|libby|sonia|natasha|karen|moira|tessa|veena|heera|catherine|aria|jenny|clara|serena|kate/i;
const MALE = /\bmale|david|mark|george|daniel|james|ryan|guy|william|ravi|prabhat|liam|thomas|rishi|fred|alex/i;

export function pickVoice(sp?: Speaker): SpeechSynthesisVoice | undefined {
  const en = voicesCache.filter((v) => v.lang.toLowerCase().startsWith('en'));
  if (!en.length) return undefined;
  const lang = (sp?.accent ?? 'en-GB').toLowerCase();
  const sameLang = en.filter((v) => v.lang.toLowerCase().replace('_', '-') === lang);
  const pool = sameLang.length ? sameLang : en;
  const g = sp?.gender === 'male' ? MALE : FEMALE;
  const other = sp?.gender === 'male' ? FEMALE : MALE;
  return (
    pool.find((v) => g.test(v.name) && !other.test(v.name.replace(/female/i, ''))) ??
    pool.find((v) => g.test(v.name)) ??
    // vary by name hash so different speakers sound different even without gender hints
    pool[Math.abs([...(sp?.name ?? 'x')].reduce((h, c) => h * 31 + c.charCodeAt(0), 7)) % pool.length]
  );
}

export interface SpeechChunk { text: string; speaker?: Speaker }
export interface Playback { done: Promise<void>; cancel: () => void }

/** Speak chunks in sequence. Long text is split into sentences (Chrome cuts off long utterances). */
export function speak(chunks: SpeechChunk[], rate = 0.95, onProgress?: (p: number, chunkIndex: number) => void): Playback {
  let cancelled = false;
  const parts: { text: string; speaker?: Speaker; ci: number }[] = [];
  chunks.forEach((c, ci) =>
    (c.text.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) ?? [c.text]).forEach((t) => parts.push({ text: t.trim(), speaker: c.speaker, ci })),
  );
  const total = parts.reduce((n, p) => n + p.text.length, 0) || 1;
  const done = (async () => {
    await loadVoices();
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    let spoken = 0;
    for (const p of parts) {
      if (cancelled) return;
      if (!p.text) continue;
      onProgress?.(spoken / total, p.ci);
      await new Promise<void>((res) => {
        const u = new SpeechSynthesisUtterance(p.text);
        const v = pickVoice(p.speaker);
        if (v) { u.voice = v; u.lang = v.lang; }
        u.rate = rate;
        u.onend = () => res();
        u.onerror = () => res();
        speechSynthesis.speak(u);
      });
      spoken += p.text.length;
      // small natural gap between speakers
      if (parts[parts.indexOf(p) + 1]?.ci !== p.ci) await new Promise((r) => setTimeout(r, 450));
    }
    onProgress?.(1, chunks.length - 1);
  })();
  return {
    done,
    cancel: () => {
      cancelled = true;
      if ('speechSynthesis' in window) speechSynthesis.cancel();
    },
  };
}

export function beep(freq = 880, ms = 260) {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = freq;
    g.gain.value = 0.12;
    o.connect(g).connect(ctx.destination);
    o.start();
    setTimeout(() => { o.stop(); ctx.close(); }, ms);
  } catch { /* no audio */ }
}

// ---------------- Recognition ----------------
type SR = {
  lang: string; continuous: boolean; interimResults: boolean; maxAlternatives: number;
  start(): void; stop(): void; abort(): void;
  onresult: ((e: any) => void) | null; onend: (() => void) | null; onerror: ((e: any) => void) | null;
};
const SRCtor: (new () => SR) | undefined = (window as any).SpeechRecognition ?? (window as any).webkitSpeechRecognition;
export const recognitionSupported = !!SRCtor;
export const recordingSupported = typeof MediaRecorder !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;

// ---------------- Recorder ----------------
export interface RecordingResult {
  blob: Blob;
  url: string;
  durationSec: number;      // total recording length
  speechSec: number;        // first voiced frame → last voiced frame
  voicedSec: number;        // total voiced time
  pauses: number[];         // silent gaps (s) longer than 0.35 s inside the speech span
  transcript: string;
  confidence: number;       // mean ASR confidence (0–1), NaN if unknown
  recognised: boolean;      // whether ASR was available
}

export class Recorder {
  private stream?: MediaStream;
  private mr?: MediaRecorder;
  private chunks: Blob[] = [];
  private ctx?: AudioContext;
  private timer?: number;
  private rec?: SR;
  private recActive = false;
  private finals: { t: string; c: number }[] = [];
  private interim = '';
  private frames: boolean[] = [];
  private noise = 0.01;
  private startedAt = 0;
  private lastVoice = 0;
  private everVoiced = false;
  static FRAME_MS = 50;

  constructor(
    private opts: {
      lang?: string;
      onLevel?: (level: number) => void;
      onTranscript?: (t: string) => void;
      silenceStopSec?: number;     // stop if silent this long (after first speech) — PTE uses 3 s
      onSilenceStop?: () => void;
    } = {},
  ) {}

  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    this.mr = new MediaRecorder(this.stream);
    this.chunks = [];
    this.mr.ondataavailable = (e) => e.data.size && this.chunks.push(e.data);
    this.mr.start(250);
    this.startedAt = performance.now();
    this.lastVoice = this.startedAt;

    this.ctx = new AudioContext();
    const src = this.ctx.createMediaStreamSource(this.stream);
    const an = this.ctx.createAnalyser();
    an.fftSize = 1024;
    src.connect(an);
    const buf = new Float32Array(an.fftSize);
    let calib = 0;
    this.timer = window.setInterval(() => {
      an.getFloatTimeDomainData(buf);
      let s = 0;
      for (let i = 0; i < buf.length; i++) s += buf[i] * buf[i];
      const rms = Math.sqrt(s / buf.length);
      if (calib < 6) { this.noise = Math.max(this.noise, rms); calib++; }
      const voiced = rms > Math.max(0.018, this.noise * 2.5);
      this.frames.push(voiced);
      const now = performance.now();
      if (voiced) { this.lastVoice = now; this.everVoiced = true; }
      this.opts.onLevel?.(Math.min(1, rms * 8));
      const sil = this.opts.silenceStopSec;
      if (sil && this.everVoiced && now - this.lastVoice > sil * 1000) this.opts.onSilenceStop?.();
    }, Recorder.FRAME_MS);

    if (SRCtor) {
      const r = new SRCtor();
      r.lang = this.opts.lang ?? 'en-US';
      r.continuous = true;
      r.interimResults = true;
      r.maxAlternatives = 1;
      r.onresult = (e: any) => {
        let interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const res = e.results[i];
          if (res.isFinal) this.finals.push({ t: res[0].transcript, c: res[0].confidence });
          else interim += res[0].transcript;
        }
        this.interim = interim;
        this.opts.onTranscript?.(this.currentTranscript());
      };
      r.onerror = () => {};
      r.onend = () => { if (this.recActive) { try { r.start(); } catch { /* already started */ } } };
      this.rec = r;
      this.recActive = true;
      try { r.start(); } catch { this.recActive = false; }
    }
  }

  private currentTranscript() {
    return (this.finals.map((f) => f.t).join(' ') + ' ' + this.interim).replace(/\s+/g, ' ').trim();
  }

  async stop(): Promise<RecordingResult> {
    window.clearInterval(this.timer);
    const durationSec = (performance.now() - this.startedAt) / 1000;
    const blob = await new Promise<Blob>((res) => {
      if (!this.mr || this.mr.state === 'inactive') return res(new Blob(this.chunks));
      this.mr.onstop = () => res(new Blob(this.chunks, { type: this.mr?.mimeType || 'audio/webm' }));
      this.mr.stop();
    });
    this.stream?.getTracks().forEach((t) => t.stop());
    this.ctx?.close();
    // give the recogniser a moment to deliver its final result
    if (this.rec) {
      this.recActive = false;
      await new Promise<void>((res) => {
        const r = this.rec!;
        const t = setTimeout(res, 1500);
        r.onend = () => { clearTimeout(t); res(); };
        try { r.stop(); } catch { clearTimeout(t); res(); }
      });
    }
    const transcript = this.currentTranscript();
    const confs = this.finals.map((f) => f.c).filter((c) => c > 0);
    const conf = confs.length ? confs.reduce((a, b) => a + b, 0) / confs.length : NaN;

    // pause analysis on voiced frames
    const f = this.frames;
    const first = f.indexOf(true);
    const last = f.lastIndexOf(true);
    const fs = Recorder.FRAME_MS / 1000;
    const pauses: number[] = [];
    let voiced = 0;
    if (first >= 0) {
      let gap = 0;
      for (let i = first; i <= last; i++) {
        if (f[i]) {
          voiced++;
          if (gap * fs > 0.35) pauses.push(gap * fs);
          gap = 0;
        } else gap++;
      }
    }
    return {
      blob,
      url: URL.createObjectURL(blob),
      durationSec,
      speechSec: first >= 0 ? (last - first + 1) * fs : 0,
      voicedSec: voiced * fs,
      pauses,
      transcript,
      confidence: conf,
      recognised: !!this.rec,
    };
  }

  abort() {
    window.clearInterval(this.timer);
    this.recActive = false;
    try { this.rec?.abort(); } catch { /* noop */ }
    try { this.mr?.state !== 'inactive' && this.mr?.stop(); } catch { /* noop */ }
    this.stream?.getTracks().forEach((t) => t.stop());
    this.ctx?.close().catch(() => {});
  }
}
