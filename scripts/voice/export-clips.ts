// Exports every listening/speaking audio clip the site needs to scripts/voice/clips.json
// for the offline VoxCPM2 generator. Clip ids match what the players pass to <AudioPrompt clip=…>.
//   npx tsx scripts/voice/export-clips.ts
import { readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Item, Speaker } from '../../src/data/types';

interface Turn { speaker: Speaker; text: string }
interface Clip { id: string; exam: string; task: string; turns: Turn[] }

const dir = resolve('src/data/items');
const clips: Clip[] = [];
const push = (it: Item, id: string, turns: Turn[]) => turns.length && clips.push({ id, exam: it.exam ?? 'pte-a', task: it.task, turns: turns.filter((t) => t.text.trim()) });

for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
  const mod = await import(pathToFileURL(resolve(dir, f)).href);
  for (const it of Object.values(mod).flat() as Item[]) {
    switch (it.task) {
      case 'rs': case 'wfd': push(it, it.id, [{ speaker: it.speaker, text: it.sentence }]); break;
      case 'asq': push(it, it.id, [{ speaker: it.speaker, text: it.question }]); break;
      case 'rts': push(it, it.id, [{ speaker: it.speaker, text: it.situation }]); break;
      case 'rl': case 'sst': case 'lmcm': case 'lmcs': case 'hcs': case 'smw': case 'hiw':
        push(it, it.id, [{ speaker: it.speaker, text: it.transcript }]); break;
      case 'lfib': push(it, it.id, [{ speaker: it.speaker, text: it.transcript.replace(/\[\[([^\]]+)\]\]/g, '$1') }]); break;
      case 'sgd': push(it, it.id, it.turns.map((t) => ({ speaker: t.speaker, text: t.text }))); break;
      case 'cl1': case 'cl2': case 'cl3': case 'cl4': case 'cl5': case 'cl6':
        (it.audio ?? []).forEach((sec, k) => push(it, `${it.id}-s${k}`, sec.map((t) => ({ speaker: t.speaker, text: t.text }))));
        break;
    }
  }
}
const words = clips.reduce((n, c) => n + c.turns.reduce((m, t) => m + t.text.split(/\s+/).length, 0), 0);
writeFileSync(resolve('scripts/voice/clips.json'), JSON.stringify(clips, null, 1));
console.log(`${clips.length} clips, ${words} words → scripts/voice/clips.json`);
