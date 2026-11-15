import { Fragment, useMemo, useState } from 'react';
import type { ItemOf } from '../../data/types';
import { TASK } from '../../data/taskTypes';
import { AudioPrompt } from '../AudioPrompt';
import { fmt, Shell, useElapsed } from '../ui';
import { scoreBlanks, scoreHIW, scoreOrder, scoreWFD } from '../../lib/scoring';
import { shuffle } from '../../lib/text';
import type { TaskProps } from './types';

const splitBlanks = (t: string) => t.split(/(\{\{\d+\}\})/g);
const blankIndex = (part: string) => { const m = part.match(/^\{\{(\d+)\}\}$/); return m ? +m[1] : -1; };
const paras = (t: string) => t.split(/\n\s*\n/);

function Submit({ done, onClick, disabled }: { done: boolean; onClick: () => void; disabled?: boolean }) {
  return <button className="btn" onClick={onClick} disabled={done || disabled}>{done ? 'Submitted' : 'Submit'}</button>;
}

// ------------------------------------------------ Reading & Writing FIB (dropdowns)
export function RWFIBTask({ item, onDone, nav }: TaskProps<ItemOf<'rwfib'>>) {
  const meta = TASK.rwfib;
  const [vals, setVals] = useState<string[]>(item.blanks.map(() => ''));
  const [done, setDone] = useState(false);
  const elapsed = useElapsed(!done);
  const submit = () => {
    setDone(true);
    onDone({ result: scoreBlanks('rwfib', vals, item.blanks.map((b) => b.answer)), response: vals.map((v, i) => `${i + 1}. ${v || '—'}`).join('  ') });
  };
  return (
    <Shell title={meta.name} sub={item.title} timer={fmt(elapsed)} instruction={meta.instruction} left={nav} right={<Submit done={done} onClick={submit} />}>
      <div className="passage">
        {paras(item.text).map((p, pi) => (
          <p key={pi}>
            {splitBlanks(p).map((part, i) => {
              const b = blankIndex(part);
              if (b < 0) return <Fragment key={i}>{part}</Fragment>;
              const ok = done && vals[b] === item.blanks[b].answer;
              return (
                <Fragment key={i}>
                  <select
                    value={vals[b]}
                    disabled={done}
                    aria-label={`Blank ${b + 1}`}
                    onChange={(e) => setVals((v) => v.map((x, j) => (j === b ? e.target.value : x)))}
                    style={{ margin: '0 3px', borderColor: done ? (ok ? 'var(--green)' : 'var(--coral)') : undefined, background: done ? (ok ? 'var(--green-l)' : 'var(--coral-l)') : undefined }}
                  >
                    <option value="">&nbsp;</option>
                    {item.blanks[b].options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {done && !ok && <b className="small" style={{ color: 'var(--green)' }}>[{item.blanks[b].answer}] </b>}
                </Fragment>
              );
            })}
          </p>
        ))}
      </div>
    </Shell>
  );
}

// ------------------------------------------------ Reading FIB (drag & drop, or tap-to-place)
export function RFIBTask({ item, onDone, nav }: TaskProps<ItemOf<'rfib'>>) {
  const meta = TASK.rfib;
  const bank = useMemo(() => shuffle([...item.answers, ...item.distractors], item.id.length * 7919), [item]);
  const [slots, setSlots] = useState<(string | null)[]>(item.answers.map(() => null));
  const [picked, setPicked] = useState<string | null>(null);
  const [over, setOver] = useState(-1);
  const [done, setDone] = useState(false);
  const elapsed = useElapsed(!done);
  const free = bank.filter((w) => !slots.includes(w));

  const place = (slot: number, word: string) => {
    if (done) return;
    setSlots((s) => s.map((x, i) => (i === slot ? word : x === word ? null : x)));
    setPicked(null);
  };
  const clear = (slot: number) => !done && setSlots((s) => s.map((x, i) => (i === slot ? null : x)));
  const submit = () => {
    setDone(true);
    onDone({ result: scoreBlanks('rfib', slots.map((s) => s ?? ''), item.answers), response: slots.map((v, i) => `${i + 1}. ${v ?? '—'}`).join('  ') });
  };

  return (
    <Shell title={meta.name} sub={item.title} timer={fmt(elapsed)} instruction={meta.instruction} left={nav} right={<Submit done={done} onClick={submit} />}>
      <div className="passage">
        {paras(item.text).map((p, pi) => (
          <p key={pi}>
            {splitBlanks(p).map((part, i) => {
              const b = blankIndex(part);
              if (b < 0) return <Fragment key={i}>{part}</Fragment>;
              const w = slots[b];
              const state = done ? (w === item.answers[b] ? ' ok' : ' bad') : '';
              return (
                <Fragment key={i}>
                  <span
                    className={'drop' + (w ? ' filled' : '') + (over === b ? ' over' : '') + state}
                    role="button"
                    tabIndex={0}
                    aria-label={`Blank ${b + 1}${w ? ': ' + w : ''}`}
                    onClick={() => (picked ? place(b, picked) : w && clear(b))}
                    onKeyDown={(e) => e.key === 'Enter' && (picked ? place(b, picked) : w && clear(b))}
                    onDragOver={(e) => { e.preventDefault(); setOver(b); }}
                    onDragLeave={() => setOver(-1)}
                    onDrop={(e) => { e.preventDefault(); setOver(-1); place(b, e.dataTransfer.getData('text/plain')); }}
                  >
                    {w ?? ''}
                  </span>
                  {done && w !== item.answers[b] && <b className="small" style={{ color: 'var(--green)' }}>[{item.answers[b]}] </b>}
                </Fragment>
              );
            })}
          </p>
        ))}
      </div>
      <div className="bank" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { const w = e.dataTransfer.getData('text/plain'); setSlots((s) => s.map((x) => (x === w ? null : x))); }}>
        {free.map((w) => (
          <span key={w} className={'chip' + (picked === w ? ' picked' : '')} draggable={!done} onDragStart={(e) => e.dataTransfer.setData('text/plain', w)} onClick={() => !done && setPicked(picked === w ? null : w)}>
            {w}
          </span>
        ))}
        {!free.length && <span className="small muted">All words placed. Drag a word back here to remove it.</span>}
      </div>
      <p className="small muted" style={{ marginTop: 8 }}>Drag words into the gaps, or tap a word and then tap a gap. Tap a filled gap to empty it.</p>
    </Shell>
  );
}

