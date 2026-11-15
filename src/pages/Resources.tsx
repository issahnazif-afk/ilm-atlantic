import { useMemo, useState } from 'react';
import { EXAMS, EXAM } from '../data/taskTypes';
import type { Exam } from '../data/types';
import { GUIDES, RESOURCES, type ResourceKind } from '../data/resources';
import { href } from '../lib/router';

const KINDS: { key: ResourceKind | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'practice', label: 'Official practice' },
  { key: 'official', label: 'Official guides & formats' },
  { key: 'canada', label: 'Canada: CLB & immigration' },
  { key: 'open', label: 'Open textbooks & media' },
  { key: 'tool', label: 'Tools' },
];

export function Resources() {
  const [exam, setExam] = useState<Exam | 'all'>('all');
  const [kind, setKind] = useState<ResourceKind | 'all'>('all');
  const [q, setQ] = useState('');
  const match = (exams: Exam[]) => exam === 'all' || exams.includes(exam);
  const list = useMemo(
    () => RESOURCES.filter((r) => match(r.exams) && (kind === 'all' || r.kind === kind) && (!q || (r.title + r.desc + r.provider).toLowerCase().includes(q.toLowerCase()))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exam, kind, q],
  );
  const guides = GUIDES.filter((g) => match(g.exams));

  return (
    <div className="container page">
      <div className="tag">Study resources</div>
      <h1>Guides, official materials and open resources</h1>
      <p className="muted" style={{ maxWidth: 780 }}>
        Our own strategy guides, plus a curated directory of free official materials from Pearson, Paragon (CELPIP), IRCC and the CCLB, and openly licensed learning resources.
        Official materials stay on their owners' sites: we link to them and never copy them.
      </p>
      <div className="row" style={{ margin: '10px 0 18px' }}>
        <select value={exam} onChange={(e) => setExam(e.target.value as Exam | 'all')} aria-label="Exam">
          <option value="all">All exams</option>
          {EXAMS.map((e) => <option key={e.key} value={e.key}>{e.name}</option>)}
        </select>
        <a className="btn sm" href={href('vocabulary')}>Open the Vocabulary trainer →</a>
      </div>

      <h2>Examiner strategy guides <span className="pill">{guides.length}</span></h2>
      <div className="grid g3" style={{ marginBottom: 32 }}>
        {guides.map((g) => (
          <details key={g.id} className="card" style={{ padding: 16 }}>
            <summary style={{ cursor: 'pointer', listStyle: 'none' }}>
              <div className="row" style={{ gap: 6, marginBottom: 6 }}>{g.exams.map((e) => <span key={e} className="pill grey">{EXAM[e].short}</span>)}</div>
              <b style={{ color: 'var(--navy)', fontSize: 16 }}>{g.title}</b>
              <p className="small muted" style={{ margin: '6px 0 0' }}>{g.summary}</p>
              <span className="small" style={{ color: 'var(--teal-d)', fontWeight: 600 }}>Read guide ▾</span>
            </summary>
            <div style={{ marginTop: 12 }}>
              {g.sections.map((s) => (
                <div key={s.h} style={{ marginBottom: 10 }}>
                  <b className="small" style={{ textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)' }}>{s.h}</b>
                  <ul style={{ margin: '4px 0 0', paddingLeft: 18 }}>{s.body.map((b) => <li key={b} className="small">{b}</li>)}</ul>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      <h2>Resource directory <span className="pill">{list.length}</span></h2>
      <div className="tabs" role="tablist">
        {KINDS.map((k) => (
          <button key={k.key} role="tab" aria-selected={kind === k.key} className={'tab' + (kind === k.key ? ' on' : '')} style={{ background: kind === k.key ? '#fff' : 'transparent', cursor: 'pointer' }} onClick={() => setKind(k.key)}>{k.label}</button>
        ))}
      </div>
      <input className="text" placeholder="Search resources…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: '100%', maxWidth: 420, marginBottom: 14 }} />
      <div className="grid g3">
        {list.map((r) => (
          <a key={r.url} className="card link task-card" href={r.url} target="_blank" rel="noopener noreferrer">
            <div className="row spread">
              <span className="small muted">{r.provider}</span>
              <span className={'pill ' + (r.access === 'free' ? 'green' : r.access === 'paid' ? 'coral' : 'gold')}>{r.access === 'sign-up' ? 'free · sign-up' : r.access}</span>
            </div>
            <b style={{ color: 'var(--navy)' }}>{r.title} ↗</b>
            <span className="small muted">{r.desc}</span>
            <div className="row" style={{ gap: 6 }}>
              {r.exams.map((e) => <span key={e} className="pill grey">{EXAM[e].short}</span>)}
              {r.license && <span className="pill">{r.license}</span>}
            </div>
          </a>
        ))}
      </div>
      <p className="small muted" style={{ marginTop: 24 }}>
        Links checked November 2026. Ilm Atlantic is not affiliated with Pearson, Paragon Testing Enterprises, Prometric, IRCC or the CCLB. PTE and CELPIP are trademarks of their owners.
      </p>
    </div>
  );
}
