import { useEffect, useMemo, useState } from 'react';
import { speak } from '../lib/speech';
import { shuffle } from '../lib/text';

interface Word { w: string; d: string; p?: string }
interface Deck { meta: { title: string; source: string; license: string; licenseUrl: string; attribution: string }; words: Word[] }
type DeckKey = 'ngsl' | 'nawl';
type Mode = 'cards' | 'quiz' | 'list';

const DECKS: { key: DeckKey; name: string; desc: string }[] = [
  { key: 'ngsl', name: 'General English (NGSL, 2,809 words)', desc: 'The core words of everyday English: best for PTE Core and CELPIP.' },
  { key: 'nawl', name: 'Academic English (NAWL, 958 words)', desc: 'Words that appear across academic texts: best for PTE Academic.' },
];
const PAGE = 50;

// "Known" words are a per-browser convenience; it is fine if storage is unavailable.
function loadKnown(deck: DeckKey): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem('ia.vocab.' + deck) ?? '[]')); } catch { return new Set(); }
}
function saveKnown(deck: DeckKey, s: Set<string>) {
  try { localStorage.setItem('ia.vocab.' + deck, JSON.stringify([...s])); } catch { /* ignore */ }
}

export function Vocabulary() {
  const [deckKey, setDeckKey] = useState<DeckKey>('ngsl');
  const [deck, setDeck] = useState<Deck>();
  const [mode, setMode] = useState<Mode>('cards');
  const [known, setKnown] = useState<Set<string>>(() => loadKnown('ngsl'));
  const [err, setErr] = useState('');

  useEffect(() => {
    setDeck(undefined);
    setKnown(loadKnown(deckKey));
    fetch(`./vocab/${deckKey}.json`).then((r) => r.json()).then(setDeck).catch(() => setErr('Could not load the word list.'));
  }, [deckKey]);

  const toggleKnown = (w: string) => {
    const s = new Set(known);
    if (s.has(w)) s.delete(w); else s.add(w);
    setKnown(s);
    saveKnown(deckKey, s);
  };

  return (
    <div className="container page">
      <div className="tag">Vocabulary trainer</div>
      <h1>Build the words the tests are made of</h1>
      <div className="grid g2" style={{ margin: '10px 0 16px' }}>
        {DECKS.map((d) => (
          <button key={d.key} className={'card link'} onClick={() => setDeckKey(d.key)} style={{ textAlign: 'left', cursor: 'pointer', borderColor: deckKey === d.key ? 'var(--teal)' : undefined, background: deckKey === d.key ? 'var(--teal-l)' : '#fff' }}>
            <b style={{ color: 'var(--navy)' }}>{d.name}</b>
            <div className="small muted">{d.desc}</div>
          </button>
        ))}
      </div>
      <div className="tabs" role="tablist">
        {(['cards', 'quiz', 'list'] as Mode[]).map((m) => (
          <button key={m} role="tab" aria-selected={mode === m} className={'tab' + (mode === m ? ' on' : '')} style={{ background: mode === m ? '#fff' : 'transparent', cursor: 'pointer' }} onClick={() => setMode(m)}>
            {m === 'cards' ? 'Flashcards' : m === 'quiz' ? 'Quiz' : 'Word list'}
          </button>
        ))}
        {deck && <span className="small muted" style={{ marginLeft: 'auto', alignSelf: 'center' }}>{known.size} / {deck.words.length} known</span>}
      </div>
      {err && <div className="notice err">{err}</div>}
      {!deck && !err && <div className="empty">Loading words…</div>}
      {deck && mode === 'cards' && <Cards key={deckKey} words={deck.words} known={known} toggle={toggleKnown} />}
      {deck && mode === 'quiz' && <Quiz key={deckKey} words={deck.words} />}
      {deck && mode === 'list' && <List words={deck.words} known={known} toggle={toggleKnown} />}
      {deck && (
        <p className="small muted" style={{ marginTop: 24 }}>
          {deck.meta.attribution} <a href={deck.meta.licenseUrl} target="_blank" rel="noopener noreferrer">Licence</a> · <a href={deck.meta.source} target="_blank" rel="noopener noreferrer">Source</a>
        </p>
      )}
    </div>
  );
}

const say = (w: string) => speak([{ text: w, speaker: { name: 'Coach', gender: 'female', accent: 'en-CA' } }], 0.9);

