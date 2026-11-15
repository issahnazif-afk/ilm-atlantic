import { useMemo, useRef, useState } from 'react';
import type { Exam, Item, Skill, TaskCode } from '../data/types';
import { EXAM, SKILLS, TASK } from '../data/taskTypes';
import { ExamTabs } from './Library';
import { itemById, itemsFor } from '../data/items';
import { go, href } from '../lib/router';
import { getAttempts, getMocks, putAudio, saveAttempt, saveMock, uid, useStore, type Attempt, type MockRun } from '../lib/store';
import { skillScores, toExamScale } from '../lib/scoring';
import { TaskRunner } from '../components/tasks/TaskRunner';
import type { TaskOutcome } from '../components/tasks/types';
import { TraitList } from '../components/Feedback';
import { ScoreRing, SkillBars } from '../components/ui';
import { overall } from '../lib/progress';

interface MockKind { key: string; exam: Exam; name: string; minutes: number; desc: string; plan: [TaskCode, number][]; testNo?: number }

// Test order follows the real exam: Speaking & Writing → Reading → Listening.
const SW: [TaskCode, number][] = [['ra', 2], ['rs', 3], ['di', 1], ['rl', 1], ['asq', 3], ['sgd', 1], ['rts', 1], ['swt', 1], ['we', 1]];
const RD: [TaskCode, number][] = [['rwfib', 2], ['mcm', 1], ['rop', 1], ['rfib', 2], ['mcs', 1]];
const LS: [TaskCode, number][] = [['sst', 1], ['lmcm', 1], ['lfib', 1], ['hcs', 1], ['lmcs', 1], ['smw', 1], ['hiw', 1], ['wfd', 3]];

const KSW: [TaskCode, number][] = [['ra', 2], ['rs', 3], ['di', 1], ['rts', 1], ['asq', 3], ['swt', 1], ['wem', 1]];
const KRD: [TaskCode, number][] = [['rwfib', 2], ['mcm', 1], ['rop', 1], ['rfib', 2], ['mcs', 1]];
const KLS: [TaskCode, number][] = [['sst', 1], ['lmcm', 1], ['lfib', 1], ['lmcs', 1], ['smw', 1], ['hiw', 1], ['wfd', 3]];

const CEL_L: TaskCode[] = ['cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6'];
const CEL_R: TaskCode[] = ['cr1', 'cr2', 'cr3', 'cr4'];
const CEL_W: TaskCode[] = ['cw1', 'cw2'];
const CEL_S: TaskCode[] = ['cs1', 'cs2', 'cs3', 'cs4', 'cs5', 'cs6', 'cs7', 'cs8'];
const one = (codes: TaskCode[]) => codes.map((c) => [c, 1] as [TaskCode, number]);

