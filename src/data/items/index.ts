import type { Exam, Item, ItemOf, TaskCode } from '../types';
import { balance } from '../balance';

// Every *.ts file in this folder exports one Item[] array; they are picked up automatically.
const modules = import.meta.glob<Record<string, Item[]>>(['./*.ts', '!./index.ts'], { eager: true });

export const ITEMS: Item[] = Object.keys(modules)
  .sort()
  .flatMap((k) => Object.values(modules[k]).filter(Array.isArray).flat())
  .map(balance);

const BY_ID = new Map(ITEMS.map((i) => [i.id, i]));

export const itemsFor = <T extends TaskCode>(task: T, exam: Exam = 'pte-a') =>
  ITEMS.filter((i) => i.task === task && (i.exam ?? 'pte-a') === exam).sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true })) as ItemOf<T>[];
export const itemsForExam = (exam: Exam) => ITEMS.filter((i) => (i.exam ?? 'pte-a') === exam);
export const itemById = (id: string) => BY_ID.get(id);
