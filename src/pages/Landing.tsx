import { TASKS, SKILLS } from '../data/taskTypes';
import { ITEMS } from '../data/items';
import { href } from '../lib/router';
import { Icon, SKILL_ICON } from '../components/ui';

export function Landing() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="pill new" style={{ marginBottom: 18 }}>Prototype · PTE Academic 2025 format</span>
          <h1>Prepare for PTE with <em>examiner-grade</em> feedback, not guesswork.</h1>
          <p className="lead">
            Ilm Atlantic gives you every PTE Academic task type in a realistic test interface, with instant scores on the official
            trait scales and a clear explanation of each one. When you want a human opinion, an experienced IELTS & PTE examiner marks your response.
          </p>
          <div className="row" style={{ gap: 14, marginTop: 26 }}>
            <a className="btn gold lg" href={href('practice')}>Start practising, free</a>
            <a className="btn lg" style={{ background: 'rgba(255,255,255,.12)' }} href={href('mock')}>Take a mini mock test</a>
          </div>
          <div className="stats">
            <div><b>{TASKS.length}</b><span>task types, incl. the 2 new 2025 tasks</span></div>
            <div><b>{ITEMS.length}</b><span>original practice items</span></div>
            <div><b>10–90</b><span>score estimates on the PTE scale</span></div>
            <div><b>Examiner</b><span>review by a trained IELTS & PTE marker</span></div>
          </div>
        </div>
        <svg className="waves" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 C 240 80 480 0 720 30 S 1200 70 1440 30 V80 H0Z" fill="#f4f6f9" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="tag">Why Ilm Atlantic</div>
          <h2>Built by an examiner, not a content farm</h2>
          <div className="grid" style={{ marginTop: 22, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {[
              { ic: Icon.spark, t: 'Scores you can see inside', d: 'Each speaking and writing score breaks down into the official traits: content, form, fluency, pronunciation, grammar, vocabulary and spelling. Every number comes with a reason.' },
              { ic: Icon.user, t: 'Examiner review', d: 'Send any response to a trained IELTS & PTE examiner. You get trait-by-trait marks and written comments next to the AI estimate.' },
              { ic: Icon.clock, t: 'The real test rhythm', d: 'Prep countdowns, the recording tone, the 3-second silence cut-off, one-time audio, and Cut/Copy/Paste with no spell-checker, just like test day.' },
              { ic: Icon.chart, t: 'Know where you stand', d: 'Your dashboard turns practice into estimated Speaking, Writing, Reading and Listening scores on the 10–90 scale, set against your target.' },
              { ic: Icon.book, t: 'Original, ethical content', d: 'Every item is written fresh in the current PTE format. No leaked or "predicted" questions that put your test result at risk.' },
              { ic: Icon.ear, t: 'Many voices, many accents', d: 'Listening prompts use British, American, Canadian, Australian and Indian English voices, with three-speaker group discussions.' },
            ].map((f) => (
              <div className="card" key={f.t}>
                <div className="feature-ico">{f.ic}</div>
                <h3>{f.t}</h3>
                <p className="muted" style={{ margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="tag">Full coverage</div>
          <h2>Every task type, by skill</h2>
          <div className="grid g4" style={{ marginTop: 22 }}>
            {SKILLS.map((s) => (
              <div key={s.key} className="card flat">
                <div className="row" style={{ color: s.color, marginBottom: 8 }}>{SKILL_ICON[s.key]}<h3 style={{ margin: 0 }}>{s.label}</h3></div>
                {TASKS.filter((t) => t.section === s.key).map((t) => (
                  <a key={t.code} href={href(`practice/${t.code}`)} className="row spread small" style={{ padding: '5px 0', color: 'var(--ink)', borderBottom: '1px solid #f0f2f6' }}>
                    <span>{t.name}</span>
                    <span className="row" style={{ gap: 4 }}>{t.isNew && <span className="pill new">New</span>}{t.aiScored && <span className="pill">AI</span>}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid g2" style={{ alignItems: 'center' }}>
          <div>
            <div className="tag">Roadmap</div>
            <h2>One home for Canada's English tests</h2>
            <p className="muted">
              We are starting with PTE Academic. PTE Core and CELPIP-General come next: the two tests used for Canadian PR and citizenship.
              Results will be shown as CLB levels mapped to your Express Entry goals.
            </p>
          </div>
          <div className="card">
            {[
              ['Now', 'PTE Academic: all 22 task types, mini mocks, examiner review'],
              ['Next', 'Accounts and cloud sync · calibrated AI speech and writing scoring · full-length mocks'],
              ['Then', 'PTE Core · CELPIP-General · CLB-band reports · CRS calculator'],
              ['Later', 'Teacher and institution mode · mobile apps · multilingual explanations'],
            ].map(([k, v], i) => (
              <div key={k} className="row" style={{ alignItems: 'flex-start', padding: '10px 0', borderBottom: i < 3 ? '1px solid #f0f2f6' : 0 }}>
                <span className={'pill ' + (i === 0 ? 'green' : 'grey')} style={{ minWidth: 56, justifyContent: 'center' }}>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