function Cards({ words, known, toggle }: { words: Word[]; known: Set<string>; toggle: (w: string) => void }) {
  const queue = useMemo(() => shuffle(words.filter((w) => !known.has(w.w)), Date.now()), [words]); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const w = queue[i % Math.max(1, queue.length)];
  if (!w) return <div className="card empty">You know every word in this deck. Excellent work!</div>;
  const next = () => { setFlip(false); setI(i + 1); };
  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <div className="card" style={{ minHeight: 230, display: 'grid', placeItems: 'center', textAlign: 'center', cursor: 'pointer' }} onClick={() => setFlip(!flip)}>
        {!flip ? (
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 40, color: 'var(--navy)' }}>{w.w}</div>
            {w.p && <span className="pill grey">{w.p}</span>}
            <p className="small muted" style={{ marginTop: 12 }}>Do you know it? Tap to see the meaning.</p>
          </div>
        ) : (
          <div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 26, color: 'var(--navy)', marginBottom: 10 }}>{w.w}</div>
            <p style={{ fontSize: 18 }}>{w.d}</p>
          </div>
        )}
      </div>
      <div className="row" style={{ justifyContent: 'center', marginTop: 14 }}>
        <button className="btn ghost" onClick={() => say(w.w)}>🔊 Hear it</button>
        <button className="btn ghost" onClick={next}>Still learning →</button>
        <button className="btn" onClick={() => { toggle(w.w); next(); }}>✓ I know this</button>
      </div>
      <p className="small muted" style={{ textAlign: 'center' }}>Card {(i % queue.length) + 1} of {queue.length} still to learn</p>
    </div>
  );
}

function Quiz({ words }: { words: Word[] }) {
  const make = () => {
    const pick = shuffle(words, Date.now() + Math.random() * 1e6).slice(0, 4);
    return { target: pick[0], options: shuffle(pick, Date.now() + 7) };
  };
  const [q, setQ] = useState(make);
  const [chosen, setChosen] = useState<string>();
  const [score, setScore] = useState({ right: 0, total: 0 });
  const answer = (w: string) => {
    if (chosen) return;
    setChosen(w);
    setScore((s) => ({ right: s.right + (w === q.target.w ? 1 : 0), total: s.total + 1 }));
  };
  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      <div className="row spread small muted"><span>Which word matches the definition?</span><b>{score.right}/{score.total}</b></div>
      <div className="card" style={{ margin: '10px 0', fontSize: 18 }}>{q.target.d}</div>
      {q.options.map((o) => (
        <div key={o.w} className={'option ' + (chosen ? (o.w === q.target.w ? 'right' : o.w === chosen ? 'wrong' : '') : '')} onClick={() => answer(o.w)}>
          <b>{o.w}</b>
        </div>
      ))}
      {chosen && (
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <button className="btn ghost" onClick={() => say(q.target.w)}>🔊 {q.target.w}</button>
          <button className="btn" onClick={() => { setQ(make()); setChosen(undefined); }}>Next →</button>
        </div>
      )}
    </div>
  );
}

function List({ words, known, toggle }: { words: Word[]; known: Set<string>; toggle: (w: string) => void }) {
  const [q, setQ] = useState('');
  const [page, setPage] = useState(0);
  const filtered = words.filter((w) => !q || w.w.toLowerCase().includes(q.toLowerCase()) || w.d.toLowerCase().includes(q.toLowerCase()));
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const shown = filtered.slice(page * PAGE, page * PAGE + PAGE);
  return (
    <div>
      <input className="text" placeholder="Search words or meanings…" value={q} onChange={(e) => { setQ(e.target.value); setPage(0); }} style={{ width: '100%', maxWidth: 420, marginBottom: 12 }} />
      <div className="card" style={{ padding: 0, overflowX: 'auto' }}>
        <table className="t">
          <thead><tr><th>Word</th><th>Meaning</th><th /></tr></thead>
          <tbody>
            {shown.map((w) => (
              <tr key={w.w}>
                <td><button className="btn sm ghost" onClick={() => say(w.w)} aria-label={`Hear ${w.w}`}>🔊</button> <b>{w.w}</b> {w.p && <span className="pill grey">{w.p}</span>}</td>
                <td className="small">{w.d}</td>
                <td><button className={'btn sm ' + (known.has(w.w) ? '' : 'ghost')} onClick={() => toggle(w.w)}>{known.has(w.w) ? '✓ known' : 'Mark known'}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row" style={{ justifyContent: 'center', marginTop: 12 }}>
        <button className="btn sm ghost" disabled={page === 0} onClick={() => setPage(page - 1)}>← Prev</button>
        <span className="small muted">Page {page + 1} of {pages} · {filtered.length} words</span>
        <button className="btn sm ghost" disabled={page >= pages - 1} onClick={() => setPage(page + 1)}>Next →</button>
      </div>
    </div>
  );
}
