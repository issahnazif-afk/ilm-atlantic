// Validates item bank files against the content spec.
// Usage: npx tsx scripts/validate-items.ts [file.ts ...]   (no args = every file in src/data/items)
import { readdirSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Item, ChartSpec } from '../src/data/types';

const wc = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const errors: string[] = [];
const warns: string[] = [];
const err = (id: string, m: string) => errors.push(`${id}: ${m}`);
const warn = (id: string, m: string) => warns.push(`${id}: ${m}`);
const range = (id: string, label: string, n: number, lo: number, hi: number, soft = false) => {
  if (n < lo || n > hi) (soft ? warn : err)(id, `${label} = ${n}, expected ${lo}–${hi}`);
};

// Per-part CELPIP question counts
const CELPIP_Q: Record<string, number> = { cl1: 8, cl2: 5, cl3: 6, cl4: 5, cl5: 8, cl6: 6, cr1: 11, cr2: 8, cr3: 9, cr4: 10 };

function checkChart(id: string, c: ChartSpec) {
  if (c.kind === 'bar' || c.kind === 'line') {
    c.series.forEach((s) => s.values.length !== c.categories.length && err(id, `series "${s.name}" length ≠ categories`));
  } else if (c.kind === 'pie') {
    const sum = c.slices.reduce((a, b) => a + b.value, 0);
    if (c.unit === '%' && Math.abs(sum - 100) > 0.5) err(id, `pie % sums to ${sum}`);
  } else if (c.kind === 'table') {
    c.rows.forEach((r, i) => r.length !== c.columns.length && err(id, `table row ${i} has ${r.length} cells, ${c.columns.length} columns`));
  } else if (c.kind === 'process') range(id, 'process steps', c.steps.length, 3, 8);
}

