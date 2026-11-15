import { useState } from 'react';
import { EXAM, EXAM_TASKS, EXAMS, SKILLS, taskMeta } from '../data/taskTypes';
import type { Exam, Skill, TaskCode } from '../data/types';
import { itemsFor } from '../data/items';
import { examPath, href, itemPath, taskPath } from '../lib/router';
import { getAttempts, useStore } from '../lib/store';
import { latestByItem, taskStats } from '../lib/progress';
import { scoreLabel } from '../lib/scoring';
import { SKILL_ICON } from '../components/ui';

/** Section order differs: PTE runs Speaking & Writing → Reading → Listening; CELPIP runs Listening → Reading → Writing → Speaking. */
export const SECTION_ORDER: Record<Exam, Skill[]> = {
  'pte-a': ['speaking', 'writing', 'reading', 'listening'],
  'pte-core': ['speaking', 'writing', 'reading', 'listening'],
  celpip: ['listening', 'reading', 'writing', 'speaking'],
};

export function ExamTabs({ exam, to }: { exam: Exam; to: (e: Exam) => string }) {
  return (
    <div className="tabs" role="tablist">
      {EXAMS.map((e) => (
        <a key={e.key} role="tab" aria-selected={e.key === exam} className={'tab' + (e.key === exam ? ' on' : '')} href={href(to(e.key))}>
          {e.name}
        </a>
      ))}
    </div>
  );
}

