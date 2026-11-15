// Reports the distribution of correct-answer positions per file (a skew lets learners guess).
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Item } from '../src/data/types';
const dir = resolve('src/data/items');
for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
  const mod = await import(pathToFileURL(resolve(dir, f)).href);
  const pos: number[] = [0, 0, 0, 0, 0, 0];
  for (const it of Object.values(mod).flat() as Item[]) {
    if ('questions' in it) it.questions.forEach((q) => pos[q.answer]++);
    else if ('answer' in it && typeof it.answer === 'number') pos[it.answer]++;
  }
  const n = pos.reduce((a, b) => a + b, 0);
  if (n) console.log(f.padEnd(26), pos.slice(0, 5).map((p, i) => `${'ABCDE'[i]}:${Math.round((p / n) * 100)}%`).join(' '), `(n=${n})`);
}
