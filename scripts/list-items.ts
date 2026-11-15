// Prints "<exam> <task> <id>" for every item (used by browser smoke tests).
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Item } from '../src/data/types';
const dir = resolve('src/data/items');
for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
  const mod = await import(pathToFileURL(resolve(dir, f)).href);
  for (const it of Object.values(mod).flat() as Item[]) console.log(it.exam ?? 'pte-a', it.task, it.id);
}
