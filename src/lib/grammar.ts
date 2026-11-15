// Rule-based grammar & mechanics checks — a transparent preview of the
// Phase 2 AI marker. Each rule targets a frequent learner error in PTE writing.

export interface GrammarIssue { rule: string; message: string; excerpt: string }

const VOWEL_SOUND_EXCEPTIONS = /^(uni|use|usu|euro|one|once|u\b|ufo|user|utility|utensil|ubiquit)/i;
const SILENT_H = /^(hour|honest|honou?r|heir)/i;

type Rule = { rule: string; re: RegExp; message: (m: RegExpExecArray) => string | null };

const RULES: Rule[] = [
  { rule: 'article', re: /\b(a)\s+([a-z]+)/gi, message: (m) =>
      /^[aeiou]/i.test(m[2]) && !VOWEL_SOUND_EXCEPTIONS.test(m[2]) ? `Use "an" before a vowel sound: "an ${m[2]}".`
      : SILENT_H.test(m[2]) ? `Use "an" before a silent h: "an ${m[2]}".` : null },
  { rule: 'article', re: /\b(an)\s+([a-z]+)/gi, message: (m) =>
      !/^[aeiou]/i.test(m[2]) && !SILENT_H.test(m[2]) ? `Use "a" before a consonant sound: "a ${m[2]}".`
      : VOWEL_SOUND_EXCEPTIONS.test(m[2]) ? `Use "a" before a "you"/"w" sound: "a ${m[2]}".` : null },
  { rule: 'repetition', re: /\b(\w+)\s+\1\b/gi, message: (m) => (m[1].toLowerCase() === 'that' || m[1].toLowerCase() === 'had' ? null : `Repeated word "${m[1]}".`) },
  { rule: 'capital-i', re: /(^|\s)i(\s|'|’)/g, message: () => 'The pronoun "I" is always capitalised.' },
  { rule: 'spacing', re: /[,;:](?=[A-Za-z])/g, message: () => 'Add a space after punctuation.' },
  { rule: 'spacing', re: /\s+[,.;:!?]/g, message: () => 'Remove the space before punctuation.' },
  { rule: 'capital', re: /[.!?]\s+([a-z])/g, message: () => 'Start each sentence with a capital letter.' },
  { rule: 'uncountable', re: /\b(informations|advices|knowledges|researches|equipments|evidences|furnitures|homeworks|feedbacks|staffs)\b/gi,
    message: (m) => `"${m[1].replace(/s$/i, '')}" is uncountable in academic English — no plural -s.` },
  { rule: 'comparative', re: /\bmore\s+(better|worse|easier|harder|bigger|smaller|faster|cheaper|higher|lower)\b/gi, message: (m) => `Double comparative: use "${m[1]}" alone.` },
  { rule: 'collocation', re: /\b(discuss|emphasi[sz]e|mention|describe)\s+about\b/gi, message: (m) => `"${m[1]}" takes a direct object — remove "about".` },
  { rule: 'collocation', re: /\bdespite\s+of\b/gi, message: () => 'Use "despite" or "in spite of" — not "despite of".' },
  { rule: 'collocation', re: /\bin\s+other\s+hand\b/gi, message: () => 'The phrase is "on the other hand".' },
  { rule: 'collocation', re: /\bas\s+a\s+conclusion\b/gi, message: () => 'Prefer "In conclusion," or "To conclude,".' },
  { rule: 'agreement', re: /\b(people|children|students|they|we|governments|countries)\s+(is|was|has|does)\b/gi, message: (m) => `Subject–verb agreement: "${m[1]} ${({ is: 'are', was: 'were', has: 'have', does: 'do' } as Record<string, string>)[m[2].toLowerCase()]}".` },
  { rule: 'agreement', re: /\b(he|she|it|this|everyone|everybody|nobody)\s+(are|were|have|do)\b/gi, message: (m) => `Subject–verb agreement: "${m[1]} ${({ are: 'is', were: 'was', have: 'has', do: 'does' } as Record<string, string>)[m[2].toLowerCase()]}".` },
  { rule: 'agreement', re: /\b(a|one|each|every)\s+(people|children|students|countries)\b/gi, message: (m) => `"${m[1]}" needs a singular noun.` },
  { rule: 'informal', re: /\b(gonna|wanna|kinda|lots of|a lot of|stuff|things like that|etc\.?|kids|ok|okay)\b/gi, message: (m) => `"${m[1]}" is informal — choose an academic alternative.` },
  { rule: 'contraction', re: /\b(can't|won't|don't|doesn't|isn't|aren't|it's|didn't|shouldn't|wouldn't)\b/gi, message: (m) => `Avoid contractions in academic writing ("${m[1]}").` },
];

export function grammarCheck(text: string): GrammarIssue[] {
  const out: GrammarIssue[] = [];
  for (const r of RULES) {
    r.re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = r.re.exec(text))) {
      const msg = r.message(m);
      if (msg) {
        const s = Math.max(0, m.index - 18);
        out.push({ rule: r.rule, message: msg, excerpt: '…' + text.slice(s, m.index + m[0].length + 14).replace(/\s+/g, ' ') + '…' });
      }
      if (m[0].length === 0) r.re.lastIndex++;
    }
  }
  const t = text.trim();
  if (t && /^[a-z]/.test(t)) out.push({ rule: 'capital', message: 'Start with a capital letter.', excerpt: t.slice(0, 24) + '…' });
  if (t && !/[.!?]["')]?$/.test(t)) out.push({ rule: 'punctuation', message: 'End with a full stop.', excerpt: '…' + t.slice(-24) });
  return out;
}

// A compact list of academic vocabulary used to estimate lexical range.
export const ACADEMIC = new Set(
  ('analyse analyze approach area assess assume authority available benefit concept consist constitute context contract create data define derive distribute economy environment establish estimate evident export factor finance formula function identify income indicate individual interpret involve issue labour labor legal legislate major method occur percent period policy principle proceed process require research respond role section sector significant similar source specific structure theory vary ' +
    'achieve acquire administration affect appropriate aspect assist category chapter commission community complex compute conclude conduct consequent construct consume credit culture design distinct element equate evaluate feature final focus impact injure institute invest item journal maintain normal obtain participate perceive positive potential previous primary purchase range region regulate relevant reside resource restrict secure seek select site strategy survey text tradition transfer ' +
    'alternative circumstance comment compensate component consent considerable constant constrain contribute convene coordinate core corporate correspond criteria deduce demonstrate document dominate emphasis ensure exclude framework fund illustrate immigrate imply initial instance interact justify layer link locate maximise maximize minor negate outcome partner philosophy physical proportion publish react register rely remove scheme sequence sex shift specify sufficient task technical technique technology valid volume ' +
    'access adequate annual apparent approximate attitude attribute civil code commit communicate concentrate confer contrast cycle debate despite dimension domestic emerge error ethnic goal grant hence hypothesis implement implicate impose integrate internal investigate job label mechanism obvious occupy option output overall parallel parameter phase predict principal prior professional project promote regime resolve retain series statistic status stress subsequent sum summary undertake ' +
    'mitigate exacerbate facilitate substantial fundamental crucial inevitable comprehensive sustainable diverse prevalent detrimental beneficial notable furthermore moreover nevertheless consequently whereas thereby albeit predominantly marginal unprecedented ambiguous coherent consensus controversy discrepancy disproportionate empirical feasible incentive inherent paradigm subsidy viable').split(/\s+/),
);

export const DISCOURSE = /\b(however|moreover|furthermore|in addition|additionally|consequently|therefore|as a result|for example|for instance|on the other hand|in contrast|nevertheless|although|whereas|in conclusion|to conclude|firstly|secondly|finally|overall|similarly|thus|hence)\b/gi;
export const COMPLEX = /\b(which|who|whom|whose|although|whereas|while|because|since|unless|if|whether|despite|not only|so that|in order to)\b/gi;
