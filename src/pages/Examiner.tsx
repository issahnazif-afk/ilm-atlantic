import { useState } from 'react';
import { TASK } from '../data/taskTypes';
import { itemById } from '../data/items';
import type { Item } from '../data/types';
import { href } from '../lib/router';
import { getAttempts, updateAttempt, useStore, type Attempt } from '../lib/store';
import { Feedback, useAudioUrl } from '../components/Feedback';
import { Chart } from '../components/Chart';

/**
 * Examiner console. In the prototype it lists review requests from this browser.
 * In production, examiners sign in and work through a shared queue across all learners.
 */
export function Examiner() {
  const attempts = useStore(getAttempts);
  const queue = attempts.filter((a) => a.review).sort((a, b) => Number(a.review!.status === 'marked') - Number(b.review!.status === 'marked') || a.review!.requestedAt - b.review!.requestedAt);
  const [sel, setSel] = useState<string>();
  const cur = queue.find((a) => a.id === sel) ?? queue.find((a) => a.review?.status === 'requested');

  return (
    <div className="container page">
      <div className="tag">Examiner console</div>
      <h1>Marking queue</h1>
      <p className="muted" style={{ maxWidth: 760 }}>
        Learners send speaking and writing responses here for human marking. The AI estimate is filled in as a starting point;
        adjust each trait, add comments, and the learner sees your marks next to the estimate. Your marks are also kept as calibration data for the Phase 2 AI scorer.
      </p>
      {!queue.length ? (
        <div className="card empty">No review requests yet. On any speaking or writing result, click <b>Request examiner review</b>.</div>
      ) : (
        <div className="grid" style={{ gridTemplateColumns: 'minmax(220px, 300px) 1fr', alignItems: 'start' }}>
          <div className="card" style={{ padding: 8 }}>
            {queue.map((a) => (
              <button key={a.id} onClick={() => setSel(a.id)} className="row spread" style={{ width: '100%', textAlign: 'left', border: 0, background: cur?.id === a.id ? 'var(--teal-l)' : 'transparent', padding: '10px 10px', borderRadius: 8, cursor: 'pointer' }}>
                <span><span className="pill grey">{TASK[a.task].short}</span> <span className="small">{itemById(a.itemId)?.title}</span></span>
                {a.review?.status === 'marked' ? <span className="pill green">✓</span> : <span className="pill gold">new</span>}
              </button>
            ))}
          </div>
          {cur && <MarkingForm key={cur.id} attempt={cur} />}
        </div>
      )}
    </div>
  );
}

function MarkingForm({ attempt }: { attempt: Attempt }) {
  const item = itemById(attempt.itemId)!;
  const audio = useAudioUrl(attempt.audioKey);
  const base = attempt.review?.traits ?? attempt.result.traits.map((t) => ({ name: t.name, score: t.score, max: t.max }));
  const [traits, setTraits] = useState(base);
  const [comment, setComment] = useState(attempt.review?.comment ?? '');
  const [saved, setSaved] = useState(false);

  return (
    <div className="card stack">
      <div className="row spread">
        <h3 style={{ margin: 0 }}>{TASK[item.task].name}: {item.title}</h3>
        <span className="small muted">Submitted {new Date(attempt.at).toLocaleString()}</span>
      </div>
      <details className="box" open><summary>Task prompt</summary><div style={{ marginTop: 10 }}><PromptSummary item={item} /></div></details>
      <div>
        <div className="tag">Learner response</div>
        {audio && <audio controls src={audio} style={{ width: '100%', margin: '8px 0' }} />}
        <p style={{ whiteSpace: 'pre-wrap', background: '#f7f9fc', padding: 12, borderRadius: 10 }}>{attempt.response || '(empty)'}</p>
      </div>
      <div>
        <div className="tag" style={{ marginBottom: 6 }}>Your marks <span className="muted" style={{ textTransform: 'none', letterSpacing: 0 }}>(AI estimate in brackets)</span></div>
        {traits.map((t, i) => (
          <div key={t.name} className="trait">
            <span style={{ fontWeight: 600 }}>{t.name} <span className="small muted">({attempt.result.traits[i]?.score}/{t.max})</span></span>
            <input type="range" min={0} max={t.max} step={1} value={t.score} onChange={(e) => setTraits(traits.map((x, j) => (j === i ? { ...x, score: +e.target.value } : x)))} aria-label={t.name} />
            <b style={{ textAlign: 'right' }}>{t.score}/{t.max}</b>
          </div>
        ))}
      </div>
      <label className="small">Comments for the learner
        <textarea className="answer" style={{ minHeight: 110 }} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Strengths, the one or two things to fix first, and a concrete drill…" />
      </label>
      <div className="row">
        <button className="btn" onClick={() => { updateAttempt(attempt.id, { review: { status: 'marked', requestedAt: attempt.review?.requestedAt ?? Date.now(), markedAt: Date.now(), traits, comment } }); setSaved(true); }}>Save marks</button>
        {saved && <span className="pill green">Saved: the learner can now see your marking</span>}
        <a className="small" href={href(`review/${attempt.id}`)}>Open the learner's view</a>
      </div>
    </div>
  );
}

