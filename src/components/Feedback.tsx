import { useEffect, useState } from 'react';
import type { Item } from '../data/types';
import { TASK } from '../data/taskTypes';
import type { ScoreResult } from '../lib/scoring';
import { getAudio, updateAttempt, type Attempt } from '../lib/store';
import { Bar, ScoreRing } from './ui';

export function TraitList({ result }: { result: ScoreResult }) {
  return (
    <div>
      {result.traits.map((t) => (
        <div className="trait" key={t.name}>
          <span style={{ fontWeight: 600 }}>{t.name}</span>
          <Bar value={t.score / t.max} color={t.score / t.max >= 0.75 ? 'var(--green)' : t.score / t.max >= 0.4 ? 'var(--gold)' : 'var(--coral)'} />
          <b style={{ textAlign: 'right' }}>{t.score}/{t.max}</b>
          {t.note && <span className="note">{t.note}</span>}
        </div>
      ))}
    </div>
  );
}

export function useAudioUrl(key?: string) {
  const [url, setUrl] = useState<string>();
  useEffect(() => {
    let u: string | undefined;
    if (key) getAudio(key).then((b) => { if (b) { u = URL.createObjectURL(b); setUrl(u); } });
    return () => { if (u) URL.revokeObjectURL(u); };
  }, [key]);
  return url;
}

