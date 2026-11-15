// Lazy-loaded Hunspell English dictionary (en-US + British variants accepted).
import nspell from 'nspell';

let checker: Promise<ReturnType<typeof nspell> | null> | null = null;

export function loadSpeller() {
  if (!checker) {
    checker = Promise.all([
      fetch('./dict/en.aff').then((r) => r.text()),
      fetch('./dict/en.dic').then((r) => r.text()),
    ])
      .then(([aff, dic]) => nspell(aff, dic))
      .catch(() => null);
  }
  return checker;
}

// British spellings accepted by PTE (consistent national spelling is fine).
const UK = /(our|ise|ised|ising|isation|isations|yse|ysed|ysing|tre|tres|ogue|ogues|lled|lling|ence|ences)$/;
function britishOk(sp: ReturnType<typeof nspell>, w: string) {
  if (!UK.test(w)) return false;
  const us = w
    .replace(/our$/, 'or').replace(/isation(s?)$/, 'ization$1').replace(/is(e|ed|ing)$/, 'iz$1')
    .replace(/ys(e|ed|ing)$/, 'yz$1').replace(/tre(s?)$/, 'ter$1').replace(/ogue(s?)$/, 'og$1')
    .replace(/ll(ed|ing)$/, 'l$1').replace(/ence(s?)$/, 'ense$1');
  return us !== w && sp.correct(us);
}

export interface SpellIssue { word: string; suggestions: string[] }

export async function spellCheck(text: string, allow: Iterable<string> = []): Promise<SpellIssue[] | null> {
  const sp = await loadSpeller();
  if (!sp) return null;
  const ok = new Set([...allow].map((w) => w.toLowerCase()));
  const seen = new Set<string>();
  const out: SpellIssue[] = [];
  for (const raw of text.match(/[A-Za-z][A-Za-z'’-]*/g) ?? []) {
    const w = raw.replace(/[’]/g, "'").replace(/['-]+$/, '');
    const lw = w.toLowerCase();
    if (seen.has(lw) || ok.has(lw) || w.length < 2) continue;
    seen.add(lw);
    if (sp.correct(w) || sp.correct(lw) || britishOk(sp, lw)) continue;
    if (w.includes('-') && w.split('-').every((p) => !p || sp.correct(p) || sp.correct(p.toLowerCase()))) continue;
    out.push({ word: w, suggestions: sp.suggest(w).slice(0, 3) });
  }
  return out;
}