// ------------------------------------------------ Re-order Paragraphs
export function ROPTask({ item, onDone, nav }: TaskProps<ItemOf<'rop'>>) {
  const meta = TASK.rop;
  const start = useMemo(() => {
    let s = shuffle(item.paragraphs.map((_, i) => i), item.id.length * 104729 + 3);
    if (s.every((v, i) => v === i)) s = [...s].reverse();
    return s;
  }, [item]);
  const [source, setSource] = useState<number[]>(start);
  const [target, setTarget] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const elapsed = useElapsed(!done);
  const label = (i: number) => String.fromCharCode(65 + start.indexOf(i));

  const toTarget = (i: number) => { if (done) return; setSource((s) => s.filter((x) => x !== i)); setTarget((t) => [...t, i]); };
  const toSource = (i: number) => { if (done) return; setTarget((t) => t.filter((x) => x !== i)); setSource((s) => [...s, i]); };
  const move = (pos: number, d: -1 | 1) => setTarget((t) => {
    const n = [...t]; const j = pos + d;
    if (j < 0 || j >= n.length) return t;
    [n[pos], n[j]] = [n[j], n[pos]];
    return n;
  });
  const submit = () => {
    setDone(true);
    onDone({ result: scoreOrder(target, item.paragraphs.length), response: target.map(label).join(' → ') || '(none)' });
  };

  return (
    <Shell title={meta.name} sub={item.title} timer={fmt(elapsed)} instruction={meta.instruction} left={nav} right={<Submit done={done} onClick={submit} />}>
      <div className="rop">
        <div className="rop-col" onDragOver={(e) => e.preventDefault()} onDrop={(e) => toSource(+e.dataTransfer.getData('text/plain'))}>
          <h4>Source</h4>
          {source.map((i) => (
            <div key={i} className="rop-item" draggable={!done} onDragStart={(e) => e.dataTransfer.setData('text/plain', String(i))} onClick={() => toTarget(i)} title="Click to move right">
              <span className="n">{label(i)}</span><span>{item.paragraphs[i]}</span>
            </div>
          ))}
        </div>
        <div className="rop-col" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { const i = +e.dataTransfer.getData('text/plain'); if (!target.includes(i)) toTarget(i); }}>
          <h4>Target — your order</h4>
          {target.map((i, pos) => {
            const ok = done && (pos === 0 ? i === 0 : target[pos - 1] === i - 1);
            return (
              <div key={i} className="rop-item" style={done ? { borderColor: ok ? 'var(--green)' : 'var(--coral)' } : undefined}>
                <span className="n">{label(i)}</span>
                <span onClick={() => toSource(i)} style={{ flex: 1 }}>{item.paragraphs[i]}</span>
                {!done && (
                  <span className="ctrl">
                    <button aria-label="Move up" onClick={() => move(pos, -1)}>▲</button>
                    <button aria-label="Move down" onClick={() => move(pos, 1)}>▼</button>
                  </span>
                )}
              </div>
            );
          })}
          {!target.length && <p className="small muted" style={{ margin: 8 }}>Click or drag paragraphs here in the right order.</p>}
        </div>
      </div>
      {done && <p className="small" style={{ marginTop: 12 }}><b>Correct order:</b> {item.paragraphs.map((_, i) => label(i)).join(' → ')}</p>}
    </Shell>
  );
}

