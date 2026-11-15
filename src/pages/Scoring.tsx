import { TASKS } from '../data/taskTypes';
import { href, taskPath } from '../lib/router';

export function Scoring() {
  return (
    <div className="container page" style={{ maxWidth: 900 }}>
      <div className="tag">How scoring works</div>
      <h1>Transparent scoring</h1>
      <p className="lead muted">
        Every result tells you whether it is <span className="pill green">Exact marking</span> or an <span className="pill gold">AI estimate</span>, and what it is based on.
      </p>

      <div className="card stack">
        <h3>Exact marking: reading and listening</h3>
        <p className="muted" style={{ margin: 0 }}>
          Choice, gap-fill, re-order, Highlight Incorrect Words and Write From Dictation items use the published PTE rules: a point per correct blank,
          negative marking on multiple-answer items, a point per correct adjacent pair in Re-order Paragraphs, and a point per correctly spelled word in dictation.
        </p>
        <h3>AI estimates: speaking and writing</h3>
        <p className="muted" style={{ margin: 0 }}>
          Speaking responses are recorded and transcribed in your browser. Scores use the official trait scales:
        </p>
        <ul className="muted" style={{ margin: 0 }}>
          <li><b>Content</b>: word-by-word alignment against the text (Read Aloud, Repeat Sentence), or coverage of the key points an examiner expects (Describe Image, Re-tell Lecture, Group Discussion, Respond to a Situation).</li>
          <li><b>Oral fluency</b>: your speaking rate and long pauses (≥ 1 second), measured from the audio signal.</li>
          <li><b>Pronunciation</b>: how confidently and accurately the recogniser understood the words you intended.</li>
          <li><b>Writing</b>: form (word count, one-sentence rule), key-point coverage, rule-based grammar checks, a Hunspell spelling dictionary, academic vocabulary and structure markers.</li>
        </ul>
        <div className="notice warn">
          This prototype's speaking and writing scores are <b>practice estimates</b>, not official scores. In the next phase, phoneme-level pronunciation
          assessment and a language-model marker calibrated on examiner-marked responses will replace these estimators. Every examiner review you request feeds that calibration.
        </div>
      </div>

      <div className="card stack" style={{ marginTop: 20 }}>
        <h3>CELPIP-General</h3>
        <p className="muted" style={{ margin: 0 }}>
          Listening and Reading questions are marked exactly (1 point each, 38 per component on a full test) and the share correct is converted to an estimated CELPIP level.
          Writing and Speaking are estimated on CELPIP's four rating dimensions: <b>Content/Coherence</b>, <b>Vocabulary</b>, <b>Readability</b> (writing) or <b>Listenability</b> (speaking),
          and <b>Task Fulfillment</b>. Each is rated 0–5 and combined into a level from 1 to 12. CELPIP levels 4–10+ map directly to the same CLB level for IRCC.
        </p>
        <h3>PTE Core</h3>
        <p className="muted" style={{ margin: 0 }}>
          PTE Core uses PTE's 10–90 scale and trait scoring, with its own rules: Summarize Written Text 25–50 words, Summarize Spoken Text 20–30 words,
          Respond to a Situation rated on Appropriacy (0–3), and the Write Email task (Content, Email conventions, Form, Organization, Vocabulary, Grammar, Spelling).
        </p>
      </div>

      <h2 style={{ marginTop: 32 }}>Score contribution by task (PTE)</h2>
      <p className="muted">PTE is integrated: many tasks count towards two skills. This prototype uses these weights to turn your practice into 10–90 skill estimates.</p>
      <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
        <table className="t">
          <thead><tr><th>Task</th><th>Speaking</th><th>Writing</th><th>Reading</th><th>Listening</th><th>Marking</th></tr></thead>
          <tbody>
            {TASKS.map((t) => (
              <tr key={t.code}>
                <td><a href={href(taskPath('pte-a', t.code))}>{t.name}</a></td>
                {(['speaking', 'writing', 'reading', 'listening'] as const).map((s) => <td key={s}>{t.contributes[s] ? '●'.repeat(Math.round(t.contributes[s]! * 3)) : ''}</td>)}
                <td>{t.aiScored ? <span className="pill gold">AI estimate</span> : <span className="pill green">Exact</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="small muted" style={{ marginTop: 18 }}>
        Ilm Atlantic is an independent preparation service. It is not affiliated with, endorsed by or connected to Pearson. PTE and PTE Academic are trademarks of their owners.
      </p>
    </div>
  );
}
