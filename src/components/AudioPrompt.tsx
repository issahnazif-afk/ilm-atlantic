import { useEffect, useRef, useState } from 'react';
import { speak, type Playback, type SpeechChunk } from '../lib/speech';
import { getProfile } from '../lib/store';

type State = 'waiting' | 'playing' | 'done';

/**
 * PTE-style audio player: "Beginning in N seconds" → "Playing" → "Completed".
 * Audio is synthesised from the transcript with the browser's voices.
 */
export function AudioPrompt({
  chunks, delay = 3, allowReplay = false, onEnded, onStart, label = 'Audio', showSpeaker = false,
}: {
  chunks: SpeechChunk[]; delay?: number; allowReplay?: boolean; onEnded?: () => void; onStart?: () => void; label?: string; showSpeaker?: boolean;
}) {
  const [state, setState] = useState<State>('waiting');
  const [count, setCount] = useState(delay);
  const [progress, setProgress] = useState(0);
  const [speakerIdx, setSpeakerIdx] = useState(0);
  const pb = useRef<Playback>();
  const tick = useRef<number>();
  const ended = useRef(onEnded);
  ended.current = onEnded;
  const started = useRef(onStart);
  started.current = onStart;

  const play = () => {
    pb.current?.cancel();
    setState('playing');
    setProgress(0);
    started.current?.();
    const p = speak(chunks, getProfile().voiceRate, (f, ci) => { setProgress(f); setSpeakerIdx(ci); });
    pb.current = p;
    p.done.then(() => {
      if (pb.current !== p) return;
      setProgress(1);
      setState('done');
      ended.current?.();
    });
  };

  useEffect(() => {
    let n = delay;
    setCount(n);
    if (n <= 0) { play(); return () => pb.current?.cancel(); }
    tick.current = window.setInterval(() => {
      n -= 1;
      setCount(n);
      if (n <= 0) { window.clearInterval(tick.current); play(); }
    }, 1000);
    return () => { window.clearInterval(tick.current); pb.current?.cancel(); pb.current = undefined; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const unsupported = !('speechSynthesis' in window);
  const sp = chunks[speakerIdx]?.speaker;
  return (
    <div className="status-box">
      <div className="label">{label}</div>
      <div className="state">
        {unsupported ? 'Audio is not supported in this browser' :
          state === 'waiting' ? `Beginning in ${count} second${count === 1 ? '' : 's'}` :
          state === 'playing' ? (showSpeaker && sp ? `Playing — ${sp.name}` : 'Playing') : 'Completed'}
      </div>
      <div className="bar"><i style={{ width: `${progress * 100}%` }} /></div>
      {(allowReplay && state !== 'waiting') || (state === 'waiting' && delay > 0) ? (
        <div className="row" style={{ marginTop: 10 }}>
          {state === 'waiting' && <button className="btn sm ghost" onClick={() => { window.clearInterval(tick.current); setCount(0); play(); }}>Skip wait</button>}
          {allowReplay && state !== 'waiting' && <button className="btn sm ghost" onClick={play}>↻ Replay (practice only)</button>}
        </div>
      ) : null}
    </div>
  );
}
