// Text utilities shared by the scorers.

export const STOPWORDS = new Set(
  ('a an the and or but if then than so of to in on at by for from with without about into over under ' +
    'is are was were be been being am do does did done have has had having it its this that these those ' +
    'there their they them he she his her him we our us you your i me my as not no can could will would ' +
    'shall should may might must also very more most such which who whom whose what when where why how ' +
    'all any each both some many much few other another just only own same too up down out off again ' +
    'further once here while during before after above below between through because until against').split(' '),
);

/** Lowercase, strip punctuation (keep apostrophes and hyphens inside words), split on whitespace. */
export function words(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9'\-\s]/g, ' ')
    .split(/\s+/)
    .map((w) => w.replace(/^['-]+|['-]+$/g, ''))
    .filter(Boolean);
}

export function wordCount(s: string): number {
  return s.trim() ? s.trim().split(/\s+/).length : 0;
}

/** Number of sentences, judged by terminal punctuation followed by space/end. */
export function sentenceCount(s: string): number {
  const t = s.trim();
  if (!t) return 0;
  const m = t.match(/[.!?]+(?=\s|$)/g);
  return Math.max(1, m ? m.length : 0);
}

/** Very light stemmer — enough to match "increase/increased/increasing". */
export function stem(w: string): string {
  let s = w.toLowerCase();
  if (s.length > 5 && s.endsWith('ies')) return s.slice(0, -3) + 'y';
  for (const suf of ['ingly', 'ations', 'ation', 'ments', 'ment', 'ness', 'ing', 'edly', 'ed', 'ly', 'es', 's']) {
    if (s.length - suf.length >= 4 && s.endsWith(suf)) {
      s = s.slice(0, -suf.length);
      break;
    }
  }
  return s.replace(/e$/, '');
}

export function contentStems(s: string): string[] {
  return words(s).filter((w) => !STOPWORDS.has(w) && w.length > 2).map(stem);
}

/** Longest common subsequence alignment of two word arrays. Returns matched index pairs. */
export function lcsAlign(a: string[], b: string[]): [number, number][] {
  const n = a.length, m = b.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const pairs: [number, number][] = [];
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { pairs.push([i, j]); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
    else j++;
  }
  return pairs;
}

export interface Coverage {
  point: string;
  hit: boolean;
  ratio: number;
}

/** For each key point, the share of its content words (stemmed) present in the response. */
export function keyPointCoverage(response: string, points: string[], threshold = 0.4): Coverage[] {
  const have = new Set(contentStems(response));
  return points.map((p) => {
    const need = [...new Set(contentStems(p))];
    if (!need.length) return { point: p, hit: false, ratio: 0 };
    const got = need.filter((w) => have.has(w)).length;
    const ratio = got / need.length;
    return { point: p, hit: ratio >= threshold, ratio };
  });
}

export function shuffle<T>(arr: T[], seed = Date.now()): T[] {
  const a = [...arr];
  let s = seed % 2147483647 || 1;
  const rnd = () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const clamp = (x: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, x));