export const MOCKS: MockKind[] = [
  { key: 'mini', exam: 'pte-a', name: 'Mini mock: full test', minutes: 75, desc: 'Every task type in test order. A shortened full exam with a 10–90 report.', plan: [...SW, ...RD, ...LS] },
  { key: 'sw', exam: 'pte-a', name: 'Speaking & Writing', minutes: 45, desc: 'Part 1 of the test, including the new Group Discussion and Respond to a Situation tasks.', plan: SW },
  { key: 'reading', exam: 'pte-a', name: 'Reading', minutes: 15, desc: 'Part 2: fill-in-the-blanks, multiple choice and re-order paragraphs.', plan: RD },
  { key: 'listening', exam: 'pte-a', name: 'Listening', minutes: 25, desc: 'Part 3: from Summarize Spoken Text to Write From Dictation.', plan: LS },
  { key: 'sprint', exam: 'pte-a', name: 'High-value sprint', minutes: 12, desc: 'The tasks that move your score most: RA, RS, R&W FIB, WFD.', plan: [['ra', 2], ['rs', 3], ['rwfib', 2], ['wfd', 3]] },
  { key: 'core-mini', exam: 'pte-core', name: 'PTE Core mini mock', minutes: 60, desc: 'All 19 PTE Core task types in test order, including Write Email.', plan: [...KSW, ...KRD, ...KLS] },
  { key: 'core-sw', exam: 'pte-core', name: 'Speaking & Writing', minutes: 35, desc: 'Read Aloud to Write Email.', plan: KSW },
  { key: 'core-reading', exam: 'pte-core', name: 'Reading', minutes: 15, desc: 'Fill-in-the-blanks, multiple choice and re-order paragraphs.', plan: KRD },
  { key: 'core-listening', exam: 'pte-core', name: 'Listening', minutes: 20, desc: 'Summarize Spoken Text to Write From Dictation.', plan: KLS },
  ...[1, 2, 3, 4, 5, 6].flatMap((n): MockKind[] => [
    { key: `celpip-${n}`, exam: 'celpip', testNo: n, name: `Practice Test ${n}: complete`, minutes: 180, desc: 'All four components in test order: Listening, Reading, Writing, Speaking.', plan: one([...CEL_L, ...CEL_R, ...CEL_W, ...CEL_S]) },
    { key: `celpip-${n}-l`, exam: 'celpip', testNo: n, name: `Test ${n}: Listening`, minutes: 50, desc: '6 parts, 38 questions.', plan: one(CEL_L) },
    { key: `celpip-${n}-r`, exam: 'celpip', testNo: n, name: `Test ${n}: Reading`, minutes: 55, desc: '4 parts, 38 questions.', plan: one(CEL_R) },
    { key: `celpip-${n}-w`, exam: 'celpip', testNo: n, name: `Test ${n}: Writing`, minutes: 53, desc: 'Email (27 min) and survey response (26 min).', plan: one(CEL_W) },
    { key: `celpip-${n}-s`, exam: 'celpip', testNo: n, name: `Test ${n}: Speaking`, minutes: 20, desc: '8 speaking tasks.', plan: one(CEL_S) },
  ]),
];

function buildPaper(kind: MockKind, attempts: Attempt[]): Item[] {
  const seen = new Set(attempts.map((a) => a.itemId));
  const out: Item[] = [];
  for (const [task, n] of kind.plan) {
    if (kind.testNo) {
      // CELPIP practice tests are fixed papers: the set written for this test number
      const fixed = itemsFor(task, kind.exam).find((i) => i.testNo === kind.testNo) ?? itemsFor(task, kind.exam)[kind.testNo - 1];
      if (fixed) out.push(fixed);
      continue;
    }
    const pool = [...itemsFor(task, kind.exam)].sort(() => Math.random() - 0.5).sort((a, b) => Number(seen.has(a.id)) - Number(seen.has(b.id)));
    out.push(...pool.slice(0, n));
  }
  return out;
}

