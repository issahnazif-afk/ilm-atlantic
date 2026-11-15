// Ilm Atlantic scoring engine (prototype).
// Objective tasks use the published PTE marking rules exactly.
// Speaking and writing use transparent, explainable estimates on the official
// trait scales; Phase 2 swaps these estimators for calibrated AI models.
import type { Exam, Item, ItemOf, Skill, TaskCode } from '../data/types';
import { examOf, metaFor, TASK } from '../data/taskTypes';
import type { RecordingResult } from './speech';
import { ACADEMIC, COMPLEX, DISCOURSE, grammarCheck, type GrammarIssue } from './grammar';
import { spellCheck, type SpellIssue } from './spell';
import { clamp, contentStems, keyPointCoverage, lcsAlign, sentenceCount, wordCount, words, type Coverage } from './text';

export interface Trait { name: string; score: number; max: number; note?: string }

export interface WordMark { word: string; status: 'ok' | 'missed' | 'extra' | 'wrong' }

export interface ScoreResult {
  traits: Trait[];
  raw: number;
  max: number;
  fraction: number;                       // raw / max
  skills: Partial<Record<Skill, number>>; // 0–1 contribution per skill
  estimated: boolean;                     // true = AI/heuristic estimate, false = exact marking
  feedback: string[];
  coverage?: Coverage[];
  spelling?: SpellIssue[];
  grammar?: GrammarIssue[];
  alignment?: WordMark[];
  stats?: Record<string, string | number>;
}

function finish(task: TaskCode, traits: Trait[], estimated: boolean, feedback: string[], extra: Partial<ScoreResult> = {}, contentFraction?: number): ScoreResult {
  const raw = traits.reduce((s, t) => s + t.score, 0);
  const max = traits.reduce((s, t) => s + t.max, 0) || 1;
  const fraction = raw / max;
  const skills: Partial<Record<Skill, number>> = {};
  const meta = TASK[task];
  for (const k of Object.keys(meta.contributes) as Skill[]) {
    // the task's own section uses the whole score; integrated skills use the content share
    skills[k] = k === meta.section || contentFraction === undefined ? fraction : contentFraction;
  }
  return { traits, raw, max, fraction, skills, estimated, feedback, ...extra };
}

const band = (x: number, cuts: number[]) => cuts.filter((c) => x >= c).length; // cuts ascending → 0..n

// =============================================================== Speaking
export interface SpokenResponse {
  transcript: string;
  rec?: RecordingResult;
}

function fluency(n: number, rec: RecordingResult | undefined, responseSec: number): { score: number; note: string; wpm: number; longPauses: number } {
  if (!rec || rec.speechSec < 1 || n === 0) return { score: 0, note: 'No speech detected.', wpm: 0, longPauses: 0 };
  // If the voice-activity span is implausibly short (noisy or synthetic input), fall back to total duration.
  let wpm = (n / rec.speechSec) * 60;
  if (wpm > 220 && rec.durationSec > rec.speechSec) wpm = (n / Math.max(rec.speechSec, rec.durationSec - 1)) * 60;
  const longPauses = rec.pauses.filter((p) => p >= 1).length;
  const allowance = Math.max(1, Math.round(responseSec / 40)); // longer tasks tolerate more pauses
  let s = band(wpm, [55, 75, 95, 112, 128]);
  s -= Math.max(0, longPauses - (allowance - 1)) * 0.75;
  if (n < 6) s = Math.min(s, 1);
  const score = clamp(Math.round(s), 0, 5);
  const note = `${Math.round(wpm)} words/min while speaking, ${longPauses} long pause${longPauses === 1 ? '' : 's'} (≥1 s).`;
  return { score, note, wpm, longPauses };
}

function pronunciation(rec: RecordingResult | undefined, accuracy: number | null, fluencyScore: number): { score: number; note: string } {
  const conf = rec?.confidence ?? NaN;
  const parts: number[] = [];
  if (!Number.isNaN(conf) && conf > 0) parts.push(band(conf, [0.45, 0.62, 0.76, 0.86, 0.93]));
  if (accuracy !== null) parts.push(band(accuracy, [0.3, 0.5, 0.68, 0.82, 0.93]));
  if (!parts.length) return { score: Math.max(0, fluencyScore - 1), note: 'Recogniser confidence unavailable in this browser — estimated from fluency.' };
  const score = clamp(Math.round(parts.reduce((a, b) => a + b, 0) / parts.length), 0, 5);
  return {
    score,
    note: [
      !Number.isNaN(conf) && conf > 0 ? `recogniser confidence ${(conf * 100).toFixed(0)}%` : '',
      accuracy !== null ? `${Math.round(accuracy * 100)}% of words recognised as intended` : '',
    ].filter(Boolean).join(', ') + '.',
  };
}

