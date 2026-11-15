// Ilm Atlantic scoring engine (prototype).
// Objective tasks use the published PTE marking rules exactly.
// Speaking and writing use transparent, explainable estimates on the official
// trait scales; Phase 2 swaps these estimators for calibrated AI models.
import type { Item, ItemOf, Skill, TaskCode } from '../data/types';
import { TASK } from '../data/taskTypes';
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
  const meta = TASK[item.task];
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
  const g = grammarCheck(text);
  const sp = await spellCheck(text, allowWords(item));
  const vr = vocabRange(text);
  const fb: string[] = [];
  const stats: Record<string, string | number> = { words: n, sentences: sentenceCount(text) };

  if (item.task === 'swt') {
    const it = item as ItemOf<'swt'>;
    const sentences = sentenceCount(text);
    const formOk = n >= 5 && n <= 75 && sentences === 1;
    const cov = keyPointCoverage(text, it.keyPoints);
    const hits = cov.filter((c) => c.hit).length;
    const content = hits >= Math.ceil(cov.length * 0.75) ? 2 : hits >= 1 ? 1 : 0;
    const copied = copyRatio(text, it.passage);
    stats['copied phrases'] = `${Math.round(copied * 100)}%`;
    if (!formOk) fb.push(sentences !== 1 ? 'Form: your summary must be ONE sentence (one full stop at the end).' : 'Form: your summary must be 5–75 words.');
    if (copied > 0.7) fb.push('Much of your sentence is copied in long chunks — paraphrase key ideas to show vocabulary.');
    const traits: Trait[] = [
      { name: 'Content', score: content, max: 2, note: `${hits} of ${cov.length} key points.` },
      { name: 'Form', score: formOk ? 1 : 0, max: 1, note: `${n} words, ${sentences} sentence(s).` },
      { name: 'Grammar', score: grammarScore(g, n), max: 2, note: g.length ? `${g.length} issue(s) flagged.` : 'No issues flagged.' },
      { name: 'Vocabulary', score: vr.acad >= 3 || copied < 0.5 ? 2 : 1, max: 2, note: `${vr.acad} academic word(s).` },
    ];
    if (!formOk || n === 0) { traits.forEach((x) => (x.score = 0)); if (n) fb.unshift('PTE rule: when Form scores 0, every trait scores 0 — the notes show what you would otherwise have earned.'); }
    return finish('swt', traits, true, fb, { coverage: cov, grammar: g, spelling: sp ?? undefined, stats }, traits[0].score / 2);
  }

  if (item.task === 'sst') {
    const it = item as ItemOf<'sst'>;
    const form = n >= 50 && n <= 70 ? 2 : n >= 40 && n <= 100 ? 1 : 0;
    const cov = keyPointCoverage(text, it.keyPoints);
    const hits = cov.filter((c) => c.hit).length;
    const content = hits >= Math.ceil(cov.length * 0.75) ? 2 : hits >= 1 ? 1 : 0;
    const s = spellingScore(sp);
    if (form < 2) fb.push(`Form: aim for 50–70 words (you wrote ${n}).`);
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

export function skillScores(results: { task: TaskCode; result: ScoreResult }[]): Record<Skill, number | null> {
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
  (Object.keys(acc) as Skill[]).forEach((k) => (out[k] = acc[k].w ? toScale(acc[k].s / acc[k].w) : null));
  return out;
}
