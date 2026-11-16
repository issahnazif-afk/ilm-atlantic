import { useRef, useState } from 'react';
import type { ItemOf } from '../../data/types';
import { examOf, metaFor } from '../../data/taskTypes';
import { AudioPrompt } from '../AudioPrompt';
import { fmt, Shell, useCountdown } from '../ui';
import { scoreWriting } from '../../lib/scoring';
import { wordCount } from '../../lib/text';
import type { TaskProps } from './types';

type W = ItemOf<'swt' | 'we' | 'sst' | 'wem' | 'cw1' | 'cw2'>;

export function WritingTask({ item, mode, onDone, nav }: TaskProps<W>) {
  const meta = metaFor(item);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(item.task === 'sst');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const clip = useRef('');
  const ta = useRef<HTMLTextAreaElement>(null);
  const limit = meta.timeLimitSec ?? 600;

  const submit = async () => {
    if (done || busy) return;
    setBusy(true);
    const result = await scoreWriting(item, text);
    setBusy(false);
    setDone(true);
    onDone({ result, response: text });
  };
  const left = useCountdown(limit, !listening && !done, submit);
  const n = wordCount(text);
  const core = examOf(item) === 'pte-core';
  const range = item.task === 'swt' ? (core ? [25, 50] : [5, 75]) : item.task === 'we' ? [200, 300] : item.task === 'sst' ? (core ? [20, 30] : [50, 70])
    : item.task === 'wem' ? [50, 120] : [150, 200];
  const inRange = n >= range[0] && n <= range[1];

  // PTE's editor offers Cut / Copy / Paste buttons and no spell-check.
  const edit = (op: 'cut' | 'copy' | 'paste') => {
    const el = ta.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e } = el;
    if (op !== 'paste') clip.current = text.slice(s, e);
    if (op === 'cut') setText(text.slice(0, s) + text.slice(e));
    if (op === 'paste') setText(text.slice(0, s) + clip.current + text.slice(e));
    el.focus();
  };

  return (
    <Shell
      title={meta.name}
      sub={item.title}
      timer={listening ? undefined : fmt(left)}
      warn={!listening && left < 60}
      instruction={meta.instruction}
      left={nav}
      right={<button className="btn" onClick={submit} disabled={busy || done || listening}>{busy ? 'Scoring…' : done ? 'Submitted' : 'Submit'}</button>}
    >
      <div className="stack">
        {item.task === 'swt' && <div className="passage">{item.passage.split(/\n\s*\n/).map((p, i) => <p key={i}>{p}</p>)}</div>}
        {item.task === 'we' && <div className="passage card flat" style={{ background: '#f7f9fc', fontWeight: 500 }}>{item.prompt}</div>}
        {item.task === 'wem' && (
          <div className="passage card flat" style={{ background: '#f7f9fc' }}>
            <p style={{ marginTop: 0 }}>{item.situation}</p>
            <ul style={{ margin: 0 }}>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        )}
        {(item.task === 'cw1' || item.task === 'cw2') && (
          <div className="passage card flat" style={{ background: '#f7f9fc' }}>
            <p style={{ marginTop: 0, whiteSpace: 'pre-wrap' }}>{item.prompt}</p>
            {item.points && <><p style={{ marginBottom: 4 }}>In your email, you should:</p><ul style={{ margin: 0 }}>{item.points.map((p) => <li key={p}>{p}</li>)}</ul></>}
            {item.choices && <div className="grid g2" style={{ marginTop: 8 }}>{item.choices.map((c, i) => <div key={i} className="card flat"><b>Option {'AB'[i]}</b><br />{c}</div>)}</div>}
          </div>
        )}
        {item.task === 'sst' && (
          <AudioPrompt clip={item.id} chunks={[{ text: item.transcript, speaker: item.speaker }]} allowReplay={false} delay={mode === 'exam' ? 7 : 3} onEnded={() => setListening(false)} label="Lecture" />
        )}
        {item.task === 'sst' && listening && <p className="small muted">Take notes while you listen. The writing timer starts when the audio ends.</p>}
        <div>
          <div className="row" style={{ marginBottom: 6 }}>
            <button className="btn sm ghost" onClick={() => edit('cut')} disabled={done}>Cut</button>
            <button className="btn sm ghost" onClick={() => edit('copy')} disabled={done}>Copy</button>
            <button className="btn sm ghost" onClick={() => edit('paste')} disabled={done}>Paste</button>
          </div>
          <textarea
            ref={ta}
            className="answer"
            style={{ minHeight: item.task === 'we' || item.task.startsWith('cw') ? 320 : item.task === 'wem' ? 220 : 150 }}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            value={text}
            readOnly={done}
            onChange={(e) => setText(e.target.value)}
            placeholder={item.task === 'we' || item.task.startsWith('cw') ? 'Write your response here. Separate paragraphs with a blank line.' : item.task === 'wem' ? 'Dear ...,\n\n...\n\nKind regards,\n...' : 'Type your response here.'}
          />
          <div className="row spread small" style={{ marginTop: 4 }}>
            <span className={inRange ? '' : 'muted'} style={{ color: inRange ? 'var(--green)' : undefined, fontWeight: 600 }}>Word count: {n}</span>
            <span className="muted">Target {range[0]}–{range[1]} words{item.task === 'swt' ? ', one sentence' : ''}</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}
