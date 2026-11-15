import { useState } from 'react';
import type { ItemOf } from '../../data/types';
import { metaFor } from '../../data/taskTypes';
import { AudioPrompt } from '../AudioPrompt';
import { fmt, Shell, useElapsed } from '../ui';
import { scoreMultiple, scoreSingle } from '../../lib/scoring';
import type { TaskProps } from './types';

type C = ItemOf<'mcm' | 'mcs' | 'lmcm' | 'lmcs' | 'hcs' | 'smw'>;
const L = 'ABCDEFG';

export function ChoiceTask({ item, mode, onDone, nav }: TaskProps<C>) {
  const meta = metaFor(item);
  const multi = item.task === 'mcm' || item.task === 'lmcm';
  const listening = item.task !== 'mcm' && item.task !== 'mcs';
  const [sel, setSel] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const [audioDone, setAudioDone] = useState(!listening);
  const elapsed = useElapsed(!done);
  const correct: number[] = 'answers' in item ? item.answers : [item.answer];

  const toggle = (i: number) => {
    if (done) return;
    setSel((s) => (multi ? (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]) : [i]));
  };

  const submit = () => {
    setDone(true);
    const result = multi ? scoreMultiple(item.task, sel, correct) : scoreSingle(item.task, sel[0] ?? null, correct[0]);
    onDone({ result, response: sel.length ? sel.map((i) => L[i]).sort().join(', ') : '(no answer)' });
  };

  const audioText = 'transcript' in item ? item.transcript : '';
  const question = 'question' in item ? item.question : item.task === 'hcs' ? 'Which paragraph best summarises the recording?' : 'Which option best completes the recording?';

  return (
    <Shell
      title={meta.name}
      sub={item.title}
      timer={fmt(elapsed)}
      instruction={meta.instruction}
      left={nav}
      right={<button className="btn" onClick={submit} disabled={done}>{done ? 'Submitted' : 'Submit'}</button>}
    >
      <div className={listening ? 'stack' : 'grid g2'} style={{ alignItems: 'start' }}>
        {listening ? (
          <AudioPrompt chunks={[{ text: audioText, speaker: item.speaker }]} allowReplay={false} onEnded={() => setAudioDone(true)} delay={mode === 'exam' ? 5 : 3} />
        ) : (
          <div className="passage" style={{ fontSize: 15 }}>{'passage' in item ? item.passage.split(/\n\s*\n/).map((p, i) => <p key={i}>{p}</p>) : null}</div>
        )}
        <div>
          <p style={{ fontWeight: 600 }}>{question}</p>
          {item.options.map((o, i) => {
            const cls = done ? (correct.includes(i) ? 'right' : sel.includes(i) ? 'wrong' : '') : sel.includes(i) ? 'sel' : '';
            return (
              <label key={i} className={'option ' + cls}>
                <input type={multi ? 'checkbox' : 'radio'} checked={sel.includes(i)} onChange={() => toggle(i)} disabled={done} name={item.id} />
                <span className="letter">{L[i]}</span>
                <span>{o}</span>
              </label>
            );
          })}
          {!audioDone && <p className="small muted">You may answer while the audio plays.</p>}
          {done && mode === 'practice' && <p className="small muted">Correct: {correct.map((i) => L[i]).join(', ')}</p>}
        </div>
      </div>
    </Shell>
  );
}
