import { EXAM_TASKS, EXAMS, SKILLS, taskMeta } from '../data/taskTypes';
import { ITEMS, itemsForExam } from '../data/items';
import { GUIDES, RESOURCES } from '../data/resources';
import type { Exam, Item } from '../data/types';
import { examPath, href, taskPath } from '../lib/router';
import { Icon, SKILL_ICON } from '../components/ui';
import { SECTION_ORDER } from './Library';

/** A CELPIP set holds several questions; every other item is one question. */
export const questionCount = (items: Item[]) => items.reduce((n, i) => n + ('questions' in i ? i.questions.length : 1), 0);
const VOCAB_WORDS = 2809 + 958;

export function Landing() {
  const totalQ = questionCount(ITEMS);
  const perExam = (e: Exam) => questionCount(itemsForExam(e));
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="pill new" style={{ marginBottom: 18 }}>PTE Academic · PTE Core · CELPIP-General</span>
          <h1>Prepare for PTE and CELPIP with <em>examiner-grade</em> feedback, not guesswork.</h1>
          <p className="lead">
            Ilm Atlantic gives you every task type of all three tests in a realistic test interface, with instant scores on the official
            scales and a clear explanation of each one. When you want a human opinion, an experienced IELTS & PTE examiner marks your response.
          </p>
          <div className="row" style={{ gap: 14, marginTop: 26 }}>
            <a className="btn gold lg" href={href('practice')}>Start practising, free</a>
            <a className="btn lg" style={{ background: 'rgba(255,255,255,.12)' }} href={href('mock/celpip')}>Take a CELPIP practice test</a>
          </div>
          <div className="stats">
            <div><b>{totalQ.toLocaleString()}</b><span>original practice questions</span></div>
            <div><b>6</b><span>complete CELPIP practice tests</span></div>
            <div><b>{VOCAB_WORDS.toLocaleString()}</b><span>words in the vocabulary trainer</span></div>
            <div><b>{RESOURCES.length + GUIDES.length}</b><span>guides & curated official resources</span></div>
          </div>
        </div>
        <svg className="waves" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 C 240 80 480 0 720 30 S 1200 70 1440 30 V80 H0Z" fill="#f4f6f9" />
        </svg>
      </section>

      <section className="section">
        <div className="container">
          <div className="tag">Choose your test</div>
          <h2>Three tests, one place to prepare</h2>
          <div className="grid g3" style={{ marginTop: 22 }}>
            {EXAMS.map((e) => (
              <a key={e.key} className="card link task-card" href={href(examPath(e.key))}>
                <div className="row spread"><h3 style={{ margin: 0 }}>{e.name}</h3><span className="pill">{EXAM_TASKS[e.key].length} task types</span></div>
                <p className="small muted" style={{ margin: 0, flex: 1 }}>{e.blurb}</p>
                <div className="row spread small"><b>{perExam(e.key).toLocaleString()} questions</b><span style={{ color: 'var(--teal-d)', fontWeight: 600 }}>Practise →</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="tag">Why Ilm Atlantic</div>
          <h2>Built by an examiner, not a content farm</h2>
          <div className="grid" style={{ marginTop: 22, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {[
              { ic: Icon.spark, t: 'Scores you can see inside', d: 'Speaking and writing are scored on the official traits: PTE content, form, fluency and pronunciation, and CELPIP content/coherence, vocabulary, listenability, readability and task fulfillment. Every number comes with a reason.' },
              { ic: Icon.user, t: 'Examiner review', d: 'Send any response to an experienced IELTS & PTE examiner and get trait-by-trait marks with written comments next to the AI estimate.' },
              { ic: Icon.clock, t: 'The real test rhythm', d: 'Prep countdowns, the recording tone, the 3-second silence cut-off, one-time audio, CELPIP’s section-by-section listening, and no spell-checker, just like test day.' },
              { ic: Icon.chart, t: 'Know where you stand', d: 'Your dashboard estimates PTE skill scores (10–90) or CELPIP levels (1–12) against your Express Entry target.' },
              { ic: Icon.book, t: 'Original, ethical content', d: 'Every question is written fresh to the published formats. No leaked or "predicted" questions that put your result at risk.' },
              { ic: Icon.ear, t: 'Canadian voices and contexts', d: 'Listening uses Canadian, British, American, Australian and Indian English voices, with everyday Canadian situations for PTE Core and CELPIP.' },
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
          <h2>Every task type in every test</h2>
          {EXAMS.map((e) => (
            <div key={e.key} style={{ marginTop: 22 }}>
              <h3>{e.name}</h3>
              <div className="grid g4">
                {SECTION_ORDER[e.key].map((sk) => {
                  const s = SKILLS.find((x) => x.key === sk)!;
                  const codes = EXAM_TASKS[e.key].filter((c) => taskMeta(c, e.key).section === sk);
                  return (
                    <div key={sk} className="card flat">
                      <div className="row" style={{ color: s.color, marginBottom: 6 }}>{SKILL_ICON[sk]}<b>{s.label}</b></div>
                      {codes.map((c) => {
                        const t = taskMeta(c, e.key);
                        return (
                          <a key={c} href={href(taskPath(e.key, c))} className="row spread small" style={{ padding: '4px 0', color: 'var(--ink)', borderBottom: '1px solid #f0f2f6' }}>
                            <span>{t.name.replace(/^(Listening|Reading|Writing|Speaking) (Part|Task) \d+: /, '')}</span>
                            <span className="row" style={{ gap: 4 }}>{t.isNew && e.key === 'pte-a' && <span className="pill new">New</span>}{t.aiScored && <span className="pill">AI</span>}</span>
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid g2" style={{ alignItems: 'center' }}>
          <div>
            <div className="tag">Roadmap</div>
            <h2>One home for Canada's English tests</h2>
            <p className="muted">
              PTE Academic, PTE Core and CELPIP-General are all here now. Next come accounts with cloud sync, calibrated AI scoring trained on examiner marks,
              and CLB-band reports mapped to your Express Entry goals.
            </p>
          </div>
          <div className="card">
            {[
              ['Now', 'PTE Academic, PTE Core and CELPIP · mocks and 6 CELPIP practice tests · vocabulary trainer · examiner review'],
              ['Next', 'Accounts and cloud sync · calibrated AI speech and writing scoring · human-recorded audio'],
              ['Then', 'CRS calculator · teacher and institution mode · mobile apps'],
              ['Later', 'Multilingual explanations · live classes'],
            ].map(([k, v], i) => (
              <div key={k} className="row" style={{ alignItems: 'flex-start', padding: '10px 0', borderBottom: i < 3 ? '1px solid #f0f2f6' : 0, flexWrap: 'nowrap' }}>
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
