import { SKILLS, TASK, TASKS } from '../data/taskTypes';
import type { TaskCode } from '../data/types';
import { itemsFor } from '../data/items';
import { href } from '../lib/router';
import { getAttempts, useStore } from '../lib/store';
import { latestByItem, taskStats } from '../lib/progress';
import { toScale } from '../lib/scoring';
import { SKILL_ICON } from '../components/ui';
import { useState } from 'react';

export function Library() {
  const attempts = useStore(getAttempts);
  const st = taskStats(attempts);
  return (
    <div className="container page">
      <h1>Practice library</h1>
      <p className="muted">Choose a task type. Each one opens with the official instructions, timings and scoring, then the question bank.</p>
      {SKILLS.map((s) => (
        <section key={s.key}>
          <div className="skill-head" style={{ color: s.color }}>{SKILL_ICON[s.key]}<h2>{s.label}</h2></div>
          <div className="grid g4">
            {TASKS.filter((t) => t.section === s.key).map((t) => {
              const x = st[t.code];
              return (
                <a key={t.code} className="card link task-card" href={href(`practice/${t.code}`)}>
                  <div className="row spread">
                    <span className="code">{t.short}</span>
                    <span className="row" style={{ gap: 4 }}>{t.isNew && <span className="pill new">New</span>}{t.aiScored ? <span className="pill">AI scored</span> : <span className="pill grey">Auto-marked</span>}</span>
                  </div>
                  <b style={{ color: 'var(--navy)' }}>{t.name}</b>
                  <div className="progress"><i style={{ width: `${(x.done / Math.max(1, x.total)) * 100}%`, background: s.color }} /></div>
                  <div className="row spread small muted">
                    <span>{x.done}/{x.total} done</span>
                    <span>{x.avg !== null ? <>avg <b style={{ color: 'var(--ink)' }}>{toScale(x.avg)}</b></> : 'not started'}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export function TaskList({ task }: { task: TaskCode }) {
  const meta = TASK[task];
  const attempts = useStore(getAttempts);
  const latest = latestByItem(attempts);
  const [diff, setDiff] = useState<string>('all');
  const [status, setStatus] = useState<string>('all');
  if (!meta) return <div className="container page empty">Unknown task type.</div>;
  const items = itemsFor(task).filter((i) => (diff === 'all' || i.difficulty === diff) && (status === 'all' || (status === 'done') === latest.has(i.id)));
  const first = items.find((i) => !latest.has(i.id)) ?? items[0];
  return (
    <div className="container page">
      <div className="crumbs"><a href={href('practice')}>Practice</a> / {meta.name}</div>
      <div className="row spread" style={{ alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 720 }}>
          <h1 style={{ marginBottom: 6 }}>{meta.name} {meta.isNew && <span className="pill new" style={{ verticalAlign: 'middle' }}>New in 2025</span>}</h1>
          <p className="muted">{meta.instruction}</p>
        </div>
        {first && <a className="btn lg" href={href(`practice/${task}/${first.id}`)}>Start practice →</a>}
      </div>
      <div className="grid g3" style={{ margin: '10px 0 24px' }}>
        <div className="card flat">
          <div className="tag">Timing</div>
          <p style={{ margin: '6px 0 0' }}>
            {meta.prepSec ? <>Prepare <b>{meta.prepSec}s</b> · </> : null}
            {meta.responseSec ? <>Speak <b>{meta.responseSec >= 60 ? `${meta.responseSec / 60} min` : `${meta.responseSec}s`}</b></> : null}
            {meta.timeLimitSec ? <>Time limit <b>{meta.timeLimitSec / 60} min</b></> : null}
            {meta.suggestedSec ? <>Suggested pace <b>~{meta.suggestedSec}s</b> (section-timed)</> : null}
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
        <select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status"><option value="all">All items</option><option value="todo">Not done</option><option value="done">Done</option></select>
      </div>
      <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
        <table className="t">
          <thead><tr><th>#</th><th>Item</th><th>Topic</th><th>Level</th><th>Last score</th><th /></tr></thead>
          <tbody>
            {items.map((i) => {
              const a = latest.get(i.id);
              return (
                <tr key={i.id}>
                  <td className="muted">{i.id.split('-')[1]}</td>
                  <td><a href={href(`practice/${task}/${i.id}`)} style={{ fontWeight: 600 }}>{i.title}</a></td>
                  <td>{i.topic}</td>
                  <td><span className={'pill ' + (i.difficulty === 'easy' ? 'green' : i.difficulty === 'medium' ? 'gold' : 'coral')}>{i.difficulty}</span></td>
                  <td>{a ? <b>{a.result.raw}/{a.result.max}</b> : <span className="muted">—</span>}</td>
                  <td><a className="btn sm ghost" href={href(`practice/${task}/${i.id}`)}>{a ? 'Retry' : 'Practise'}</a></td>
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