// ------------------------------------------------ Listening FIB
export function LFIBTask({ item, mode, onDone, nav }: TaskProps<ItemOf<'lfib'>>) {
  const meta = TASK.lfib;
  const parts = item.transcript.split(/(\[\[[^\]]+\]\])/g);
  const answers = parts.filter((p) => p.startsWith('[[')).map((p) => p.slice(2, -2));
  const spoken = item.transcript.replace(/\[\[([^\]]+)\]\]/g, '$1');
  const [vals, setVals] = useState<string[]>(answers.map(() => ''));
  const [done, setDone] = useState(false);
  const elapsed = useElapsed(!done);
  let gi = -1;
  const submit = () => {
    setDone(true);
    onDone({ result: scoreBlanks('lfib', vals, answers), response: vals.map((v, i) => `${i + 1}. ${v || '—'}`).join('  ') });
  };
  return (
    <Shell title={meta.name} sub={item.title} timer={fmt(elapsed)} instruction={meta.instruction} left={nav} right={<Submit done={done} onClick={submit} />}>
      <div className="stack">
        <AudioPrompt chunks={[{ text: spoken, speaker: item.speaker }]} delay={mode === 'exam' ? 7 : 3} />
        <div className="passage">
          {parts.map((p, i) => {
            if (!p.startsWith('[[')) return <Fragment key={i}>{p}</Fragment>;
            const g = ++gi;
            const ok = done && vals[g].trim().toLowerCase() === answers[g].toLowerCase();
            return (
              <Fragment key={i}>
                <input
                  className={'gap-input' + (done ? (ok ? ' ok' : ' bad') : '')}
                  value={vals[g]}
                  readOnly={done}
                  spellCheck={false}
                  autoComplete="off"
                  aria-label={`Gap ${g + 1}`}
                  onChange={(e) => setVals((v) => v.map((x, j) => (j === g ? e.target.value : x)))}
                />
                {done && !ok && <b className="small" style={{ color: 'var(--green)' }}>[{answers[g]}] </b>}
              </Fragment>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

// ------------------------------------------------ Highlight Incorrect Words
export function HIWTask({ item, mode, onDone, nav }: TaskProps<ItemOf<'hiw'>>) {
  const meta = TASK.hiw;
  const tokens = item.transcript.split(' ');
  const changed = new Map(item.changes.map((c) => [c.index, c.shown]));
  const shown = tokens.map((t, i) => changed.get(i) ?? t);
  const [clicked, setClicked] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const elapsed = useElapsed(!done);
  const submit = () => {
    setDone(true);
    onDone({
      result: scoreHIW(clicked, item.changes.map((c) => c.index)),
      response: clicked.length ? clicked.sort((a, b) => a - b).map((i) => shown[i]).join(', ') : '(none)',
    });
  };
  return (
    <Shell title={meta.name} sub={item.title} timer={fmt(elapsed)} instruction={meta.instruction} left={nav} right={<Submit done={done} onClick={submit} />}>
      <div className="stack">
        <AudioPrompt chunks={[{ text: item.transcript, speaker: item.speaker }]} delay={mode === 'exam' ? 10 : 3} />
        <div className="passage">
          {shown.map((w, i) => {
            const isChanged = changed.has(i);
            const sel = clicked.includes(i);
            const cls = done ? (isChanged && sel ? 'right' : isChanged ? 'missed' : sel ? 'wrong' : '') : sel ? 'sel' : '';
            return (
              <Fragment key={i}>
                <span className={'hiw-word ' + cls} onClick={() => !done && setClicked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]))}>{w}</span>
                {done && isChanged && <span className="small" style={{ color: 'var(--green)', fontWeight: 600 }}> ({tokens[i]})</span>}{' '}
              </Fragment>
            );
          })}
        </div>
        {done && <p className="small muted">Green = found, red outline = missed (the spoken word is in brackets), red fill = clicked but correct.</p>}
      </div>
    </Shell>
  );
}

// ------------------------------------------------ Write From Dictation
export function WFDTask({ item, onDone, nav }: TaskProps<ItemOf<'wfd'>>) {
  const meta = TASK.wfd;
  const [val, setVal] = useState('');
  const [done, setDone] = useState(false);
  const elapsed = useElapsed(!done);
  const submit = () => {
    setDone(true);
    onDone({ result: scoreWFD(item.sentence, val), response: val });
  };
  return (
    <Shell title={meta.name} sub={item.title} timer={fmt(elapsed)} instruction={meta.instruction} left={nav} right={<Submit done={done} onClick={submit} />}>
      <div className="stack">
        <AudioPrompt chunks={[{ text: item.sentence, speaker: item.speaker }]} delay={3} />
        <input
          className="text"
          style={{ width: '100%', fontSize: 16, padding: '12px 14px' }}
          value={val}
          readOnly={done}
          spellCheck={false}
          autoComplete="off"
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !done && submit()}
          placeholder="Type the sentence you hear…"
        />
      </div>
    </Shell>
  );
}