export function Library({ exam }: { exam: Exam }) {
  const attempts = useStore(getAttempts);
  const st = taskStats(attempts, exam);
  const codes = EXAM_TASKS[exam];
  return (
    <div className="container page">
      <h1>Practice library</h1>
      <ExamTabs exam={exam} to={examPath} />
      <p className="muted">{EXAM[exam].blurb} Choose a task type. Each one opens with the official instructions, timings and scoring, then the question bank.</p>
      {!codes.length && <div className="card empty">Coming soon.</div>}
      {SECTION_ORDER[exam].map((sk) => {
        const s = SKILLS.find((x) => x.key === sk)!;
        const list = codes.filter((c) => taskMeta(c, exam).section === sk);
        if (!list.length) return null;
        return (
          <section key={sk}>
            <div className="skill-head" style={{ color: s.color }}>{SKILL_ICON[sk]}<h2>{s.label}</h2></div>
            <div className="grid g4">
              {list.map((code) => {
                const t = taskMeta(code, exam);
                const x = st[code];
                return (
                  <a key={code} className="card link task-card" href={href(taskPath(exam, code))}>
                    <div className="row spread">
                      <span className="code">{t.short}</span>
                      <span className="row" style={{ gap: 4 }}>{t.isNew && <span className="pill new">New</span>}{t.aiScored ? <span className="pill">AI scored</span> : <span className="pill grey">Auto-marked</span>}</span>
                    </div>
                    <b style={{ color: 'var(--navy)' }}>{t.name}</b>
                    <div className="progress"><i style={{ width: `${(x.done / Math.max(1, x.total)) * 100}%`, background: s.color }} /></div>
                    <div className="row spread small muted">
                      <span>{x.done}/{x.total} {t.unit ?? 'items'}</span>
                      <span>{x.avg !== null ? <>avg <b style={{ color: 'var(--ink)' }}>{scoreLabel(exam, x.avg)}</b></> : 'not started'}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export function TaskList({ exam, task }: { exam: Exam; task: TaskCode }) {
  const meta = taskMeta(task, exam);
  const attempts = useStore(getAttempts);
  const latest = latestByItem(attempts);
  const [diff, setDiff] = useState<string>('all');
  const [status, setStatus] = useState<string>('all');
  const [topic, setTopic] = useState<string>('all');
  if (!meta.name) return <div className="container page empty">Unknown task type.</div>;
  const allItems = itemsFor(task, exam);
  const topics = [...new Set(allItems.map((i) => i.topic))].sort();
  const items = allItems.filter((i) => (diff === 'all' || i.difficulty === diff) && (topic === 'all' || i.topic === topic) && (status === 'all' || (status === 'done') === latest.has(i.id)));
  const first = items.find((i) => !latest.has(i.id)) ?? items[0];
  return (
    <div className="container page">
      <div className="crumbs"><a href={href(examPath(exam))}>Practice</a> / {EXAM[exam].name} / {meta.name}</div>
      <div className="row spread" style={{ alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 720 }}>
          <h1 style={{ marginBottom: 6 }}>{meta.name} {meta.isNew && <span className="pill new" style={{ verticalAlign: 'middle' }}>New in 2025</span>}</h1>
          <p className="muted">{meta.instruction}</p>
        </div>
        {first && <a className="btn lg" href={href(itemPath(first))}>Start practice →</a>}
      </div>
      <div className="grid g3" style={{ margin: '10px 0 24px' }}>
        <div className="card flat">
          <div className="tag">Timing</div>
          <p style={{ margin: '6px 0 0' }}>
            {meta.prepSec ? <>Prepare <b>{meta.prepSec}s</b> · </> : null}
            {meta.responseSec ? <>Speak <b>{meta.responseSec >= 60 && meta.responseSec % 60 === 0 ? `${meta.responseSec / 60} min` : `${meta.responseSec}s`}</b></> : null}
            {meta.timeLimitSec ? <>Time limit <b>{Math.round(meta.timeLimitSec / 60)} min</b></> : null}
            {meta.suggestedSec ? <>Suggested pace <b>~{meta.suggestedSec >= 120 ? `${Math.round(meta.suggestedSec / 60)} min` : `${meta.suggestedSec}s`}</b> (section-timed)</> : null}
          </p>
        </div>
        <div className="card flat"><div className="tag">How it is scored</div><p style={{ margin: '6px 0 0' }}>{meta.scoring}</p></div>
        <div className="card flat">
          <div className="tag">Examiner tips</div>
          <ul style={{ margin: '6px 0 0', paddingLeft: 18 }}>{meta.tips.map((t) => <li key={t} className="small">{t}</li>)}</ul>
        </div>
      </div>
      <div className="row" style={{ marginBottom: 12 }}>
        <span className="small muted">Filter:</span>
        <select value={diff} onChange={(e) => setDiff(e.target.value)} aria-label="Difficulty"><option value="all">All levels</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select>
        <select value={topic} onChange={(e) => setTopic(e.target.value)} aria-label="Topic"><option value="all">All topics</option>{topics.map((t) => <option key={t}>{t}</option>)}</select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status"><option value="all">All items</option><option value="todo">Not done</option><option value="done">Done</option></select>
        <span className="small muted">{items.length} of {allItems.length}</span>
      </div>
      <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
        <table className="t">
          <thead><tr><th>#</th><th>Item</th><th>Topic</th><th>Level</th><th>Last score</th><th /></tr></thead>
          <tbody>
            {items.map((i) => {
              const a = latest.get(i.id);
              return (
                <tr key={i.id}>
                  <td className="muted">{i.id.split('-').pop()}</td>
                  <td><a href={href(itemPath(i))} style={{ fontWeight: 600 }}>{i.title}</a></td>
                  <td>{i.topic}</td>
                  <td><span className={'pill ' + (i.difficulty === 'easy' ? 'green' : i.difficulty === 'medium' ? 'gold' : 'coral')}>{i.difficulty}</span></td>
                  <td>{a ? <b>{a.result.raw}/{a.result.max}</b> : <span className="muted">—</span>}</td>
                  <td><a className="btn sm ghost" href={href(itemPath(i))}>{a ? 'Retry' : 'Practise'}</a></td>
                </tr>
              );
            })}
            {!items.length && <tr><td colSpan={6} className="empty">No items match these filters.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