export function Feedback({ item, attempt }: { item: Item; attempt: Attempt }) {
  const r = attempt.result;
  const meta = TASK[item.task];
  const audioUrl = useAudioUrl(attempt.audioKey);
  const pct = Math.round(r.fraction * 100);
  const review = attempt.review;

  return (
    <div className="card feedback stack" style={{ marginTop: 18 }}>
      <div className="row" style={{ gap: 20, alignItems: 'flex-start' }}>
        <ScoreRing value={pct} label={r.max > 1 ? 'score' : ''} text={`${r.raw}/${r.max}`} />
        <div style={{ flex: 1, minWidth: 240 }}>
          <div className="row" style={{ marginBottom: 6 }}>
            <h3 style={{ margin: 0 }}>Your result</h3>
            {r.estimated ? <span className="pill gold" title="Speaking and writing scores in this prototype are transparent estimates on the official trait scales.">AI estimate</span> : <span className="pill green">Exact marking</span>}
            {review?.status === 'requested' && <span className="pill">Examiner review requested</span>}
            {review?.status === 'marked' && <span className="pill green">Marked by examiner</span>}
          </div>
          <TraitList result={r} />
        </div>
      </div>

      {r.feedback.length > 0 && (
        <div>
          <h4 style={{ margin: '0 0 6px' }}>What to work on</h4>
          <ul style={{ margin: 0, paddingLeft: 20 }}>{r.feedback.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
      )}

      {r.stats && (
        <div className="row">
          {Object.entries(r.stats).map(([k, v]) => <span key={k} className="pill grey">{k}: <b style={{ marginLeft: 4 }}>{v}</b></span>)}
        </div>
      )}

      {r.alignment && (
        <div>
          <h4 style={{ margin: '0 0 6px' }}>{item.task === 'wfd' ? 'Words you got' : 'Word-by-word'}</h4>
          <p className="passage" style={{ fontSize: 15 }}>
            {r.alignment.map((w, i) => <span key={i} className={w.status === 'ok' ? 'w-ok' : 'w-missed'}>{w.word} </span>)}
          </p>
          <p className="small muted">Green = recognised as intended; red = missed or unclear.</p>
        </div>
      )}

      {r.coverage && (
        <div>
          <h4 style={{ margin: '0 0 6px' }}>Key points</h4>
          {r.coverage.map((c, i) => (
            <div className="kp" key={i}><span className={'ic ' + (c.hit ? 'y' : 'n')}>{c.hit ? '✓' : '✗'}</span><span>{c.point}</span></div>
          ))}
        </div>
      )}

      {(r.grammar?.length || r.spelling?.length) ? (
        <div className="grid g2">
          {r.grammar && r.grammar.length > 0 && (
            <div>
              <h4 style={{ margin: '0 0 6px' }}>Grammar & mechanics</h4>
              {r.grammar.slice(0, 10).map((g, i) => <div key={i} className="small" style={{ marginBottom: 6 }}><b>{g.message}</b><br /><span className="muted">{g.excerpt}</span></div>)}
            </div>
          )}
          {r.spelling && r.spelling.length > 0 && (
            <div>
              <h4 style={{ margin: '0 0 6px' }}>Spelling</h4>
              {r.spelling.map((s, i) => <div key={i} className="small"><span style={{ color: 'var(--coral)', fontWeight: 600 }}>{s.word}</span>{s.suggestions.length ? <> → {s.suggestions.join(', ')}</> : null}</div>)}
            </div>
          )}
        </div>
      ) : null}

      <details className="box" open={meta.section === 'speaking' || meta.section === 'writing'}>
        <summary>Your response</summary>
        {audioUrl && <audio controls src={audioUrl} style={{ width: '100%', margin: '10px 0' }} />}
        <p style={{ whiteSpace: 'pre-wrap', marginTop: 8 }}>{attempt.response || <span className="muted">(empty)</span>}</p>
      </details>

      <Reveal item={item} />

      {review?.status === 'marked' && review.traits && (
        <div className="card flat" style={{ borderColor: 'var(--green)' }}>
          <h4 style={{ marginTop: 0 }}>Examiner marking</h4>
          <TraitList result={{ ...r, traits: review.traits }} />
          {review.comment && <p style={{ marginTop: 10, whiteSpace: 'pre-wrap' }}>{review.comment}</p>}
        </div>
      )}

      {r.estimated && !review && (
        <div className="row spread notice">
          <span>Want an experienced IELTS & PTE examiner to mark this response against the official criteria?</span>
          <button className="btn sm navy" onClick={() => updateAttempt(attempt.id, { review: { status: 'requested', requestedAt: Date.now() } })}>Request examiner review</button>
        </div>
      )}
    </div>
  );
}

function Reveal({ item }: { item: Item }) {
  const blocks: { title: string; body: string }[] = [];
  switch (item.task) {
    case 'di': case 'rl': case 'sgd': case 'rts': case 'swt': case 'sst': case 'we':
      if ('modelAnswer' in item) blocks.push({ title: 'Model answer (C1)', body: item.modelAnswer });
  }
  if (item.task === 'rl' || item.task === 'sst') blocks.push({ title: 'Transcript', body: item.transcript });
  if (item.task === 'sgd') blocks.push({ title: 'Transcript', body: item.turns.map((t) => `${t.speaker.name}: ${t.text}`).join('\n\n') });
  if (item.task === 'rs' || item.task === 'wfd') blocks.push({ title: 'Sentence', body: item.sentence });
  if (item.task === 'asq') blocks.push({ title: 'Question', body: `${item.question}\n\nAccepted: ${item.answers.join(' / ')}` });
  if (item.task === 'lmcm' || item.task === 'lmcs' || item.task === 'hcs' || item.task === 'hiw' || item.task === 'lfib') blocks.push({ title: 'Transcript', body: item.transcript.replace(/\[\[|\]\]/g, '') });
  if (item.task === 'smw') blocks.push({ title: 'Transcript', body: `${item.transcript} … [${item.missing}]` });
  if ('explanation' in item) blocks.push({ title: 'Explanation', body: item.explanation });
  if (item.task === 'we') blocks.unshift({ title: 'Ideas a strong essay could develop', body: item.keyIdeas.map((k) => '• ' + k).join('\n') });
  if (!blocks.length) return null;
  return (
    <>
      {blocks.map((b) => (
        <details className="box" key={b.title} open={b.title === 'Explanation'}>
          <summary>{b.title}</summary>
          <div className={b.title.startsWith('Model') ? 'model' : ''} style={{ marginTop: 10, whiteSpace: 'pre-wrap' }}>{b.body}</div>
        </details>
      ))}
    </>
  );
}
