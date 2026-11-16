// Pre-generated listening audio (natural AI voices, made offline with VoxCPM2).
// public/audio/manifest.json maps a clip id (item id, or "<item id>-s<n>" for CELPIP sections)
// to an MP3 file and the start time of each speaker turn. Missing clips fall back to browser TTS.
import type { Playback } from './speech';

export interface Clip { file: string; dur: number; turns?: number[] }
type Manifest = Record<string, Clip>;

let manifest: Promise<Manifest> | null = null;
export function loadManifest(): Promise<Manifest> {
  if (!manifest) {
    manifest = fetch('./audio/manifest.json')
      .then((r) => (r.ok ? r.json() : {}))
      .catch(() => ({}));
  }
  return manifest;
}

export async function findClip(id?: string): Promise<Clip | undefined> {
  if (!id) return undefined;
  return (await loadManifest())[id];
}

/** Play a pre-generated clip. Resolves when it ends; rejects if the file cannot be played. */
export function playClip(clip: Clip, rate: number, onProgress?: (p: number, turn: number) => void): Playback & { failed: Promise<boolean> } {
  const a = new Audio('./audio/' + clip.file);
  a.preload = 'auto';
  // keep the learner's speed setting (0.95 = normal) without changing pitch
  a.playbackRate = Math.max(0.75, Math.min(1.25, rate / 0.95));
  (a as HTMLAudioElement & { preservesPitch?: boolean }).preservesPitch = true;
  let settle: (ok: boolean) => void = () => {};
  const failed = new Promise<boolean>((res) => (settle = (ok) => res(!ok)));
  const done = new Promise<void>((res) => {
    a.ontimeupdate = () => {
      const t = a.currentTime;
      const turns = clip.turns ?? [0];
      let ti = 0;
      while (ti + 1 < turns.length && turns[ti + 1] <= t) ti++;
      onProgress?.(Math.min(1, t / (a.duration || clip.dur || 1)), ti);
    };
    a.onended = () => { settle(true); res(); };
    a.onerror = () => { settle(false); res(); };
  });
  a.play().catch(() => settle(false));
  return { done, failed, cancel: () => { a.pause(); a.src = ''; } };
}
