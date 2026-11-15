// Study resources. Official materials are LINKED (never copied). Open materials list their licence.
import type { Exam } from './types';

export type ResourceKind = 'official' | 'practice' | 'canada' | 'open' | 'tool';
export interface Resource {
  title: string;
  provider: string;
  url: string;
  kind: ResourceKind;
  exams: Exam[];
  desc: string;
  access: 'free' | 'sign-up' | 'paid';
  license?: string;
}

const PTE: Exam[] = ['pte-a', 'pte-core'];
const A: Exam[] = ['pte-a'];
const K: Exam[] = ['pte-core'];
const CEL: Exam[] = ['celpip'];
const CAN: Exam[] = ['pte-core', 'celpip'];
const ALL: Exam[] = ['pte-a', 'pte-core', 'celpip'];
const P = 'Pearson';
const C = 'Paragon / Prometric (CELPIP)';
const CCLB = 'Centre for Canadian Language Benchmarks';
const IRCC = 'Immigration, Refugees and Citizenship Canada';

export const RESOURCES: Resource[] = [
  // ---------------- PTE Core (official)
  { title: 'PTE Core: product home', provider: P, url: 'https://www.pearsonpte.com/pte-core', kind: 'official', exams: K, desc: 'What PTE Core is and who accepts it.', access: 'free' },
  { title: 'PTE Core test format', provider: P, url: 'https://www.pearsonpte.com/pte-core/test-format', kind: 'official', exams: K, desc: 'Section overview and timings.', access: 'free' },
  { title: 'PTE Core: Speaking & Writing tasks', provider: P, url: 'https://www.pearsonpte.com/pte-core/test-format/speaking-writing', kind: 'official', exams: K, desc: 'Official task descriptions, timings and tips, including Write Email.', access: 'free' },
  { title: 'PTE Core: Reading tasks', provider: P, url: 'https://www.pearsonpte.com/pte-core/test-format/reading', kind: 'official', exams: K, desc: 'Official reading task descriptions.', access: 'free' },
  { title: 'PTE Core: Listening tasks', provider: P, url: 'https://www.pearsonpte.com/pte-core/test-format/listening', kind: 'official', exams: K, desc: 'Official listening task descriptions.', access: 'free' },
  { title: 'PTE Core preparation hub', provider: P, url: 'https://www.pearsonpte.com/pte-core/preparation', kind: 'official', exams: K, desc: 'Index of Pearson’s free and paid preparation.', access: 'free' },
  { title: 'PTE Core Score Guide 2026 (PDF)', provider: P, url: 'https://www.pearsonpte.com/content/dam/ELL/pte/pearsonpte/pdfs/PTE-Core-Score-Guide-2026.pdf', kind: 'official', exams: K, desc: 'Item counts, scoring traits, the CLB conversion table and sample responses at CLB 4/5/7.', access: 'free' },
  { title: 'PTE Core Test Taker Handbook (PDF)', provider: P, url: 'https://www.pearsonpte.com/ctf-assets/yqwtwibiobs4/1flLbkOOtHsjerMEwspr4K/63750b65069ac3ef7724b2907a4e4540/pte-core-test-taker-handbook.pdf', kind: 'official', exams: K, desc: 'Booking, ID requirements and test-day rules.', access: 'free' },
  { title: 'Getting started with PTE Core: Teacher Guide (PDF)', provider: P, url: 'https://www.pearsonpte.com/content/dam/ELL/pte/pearsonpte/pdfs/pte-core-pdfs/getting-started-with-pte-core-teacher-guide.pdf', kind: 'official', exams: K, desc: 'Orientation for teachers and tutors.', access: 'free' },
  { title: 'PTE Core Test Tips (PDF)', provider: P, url: 'https://www.pearsonpte.com/content/dam/ELL/pte/pearsonpte/pdfs/pte-core-test-tips.pdf', kind: 'official', exams: K, desc: 'Pearson’s own task-by-task tips.', access: 'free' },
  { title: 'PTE Core FAQs', provider: P, url: 'https://www.pearsonpte.com/help-center/general-faqs/pte-core', kind: 'official', exams: K, desc: 'Common questions about PTE Core.', access: 'free' },
  { title: 'PTE Core Scored Practice Test', provider: P, url: 'https://www.pearsonpte.com/pte-core/preparation/scored-practice-test', kind: 'practice', exams: K, desc: 'Official full mock scored by Pearson’s engine. Good final check before test day.', access: 'paid' },
  { title: 'Official Guide to PTE Core (eBook)', provider: P, url: 'https://www.pearsonpte.com/pte-core/preparation/official-guide', kind: 'practice', exams: K, desc: 'Pearson’s official preparation book.', access: 'paid' },
  // ---------------- PTE Academic (official)
  { title: 'PTE Academic test format', provider: P, url: 'https://www.pearsonpte.com/pte-academic/test-format', kind: 'official', exams: A, desc: 'Section overview.', access: 'free' },
  { title: 'PTE Academic: Speaking & Writing tasks', provider: P, url: 'https://www.pearsonpte.com/pte-academic/test-format/speaking-writing', kind: 'official', exams: A, desc: 'Includes the 2025 tasks: Summarize Group Discussion and Respond to a Situation.', access: 'free' },
  { title: 'PTE updates 2025', provider: P, url: 'https://www.pearsonpte.com/pte-updates-2025/', kind: 'official', exams: A, desc: 'What changed on 7 August 2025.', access: 'free' },
  { title: 'Enhanced PTE: announcement', provider: P, url: 'https://www.pearsonpte.com/news/pearson-advances-english-language-assessment-with-enhanced-pte-test/', kind: 'official', exams: A, desc: 'Pearson’s news release on the 2025 changes.', access: 'free' },
  { title: 'PTE Academic Test Taker Score Guide (PDF)', provider: P, url: 'https://www.pearsonpte.com/content/dam/ELL/pte/pearsonpte/pdfs/pte-academic-pdfs/PTE-Academic-Test-Taker-Score-Guide.pdf', kind: 'official', exams: A, desc: 'Scoring traits and item counts.', access: 'free' },
  { title: 'PTE Academic preparation hub', provider: P, url: 'https://www.pearsonpte.com/pte-academic/preparation/', kind: 'official', exams: A, desc: 'Index of Pearson’s preparation products.', access: 'free' },
  { title: 'How to: Respond to a Situation', provider: P, url: 'https://www.pearsonpte.com/articles/how-to-respond-to-a-situation-task/', kind: 'official', exams: A, desc: 'Pearson’s guide to the new task.', access: 'free' },
  // ---------------- PTE (both)
  { title: 'myPTE Smart Prep', provider: P, url: 'https://mypte.pearsonpte.com/learn', kind: 'practice', exams: PTE, desc: 'Study plan, guided practice tests and video lessons with a free myPTE account.', access: 'sign-up' },
  { title: 'Scoring explained', provider: P, url: 'https://www.pearsonpte.com/scoring-explained/', kind: 'official', exams: PTE, desc: 'How PTE scores are produced.', access: 'free' },
  { title: 'Test taker handbooks', provider: P, url: 'https://www.pearsonpte.com/test-taker-handbook/', kind: 'official', exams: PTE, desc: 'All PTE handbooks in one place.', access: 'free' },
  { title: 'On test day', provider: P, url: 'https://www.pearsonpte.com/on-test-day', kind: 'official', exams: PTE, desc: 'Test-day checklist.', access: 'free' },
  { title: 'Pearson PTE articles', provider: P, url: 'https://www.pearsonpte.com/articles/', kind: 'official', exams: PTE, desc: 'Tips and how-to articles.', access: 'free' },
  { title: 'Teacher resources', provider: P, url: 'https://www.pearsonpte.com/teachers/teacher-resources/', kind: 'official', exams: PTE, desc: 'Materials for teachers.', access: 'free' },
  { title: 'Teacher webinars 2026', provider: P, url: 'https://www.pearsonpte.com/teachers/webinars-2026/', kind: 'official', exams: PTE, desc: 'Live and recorded webinars.', access: 'free' },
  // ---------------- CELPIP (official)
  { title: 'CELPIP-General', provider: C, url: 'https://www.celpip.ca/celpip-general/', kind: 'official', exams: CEL, desc: 'The official product page.', access: 'free' },
  { title: 'CELPIP test overview', provider: C, url: 'https://www.celpip.ca/take-celpip/overview/', kind: 'official', exams: CEL, desc: 'What to expect on test day.', access: 'free' },
  { title: 'CELPIP test format', provider: C, url: 'https://www.celpip.ca/take-celpip/test-format/', kind: 'official', exams: CEL, desc: 'Official parts, tasks and timings.', access: 'free' },
  { title: 'CELPIP Tips & Free Resources', provider: C, url: 'https://www.celpip.ca/prepare-for-celpip/free-resources/', kind: 'practice', exams: CEL, desc: 'Free online sample test, 2 free practice tests with an account, study packs, videos and podcast.', access: 'sign-up' },
  { title: 'CELPIP Prep overview', provider: C, url: 'https://www.celpip.ca/prep-overview/', kind: 'official', exams: CEL, desc: 'Free vs paid official preparation.', access: 'free' },
  { title: 'CELPIP Scoring Levels (with sample responses)', provider: C, url: 'https://www.celpip.ca/prepare-for-celpip/free-resources/scoring-levels/', kind: 'official', exams: CEL, desc: 'Level descriptors with writing and speaking samples at each level. Excellent for calibration.', access: 'free' },
  { title: 'CELPIP Score Comparison Chart', provider: C, url: 'https://www.celpip.ca/score-comparison-chart/', kind: 'official', exams: CEL, desc: 'CELPIP levels vs CLB vs CEFR.', access: 'free' },
  { title: 'CELPIP test results', provider: C, url: 'https://www.celpip.ca/take-celpip/test-results/', kind: 'official', exams: CEL, desc: 'How CELPIP is scored and rated.', access: 'free' },
  { title: 'CELPIP Performance Standards (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2023/05/CELPIP-Performance-Standards.pdf', kind: 'official', exams: CEL, desc: 'The rating dimensions for writing and speaking.', access: 'free' },
  { title: 'Guidebook for Test Takers, July 2026 (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2026/07/Guidebook-CELPIP-Test-Takers-July-2026.pdf', kind: 'official', exams: CEL, desc: 'Format, timings, levels and rules.', access: 'free' },
  { title: 'CELPIP-General Overview Study Pack 2026 (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2026/03/CELPIP-General-Overview-Study-Pack-2026.pdf', kind: 'practice', exams: CEL, desc: 'Companion to the free overview webinar.', access: 'free' },
  { title: 'Listening Pro Study Pack 2026 (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2026/03/Listening-Pro-Study-Pack-2026.pdf', kind: 'practice', exams: CEL, desc: 'Listening strategies by part.', access: 'free' },
  { title: 'Reading Pro Study Pack 2026 (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2026/03/Reading-Pro-Study-Pack-2026.pdf', kind: 'practice', exams: CEL, desc: 'Reading strategies by part.', access: 'free' },
  { title: 'Speaking Pro Target 9 Study Pack 2026 (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2026/05/Revised-Speaking-Pro-Target-9-Study-Pack-2026.pdf', kind: 'practice', exams: CEL, desc: 'Speaking task timings and higher-level tips.', access: 'free' },
  { title: 'Speaking Pro Target 5 Study Pack 2026 (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2026/05/Revised-Speaking-Pro-Target-5-Study-Pack-2026.pdf', kind: 'practice', exams: CEL, desc: 'Speaking support for lower levels.', access: 'free' },
  { title: 'Writing Pro Target 9 Study Pack (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2022/08/Writing-Pro-Target-9-Study-Pack.pdf', kind: 'practice', exams: CEL, desc: 'Writing tips (2022 edition).', access: 'free' },
  { title: 'Guidebook for Score Users (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2024/10/Guidebook-CELPIP-Score-Users-Oct2024.pdf', kind: 'official', exams: CEL, desc: 'How institutions interpret CELPIP scores.', access: 'free' },
  { title: 'CELPIP 2024 Data Report (PDF)', provider: C, url: 'https://www.celpip.ca/wp-content/uploads/2025/07/2024-CELPIP_DataReport-1.pdf', kind: 'official', exams: CEL, desc: 'Score statistics.', access: 'free' },
  // ---------------- Canada: immigration & CLB
  { title: 'Express Entry: language testing & CLB tables', provider: IRCC, url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html', kind: 'canada', exams: CAN, desc: 'Approved tests and the official CELPIP / PTE Core → CLB equivalency tables.', access: 'free' },
  { title: 'Express Entry language requirements', provider: IRCC, url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements.html', kind: 'canada', exams: CAN, desc: 'Rules, validity (2 years) and minimums by program.', access: 'free' },
  { title: 'Citizenship: proof of language', provider: IRCC, url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/canadian-citizenship/become-canadian-citizen/eligibility/language-proof.html', kind: 'canada', exams: CAN, desc: 'CLB 4 in speaking and listening for citizenship.', access: 'free' },
  { title: 'IRCC language averaging tool', provider: IRCC, url: 'https://ircc.canada.ca/english/immigrate/skilled/language-tool.asp', kind: 'canada', exams: CAN, desc: 'For candidates with disabilities.', access: 'free' },
  { title: 'On CLB: what the benchmarks are', provider: CCLB, url: 'https://www.language.ca/resourcesexpertise/on-clb/', kind: 'canada', exams: CAN, desc: 'Plain explanation of the Canadian Language Benchmarks.', access: 'free' },
  { title: 'CLB: ESL for Adults (PDF)', provider: CCLB, url: 'https://www.language.ca/product/pdf-e-01-clb-esl-for-adults-pdf/', kind: 'canada', exams: CAN, desc: 'The core CLB document (free download).', access: 'free' },
  { title: 'CLB Can Do Statements (PDF)', provider: CCLB, url: 'https://www.language.ca/product/pdf-e-006-can-do-statements/', kind: 'canada', exams: CAN, desc: 'Learner checklists by level.', access: 'free' },
  { title: 'Can Do Statements for Employment (PDF)', provider: CCLB, url: 'https://www.language.ca/product/pdf-e-007-can-do-statements-for-employment/', kind: 'canada', exams: CAN, desc: 'Workplace language checklists.', access: 'free' },
  { title: 'CLB Support Kit (PDF)', provider: CCLB, url: 'https://www.language.ca/product/clb-support-kit-pdf-e/', kind: 'canada', exams: CAN, desc: 'Exemplars and teaching support.', access: 'free' },
  { title: 'CLB Additional Sample Task Ideas (PDF)', provider: CCLB, url: 'https://www.language.ca/product/pdf-e-004-clb-additional-sample-task-ideas/', kind: 'canada', exams: CAN, desc: 'Task ideas for each level.', access: 'free' },
  { title: 'CCLB free online courses', provider: CCLB, url: 'https://learning.language.ca', kind: 'canada', exams: CAN, desc: 'CLB Bootcamp and Support Kit courses (teacher-oriented).', access: 'sign-up' },
  { title: 'CLB-OSA online self-assessment', provider: CCLB, url: 'https://www.clb-osa.ca', kind: 'tool', exams: CAN, desc: 'Self-placement test for reading and listening.', access: 'free' },
  { title: 'NCLC: French benchmarks', provider: CCLB, url: 'https://www.language.ca/ressourcesexpertise/niveaux-de-competence-linguistique-canadiens/', kind: 'canada', exams: CAN, desc: 'Niveaux de compétence linguistique canadiens (for French-test bonus points).', access: 'free' },
  // ---------------- Open educational resources
  { title: 'Teaching Pronunciation with Confidence', provider: 'Iowa State University Digital Press', url: 'https://iastate.pressbooks.pub/teachingpronunciation/', kind: 'open', exams: ALL, desc: 'Open textbook on stress, rhythm, intonation and sounds. Directly useful for Read Aloud and CELPIP Listenability.', access: 'free', license: 'CC BY 4.0' },
  { title: 'Advanced Academic Grammar for ESL Students', provider: 'Open Textbook Library', url: 'https://open.umn.edu/opentextbooks/textbooks/1074', kind: 'open', exams: ALL, desc: 'Open grammar textbook with exercises for academic writing.', access: 'free', license: 'CC BY 4.0' },
  { title: 'New General Service List (NGSL)', provider: 'Browne, Culligan & Phillips', url: 'https://www.newgeneralservicelist.com/new-general-service-list', kind: 'open', exams: ALL, desc: 'The 2,809 most useful general English words. Practise them in our Vocabulary trainer.', access: 'free', license: 'CC BY-SA 4.0' },
  { title: 'New Academic Word List (NAWL)', provider: 'Browne, Culligan & Phillips', url: 'https://www.newgeneralservicelist.com/new-academic-word-list', kind: 'open', exams: ['pte-a'], desc: '960 core academic words. Practise them in our Vocabulary trainer.', access: 'free', license: 'CC BY-SA 4.0' },
  { title: 'Tatoeba sentence collection', provider: 'Tatoeba', url: 'https://tatoeba.org', kind: 'open', exams: ALL, desc: 'Millions of example sentences, many with audio. Great for shadowing and dictation practice.', access: 'free', license: 'CC BY 2.0 FR (sentences)' },
  { title: 'Our World in Data', provider: 'Global Change Data Lab', url: 'https://ourworldindata.org', kind: 'open', exams: A, desc: 'Thousands of real charts: practise Describe Image by describing one chart a day.', access: 'free', license: 'CC BY 4.0' },
  { title: 'Statistics Canada: The Daily', provider: 'Statistics Canada', url: 'https://www150.statcan.gc.ca/n1/dai-quo/index-eng.htm', kind: 'open', exams: CAN, desc: 'Short daily reports with Canadian charts. Practice for Describe Image and CELPIP Reading Part 2.', access: 'free', license: 'Statistics Canada Open Licence' },
  { title: 'OpenStax textbooks', provider: 'OpenStax (Rice University)', url: 'https://openstax.org', kind: 'open', exams: A, desc: 'Free university textbooks: real academic reading for PTE Academic passages and lectures.', access: 'free', license: 'CC BY 4.0 (most titles)' },
  { title: 'LibriVox audiobooks', provider: 'LibriVox', url: 'https://librivox.org', kind: 'open', exams: ALL, desc: 'Public-domain audiobooks. Extensive listening and shadowing.', access: 'free', license: 'Public domain' },
  { title: 'VOA Learning English (archive)', provider: 'Voice of America', url: 'https://learningenglish.voanews.com', kind: 'open', exams: ALL, desc: 'Graded news with audio and transcripts. VOA-produced content is public domain.', access: 'free', license: 'Public domain (VOA-produced content)' },
];

// ---------------- Original strategy guides (written by Ilm Atlantic)
export interface Guide { id: string; title: string; exams: Exam[]; summary: string; sections: { h: string; body: string[] }[] }

export const GUIDES: Guide[] = [
  {
    id: 'ra-technique', title: 'Read Aloud: the examiner’s technique', exams: PTE,
    summary: 'Fluency and pronunciation decide most of your score. This is how to prepare in 35 seconds.',
    sections: [
      { h: 'In the preparation time', body: ['Read the text silently once for meaning.', 'Mark phrase breaks after commas, before "which/that/because", and between subject and long verb phrases.', 'Find the tricky words (long, unfamiliar, names) and say them quietly twice.'] },
      { h: 'While recording', body: ['Start within 3 seconds of the tone: silence for 3 seconds ends the recording.', 'Read in chunks of 3–6 words at a steady, natural speed (about 130–150 words per minute).', 'Stress content words; let small words (a, the, of, to) be light.', 'If you stumble, do not go back. A repetition costs more fluency than a missed word.'] },
      { h: 'Common errors we see', body: ['Word-by-word reading (staccato) → practise with a metronome of meaning, not syllables.', 'Rising intonation on every phrase → fall at full stops.', 'Rushing the last line to "finish" → finishing early scores nothing extra.'] },
    ],
  },
  {
    id: 'di-template', title: 'Describe Image: a flexible 40-second structure', exams: PTE,
    summary: 'A structure, not a memorised script. Pearson now detects templated answers, so adapt it every time.',
    sections: [
      { h: 'Structure', body: ['1 sentence overview: "This bar chart compares X across Y between 2015 and 2023."', '2–3 key features with real numbers: highest, lowest, biggest change.', '1 comparison: "By contrast, …" / "Similarly, …"', '1 conclusion or implication: "Overall, this suggests that …"'] },
      { h: 'Language bank', body: ['Trends: rose steadily, peaked at, fell sharply, levelled off, fluctuated.', 'Comparison: twice as many as, slightly higher than, the largest share.', 'Process: first, once this is done, the next stage involves, finally.'] },
      { h: 'Examiner tip', body: ['Content band 5 requires relationships and implications, not only a list of numbers.', 'Keep talking until the 40 seconds end, but never fill time with meaningless repetition.'] },
    ],
  },
  {
    id: 'swt-formula', title: 'Summarize Written Text: one perfect sentence', exams: PTE,
    summary: 'One sentence, the right length, and the main idea plus key supporting points.',
    sections: [
      { h: 'The pattern', body: ['[Main idea], [connector] [supporting point 1], [connector] [supporting point 2].', 'Connectors that keep it one sentence: while, whereas, which, because, although, ; however,.', 'PTE Academic: 5–75 words (aim for 30–50). PTE Core: 25–50 words.'] },
      { h: 'Checklist', body: ['Exactly one full stop, at the very end.', 'Paraphrase key nouns, but keep technical terms.', 'Check subject–verb agreement in the long sentence.'] },
    ],
  },
  {
    id: 'essay-structure', title: 'Write Essay: structure for 79+', exams: A,
    summary: 'A clear position, two developed body paragraphs and accurate grammar beat long, complicated essays.',
    sections: [
      { h: 'Plan (2 minutes)', body: ['Underline every part of the prompt. Two-part questions need two answers.', 'Decide your position and two reasons, each with an example.'] },
      { h: 'Paragraphs', body: ['Introduction (2–3 sentences): paraphrase the topic and state your position.', 'Body 1 and Body 2: topic sentence → explanation → example → link back.', 'Optional counter-argument paragraph for "discuss both views".', 'Conclusion (2 sentences): restate the position and the main reasons.'] },
      { h: 'Form and finish', body: ['200–300 words. Under 120 or over 380 scores zero on every trait.', 'Leave 2 minutes to check spelling: there is no spell-checker.'] },
    ],
  },
  {
    id: 'wfd-rs', title: 'Write From Dictation & Repeat Sentence: memory chunks', exams: PTE,
    summary: 'These two short tasks carry heavy weight in listening, speaking and writing. Train them daily.',
    sections: [
      { h: 'Technique', body: ['Listen for meaning chunks, not single words.', 'WFD: type the first letters of each word while listening (e.g. "t s o t c" for "the success of the campaign"), then expand.', 'RS: repeat immediately after the tone, copying the rhythm and intonation.'] },
      { h: 'Accuracy', body: ['Check plurals, articles and verb endings, the most common WFD errors.', 'Every correctly spelled word scores in WFD, so write everything you are sure of.'] },
    ],
  },
  {
    id: 'write-email', title: 'PTE Core Write Email: model structure', exams: K,
    summary: 'Three bullet points, one paragraph each, the right register and 80–120 words.',
    sections: [
      { h: 'Structure', body: ['Greeting that fits the reader: "Dear Mr Patel," (formal) / "Hi Sam," (informal).', 'Opening line with your purpose: "I am writing to…"', 'One short paragraph for each bullet point, in the given order.', 'Polite close: "I look forward to hearing from you." Sign-off and your name.'] },
      { h: 'Register', body: ['Formal: no contractions, indirect requests ("Would it be possible to…").', 'Informal: contractions and friendly phrases are fine, but keep grammar accurate.'] },
      { h: 'Scoring reminders', body: ['50–120 words for full Form marks; under 30 or over 140 scores zero.', 'Email conventions (greeting and sign-off) are a scored trait.'] },
    ],
  },
  {
    id: 'celpip-email', title: 'CELPIP Writing Task 1: the email', exams: CEL,
    summary: '150–200 words, all three points, and a tone that matches the reader.',
    sections: [
      { h: 'Plan (3 minutes)', body: ['Who is the reader? Friend, neighbour, manager, company. Decide the tone.', 'Note one or two details for each of the three points.'] },
      { h: 'Write (20 minutes)', body: ['Greeting → purpose → one paragraph per point → closing line → sign-off.', 'Add specific details (dates, places, reasons). They raise Content/Coherence.', 'Use linking words: First of all, In addition, However, As a result.'] },
      { h: 'Check (4 minutes)', body: ['Word count 150–200.', 'Spelling, verb tenses, capital letters. Readability is a rated dimension.'] },
    ],
  },
  {
    id: 'celpip-survey', title: 'CELPIP Writing Task 2: survey response', exams: CEL,
    summary: 'Pick one option, defend it with two developed reasons, and stay balanced in tone.',
    sections: [
      { h: 'Structure', body: ['Opening: state your choice clearly: "I prefer Option A because…"', 'Reason 1 + example; Reason 2 + example.', 'Optional: why the other option is less suitable.', 'Closing sentence restating your choice.'] },
      { h: 'Tip', body: ['There is no right option. Choose the one you can support with the most concrete examples.'] },
    ],
  },
  {
    id: 'celpip-speaking', title: 'CELPIP Speaking: a plan for all 8 tasks', exams: CEL,
    summary: 'Every task has a clear job. Use the preparation time to plan three points, not to write sentences.',
    sections: [
      { h: 'Tasks 1, 6, 7 (advice, difficult situation, opinion)', body: ['Position or advice → reason 1 → reason 2 (→ reason 3) → short conclusion.', 'Task 6: speak TO the person, be diplomatic, and offer a solution.'] },
      { h: 'Task 2 (experience)', body: ['When/where/who → what happened → how it ended → what you learned.'] },
      { h: 'Tasks 3, 4, 8 (pictures)', body: ['Task 3: overview, then left to right or foreground to background, in the present continuous.', 'Task 4: three or four predictions using "will probably / is likely to", each with a reason from the picture.', 'Task 8: the listener cannot see it, so give size, shape, colour and position.'] },
      { h: 'Task 5 (comparing and persuading)', body: ['Choose fast. Compare on the same features. Acknowledge the other option, then show why yours wins.'] },
    ],
  },
  {
    id: 'clb-crs', title: 'CLB levels and Express Entry points', exams: CAN,
    summary: 'Why one CLB level can be worth dozens of CRS points, and which target to set.',
    sections: [
      { h: 'The key thresholds', body: ['CLB 7 in all four skills is the minimum for the Federal Skilled Worker program.', 'CLB 9 in all four skills earns the maximum first-language points and unlocks skill-transferability points with education and foreign work experience.', 'Moving from CLB 8 to CLB 9 often adds 50+ CRS points in total.'] },
      { h: 'Converting your score', body: ['CELPIP level = CLB level (for CLB 4–10+).', 'PTE Core has its own conversion table. See IRCC’s official page in Resources.'] },
      { h: 'Validity', body: ['Results must be less than 2 years old when you create your profile and when you apply.'] },
    ],
  },
  {
    id: 'test-day', title: 'Test-day checklist', exams: ALL,
    summary: 'Small mistakes on test day cost points that practice cannot recover.',
    sections: [
      { h: 'Before', body: ['Valid passport (name exactly as booked).', 'Arrive 30 minutes early; know the centre’s locker rules.', 'Sleep, water, a light meal.'] },
      { h: 'During', body: ['Speaking: microphone 2–3 finger widths from your mouth, not directly in front of your breath.', 'Ignore other candidates speaking. Start your own task at your own pace.', 'Watch the timers on every section; untimed items share a section clock.'] },
    ],
  },
  {
    id: 'study-plan', title: '4-week study plan template', exams: ALL,
    summary: 'A realistic plan for working learners: 60–90 minutes a day.',
    sections: [
      { h: 'Week 1: diagnose', body: ['Take a mini mock or a CELPIP practice test.', 'Note your two weakest skills on the dashboard.'] },
      { h: 'Weeks 2–3: build', body: ['Daily: 15 minutes vocabulary trainer, 20 minutes of your weakest task, 20 minutes of high-value tasks, 10 minutes reviewing feedback.', 'Twice a week: send one speaking or writing response for examiner review.'] },
      { h: 'Week 4: simulate', body: ['Two full mocks under exam conditions.', 'Review every mistake. Rest the day before the test.'] },
    ],
  },
];
