// Deterministic option shuffling so correct answers are spread evenly across positions.
// Items are skipped when the order carries meaning (CELPIP Reading Part 3 uses A–E paragraph letters)
// or when an explanation refers to options by letter.
import type { Item } from './types';

const LETTER_REF = /\b(option|answer|choice|options|answers)\s+[A-E]\b|\([A-E]\)|\b[A-E]\)|\b[A-E] (is|and|are|was|says|states|suggests|claims|describes|mentions)\b|\b(and|or) [A-E]\b/;

function rng(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
}
function perm(n: number, seed: string) {
  const r = rng(seed), p = [...Array(n).keys()];
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  return p; // p[newIndex] = oldIndex
}
const remap = (p: number[], old: number) => p.indexOf(old);

export function balance(it: Item): Item {
  if (it.task === 'cr3') return it;
  if ('questions' in it) {
    return {
      ...it,
      questions: it.questions.map((q, k) => {
        if (LETTER_REF.test(q.explanation)) return q;
        const p = perm(q.options.length, `${it.id}#${k}`);
        return { ...q, options: p.map((o) => q.options[o]), answer: remap(p, q.answer) };
      }),
    };
  }
  if (it.task === 'smw') {
    const p = perm(it.options.length, it.id);
    return { ...it, options: p.map((o) => it.options[o]), answer: remap(p, it.answer) };
  }
  if (it.task === 'mcs' || it.task === 'lmcs' || it.task === 'hcs') {
    if (LETTER_REF.test(it.explanation)) return it;
    const p = perm(it.options.length, it.id);
    return { ...it, options: p.map((o) => it.options[o]), answer: remap(p, it.answer) };
  }
  if (it.task === 'mcm' || it.task === 'lmcm') {
    if (LETTER_REF.test(it.explanation)) return it;
    const p = perm(it.options.length, it.id);
    return { ...it, options: p.map((o) => it.options[o]), answers: it.answers.map((a) => remap(p, a)).sort((a, b) => a - b) };
  }
  return it;
}
