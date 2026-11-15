import { useState } from 'react';
import { EXAM, EXAM_TASKS, EXAMS, TASK, taskMeta } from '../data/taskTypes';
import { itemById, itemsForExam } from '../data/items';
import { examPath, href, itemPath, taskPath } from '../lib/router';
import { getAttempts, getMocks, getProfile, resetAll, saveProfile, useStore } from '../lib/store';
import { estimatedSkills, forExam, overall, recommendations, streak, taskStats } from '../lib/progress';
import { scoreLabel } from '../lib/scoring';
import { ScoreRing, SkillBars } from '../components/ui';

export function Dashboard() {
  const attempts = useStore(getAttempts);
  const mocks = useStore(getMocks);
  const profile = useStore(getProfile);
  const [editing, setEditing] = useState(!profile.name);
  const [draft, setDraft] = useState(profile);

  const exam = profile.exam;
  const celpip = exam === 'celpip';
  const target = celpip ? profile.celpipTarget : profile.target;
  const skills = estimatedSkills(attempts, exam);
  const ov = overall(skills);
  const st = taskStats(attempts, exam);
  const doneItems = Object.values(st).reduce((s, x) => s + x.done, 0);
  const totalItems = itemsForExam(exam).length;
  const recs = recommendations(attempts, exam);
  const days = profile.examDate ? Math.ceil((new Date(profile.examDate).getTime() - Date.now()) / 86400000) : null;
  const recent = forExam(attempts, exam).sort((a, b) => b.at - a.at).slice(0, 8);
  const reviews = attempts.filter((a) => a.review);

  return (
    <div className="container page">
      <div className="row spread" style={{ alignItems: 'flex-end' }}>
        <div>
          <div className="tag">Dashboard</div>
          <h1 style={{ marginBottom: 4 }}>{profile.name ? `Welcome back, ${profile.name}` : 'Welcome to Ilm Atlantic'}</h1>
          <p className="muted" style={{ margin: 0 }}>
            {EXAM[exam].name} · target <b>{celpip ? `CELPIP ${target}` : target}</b>
            {days !== null && <> · exam {days >= 0 ? <>in <b>{days}</b> day{days === 1 ? '' : 's'}</> : 'date passed'}</>}
            {' · '}<button className="btn sm ghost" onClick={() => { setDraft(profile); setEditing(!editing); }}>Edit goal</button>
          </p>
        </div>
        <div className="row">
          <a className="btn ghost" href={href('mock')}>Mock tests</a>
          <a className="btn" href={href(examPath(exam))}>Practise</a>
        </div>
      </div>

      <div className="tabs" role="tablist" style={{ marginTop: 14 }}>
        {EXAMS.map((e) => (
          <button key={e.key} role="tab" aria-selected={e.key === exam} className={'tab' + (e.key === exam ? ' on' : '')} style={{ background: e.key === exam ? '#fff' : 'transparent', cursor: 'pointer' }} onClick={() => saveProfile({ ...profile, exam: e.key })}>{e.name}</button>
        ))}
      </div>

      {editing && (
        <div className="card" style={{ marginTop: 16 }}>
          <div className="grid g4" style={{ alignItems: 'end' }}>
            <label className="small">Your name<br /><input className="text" style={{ width: '100%' }} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} /></label>
            <label className="small">PTE target: <b>{draft.target}</b><br /><input type="range" min={30} max={90} step={1} value={draft.target} onChange={(e) => setDraft({ ...draft, target: +e.target.value })} style={{ width: '100%' }} /></label>
            <label className="small">CELPIP target level: <b>{draft.celpipTarget}</b><br /><input type="range" min={4} max={12} step={1} value={draft.celpipTarget} onChange={(e) => setDraft({ ...draft, celpipTarget: +e.target.value })} style={{ width: '100%' }} /></label>
            <label className="small">Exam date<br /><input className="text" type="date" style={{ width: '100%' }} value={draft.examDate} onChange={(e) => setDraft({ ...draft, examDate: e.target.value })} /></label>
            <label className="small">Voice speed: <b>{draft.voiceRate.toFixed(2)}×</b><br /><input type="range" min={0.8} max={1.15} step={0.05} value={draft.voiceRate} onChange={(e) => setDraft({ ...draft, voiceRate: +e.target.value })} style={{ width: '100%' }} /></label>
          </div>
          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn" onClick={() => { saveProfile(draft); setEditing(false); }}>Save</button>
            <span className="small muted">CLB 7 (Express Entry minimum for FSW) ≈ CELPIP 7 in each skill; CLB 9 earns the highest language points. PTE targets: 50 (IELTS 6), 65 (IELTS 7), 79 (IELTS 8).</span>
          </div>
        </div>
      )}

      <div className="grid g3" style={{ marginTop: 20 }}>
        <div className="card row" style={{ gap: 20 }}>
          <ScoreRing value={ov ?? 0} max={celpip ? 12 : 90} label="estimated" text={ov ? (celpip ? `L${ov}` : String(ov)) : '—'} />
          <div>
            <div className="tag">Overall estimate</div>
            <p style={{ margin: '4px 0' }}>{ov === null ? 'Complete a few items to see your estimate.' : ov >= target ? 'On track for your target. Keep it steady.' : `${target - ov} ${celpip ? 'level' + (target - ov === 1 ? '' : 's') : 'points'} to your target.`}</p>
            <span className="small muted">Based on your latest attempt at each item.</span>
          </div>
        </div>
        <div className="card">
          <div className="tag" style={{ marginBottom: 8 }}>Communicative skills <span className="muted" style={{ textTransform: 'none', letterSpacing: 0 }}>(line = target)</span></div>
          <SkillBars scores={skills} target={target} scale={celpip ? 'celpip' : 'pte'} />
        </div>
        <div className="card grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <Stat n={doneItems} of={totalItems} label="items practised" />
          <Stat n={streak(attempts)} label="day streak 🔥" />
          <Stat n={attempts.length} label="total attempts" />
          <Stat n={mocks.filter((m) => m.finishedAt && (m.exam ?? 'pte-a') === exam).length} label="mock tests" />
        </div>
      </div>

      <div className="grid g2" style={{ marginTop: 20, alignItems: 'start' }}>
        <div className="card">
          <h3>Recommended next</h3>
          <p className="small muted">Chosen from the high-value tasks you haven't tried yet, then your weakest averages.</p>
          {recs.map((c) => {
            const x = st[c];
            return (
              <a key={c} href={href(taskPath(exam, c))} className="row spread" style={{ padding: '10px 0', borderBottom: '1px solid #f0f2f6', color: 'var(--ink)' }}>
                <span><b>{taskMeta(c, exam).name}</b><br /><span className="small muted">{x.avg === null ? 'Not started' : `Average ${scoreLabel(exam, x.avg)} · ${x.done}/${x.total} done`}</span></span>
                <span className="btn sm ghost">Go →</span>
              </a>
            );
          })}
        </div>
        <div className="card">
          <h3>Recent activity</h3>
          {!recent.length && <p className="muted">No attempts yet. Start with <a href={href(taskPath(exam, EXAM_TASKS[exam][0]))}>{TASK[EXAM_TASKS[exam][0]]?.name}</a> or <a href={href(examPath(exam))}>browse the library</a>.</p>}
          {recent.map((a) => {
            const it = itemById(a.itemId);
            return (
              <a key={a.id} href={href(itemPath(itemById(a.itemId) ?? { id: a.itemId, task: a.task }))} className="row spread" style={{ padding: '8px 0', borderBottom: '1px solid #f0f2f6', color: 'var(--ink)' }}>
                <span><span className="pill grey">{TASK[a.task].short}</span> {it?.title}</span>
                <span className="row small"><b>{a.result.raw}/{a.result.max}</b><span className="muted">{new Date(a.at).toLocaleDateString()}</span></span>
              </a>
            );
          })}
        </div>
      </div>

      {reviews.length > 0 && (
        <div className="card" style={{ marginTop: 20 }}>
          <h3>Examiner reviews</h3>
          {reviews.map((a) => (
            <a key={a.id} href={href(itemPath(itemById(a.itemId) ?? { id: a.itemId, task: a.task }))} className="row spread" style={{ padding: '8px 0', borderBottom: '1px solid #f0f2f6', color: 'var(--ink)' }}>
              <span>{TASK[a.task].name}: {itemById(a.itemId)?.title}</span>
              {a.review?.status === 'marked' ? <span className="pill green">Marked</span> : <span className="pill">Waiting for examiner</span>}
            </a>
          ))}
        </div>
      )}

      <p className="small muted" style={{ marginTop: 28 }}>
        Prototype note: your progress is saved in this browser only. Accounts with cloud sync arrive in the next phase.{' '}
        <button className="btn sm ghost" onClick={() => confirm('Delete all practice history, recordings and settings in this browser?') && resetAll()}>Reset my data</button>
      </p>
    </div>
  );
}

function Stat({ n, of, label }: { n: number; of?: number; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--display)', fontSize: 28, color: 'var(--navy)', lineHeight: 1 }}>{n}{of ? <span className="small muted">/{of}</span> : null}</div>
      <div className="small muted">{label}</div>
    </div>
  );
}
