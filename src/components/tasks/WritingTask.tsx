import { useRef, useState } from 'react';
import type { ItemOf } from '../../data/types';
import { TASK } from '../../data/taskTypes';
import { AudioPrompt } from '../AudioPrompt';
import { fmt, Shell, useCountdown } from '../ui';
import { scoreWriting } from '../../lib/scoring';
import { wordCount } from '../../lib/text';
import type { TaskProps } from './types';

type W = ItemOf<'swt' | 'we' | 'sst'>;

export function WritingTask({ item, mode, onDone, nav }: TaskProps<W>) {
  const meta = TASK[item.task];
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
  const range = item.task === 'swt' ? [5, 75] : item.task === 'we' ? [200, 300] : [50, 70];
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
        {item.task === 'sst' && (
          <AudioPrompt chunks={[{ text: item.transcript, speaker: item.speaker }]} allowReplay={false} delay={mode === 'exam' ? 7 : 3} onEnded={() => setListening(false)} label="Lecture" />
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
            style={{ minHeight: item.task === 'we' ? 320 : 150 }}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            value={text}
            readOnly={done}
            onChange={(e) => setText(e.target.value)}
            placeholder={item.task === 'we' ? 'Write your essay here. Separate paragraphs with a blank line.' : 'Type your response here.'}
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