export function PromptSummary({ item }: { item: Item }) {
  switch (item.task) {
    case 'ra': return <p>{item.text}</p>;
    case 'di': return <Chart spec={item.chart} />;
    case 'rts': return <p>{item.situation}</p>;
    case 'swt': return <p style={{ whiteSpace: 'pre-wrap' }}>{item.passage}</p>;
    case 'we': return <p><b>{item.prompt}</b></p>;
    case 'rl': case 'sst': return <p className="small">{item.transcript}</p>;
    case 'sgd': return <div className="small">{item.turns.map((t, i) => <p key={i}><b>{t.speaker.name}:</b> {t.text}</p>)}</div>;
    case 'rs': case 'wfd': return <p>{item.sentence}</p>;
    case 'asq': return <p>{item.question}</p>;
    case 'rwfib': return <p>{item.text.replace(/\{\{(\d+)\}\}/g, (_, n) => `[${item.blanks[+n].answer}]`)}</p>;
    case 'rfib': return <p>{item.text.replace(/\{\{(\d+)\}\}/g, (_, n) => `[${item.answers[+n]}]`)}</p>;
    case 'rop': return <ol>{item.paragraphs.map((p, i) => <li key={i}>{p}</li>)}</ol>;
    case 'mcm': case 'mcs': return <><p className="small">{item.passage}</p><p><b>{item.question}</b></p><ol type="A">{item.options.map((o, i) => <li key={i}>{o}</li>)}</ol></>;
    case 'lmcm': case 'lmcs': return <><p className="small">{item.transcript}</p><p><b>{item.question}</b></p><ol type="A">{item.options.map((o, i) => <li key={i}>{o}</li>)}</ol></>;
    case 'hcs': case 'smw': return <><p className="small">{item.transcript}</p><ol type="A">{item.options.map((o, i) => <li key={i}>{o}</li>)}</ol></>;
    case 'lfib': return <p>{item.transcript.replace(/\[\[([^\]]+)\]\]/g, '[$1]')}</p>;
    case 'hiw': return <p>{item.transcript}</p>;
  }
}

export function ReviewAttempt({ id }: { id: string }) {
  const attempts = useStore(getAttempts);
  const a = attempts.find((x) => x.id === id);
  const item = a && itemById(a.itemId);
  if (!a || !item) return <div className="container page empty">Response not found.</div>;
  return (
    <div className="container page">
      <div className="crumbs">{a.mockId ? <a href={href(`report/${a.mockId}`)}>Score report</a> : <a href={href('dashboard')}>Dashboard</a>} / {TASK[item.task].name} / {item.title}</div>
      <div className="row spread"><h1 style={{ marginBottom: 0 }}>{item.title}</h1><a className="btn ghost" href={href(`practice/${item.task}/${item.id}`)}>Practise this item again</a></div>
      <details className="box" style={{ marginTop: 14 }}><summary>Question</summary><div style={{ marginTop: 10 }}><PromptSummary item={item} /></div></details>
      <Feedback item={item} attempt={a} />
    </div>
  );
}
