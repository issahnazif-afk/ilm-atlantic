import type { Exam, Item, TaskCode } from '../data/types';
import { useEffect, useState } from 'react';

// Hash routing keeps the prototype deployable on GitHub Pages without server rewrites.
export function useRoute(): string[] {
  const get = () => (location.hash.replace(/^#\/?/, '').split('?')[0] || '').split('/').filter(Boolean).map(decodeURIComponent);
  const [parts, setParts] = useState(get);
  useEffect(() => {
    const on = () => { setParts(get()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return parts;
}

export const go = (path: string) => { location.hash = '#/' + path.replace(/^\/+/, ''); };
export const href = (path: string) => '#/' + path.replace(/^\/+/, '');

// Practice paths always carry the exam: practice/<exam>/<task>/<itemId>
export const examPath = (exam: Exam) => `practice/${exam}`;
export const taskPath = (exam: Exam, task: TaskCode) => `practice/${exam}/${task}`;
export const itemPath = (item: Pick<Item, 'id' | 'task' | 'exam'>) => `practice/${item.exam ?? 'pte-a'}/${item.task}/${item.id}`;