function check(it: Item, exam: string) {
  const id = it.id;
  const core = exam === 'pte-core';
  const blanks = (t: string) => (t.match(/\{\{\d+\}\}/g) ?? []).map((m) => +m.slice(2, -2));
  const seq = (ns: number[], n: number) => ns.length === n && ns.every((v, i) => v === i);
  switch (it.task) {
    case 'ra': range(id, 'text words', wc(it.text), 25, 62); break;
    case 'rs': range(id, 'sentence words', wc(it.sentence), 5, 20); break;
    case 'asq': if (!it.answers.length) err(id, 'no answers'); break;
    case 'di': checkChart(id, it.chart); range(id, 'keyPoints', it.keyPoints.length, 3, 6); break;
    case 'rl': range(id, 'transcript words', wc(it.transcript), 100, 230, true); break;
    case 'sgd': range(id, 'turns', it.turns.length, 5, 12); break;
    case 'rts': range(id, 'situation words', wc(it.situation), 30, 85, true); break;
    case 'swt': range(id, 'passage words', wc(it.passage), core ? 100 : 150, core ? 205 : 320, true); range(id, 'model words', wc(it.modelAnswer), core ? 25 : 25, core ? 50 : 75);
      if ((it.modelAnswer.match(/[.!?](\s|$)/g) ?? []).length !== 1) err(id, 'SWT model must be one sentence'); break;
    case 'we': range(id, 'model words', wc(it.modelAnswer), 200, 300); break;
    case 'wem': range(id, 'points', it.points.length, 3, 3); range(id, 'model words', wc(it.modelAnswer), 70, 125); break;
    case 'rwfib': { const b = blanks(it.text); if (!seq(b, it.blanks.length)) err(id, `blank markers ${b} vs ${it.blanks.length} blanks`);
      it.blanks.forEach((x, i) => { if (!x.options.includes(x.answer)) err(id, `blank ${i} answer not in options`); if (new Set(x.options).size !== x.options.length) err(id, `blank ${i} duplicate options`); }); break; }
    case 'rfib': { const b = blanks(it.text); if (!seq(b, it.answers.length)) err(id, `blank markers ${b} vs ${it.answers.length} answers`);
      const bank = [...it.answers, ...it.distractors]; if (new Set(bank).size !== bank.length) err(id, 'duplicate words in bank'); break; }
    case 'mcm': case 'lmcm': it.answers.forEach((a) => (a < 0 || a >= it.options.length) && err(id, 'answer index out of range')); if (it.answers.length < 1) err(id, 'no answers'); break;
    case 'mcs': case 'lmcs': case 'hcs': if (it.answer < 0 || it.answer >= it.options.length) err(id, 'answer index out of range'); break;
    case 'rop': range(id, 'paragraphs', it.paragraphs.length, 3, 6); break;
    case 'sst': range(id, 'model words', wc(it.modelAnswer), core ? 20 : 50, core ? 30 : 70); break;
    case 'lfib': range(id, 'gaps', (it.transcript.match(/\[\[[^\]]+\]\]/g) ?? []).length, 3, 8); break;
    case 'smw': if (it.options[it.answer] !== it.missing) err(id, 'options[answer] !== missing'); if (it.transcript.includes(it.missing)) warn(id, 'transcript contains missing text'); break;
    case 'hiw': { const toks = it.transcript.split(' ');
      it.changes.forEach((c) => { if (c.index < 0 || c.index >= toks.length) err(id, `change index ${c.index} out of range`); else if (toks[c.index] === c.shown) err(id, `change at ${c.index} identical`); });
      const ix = it.changes.map((c) => c.index).sort((a, b) => a - b); ix.forEach((v, i) => i && v - ix[i - 1] < 2 && err(id, 'adjacent changes')); break; }
    case 'wfd': range(id, 'sentence words', wc(it.sentence), 6, 16); if (/\d/.test(it.sentence)) err(id, 'digits in WFD'); break;
    case 'cl1': case 'cl2': case 'cl3': case 'cl4': case 'cl5': case 'cl6':
    case 'cr1': case 'cr2': case 'cr3': case 'cr4': {
      const need = CELPIP_Q[it.task];
      if (it.questions.length !== need) err(id, `${it.questions.length} questions, ${it.task} needs ${need}`);
      it.questions.forEach((q, i) => { if (q.answer < 0 || q.answer >= q.options.length) err(id, `q${i} answer out of range`); if (new Set(q.options).size !== q.options.length) err(id, `q${i} duplicate options`); });
      if (it.task.startsWith('cl')) {
        if (!it.audio?.length) err(id, 'listening set without audio');
        if (it.task === 'cl1') { if (it.audio?.length !== 3) err(id, 'cl1 needs 3 audio sections'); if (it.questions.some((q) => q.section === undefined)) err(id, 'cl1 questions need section'); }
      } else {
        if (it.task === 'cr3') { if (it.paragraphs?.length !== 4) err(id, 'cr3 needs 4 paragraphs'); }
        else if (!it.passage) err(id, 'reading set without passage');
        if (it.task === 'cr2' && !it.diagram) err(id, 'cr2 needs a diagram');
        if (it.diagram) checkChart(id, it.diagram);
        if (it.reply) { const b = blanks(it.reply); b.forEach((n) => (n < 0 || n >= it.questions.length) && err(id, `reply blank {{${n}}} has no question`)); }
      }
      if (!it.testNo) err(id, 'CELPIP set needs testNo');
      break;
    }
    case 'cw1': case 'cw2': range(id, 'model words', wc(it.modelAnswer), 150, 205);
      if (it.task === 'cw1' && it.points?.length !== 3) err(id, 'cw1 needs 3 points');
      if (it.task === 'cw2' && it.choices?.length !== 2) err(id, 'cw2 needs 2 choices'); break;
    case 'cs1': case 'cs2': case 'cs3': case 'cs4': case 'cs5': case 'cs6': case 'cs7': case 'cs8':
      if (['cs3', 'cs4', 'cs8'].includes(it.task) && !it.scene) err(id, 'scene required');
      if (it.task === 'cs5' && it.choices?.length !== 2) err(id, 'cs5 needs 2 choices');
      if (it.scene) it.scene.elements.forEach((e, i) => (e.x < 0 || e.x > 100 || e.y < 0 || e.y > 100) && err(id, `scene element ${i} off canvas`));
      break;
  }
  if (!id.startsWith(exam === 'pte-a' ? it.task + '-' : exam === 'pte-core' ? 'core-' + it.task + '-' : 'cel-' + it.task + '-')) err(id, `id prefix should be ${exam === 'pte-a' ? it.task + '-' : exam === 'pte-core' ? 'core-' + it.task + '-' : 'cel-' + it.task + '-'}`);
  if (/[‘’“”]/.test(JSON.stringify(it))) warn(id, 'curly quotes');
}

const dir = resolve('src/data/items');
const files = process.argv.slice(2).length ? process.argv.slice(2).map((f) => resolve(f)) : readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts').map((f) => resolve(dir, f));
const seen = new Map<string, string>();
let total = 0;
const counts: Record<string, number> = {};
for (const f of files) {
  const mod = await import(pathToFileURL(f).href);
  for (const [name, val] of Object.entries(mod)) {
    if (!Array.isArray(val)) continue;
    for (const it of val as Item[]) {
      total++;
      const exam = it.exam ?? 'pte-a';
      const key = `${exam}:${it.task}`;
      counts[key] = (counts[key] ?? 0) + 1;
      if (seen.has(it.id)) err(it.id, `duplicate id (also in ${seen.get(it.id)})`);
      seen.set(it.id, basename(f) + '#' + name);
      try { check(it, exam); } catch (e) { err(it.id, 'crashed: ' + (e as Error).message); }
    }
  }
}
console.log(`${files.length} file(s), ${total} items`);
console.log(Object.entries(counts).sort().map(([k, v]) => `${k}=${v}`).join('  '));
if (warns.length) console.log(`\n${warns.length} warning(s):\n` + warns.slice(0, 40).join('\n'));
if (errors.length) { console.log(`\n${errors.length} ERROR(S):\n` + errors.join('\n')); process.exit(1); }
console.log('OK');
