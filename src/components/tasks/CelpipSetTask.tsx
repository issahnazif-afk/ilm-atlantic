import { Fragment, useState } from 'react';
import type { CelpipListening, CelpipReading, CelpipQuestion } from '../../data/types';
import { metaFor } from '../../data/taskTypes';
import { AudioPrompt } from '../AudioPrompt';
import { Chart } from '../Chart';
import { fmt, Shell, useElapsed } from '../ui';
import { scoreCelpipSet } from '../../lib/scoring';
import type { TaskProps } from './types';

type Set = CelpipListening | CelpipReading;
const LETTERS = 'ABCDE';

/**
 * CELPIP listening & reading sets.
 * Listening: each audio section plays once, then its questions appear (Part 1 has 3 sections).
 * Reading: text (and diagram) on the left, questions on the right; reply blanks render inline as drop-downs.
 */
export function CelpipSetTask({ item, mode, onDone, nav }: TaskProps<Set>) {
  const meta = metaFor(item);
  const listening = item.task.startsWith('cl');
  const sections = listening ? item.audio ?? [] : [];
  const [section, setSection] = useState(0);
  const [heard, setHeard] = useState(false);
  const [ans, setAns] = useState<(number | null)[]>(item.questions.map(() => null));
  const [done, setDone] = useState(false);
  const elapsed = useElapsed(!done);

  const qSection = (q: CelpipQuestion) => (item.task === 'cl1' ? q.section ?? 0 : 0);
  const replyBlanks = new Set((item.reply?.match(/\{\{(\d+)\}\}/g) ?? []).map((m) => +m.slice(2, -2)));
  const visibleQs = item.questions.map((q, i) => ({ q, i })).filter(({ q }) => !listening || (heard && qSection(q) === section) || done);
  const lastSection = section >= sections.length - 1;

  const submit = () => {
    setDone(true);
    const result = scoreCelpipSet(item.task, ans, item.questions.map((q) => q.answer));
    onDone({ result, response: ans.map((a, i) => `${i + 1}:${a === null ? '—' : LETTERS[a]}`).join(' ') });
  };

  const pick = (i: number, v: number) => !done && setAns((a) => a.map((x, j) => (j === i ? v : x)));

  const questionBlock = ({ q, i }: { q: CelpipQuestion; i: number }) => {
    const chosen = ans[i];
    const ok = done && chosen === q.answer;
    return (
      <div key={i} style={{ padding: '10px 0', borderBottom: '1px solid #f0f2f6' }}>
        <div className="row" style={{ alignItems: 'flex-start', gap: 8, flexWrap: 'nowrap' }}>
          <b style={{ minWidth: 22, color: 'var(--muted)' }}>{i + 1}.</b>
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: 6 }}>{q.prompt}</div>
            <select
              value={chosen ?? ''}
              disabled={done}
              aria-label={`Question ${i + 1}`}
              onChange={(e) => pick(i, +e.target.value)}
              style={{ maxWidth: '100%', borderColor: done ? (ok ? 'var(--green)' : 'var(--coral)') : undefined, background: done ? (ok ? 'var(--green-l)' : 'var(--coral-l)') : undefined }}
            >
              <option value="" disabled>Select…</option>
              {q.options.map((o, k) => <option key={k} value={k}>{item.task === 'cr3' ? (o.length <= 1 ? `${o}${o === 'E' ? ' (not given)' : ''}` : o) : o}</option>)}
            </select>
            {done && (
              <div className="small" style={{ marginTop: 6, color: ok ? 'var(--green)' : '#7c2522' }}>
                {ok ? '✓ Correct.' : `✗ Answer: ${q.options[q.answer]}.`} <span className="muted">{q.explanation}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const reply = item.reply && (
    <div className="card flat" style={{ background: '#f7f9fc', marginTop: 14 }}>
      <div className="tag" style={{ marginBottom: 6 }}>{item.task === 'cr4' ? 'Reader comment' : 'Response'}</div>
      <div className="passage" style={{ fontSize: 15, whiteSpace: 'pre-wrap' }}>
        {item.reply.split(/(\{\{\d+\}\})/g).map((part, k) => {
          const m = part.match(/^\{\{(\d+)\}\}$/);
          if (!m) return <Fragment key={k}>{part}</Fragment>;
          const i = +m[1];
          const q = item.questions[i];
          if (!q) return <Fragment key={k}>_____</Fragment>;
          const ok = done && ans[i] === q.answer;
          return (
            <select key={k} value={ans[i] ?? ''} disabled={done} aria-label={`Blank ${i + 1}`} onChange={(e) => pick(i, +e.target.value)}
              style={{ margin: '0 3px', borderColor: done ? (ok ? 'var(--green)' : 'var(--coral)') : undefined, background: done ? (ok ? 'var(--green-l)' : 'var(--coral-l)') : undefined }}>
              <option value="" disabled>{i + 1}. Select…</option>
              {q.options.map((o, j) => <option key={j} value={j}>{o}</option>)}
            </select>
          );
        })}
      </div>
    </div>
  );

  const nonReplyQs = visibleQs.filter(({ i }) => !replyBlanks.has(i));
  const answered = ans.filter((a) => a !== null).length;

  return (
    <Shell
      title={meta.name}
      sub={item.title}
      timer={fmt(elapsed)}
      instruction={meta.instruction}
      left={nav}
      right={
        listening && !done && !lastSection ? (
          <button className="btn" disabled={!heard} onClick={() => { setSection((s) => s + 1); setHeard(false); }}>Next section →</button>
        ) : (
          <button className="btn" onClick={submit} disabled={done || (listening && !heard)}>{done ? 'Submitted' : `Submit (${answered}/${item.questions.length})`}</button>
        )
      }
    >
      <p className="small muted" style={{ marginTop: 0 }}>{item.context}</p>
      {listening ? (
        <div className="stack">
          {sections.length > 1 && <div className="row small">{sections.map((_, k) => <span key={k} className={'pill ' + (k === section ? '' : k < section ? 'green' : 'grey')}>Section {k + 1}</span>)}</div>}
          {!done && (
            <AudioPrompt
              key={section}
              chunks={(sections[section] ?? []).map((t) => ({ text: t.text, speaker: t.speaker }))}
              showSpeaker
              delay={mode === 'exam' ? 3 : 2}
              label={item.task === 'cl5' ? 'Discussion (video in the real test)' : item.task === 'cl4' ? 'News report' : 'Recording'}
              onEnded={() => setHeard(true)}
            />
          )}
          {!heard && !done && <p className="small muted">The questions for this section appear when the recording ends.</p>}
          <div>{visibleQs.map(questionBlock)}</div>
        </div>
      ) : (
        <div className="grid g2" style={{ alignItems: 'start' }}>
          <div>
            {item.diagram && <div style={{ marginBottom: 14 }}><Chart spec={item.diagram} /></div>}
            {item.paragraphs && item.paragraphs.map((p, k) => (
              <p key={k} className="passage" style={{ fontSize: 15 }}><b style={{ color: 'var(--teal-d)' }}>{LETTERS[k]}.</b> {p}</p>
            ))}
            {item.passage && <div className="passage" style={{ fontSize: 15, whiteSpace: 'pre-wrap' }}>{item.passage}</div>}
          </div>
          <div>
            {nonReplyQs.map(questionBlock)}
            {reply}
            {done && [...replyBlanks].sort((a, b) => a - b).map((i) => {
              const q = item.questions[i];
              if (!q) return null;
              const ok = ans[i] === q.answer;
              return <div key={i} className="small" style={{ marginTop: 6, color: ok ? 'var(--green)' : '#7c2522' }}>{i + 1}. {ok ? '✓' : `✗ ${q.options[q.answer]}`} <span className="muted">{q.explanation}</span></div>;
            })}
          </div>
        </div>
      )}
    </Shell>
  );
}
