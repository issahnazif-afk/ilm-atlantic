import { useState } from 'react';
import type { TaskCode } from '../data/types';
import { TASK } from '../data/taskTypes';
import { itemById, itemsFor } from '../data/items';
import { href } from '../lib/router';
import { getAttempts, putAudio, saveAttempt, uid, useStore, type Attempt } from '../lib/store';
import { TaskRunner } from '../components/tasks/TaskRunner';
import { Feedback } from '../components/Feedback';
import type { TaskOutcome } from '../components/tasks/types';

export function Practice({ task, id }: { task: TaskCode; id: string }) {
  const item = itemById(id);
  const [run, setRun] = useState(0);
  const [attemptId, setAttemptId] = useState<string>();
  const attempts = useStore(getAttempts);
  const attempt = attempts.find((a) => a.id === attemptId);
  const history = attempts.filter((a) => a.itemId === id).sort((a, b) => b.at - a.at);

  if (!item || item.task !== task) return <div className="container page empty">Item not found. <a href={href('practice')}>Back to the library</a></div>;
  const list = itemsFor(task);
  const idx = list.findIndex((i) => i.id === id);
  const prev = list[idx - 1], next = list[idx + 1];

  const onDone = async (o: TaskOutcome) => {
    const a: Attempt = { id: uid(), itemId: item.id, task, at: Date.now(), mode: 'practice', result: o.result, response: o.response };
    if (o.audio && o.audio.size) { a.audioKey = 'rec-' + a.id; await putAudio(a.audioKey, o.audio); }
    saveAttempt(a);
    setAttemptId(a.id);
  };

  const retry = () => { setAttemptId(undefined); setRun((r) => r + 1); };

  const nav = (
    <>
      <a className="btn ghost sm" href={prev ? href(`practice/${task}/${prev.id}`) : undefined} aria-disabled={!prev} style={!prev ? { opacity: .4, pointerEvents: 'none' } : undefined}>← Prev</a>
      <span className="small muted">{idx + 1} / {list.length}</span>
      <a className="btn ghost sm" href={next ? href(`practice/${task}/${next.id}`) : undefined} aria-disabled={!next} style={!next ? { opacity: .4, pointerEvents: 'none' } : undefined}>Next →</a>
      {attempt && <button className="btn ghost sm" onClick={retry}>↻ Try again</button>}
    </>
  );

  return (
    <div className="container page">
      <div className="crumbs"><a href={href('practice')}>Practice</a> / <a href={href(`practice/${task}`)}>{TASK[task].name}</a> / {item.title}</div>
      <TaskRunner key={`${id}-${run}`} item={item} mode="practice" onDone={onDone} nav={nav} />
      {attempt && <Feedback item={item} attempt={attempt} />}
      {attempt && next && (
        <div className="row" style={{ justifyContent: 'flex-end', marginTop: 14 }}>
          <a className="btn" href={href(`practice/${task}/${next.id}`)} onClick={() => setAttemptId(undefined)}>Next question →</a>
        </div>
      )}
      {history.length > (attempt ? 1 : 0) && (
        <details className="box" style={{ marginTop: 18 }}>
          <summary>Your previous attempts at this item ({history.length})</summary>
          <table className="t" style={{ marginTop: 8 }}>
            <tbody>
              {history.map((h) => (
                <tr key={h.id}>
                  <td>{new Date(h.at).toLocaleString()}</td>
                  <td><b>{h.result.raw}/{h.result.max}</b></td>
                  <td className="muted small" style={{ maxWidth: 520 }}>{h.response.slice(0, 140)}{h.response.length > 140 ? '…' : ''}</td>
                  <td>{h.review?.status === 'marked' ? <span className="pill green">examiner marked</span> : h.review ? <span className="pill">review requested</span> : null}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      )}
    </div>
  );
}