export function MockHome({ exam }: { exam: Exam }) {
  const mocks = useStore(getMocks);
  const done = [...mocks].filter((m) => m.finishedAt && (m.exam ?? 'pte-a') === exam).sort((a, b) => b.startedAt - a.startedAt);
  const kinds = MOCKS.filter((m) => m.exam === exam);
  return (
    <div className="container page">
      <div className="tag">Mock tests</div>
      <h1>Test yourself under exam conditions</h1>
      <ExamTabs exam={exam} to={(e) => `mock/${e}`} />
      <p className="muted" style={{ maxWidth: 720 }}>
        Mock mode works like test day: audio plays once, timers run out on their own, and you can't go back. Scores and feedback appear only at the end.
        Use headphones with a microphone in a quiet room.
      </p>
      <div className="grid g3" style={{ marginTop: 18 }}>
        {kinds.map((m) => (
          <div key={m.key} className="card task-card">
            <div className="row spread"><b style={{ color: 'var(--navy)', fontSize: 17 }}>{m.name}</b><span className="pill grey">~{m.minutes} min</span></div>
            <p className="small muted" style={{ margin: 0, flex: 1 }}>{m.desc}</p>
            <p className="small" style={{ margin: 0 }}>{m.testNo ? `${m.plan.length} parts/tasks` : `${m.plan.reduce((s, [, n]) => s + n, 0)} questions`} · {m.plan.map(([t]) => TASK[t].short).join(' · ')}</p>
            <a className="btn" href={href(`mock/run/${m.key}`)}>Start</a>
          </div>
        ))}
      </div>
      {done.length > 0 && (
        <div className="card" style={{ marginTop: 24 }}>
          <h3>Your reports</h3>
          <table className="t">
            <thead><tr><th>Date</th><th>Test</th>{SKILLS.map((s) => <th key={s.key}>{s.label}</th>)}<th /></tr></thead>
            <tbody>
              {done.map((m) => (
                <tr key={m.id}>
                  <td>{new Date(m.startedAt).toLocaleString()}</td>
                  <td>{MOCKS.find((k) => k.key === m.kind)?.name}</td>
                  {SKILLS.map((s) => <td key={s.key}>{m.skills?.[s.key] ?? '—'}</td>)}
                  <td><a className="btn sm ghost" href={href(`report/${m.id}`)}>View report</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export function MockRunner({ kind }: { kind: string }) {
  const k = MOCKS.find((m) => m.key === kind);
  const paper = useMemo(() => (k ? buildPaper(k, getAttempts()) : []), [k]);
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [between, setBetween] = useState(false);
  const run = useRef<MockRun>({ id: uid(), kind, exam: k?.exam ?? 'pte-a', startedAt: Date.now(), attemptIds: [] });
  const outcomes = useRef<{ task: TaskCode; o: TaskOutcome }[]>([]);

  if (!k) return <div className="container page empty">Unknown mock test.</div>;

  const finish = () => {
    const r = run.current;
    r.finishedAt = Date.now();
    const sk = skillScores(outcomes.current.map((x) => ({ task: x.task, result: x.o.result })), k.exam);
    r.skills = Object.fromEntries(Object.entries(sk).map(([key, v]) => [key, v ?? 10])) as Record<Skill, number>;
    saveMock(r);
    go(`report/${r.id}`);
  };

  const onDone = async (o: TaskOutcome) => {
    const item = paper[i];
    const a: Attempt = { id: uid(), itemId: item.id, task: item.task, exam: k.exam, at: Date.now(), mode: 'mock', mockId: run.current.id, result: o.result, response: o.response };
    if (o.audio && o.audio.size) { a.audioKey = 'rec-' + a.id; await putAudio(a.audioKey, o.audio); }
    saveAttempt(a);
    run.current.attemptIds.push(a.id);
    outcomes.current.push({ task: item.task, o });
    saveMock(run.current);
    if (i + 1 >= paper.length) { finish(); return; }
    setBetween(true);
  };

  if (!started) {
    return (
      <div className="container page" style={{ maxWidth: 760 }}>
        <div className="crumbs"><a href={href(`mock/${k.exam}`)}>Mock tests</a> / {EXAM[k.exam].name} / {k.name}</div>
        <div className="card stack">
          <h1>{k.name}</h1>
          <p>{paper.length} questions · about {k.minutes} minutes.</p>
          <ul>
            <li>Check your microphone: you'll be asked for permission at the first speaking question.</li>
            <li>Audio plays <b>once</b>. Speaking recordings start after the tone and stop after 3 seconds of silence.</li>
            <li>Results and feedback appear at the end. Every response is saved so you can review it later.</li>
          </ul>
          <div className="row"><button className="btn lg" onClick={() => setStarted(true)}>Begin test</button><a className="btn ghost" href={href('mock')}>Cancel</a></div>
        </div>
      </div>
    );
  }

  const item = paper[i];
  return (
    <div className="container page">
      <div className="row spread" style={{ marginBottom: 12 }}>
        <span className="small muted">{k.name} · <b>{TASK[item.task].section[0].toUpperCase() + TASK[item.task].section.slice(1)}</b></span>
        <span className="row small"><b>Question {i + 1} of {paper.length}</b>
          <button className="btn sm ghost" onClick={() => confirm('End the test now? Answered questions will be scored.') && (outcomes.current.length ? finish() : go(`mock/${k.exam}`))}>End test</button>
        </span>
      </div>
      <div className="progress" style={{ marginBottom: 14 }}><i style={{ width: `${(i / paper.length) * 100}%` }} /></div>
      {between ? (
        <div className="card empty">
          <p>Response saved.</p>
          <button className="btn lg" autoFocus onClick={() => { setBetween(false); setI(i + 1); }}>Next →</button>
        </div>
      ) : (
        <TaskRunner key={item.id + i} item={item} mode="exam" onDone={onDone} />
      )}
    </div>
  );
}

export function Report({ id }: { id: string }) {
  const mocks = useStore(getMocks);
  const attempts = useStore(getAttempts);
  const m = mocks.find((x) => x.id === id);
  if (!m) return <div className="container page empty">Report not found. <a href={href('mock')}>Mock tests</a></div>;
  const as = m.attemptIds.map((aid) => attempts.find((a) => a.id === aid)).filter(Boolean) as Attempt[];
  const exam = m.exam ?? 'pte-a';
  const celpip = exam === 'celpip';
  const sk = skillScores(as.map((a) => ({ task: a.task, result: a.result })), exam);
  const ov = overall(sk);

  // "Enabling skills": average each trait name across all trait-scored responses.
  const traits = new Map<string, { s: number; m: number }>();
  as.forEach((a) => a.result.estimated && a.result.traits.forEach((t) => {
    const key = t.name.replace(/ range$/, '').replace('Appropriacy', 'Content');
    const v = traits.get(key) ?? { s: 0, m: 0 };
    traits.set(key, { s: v.s + t.score, m: v.m + t.max });
  }));
  const enabling = [...traits.entries()].filter(([, v]) => v.m > 0).map(([name, v]) => ({ name, score: toExamScale(exam, v.s / v.m), max: celpip ? 12 : 90 }));

  return (
    <div className="container page">
      <div className="crumbs"><a href={href(`mock/${exam}`)}>Mock tests</a> / Report</div>
      <div className="row spread">
        <div>
          <h1 style={{ marginBottom: 4 }}>Score report</h1>
          <p className="muted">{EXAM[exam].name} · {MOCKS.find((k) => k.key === m.kind)?.name} · {new Date(m.startedAt).toLocaleString()} · {as.length} responses</p>
        </div>
        <button className="btn ghost" onClick={() => window.print()}>Print / save PDF</button>
      </div>
      <div className="grid g3" style={{ marginTop: 10 }}>
        <div className="card row" style={{ gap: 20 }}>
          <ScoreRing value={ov ?? 0} max={celpip ? 12 : 90} label={celpip ? 'average level' : 'overall'} text={ov ? (celpip ? `L${ov}` : String(ov)) : '—'} />
          <div><div className="tag">Overall (estimated)</div><p className="small muted" style={{ margin: '6px 0 0' }}>An estimate from the tasks in this mock. A full-length test with more items gives a more stable score.</p></div>
        </div>
        <div className="card"><div className="tag" style={{ marginBottom: 8 }}>{celpip ? 'Component levels' : 'Communicative skills'}</div><SkillBars scores={sk} scale={celpip ? 'celpip' : 'pte'} /></div>
        <div className="card">
          <div className="tag" style={{ marginBottom: 4 }}>{celpip ? 'Performance dimensions' : 'Enabling skills'}</div>
          {enabling.length ? <TraitList result={{ traits: enabling, raw: 0, max: 0, fraction: 0, skills: {}, estimated: true, feedback: [] }} /> : <p className="small muted">No speaking or writing items in this mock.</p>}
        </div>
      </div>
      <div className="card" style={{ marginTop: 20, padding: 0, overflowX: 'auto' }}>
        <table className="t">
          <thead><tr><th>#</th><th>Task</th><th>Item</th><th>Score</th><th>Your response</th><th /></tr></thead>
          <tbody>
            {as.map((a, n) => (
              <tr key={a.id}>
                <td className="muted">{n + 1}</td>
                <td><span className="pill grey">{TASK[a.task].short}</span></td>
                <td>{itemById(a.itemId)?.title}</td>
                <td><b>{a.result.raw}/{a.result.max}</b> {a.result.estimated && <span className="pill gold">est.</span>}</td>
                <td className="small muted" style={{ maxWidth: 380 }}>{a.response.slice(0, 110)}{a.response.length > 110 ? '…' : ''}</td>
                <td><a className="btn sm ghost" href={href(`review/${a.id}`)}>Review</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
