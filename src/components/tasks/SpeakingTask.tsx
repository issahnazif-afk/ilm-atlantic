import { useEffect, useRef, useState } from 'react';
import type { Item, ItemOf } from '../../data/types';
import { TASK } from '../../data/taskTypes';
import { AudioPrompt } from '../AudioPrompt';
import { Chart } from '../Chart';
import { fmt, Shell, useCountdown } from '../ui';
import { beep, Recorder, recognitionSupported, recordingSupported, type RecordingResult, type SpeechChunk } from '../../lib/speech';
import { scoreSpeaking } from '../../lib/scoring';
import type { TaskProps } from './types';

type Phase = 'audio' | 'prep' | 'rec' | 'processing' | 'review' | 'done';

function audioFor(item: Item): SpeechChunk[] | null {
  switch (item.task) {
    case 'rs': return [{ text: item.sentence, speaker: item.speaker }];
    case 'asq': return [{ text: item.question, speaker: item.speaker }];
    case 'rl': return [{ text: item.transcript, speaker: item.speaker }];
    case 'sgd': return item.turns.map((t) => ({ text: t.text, speaker: t.speaker }));
    case 'rts': return [{ text: item.situation, speaker: item.speaker }];
    default: return null;
  }
}

export function SpeakingTask({ item, mode, onDone, nav }: TaskProps) {
  const meta = TASK[item.task];
  const audio = audioFor(item);
  const [phase, setPhase] = useState<Phase>(audio ? 'audio' : 'prep');
  const [level, setLevel] = useState(0);
  const [live, setLive] = useState('');
  const [error, setError] = useState('');
  const [rec, setRec] = useState<RecordingResult>();
  const [typed, setTyped] = useState('');
  const recorder = useRef<Recorder>();
  const stopping = useRef(false);
  const prepSec = meta.prepSec ?? 0;
  const respSec = meta.responseSec ?? 40;

  const startRecording = async () => {
    if (!recordingSupported) { setError('Microphone recording is not supported in this browser. Type what you would say instead.'); setPhase('review'); return; }
    beep();
    const r = new Recorder({
      lang: 'en-US',
      onLevel: setLevel,
      onTranscript: setLive,
      silenceStopSec: 3,
      onSilenceStop: () => stopRecording(),
    });
    recorder.current = r;
    stopping.current = false;
    try {
      await new Promise((res) => setTimeout(res, 280)); // let the beep finish before the mic opens
      await r.start();
      setPhase('rec');
    } catch {
      setError('Microphone access was blocked. Allow the microphone for this site, or type your answer below to try the scoring.');
      setPhase('review');
    }
  };

  const stopRecording = async () => {
    if (stopping.current || !recorder.current) return;
    stopping.current = true;
    setPhase('processing');
    const result = await recorder.current.stop();
    setRec(result);
    setTyped(result.transcript);
    if (!result.recognised || !result.transcript) setPhase('review');
    else finish(result, result.transcript);
  };

  const finish = (r: RecordingResult | undefined, transcript: string) => {
    const result = scoreSpeaking(item, { transcript, rec: r });
    setPhase('done');
    onDone({ result, response: transcript, audio: r?.blob });
  };

  useEffect(() => () => recorder.current?.abort(), []);

  const prepLeft = useCountdown(prepSec, phase === 'prep', () => startRecording());
  const recLeft = useCountdown(respSec, phase === 'rec', () => stopRecording());
  useEffect(() => { if (phase === 'prep' && prepSec === 0) startRecording(); /* RS/ASQ go straight to recording */ }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  const timer = phase === 'prep' ? fmt(prepLeft) : phase === 'rec' ? fmt(recLeft) : undefined;

  const statusBox = (
    <div className="status-box" aria-live="polite">
      <div className="label">Recorded answer</div>
      <div className="state">
        {phase === 'audio' && 'Waiting for the audio to finish'}
        {phase === 'prep' && (prepSec ? `Recording begins in ${Math.ceil(prepLeft)} seconds` : 'Starting…')}
        {phase === 'rec' && <span style={{ color: 'var(--coral)' }}>● Recording — speak now</span>}
        {phase === 'processing' && 'Processing your response…'}
        {(phase === 'review' || phase === 'done') && 'Completed'}
      </div>
      <div className={'bar' + (phase === 'rec' ? ' rec' : '')}>
        <i style={{ width: phase === 'rec' ? `${(1 - recLeft / respSec) * 100}%` : phase === 'prep' && prepSec ? `${(1 - prepLeft / prepSec) * 100}%` : phase === 'done' || phase === 'review' ? '100%' : '0%' }} />
      </div>
      {phase === 'rec' && (
        <>
          <div className="level">{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ height: `${Math.max(3, Math.min(22, level * 22 * (0.6 + 0.4 * Math.sin(i * 1.7 + Date.now() / 120))))}px` }} />)}</div>
          {mode === 'practice' && recognitionSupported && <div className="small muted" style={{ marginTop: 8, minHeight: 20 }}>{live || '…'}</div>}
        </>
      )}
    </div>
  );

  return (
    <Shell
      title={meta.name}
      sub={item.title}
      timer={timer}
      warn={phase === 'rec' && recLeft < 6}
      instruction={meta.instruction}
      left={nav}
      right={
        <>
          {phase === 'prep' && prepSec > 0 && <button className="btn ghost" onClick={() => startRecording()}>Start recording now</button>}
          {phase === 'rec' && <button className="btn danger" onClick={stopRecording}>■ Stop & submit</button>}
        </>
      }
    >
      <div className="stack">
        <Prompt item={item} phase={phase} />
        {audio && (
          <AudioPrompt
            chunks={audio}
            label={item.task === 'sgd' ? 'Group discussion' : item.task === 'rts' ? 'Situation' : 'Audio'}
            showSpeaker={item.task === 'sgd'}
            allowReplay={false}
            onEnded={() => setPhase((p) => (p === 'audio' ? 'prep' : p))}
          />
        )}
        {statusBox}
        {!recognitionSupported && phase !== 'done' && (
          <div className="notice warn small">This browser has no built-in speech recognition, so after recording you will type what you said. Chrome or Edge give the full experience.</div>
        )}
        {error && <div className="notice err small">{error}</div>}
        {phase === 'review' && (
          <div className="card flat">
            {rec && <audio controls src={rec.url} style={{ width: '100%', marginBottom: 10 }} />}
            <label className="small muted">Transcript of your answer {rec?.recognised ? '(the recogniser heard nothing — type what you said)' : ''}</label>
            <textarea className="answer" style={{ minHeight: 100 }} value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="Type exactly what you said…" />
            <div className="row" style={{ marginTop: 10 }}>
              <button className="btn" onClick={() => finish(rec, typed)} disabled={!typed.trim() && !rec}>Score my answer</button>
            </div>
          </div>
        )}
      </div>
    </Shell>
  );
}

function Prompt({ item, phase }: { item: Item; phase: Phase }) {
  if (item.task === 'ra') return <div className="passage">{(item as ItemOf<'ra'>).text}</div>;
  if (item.task === 'di') return <Chart spec={(item as ItemOf<'di'>).chart} />;
  if (item.task === 'rts') return <div className="passage card flat" style={{ background: '#f7f9fc' }}>{(item as ItemOf<'rts'>).situation}</div>;
  if (item.task === 'rl' || item.task === 'sgd')
    return (
      <div className="row muted small" style={{ gap: 14 }}>
        <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true"><rect width="72" height="72" rx="14" fill="#e3f5f4" /><circle cx="36" cy="28" r="10" fill="#0e9f9a" /><path d="M18 58c2-10 9-15 18-15s16 5 18 15" fill="#0e9f9a" />{item.task === 'sgd' && <><circle cx="16" cy="34" r="6" fill="#e9b44c" /><circle cx="56" cy="34" r="6" fill="#c9547e" /></>}</svg>
        <span>{phase === 'audio' ? 'Listen carefully and take notes. ' : ''}{item.task === 'sgd' ? 'Three speakers discuss a topic.' : 'A lecturer is speaking.'}</span>
      </div>
    );
  return null;
}