function align(reference: string, spoken: string): { marks: WordMark[]; matched: number; inserted: number } {
  const ref = reference.split(/\s+/).filter(Boolean);
  const a = ref.map((w) => words(w)[0] ?? '');
  const b = words(spoken);
  const pairs = lcsAlign(a, b);
  const hit = new Set(pairs.map((p) => p[0]));
  return {
    marks: ref.map((w, i) => ({ word: w, status: hit.has(i) ? 'ok' : 'missed' })),
    matched: pairs.length,
    inserted: b.length - pairs.length,
  };
}

const POLITE = /\b(please|could|would|i was wondering|would it be possible|sorry|apologi[sz]e|thank you|thanks|appreciate|i understand|if possible|i'd be grateful|unfortunately)\b/gi;

export function scoreSpeaking(item: Item, resp: SpokenResponse): ScoreResult {
  const t = resp.transcript.trim();
  const n = words(t).length;
  const meta = metaFor(item);
  const responseSec = meta.responseSec ?? 40;
  const fb: string[] = [];
  const stats: Record<string, string | number> = { words: n };
  if (resp.rec) stats['speaking time'] = `${resp.rec.speechSec.toFixed(1)} s`;

  if (item.task === 'asq') {
    const it = item as ItemOf<'asq'>;
    const norm = ' ' + words(t).join(' ') + ' ';
    const ok = it.answers.some((a) => norm.includes(' ' + words(a).join(' ') + ' '));
    fb.push(ok ? 'Correct answer.' : `Accepted answers: ${it.answers.join(' / ')}.`);
    return finish('asq', [{ name: 'Vocabulary', score: ok ? 1 : 0, max: 1 }], false, fb, { stats });
  }

  if (item.task.startsWith('cs')) return scoreCelpipSpeaking(item as ItemOf<'cs1'>, t, n, resp.rec, responseSec, stats);

  let content: Trait;
  let accuracy: number | null = null;
  let contentFrac = 0;
  let extra: Partial<ScoreResult> = {};

  if (item.task === 'ra' || item.task === 'rs') {
    const ref = item.task === 'ra' ? (item as ItemOf<'ra'>).text : (item as ItemOf<'rs'>).sentence;
    const al = align(ref, t);
    const total = al.marks.length;
    accuracy = total ? al.matched / total : 0;
    contentFrac = accuracy;
    extra.alignment = al.marks;
    stats['words matched'] = `${al.matched}/${total}`;
    if (item.task === 'ra') {
      content = { name: 'Content', score: clamp(Math.round(accuracy * 5 - Math.max(0, al.inserted) * 0.1), 0, 5), max: 5, note: `${al.matched} of ${total} words read correctly; ${Math.max(0, al.inserted)} extra word(s).` };
    } else {
      const s = accuracy >= 0.999 ? 3 : accuracy >= 0.5 ? 2 : accuracy > 0 ? 1 : 0;
      content = { name: 'Content', score: s, max: 3, note: `${al.matched} of ${total} words repeated in sequence.` };
    }
    const missed = al.marks.filter((m) => m.status === 'missed').map((m) => m.word.replace(/[.,;:!?]+$/, ''));
    if (missed.length && missed.length <= 8) fb.push(`Missed or unclear: ${missed.join(', ')}.`);
  } else {
    const it = item as ItemOf<'di' | 'rl' | 'sgd' | 'rts'>;
    const cov = keyPointCoverage(t, it.keyPoints);
    const hits = cov.filter((c) => c.hit).length;
    const covFrac = cov.length ? hits / cov.length : 0;
    const target = responseSec * 1.6; // ≈ words for a full, fluent answer
    const lengthFrac = clamp(n / target, 0, 1);
    let s = 5 * (0.75 * covFrac + 0.25 * lengthFrac);
    if (n < 12) s = Math.min(s, 1);
    if (item.task === 'rts') {
      const polite = (t.match(POLITE) ?? []).length;
      s = 5 * (0.55 * covFrac + 0.2 * lengthFrac + 0.25 * clamp(polite / 3, 0, 1));
      if (n < 12) s = Math.min(s, 1);
      stats['politeness markers'] = polite;
      if (polite < 2) fb.push('Add polite, indirect language ("I was wondering if…", "Would it be possible…", "Thank you for understanding").');
    }
    content = { name: item.task === 'rts' ? 'Appropriacy' : 'Content', score: clamp(Math.round(s), 0, 5), max: 5, note: `${hits} of ${cov.length} key points covered.` };
    contentFrac = content.score / 5;
    extra.coverage = cov;
    if (n < target * 0.5) fb.push(`Your answer was short (${n} words). Aim for roughly ${Math.round(target * 0.8)}–${Math.round(target)} words in ${responseSec} seconds.`);
  }

  const fl = fluency(n, resp.rec, responseSec);
  const pr = pronunciation(resp.rec, accuracy, fl.score);
  stats['speech rate'] = fl.wpm ? `${Math.round(fl.wpm)} wpm` : '—';
  if (fl.longPauses > 1) fb.push('Long pauses lower your fluency score more than small mistakes do — keep the flow going.');
  if (fl.wpm && fl.wpm < 95) fb.push('Speak a little faster, in phrases rather than word by word (target 120–150 words/min).');
  if (fl.wpm > 175) fb.push('You are speaking very fast — slow slightly so every word is clear.');

  if (item.task === 'rts' && examOf(item) === 'pte-core') {
    content = { ...content, score: Math.round((content.score / 5) * 3), max: 3 };
  }
  const traits: Trait[] = [content, { name: 'Oral fluency', score: fl.score, max: 5, note: fl.note }, { name: 'Pronunciation', score: pr.score, max: 5, note: pr.note }];
  if (n === 0) traits.forEach((x) => (x.score = 0));
  return finish(item.task, traits, true, fb, { ...extra, stats }, contentFrac);
}

// =============================================================== Writing
function allowWords(item: Item): string[] {
  return words(JSON.stringify(item));
}

function vocabRange(text: string) {
  const ws = words(text);
  const content = ws.filter((w) => w.length > 3);
  const ttr = content.length ? new Set(content).size / content.length : 0;
  const acad = ws.filter((w) => ACADEMIC.has(w) || ACADEMIC.has(w.replace(/(s|es|ed|ing|ly|al|ation)$/, ''))).length;
  return { ttr, acad };
}

function grammarScore(issues: GrammarIssue[], n: number, max = 2) {
  const rate = issues.length / Math.max(1, n / 50);
  return rate === 0 ? max : rate <= 1 ? max - 1 : 0;
}

function spellingScore(issues: SpellIssue[] | null) {
  if (!issues) return { score: 2, note: 'Dictionary unavailable offline — not checked.' };
  return { score: issues.length === 0 ? 2 : issues.length === 1 ? 1 : 0, note: issues.length ? `${issues.length} spelling error(s).` : 'No spelling errors.' };
}

export async function scoreWriting(item: Item, text: string): Promise<ScoreResult> {
  const n = wordCount(text);
  const g = grammarCheck(text, { email: item.task === 'wem' || item.task === 'cw1' });
  const sp = await spellCheck(text, allowWords(item));
  const vr = vocabRange(text);
  const fb: string[] = [];
  const stats: Record<string, string | number> = { words: n, sentences: sentenceCount(text) };

  if (item.task === 'wem') return scoreEmail(item as ItemOf<'wem'>, text, g, sp, vr, stats);
  if (item.task === 'cw1' || item.task === 'cw2') return scoreCelpipWriting(item as ItemOf<'cw1'>, text, g, sp, vr, stats);
  const core = examOf(item) === 'pte-core';

  if (item.task === 'swt') {
    const it = item as ItemOf<'swt'>;
    const sentences = sentenceCount(text);
    const formOk = core ? n >= 5 && n <= 60 && sentences === 1 : n >= 5 && n <= 75 && sentences === 1;
    const formScore = !formOk ? 0 : core ? (n >= 25 && n <= 50 ? 2 : 1) : 1;
    const cov = keyPointCoverage(text, it.keyPoints);
    const hits = cov.filter((c) => c.hit).length;
    const content = hits >= Math.ceil(cov.length * 0.75) ? 2 : hits >= 1 ? 1 : 0;
    const copied = copyRatio(text, it.passage);
    stats['copied phrases'] = `${Math.round(copied * 100)}%`;
    if (!formOk) fb.push(sentences !== 1 ? 'Form: your summary must be ONE sentence (one full stop at the end).' : core ? 'Form: write 25–50 words (5–60 still scores).' : 'Form: your summary must be 5–75 words.');
    if (copied > 0.7) fb.push('Much of your sentence is copied in long chunks — paraphrase key ideas to show vocabulary.');
    const traits: Trait[] = [
      { name: 'Content', score: content, max: 2, note: `${hits} of ${cov.length} key points.` },
      { name: 'Form', score: formScore, max: core ? 2 : 1, note: `${n} words, ${sentences} sentence(s).` },
      { name: 'Grammar', score: grammarScore(g, n), max: 2, note: g.length ? `${g.length} issue(s) flagged.` : 'No issues flagged.' },
      { name: 'Vocabulary', score: vr.acad >= 3 || copied < 0.5 ? 2 : 1, max: 2, note: `${vr.acad} academic word(s).` },
    ];
    if (!formOk || n === 0) { traits.forEach((x) => (x.score = 0)); if (n) fb.unshift('PTE rule: when Form scores 0, every trait scores 0 — the notes show what you would otherwise have earned.'); }
    return finish('swt', traits, true, fb, { coverage: cov, grammar: g, spelling: sp ?? undefined, stats }, traits[0].score / 2);
  }

  if (item.task === 'sst') {
    const it = item as ItemOf<'sst'>;
    const form = core ? (n >= 20 && n <= 30 ? 2 : n >= 5 && n <= 40 ? 1 : 0) : n >= 50 && n <= 70 ? 2 : n >= 40 && n <= 100 ? 1 : 0;
    const cov = keyPointCoverage(text, it.keyPoints);
    const hits = cov.filter((c) => c.hit).length;
    const content = hits >= Math.ceil(cov.length * 0.75) ? 2 : hits >= 1 ? 1 : 0;
    const s = spellingScore(sp);
    if (form < 2) fb.push(`Form: aim for ${core ? '20–30' : '50–70'} words (you wrote ${n}).`);
    const traits: Trait[] = [
      { name: 'Content', score: content, max: 2, note: `${hits} of ${cov.length} key points.` },
      { name: 'Form', score: form, max: 2, note: `${n} words.` },
      { name: 'Grammar', score: grammarScore(g, n), max: 2, note: g.length ? `${g.length} issue(s) flagged.` : 'No issues flagged.' },
      { name: 'Vocabulary', score: vr.acad >= 2 ? 2 : vr.acad >= 1 ? 1 : 0, max: 2, note: `${vr.acad} academic word(s).` },
      { name: 'Spelling', score: s.score, max: 2, note: s.note },
    ];
    if (form === 0 || n === 0) { traits.forEach((x) => (x.score = 0)); if (n) fb.unshift('PTE rule: when Form scores 0, every trait scores 0 — the notes show what you would otherwise have earned.'); }
    return finish('sst', traits, true, fb, { coverage: cov, grammar: g, spelling: sp ?? undefined, stats }, traits[0].score / 2);
  }

  // Write Essay
  const it = item as ItemOf<'we'>;
  const form = n >= 200 && n <= 300 ? 2 : (n >= 120 && n < 200) || (n > 300 && n <= 380) ? 1 : 0;
  const cov = keyPointCoverage(text, it.keyIdeas, 0.34);
  const promptStems = new Set(contentStems(it.prompt));
  const onTopic = contentStems(text).filter((w) => promptStems.has(w)).length;
  const hits = cov.filter((c) => c.hit).length;
  const content = onTopic < 3 ? 0 : hits >= 3 ? 3 : hits >= 2 ? 2 : 1;
  const paras = text.split(/\n\s*\n/).filter((p) => p.trim()).length;
  const markers = new Set((text.match(DISCOURSE) ?? []).map((m) => m.toLowerCase())).size;
  const dsc = paras >= 4 && markers >= 3 ? 2 : paras >= 3 || markers >= 2 ? 1 : 0;
  const sentLens = text.split(/[.!?]+\s/).map((s) => wordCount(s)).filter(Boolean);
  const varied = sentLens.length > 3 && Math.max(...sentLens) - Math.min(...sentLens) >= 10;
  const complex = (text.match(COMPLEX) ?? []).length;
  const glr = complex >= 6 && varied ? 2 : complex >= 3 ? 1 : 0;
  const vocab = vr.acad >= 10 && vr.ttr > 0.6 ? 2 : vr.acad >= 5 ? 1 : 0;
  const s = spellingScore(sp);
  stats.paragraphs = paras;
  stats['linking devices'] = markers;
  stats['academic words'] = vr.acad;
  if (form < 2) fb.push(`Form: write 200–300 words (you wrote ${n}). Under 120 or over 380 scores zero.`);
  if (paras < 4) fb.push('Use 4–5 paragraphs separated by a blank line: introduction, two body paragraphs, conclusion.');
  if (markers < 3) fb.push('Signal your structure with linking devices: "Firstly", "In contrast", "As a result", "In conclusion".');
  if (complex < 4) fb.push('Show range with complex sentences — relative clauses (which/who) and concession (although/whereas).');
  const traits: Trait[] = [
    { name: 'Content', score: content, max: 3, note: `${hits} of ${cov.length} expected ideas developed.` },
    { name: 'Form', score: form, max: 2, note: `${n} words.` },
    { name: 'Development, structure & coherence', score: dsc, max: 2, note: `${paras} paragraph(s), ${markers} different linking devices.` },
    { name: 'Grammar', score: grammarScore(g, n), max: 2, note: g.length ? `${g.length} issue(s) flagged.` : 'No issues flagged.' },
    { name: 'General linguistic range', score: glr, max: 2, note: `${complex} complex-sentence markers.` },
    { name: 'Vocabulary range', score: vocab, max: 2, note: `${vr.acad} academic words, lexical variety ${Math.round(vr.ttr * 100)}%.` },
    { name: 'Spelling', score: s.score, max: 2, note: s.note },
  ];
  if (form === 0 || content === 0) traits.forEach((x) => (x.score = 0));
  if (form === 0 && n > 0) fb.unshift('PTE rule: under 120 or over 380 words scores 0 on every trait — the notes show what you would otherwise have earned.');
  if (content === 0 && n > 0) fb.unshift('Your essay does not seem to address the prompt — content 0 means the whole essay scores 0.');
  return finish('we', traits, true, fb, { coverage: cov, grammar: g, spelling: sp ?? undefined, stats });
}

/** Share of response words that sit inside 4+ word runs copied from the source. */
function copyRatio(resp: string, source: string): number {
  const r = words(resp);
  const src = ' ' + words(source).join(' ') + ' ';
  let copied = 0;
  for (let i = 0; i < r.length; ) {
    let len = 0;
    while (i + len < r.length && src.includes(' ' + r.slice(i, i + len + 1).join(' ') + ' ')) len++;
    if (len >= 4) { copied += len; i += len; } else i++;
  }
  return r.length ? copied / r.length : 0;
}

// =============================================================== PTE Core: Write Email
type VR = { ttr: number; acad: number };
const GREETING = /^(dear|hi|hello|good (morning|afternoon|evening)|to whom it may concern)\b/i;
const SIGNOFF = /\b(regards|sincerely|best wishes|best|cheers|thanks|thank you|yours truly|warm regards|kind regards|take care|see you)\b[,!.]?\s*\n?\s*[A-Z]?[a-z]*\s*$/i;

function scoreEmail(it: ItemOf<'wem'>, text: string, g: GrammarIssue[], sp: SpellIssue[] | null, vr: VR, stats: Record<string, string | number>): ScoreResult {
  const n = wordCount(text);
  const fb: string[] = [];
  const form = n >= 50 && n <= 120 ? 2 : (n >= 30 && n <= 49) || (n >= 121 && n <= 140) ? 1 : 0;
  const cov = keyPointCoverage(text, [...it.points, ...it.keyPoints], 0.34);
  const pts = cov.slice(0, it.points.length).filter((c) => c.hit).length;
  const content = pts >= 3 ? 3 : pts;
  const lines = text.trim().split(/\n/).map((l) => l.trim()).filter(Boolean);
  const greet = GREETING.test(lines[0] ?? '');
  const sign = SIGNOFF.test(lines.slice(-3).join('\n'));
  const conventions = (greet ? 1 : 0) + (sign ? 1 : 0);
  const paras = text.split(/\n\s*\n|\n/).filter((p) => p.trim()).length;
  const organization = paras >= 4 ? 2 : paras >= 2 ? 1 : 0;
  const s = spellingScore(sp);
  stats['points covered'] = `${pts}/${it.points.length}`;
  if (!greet) fb.push('Open with a greeting that fits the reader ("Dear Mr Patel," / "Hi Sam,").');
  if (!sign) fb.push('Close with a sign-off and your name ("Kind regards, Ana").');
  if (pts < 3) fb.push('Address every bullet point: each one carries Content marks.');
  if (form < 2) fb.push(`Form: write 50–120 words (aim for 80–120). You wrote ${n}.`);
  const traits: Trait[] = [
    { name: 'Content', score: content, max: 3, note: `${pts} of ${it.points.length} required points addressed.` },
    { name: 'Email conventions', score: conventions, max: 2, note: `${greet ? 'Greeting ✓' : 'No greeting'} · ${sign ? 'sign-off ✓' : 'no sign-off'}.` },
    { name: 'Form', score: form, max: 2, note: `${n} words.` },
    { name: 'Organization', score: organization, max: 2, note: `${paras} paragraph(s)/line block(s).` },
    { name: 'Vocabulary range', score: vr.ttr > 0.6 && n > 60 ? 2 : vr.ttr > 0.45 ? 1 : 0, max: 2, note: `Lexical variety ${Math.round(vr.ttr * 100)}%.` },
    { name: 'Grammar', score: grammarScore(g, n), max: 2, note: g.length ? `${g.length} issue(s) flagged.` : 'No issues flagged.' },
    { name: 'Spelling', score: s.score, max: 2, note: s.note },
  ];
  if (form === 0 || content === 0) { traits.forEach((x) => (x.score = 0)); if (n) fb.unshift('PTE rule: when Form or Content scores 0, the whole email scores 0.'); }
  return finish('wem', traits, true, fb, { coverage: cov.slice(0, it.points.length), grammar: g, spelling: sp ?? undefined, stats });
}

// =============================================================== CELPIP writing & speaking
/** CELPIP performance dimensions, each estimated on 0–5; the level is derived from the total. */
function celpipResult(task: TaskCode, dims: Trait[], fb: string[], extra: Partial<ScoreResult>): ScoreResult {
  const r = finish(task, dims, true, fb, extra);
  r.stats = { ...(r.stats ?? {}), 'estimated level': `CELPIP ${toCelpip(r.fraction)}` };
  return r;
}

function scoreCelpipWriting(it: ItemOf<'cw1'>, text: string, g: GrammarIssue[], sp: SpellIssue[] | null, vr: VR, stats: Record<string, string | number>): ScoreResult {
  const n = wordCount(text);
  const fb: string[] = [];
  const cov = keyPointCoverage(text, it.points?.length ? [...it.points, ...it.keyPoints] : it.keyPoints, 0.34);
  const covFrac = cov.length ? cov.filter((c) => c.hit).length / cov.length : 0;
  const paras = text.split(/\n\s*\n/).filter((p) => p.trim()).length;
  const markers = new Set((text.match(DISCOURSE) ?? []).map((m) => m.toLowerCase())).size;
  const errs = g.length + (sp?.length ?? 0);
  const errRate = errs / Math.max(1, n / 100);
  let choiceOk = true;
  if (it.task === 'cw2') {
    const first = text.split(/[.!?]/)[0]?.toLowerCase() ?? '';
    choiceOk = /option\s*[ab]\b|\b(prefer|choose|support|would rather|i think|i believe)\b/.test(first);
    if (!choiceOk) fb.push('State your choice (Option A or B) clearly in the first sentence.');
  }
  const lenOk = n >= 150 && n <= 200 ? 1 : n >= 120 && n <= 230 ? 0.6 : n >= 80 ? 0.3 : 0;
  const content = clamp(Math.round(5 * (0.6 * covFrac + 0.2 * clamp(markers / 4, 0, 1) + 0.2 * clamp(paras / 4, 0, 1))), 0, 5);
  const vocab = clamp(Math.round(5 * (0.6 * clamp((vr.ttr - 0.35) / 0.35, 0, 1) + 0.4 * clamp(vr.acad / 8, 0, 1))), 0, 5);
  const readability = clamp(Math.round(5 - errRate * 1.2 - (paras < 3 ? 1 : 0)), 0, 5);
  const fulfil = clamp(Math.round(5 * (0.5 * lenOk + 0.3 * covFrac + 0.2 * (choiceOk ? 1 : 0))), 0, 5);
  if (n < 150 || n > 200) fb.push(`Task Fulfillment: write 150–200 words (you wrote ${n}).`);
  if (paras < 3) fb.push('Readability: use clear paragraphs separated by a blank line.');
  if (markers < 3) fb.push('Coherence: connect ideas with linking words (Firstly, However, As a result, For example).');
  if (it.task === 'cw1' && !GREETING.test(text.trim())) fb.push('Start the email with an appropriate greeting.');
  stats.paragraphs = paras;
  stats['linking devices'] = markers;
  const dims: Trait[] = [
    { name: 'Content/Coherence', score: content, max: 5, note: `${cov.filter((c) => c.hit).length} of ${cov.length} expected ideas; ${markers} linking devices.` },
    { name: 'Vocabulary', score: vocab, max: 5, note: `Lexical variety ${Math.round(vr.ttr * 100)}%, ${vr.acad} precise/academic words.` },
    { name: 'Readability', score: readability, max: 5, note: `${errs} grammar/spelling issue(s); ${paras} paragraph(s).` },
    { name: 'Task Fulfillment', score: fulfil, max: 5, note: `${n} words${it.task === 'cw2' ? `, choice ${choiceOk ? 'stated' : 'unclear'}` : ''}.` },
  ];
  if (n === 0) dims.forEach((d) => (d.score = 0));
  return celpipResult(it.task, dims, fb, { coverage: cov, grammar: g, spelling: sp ?? undefined, stats });
}

function scoreCelpipSpeaking(it: ItemOf<'cs1'>, t: string, n: number, rec: RecordingResult | undefined, responseSec: number, stats: Record<string, string | number>): ScoreResult {
  const fb: string[] = [];
  const cov = keyPointCoverage(t, it.keyPoints);
  const covFrac = cov.length ? cov.filter((c) => c.hit).length / cov.length : 0;
  const target = responseSec * 2.1; // words for a full, fluent response
  const lenFrac = clamp(n / target, 0, 1);
  const vr = vocabRange(t);
  const fl = fluency(n, rec, responseSec);
  const pr = pronunciation(rec, null, fl.score);
  const markers = new Set((t.match(DISCOURSE) ?? []).map((m) => m.toLowerCase())).size;
  const content = clamp(Math.round(5 * (0.65 * covFrac + 0.2 * lenFrac + 0.15 * clamp(markers / 3, 0, 1))), 0, 5);
  const vocab = clamp(Math.round(5 * (0.7 * clamp((vr.ttr - 0.3) / 0.35, 0, 1) + 0.3 * lenFrac)), 0, 5);
  const listen = clamp(Math.round((fl.score + pr.score) / 2), 0, 5);
  const fulfil = clamp(Math.round(5 * (0.5 * lenFrac + 0.5 * covFrac)), 0, 5);
  stats['speech rate'] = fl.wpm ? `${Math.round(fl.wpm)} wpm` : '—';
  if (n < target * 0.6) fb.push(`Use more of your ${responseSec} seconds: a full answer is roughly ${Math.round(target * 0.8)}–${Math.round(target)} words.`);
  if (markers < 2) fb.push('Organise your answer with signposts: "First...", "Another reason...", "So overall...".');
  if (fl.longPauses > 1) fb.push('Long pauses reduce Listenability. Keep talking in phrases, even if you simplify.');
  const dims: Trait[] = [
    { name: 'Content/Coherence', score: content, max: 5, note: `${cov.filter((c) => c.hit).length} of ${cov.length} expected ideas.` },
    { name: 'Vocabulary', score: vocab, max: 5, note: `Lexical variety ${Math.round(vr.ttr * 100)}%.` },
    { name: 'Listenability', score: listen, max: 5, note: `${fl.note} ${pr.note}` },
    { name: 'Task Fulfillment', score: fulfil, max: 5, note: `${n} words in a ${responseSec}-second task.` },
  ];
  if (n === 0) dims.forEach((d) => (d.score = 0));
  return celpipResult(it.task, dims, fb, { coverage: cov, stats });
}

/** CELPIP listening/reading set: one point per question. */
export function scoreCelpipSet(task: TaskCode, chosen: (number | null)[], answers: number[]): ScoreResult {
  const right = answers.filter((a, i) => chosen[i] === a).length;
  const r = finish(task, [{ name: 'Correct answers', score: right, max: answers.length }], false, []);
  return r;
}

// =============================================================== Objective tasks
const exact = (task: TaskCode, score: number, max: number, feedback: string[] = [], extra: Partial<ScoreResult> = {}) =>
  finish(task, [{ name: 'Score', score, max }], false, feedback, extra);

export function scoreMultiple(task: TaskCode, selected: number[], answers: number[]): ScoreResult {
  const right = selected.filter((s) => answers.includes(s)).length;
  const wrong = selected.length - right;
  return exact(task, Math.max(0, right - wrong), answers.length, wrong ? [`${wrong} incorrect selection(s) cost a point each (negative marking).`] : []);
}

export function scoreSingle(task: TaskCode, selected: number | null, answer: number): ScoreResult {
  return exact(task, selected === answer ? 1 : 0, 1);
}

export function scoreBlanks(task: TaskCode, given: string[], answers: string[]): ScoreResult {
  const ok = answers.map((a, i) => (given[i] ?? '').trim().toLowerCase() === a.trim().toLowerCase());
  return exact(task, ok.filter(Boolean).length, answers.length);
}

/** Re-order paragraphs: one point per correct adjacent pair. `order` holds original indexes. */
export function scoreOrder(order: number[], total: number): ScoreResult {
  let pairs = 0;
  for (let i = 0; i < order.length - 1; i++) if (order[i + 1] === order[i] + 1) pairs++;
  return exact('rop', pairs, total - 1, order.length < total ? ['Some paragraphs were not placed.'] : []);
}

export function scoreHIW(clicked: number[], changed: number[]): ScoreResult {
  const right = clicked.filter((c) => changed.includes(c)).length;
  const wrong = clicked.length - right;
  return exact('hiw', Math.max(0, right - wrong), changed.length, wrong ? [`${wrong} word(s) clicked that were actually correct (−1 each).`] : []);
}

/** Write From Dictation: one point per correctly spelled word of the sentence (order-tolerant). */
export function scoreWFD(sentence: string, typed: string): ScoreResult {
  const ref = sentence.split(/\s+/).filter(Boolean);
  const bag = words(typed);
  const counts = new Map<string, number>();
  bag.forEach((w) => counts.set(w, (counts.get(w) ?? 0) + 1));
  const marks: WordMark[] = ref.map((raw) => {
    const w = words(raw)[0] ?? '';
    const c = counts.get(w) ?? 0;
    if (c > 0) { counts.set(w, c - 1); return { word: raw, status: 'ok' }; }
    return { word: raw, status: 'missed' };
  });
  const score = marks.filter((m) => m.status === 'ok').length;
  return finish('wfd', [{ name: 'Words', score, max: ref.length }], false, [], { alignment: marks });
}

// =============================================================== Aggregation
/** Convert 0–1 performance to the PTE 10–90 scale. */
export const toScale = (f: number) => Math.round(10 + 80 * clamp(f, 0, 1));
/** Convert 0–1 performance to a CELPIP level (1–12). Practice estimate only. */
export const toCelpip = (f: number) => clamp(Math.round(1 + 11 * clamp(f, 0, 1)), 1, 12);
export const toExamScale = (exam: Exam, f: number) => (exam === 'celpip' ? toCelpip(f) : toScale(f));
export const scoreLabel = (exam: Exam, f: number) => (exam === 'celpip' ? `L${toCelpip(f)}` : String(toScale(f)));

export function skillScores(results: { task: TaskCode; result: ScoreResult }[], exam: Exam = 'pte-a'): Record<Skill, number | null> {
  const acc: Record<Skill, { s: number; w: number }> = { speaking: { s: 0, w: 0 }, writing: { s: 0, w: 0 }, reading: { s: 0, w: 0 }, listening: { s: 0, w: 0 } };
  for (const { task, result } of results) {
    const contrib = TASK[task].contributes;
    for (const k of Object.keys(contrib) as Skill[]) {
      const f = result.skills[k];
      if (f === undefined) continue;
      acc[k].s += f * contrib[k]!;
      acc[k].w += contrib[k]!;
    }
  }
  const out = {} as Record<Skill, number | null>;
  (Object.keys(acc) as Skill[]).forEach((k) => (out[k] = acc[k].w ? toExamScale(exam, acc[k].s / acc[k].w) : null));
  return out;
}
