import type { Skill, TaskCode } from '../data/types';
import { TASKS } from '../data/taskTypes';
import { itemsFor } from '../data/items';
import { skillScores } from './scoring';
import type { Attempt } from './store';

export function latestByItem(attempts: Attempt[]) {
  const m = new Map<string, Attempt>();
  for (const a of [...attempts].sort((x, y) => x.at - y.at)) m.set(a.itemId, a);
  return m;
}

export interface TaskStat { task: TaskCode; total: number; done: number; avg: number | null; attempts: number }

export function taskStats(attempts: Attempt[]): Record<TaskCode, TaskStat> {
  const latest = latestByItem(attempts);
  const out = {} as Record<TaskCode, TaskStat>;
  for (const t of TASKS) {
    const items = itemsFor(t.code);
    const ls = items.map((i) => latest.get(i.id)).filter(Boolean) as Attempt[];
    out[t.code] = {
      task: t.code,
      total: items.length,
      done: ls.length,
      avg: ls.length ? ls.reduce((s, a) => s + a.result.fraction, 0) / ls.length : null,
      attempts: attempts.filter((a) => a.task === t.code).length,
    };
  }
  return out;
}

/** Estimated skill scores from each item's most recent attempt. */
export function estimatedSkills(attempts: Attempt[]) {
  const latest = [...latestByItem(attempts).values()];
  return skillScores(latest.map((a) => ({ task: a.task, result: a.result })));
}

export function overall(s: Record<Skill, number | null>) {
  const v = Object.values(s).filter((x): x is number => x !== null);
  return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null;
}

/** Suggest tasks: untried high-weight tasks first, then the weakest averages. */
export function recommendations(attempts: Attempt[], n = 4): TaskCode[] {
  const st = taskStats(attempts);
  const weight = (c: TaskCode) => Object.values(TASKS.find((t) => t.code === c)!.contributes).reduce((a, b) => a + (b ?? 0), 0);
  return TASKS.map((t) => t.code)
    .sort((a, b) => {
      const A = st[a], B = st[b];
      const sa = A.avg === null ? -1 + 0.1 * -weight(a) : A.avg - (A.done < A.total ? 0.05 : 0);
      const sb = B.avg === null ? -1 + 0.1 * -weight(b) : B.avg - (B.done < B.total ? 0.05 : 0);
      return sa - sb;
    })
    .slice(0, n);
}

export function streak(attempts: Attempt[]) {
  const days = new Set(attempts.map((a) => new Date(a.at).toDateString()));
  let n = 0;
  const d = new Date();
  if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1);
  while (days.has(d.toDateString())) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
