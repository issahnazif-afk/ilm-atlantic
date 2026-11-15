import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { Skill } from '../data/types';
import { SKILLS, TASK } from '../data/taskTypes';
import type { TaskCode } from '../data/types';

export function Logo({ size = 34 }: { size?: number }) {
  // Compass-star over Atlantic waves: "ilm" (knowledge) as a guiding star.
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#0e9f9a" />
      <path d="M20 5 L23 17 L35 20 L23 23 L20 35 L17 23 L5 20 L17 17 Z" fill="#e9b44c" />
      <circle cx="20" cy="20" r="3" fill="#0b2545" />
      <path d="M4 28 q4 -3 8 0 t8 0 t8 0 t8 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" opacity=".85" />
    </svg>
  );
}

export const fmt = (s: number) => {
  const v = Math.max(0, Math.ceil(s));
  return `${Math.floor(v / 60)}:${String(v % 60).padStart(2, '0')}`;
};

/** Countdown that calls onEnd once. `running` toggles it. Returns seconds left. */
export function useCountdown(total: number, running: boolean, onEnd?: () => void) {
  const [left, setLeft] = useState(total);
  const endRef = useRef(onEnd);
  endRef.current = onEnd;
  useEffect(() => setLeft(total), [total]);
  useEffect(() => {
    if (!running) return;
    const started = performance.now();
    const base = left;
    let fired = false;
    const id = window.setInterval(() => {
      const l = base - (performance.now() - started) / 1000;
      setLeft(Math.max(0, l));
      if (l <= 0 && !fired) { fired = true; window.clearInterval(id); endRef.current?.(); }
    }, 100);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);
  return left;
}

/** Elapsed seconds while running. */
export function useElapsed(running: boolean) {
  const [s, setS] = useState(0);
  useEffect(() => {
    if (!running) return;
    const t0 = performance.now() - s * 1000;
    const id = window.setInterval(() => setS((performance.now() - t0) / 1000), 250);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);
  return s;
}

export function ScoreRing({ value, label, max = 100, text }: { value: number; label: string; max?: number; text?: string }) {
  const p = Math.round((value / max) * 100);
  return (
    <div className="score-ring" style={{ ['--p' as string]: p }}>
      <div><b>{text ?? value}</b><span>{label}</span></div>
    </div>
  );
}

export function Bar({ value, color }: { value: number; color?: string }) {
  return <div className="bar"><i style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%`, background: color }} /></div>;
}

export function SkillBars({ scores, target }: { scores: Record<Skill, number | null>; target?: number }) {
  return (
    <div className="stack" style={{ marginTop: 4 }}>
      {SKILLS.map((s) => {
        const v = scores[s.key];
        return (
          <div key={s.key}>
            <div className="row spread small"><span className="row" style={{ gap: 8 }}><span className="skill-dot" style={{ background: s.color }} />{s.label}</span><b>{v ?? '—'}</b></div>
            <div style={{ position: 'relative' }}>
              <Bar value={v ? (v - 10) / 80 : 0} color={s.color} />
              {target ? <span title={`Target ${target}`} style={{ position: 'absolute', top: -3, bottom: -3, width: 2, background: 'var(--navy)', left: `${((target - 10) / 80) * 100}%` }} /> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SkillPill({ task }: { task: TaskCode }) {
  const t = TASK[task];
  const s = SKILLS.find((x) => x.key === t.section)!;
  return <span className="pill grey"><span className="skill-dot" style={{ background: s.color }} />{s.label}</span>;
}

export function Shell(props: {
  title: string; sub?: string; timer?: string; warn?: boolean; instruction: string;
  children: ReactNode; left?: ReactNode; right?: ReactNode;
}) {
  return (
    <div className="exam">
      <div className="exam-head">
        <span className="title">{props.title}</span>
        {props.sub && <span style={{ color: '#9fb2cc' }}>· {props.sub}</span>}
        {props.timer !== undefined && <span className={'timer' + (props.warn ? ' warn' : '')}>⏱ {props.timer}</span>}
      </div>
      <div className="exam-instr">{props.instruction}</div>
      <div className="exam-body">{props.children}</div>
      <div className="exam-foot">
        {props.left}
        <div className="right">{props.right}</div>
      </div>
    </div>
  );
}

export const Icon = {
  mic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8" /></svg>,
  pen: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>,
  book: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14ZM20 17v4H6.5" /></svg>,
  ear: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" /></svg>,
  chart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3v18h18M7 15l4-4 3 3 5-6" /></svg>,
  clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  user: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>,
  spark: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" /></svg>,
};

export const SKILL_ICON: Record<Skill, ReactNode> = { speaking: Icon.mic, writing: Icon.pen, reading: Icon.book, listening: Icon.ear };
