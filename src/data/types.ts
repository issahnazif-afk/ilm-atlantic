// Shared item schema for Ilm Atlantic.
// Every practice item is ORIGINAL content written to the current PTE Academic format.
// Audio prompts are generated in the browser with text-to-speech from the `text`/`transcript` fields.

export type Skill = 'speaking' | 'writing' | 'reading' | 'listening';
export type Exam = 'pte-a' | 'pte-core' | 'celpip';
export type Difficulty = 'easy' | 'medium' | 'hard';

export type TaskCode =
  // Speaking
  | 'ra' | 'rs' | 'di' | 'rl' | 'asq' | 'sgd' | 'rts'
  // Writing
  | 'swt' | 'we'
  // Reading
  | 'rwfib' | 'mcm' | 'rop' | 'rfib' | 'mcs'
  // Listening
  | 'sst' | 'lmcm' | 'lfib' | 'hcs' | 'lmcs' | 'smw' | 'hiw' | 'wfd'
  // PTE Core only
  | 'wem'
  // CELPIP-General: listening parts 1–6, reading parts 1–4, writing tasks 1–2, speaking tasks 1–8
  | 'cl1' | 'cl2' | 'cl3' | 'cl4' | 'cl5' | 'cl6'
  | 'cr1' | 'cr2' | 'cr3' | 'cr4'
  | 'cw1' | 'cw2'
  | 'cs1' | 'cs2' | 'cs3' | 'cs4' | 'cs5' | 'cs6' | 'cs7' | 'cs8';

interface Base<T extends TaskCode> {
  id: string;            // e.g. "ra-001" — unique, prefix = task code
  task: T;
  title: string;         // short label shown in lists, e.g. "Coral reef recovery"
  difficulty: Difficulty;
  exam?: Exam;           // omitted = 'pte-a'. PTE Core items use 'pte-core'; ids must be globally unique
  testNo?: number;       // CELPIP: which practice test (1–6) this set belongs to
  topic: string;         // e.g. "Environment", "Health", "Technology", "History", "Economics", "Education", "Arts", "Society", "Science"
}

/** Voice hint for TTS. accent maps to an English voice locale where available. */
export interface Speaker {
  name: string;          // e.g. "Lecturer", "Maya", "Prof. Okafor"
  gender: 'female' | 'male';
  accent: 'en-GB' | 'en-US' | 'en-AU' | 'en-CA' | 'en-IN';
}

// ---------- Speaking ----------
export interface ReadAloud extends Base<'ra'> { text: string }                       // 40–60 words
export interface RepeatSentence extends Base<'rs'> { sentence: string; speaker: Speaker } // 8–18 words
export interface AnswerShortQuestion extends Base<'asq'> {
  question: string; speaker: Speaker;
  answers: string[];     // all acceptable answers, lowercase, 1–3 words each (e.g. ["thermometer"])
}
export type ChartSpec =
  | { kind: 'bar' | 'line'; title: string; xLabel?: string; yLabel: string; unit?: string;
      categories: string[]; series: { name: string; values: number[] }[] }
  | { kind: 'pie'; title: string; unit?: string; slices: { label: string; value: number }[] }
  | { kind: 'table'; title: string; columns: string[]; rows: (string | number)[][] }
  | { kind: 'process'; title: string; steps: string[] };   // 4–7 short steps (cycle/flow)
export interface DescribeImage extends Base<'di'> {
  chart: ChartSpec;
  keyPoints: string[];   // 3–5 points a strong answer mentions (used for content scoring)
  modelAnswer: string;   // ~60–90 words, spoken style
}
export interface RetellLecture extends Base<'rl'> {
  speaker: Speaker;
  transcript: string;    // 120–200 words (~60–90 s of speech)
  keyPoints: string[];   // 3–5
  modelAnswer: string;   // ~60–90 words
}
export interface SummarizeGroupDiscussion extends Base<'sgd'> {
  turns: { speaker: Speaker; text: string }[];  // 3 speakers, 6–9 turns, 220–320 words total
  keyPoints: string[];   // 4–6, should cover each speaker's position
  modelAnswer: string;   // ~90–120 words
}
export interface RespondToSituation extends Base<'rts'> {
  situation: string;     // 50–80 words, second person, ends by stating what to say and to whom
  speaker: Speaker;      // voice that reads the situation
  keyPoints: string[];   // 3–5 functional moves (apologise, explain, propose…)
  modelAnswer: string;   // ~60–90 words, appropriate register
}

// ---------- Writing ----------
export interface SummarizeWrittenText extends Base<'swt'> {
  passage: string;       // 200–300 words
  keyPoints: string[];   // 3–4
  modelAnswer: string;   // ONE sentence, 30–60 words
}
export interface WriteEssay extends Base<'we'> {
  prompt: string;        // PTE-style, 2–4 sentences, ends with a task instruction
  keyIdeas: string[];    // 4–6 ideas a strong essay may develop
  modelAnswer: string;   // 220–290 words, 4–5 paragraphs separated by "\n\n"
}

// ---------- Reading ----------
/** In `text`, blanks are written as {{0}}, {{1}}, … in order. */
export interface ReadingWritingFIB extends Base<'rwfib'> {
  text: string;                                  // 80–150 words, 4–6 blanks
  blanks: { options: string[]; answer: string }[]; // 4 options each, answer ∈ options
}
export interface ReadingMCMultiple extends Base<'mcm'> {
  passage: string; question: string;
  options: string[];     // 5–7
  answers: number[];     // indexes of correct options (2–3)
  explanation: string;
}
export interface ReorderParagraphs extends Base<'rop'> {
  paragraphs: string[];  // 4–5 sentences/short paragraphs in the CORRECT order (UI shuffles)
  explanation: string;   // the cohesion clues
}
export interface ReadingFIB extends Base<'rfib'> {
  text: string;          // 70–130 words with {{0}}… blanks (3–5)
  answers: string[];     // answers[i] fills {{i}}
  distractors: string[]; // 2–3 extra words in the word bank
}
export interface ReadingMCSingle extends Base<'mcs'> {
  passage: string; question: string;
  options: string[];     // 4–5
  answer: number;
  explanation: string;
}

// ---------- Listening ----------
export interface SummarizeSpokenText extends Base<'sst'> {
  speaker: Speaker; transcript: string;          // 180–260 words
  keyPoints: string[]; modelAnswer: string;      // model 50–70 words
}
export interface ListeningMCMultiple extends Base<'lmcm'> {
  speaker: Speaker; transcript: string;          // 100–180 words
  question: string; options: string[]; answers: number[]; explanation: string;
}
/** Transcript shown with gaps: words to remove are wrapped like [[word]] (single words, 4–7 gaps). */
export interface ListeningFIB extends Base<'lfib'> {
  speaker: Speaker; transcript: string;          // 70–120 words
}
export interface HighlightCorrectSummary extends Base<'hcs'> {
  speaker: Speaker; transcript: string;          // 100–160 words
  options: string[];     // 4 summaries, 30–50 words each
  answer: number; explanation: string;
}
export interface ListeningMCSingle extends Base<'lmcs'> {
  speaker: Speaker; transcript: string;          // 80–150 words
  question: string; options: string[]; answer: number; explanation: string;
}
export interface SelectMissingWord extends Base<'smw'> {
  speaker: Speaker;
  transcript: string;    // 60–120 words; the audio stops before the missing ending
  missing: string;       // the ending that was cut (the correct option text)
  options: string[];     // 4–5, includes `missing`
  answer: number;        // index of `missing` in options
}
export interface HighlightIncorrectWords extends Base<'hiw'> {
  speaker: Speaker;
  transcript: string;    // 60–100 words — what is SPOKEN
  /** Words changed in the on-screen version. index = 0-based position in transcript.split(' ') */
  changes: { index: number; shown: string }[];   // 3–6 changes, plausible substitutions
}
export interface WriteFromDictation extends Base<'wfd'> { sentence: string; speaker: Speaker } // 8–14 words

// ---------- PTE Core ----------
export interface WriteEmail extends Base<'wem'> {
  situation: string;     // 40–70 words: who you write to, why; ends with the 3 points to cover
  points: string[];      // the 3 bullet points the email must address
  keyPoints: string[];   // content an examiner expects (3–5)
  modelAnswer: string;   // 90–120 words: greeting, paragraphs, sign-off (newline-separated)
}

// ---------- CELPIP ----------
/** One multiple-choice / dropdown question inside a CELPIP set. */
export interface CelpipQuestion {
  prompt: string;        // question stem; for dropdown blanks use the sentence with "_____"
  options: string[];     // 3–4 options (Reading Part 3 uses ["A","B","C","D","E"], E = not given)
  answer: number;        // index into options
  explanation: string;   // 1–2 sentences: why right, why the tempting option is wrong
  section?: number;      // Listening Part 1 only: which audio section (0,1,2) the question follows
}
/** An illustrated scene built from emoji on a backdrop (Speaking Tasks 3, 4, 8). */
export interface Scene {
  backdrop: 'park' | 'street' | 'kitchen' | 'living-room' | 'office' | 'store' | 'beach' | 'campsite' | 'classroom' | 'airport' | 'restaurant' | 'backyard' | 'winter';
  elements: { e: string; x: number; y: number; size?: number; label?: string }[]; // x,y in % (0–100); size in px (default 44)
  caption: string;       // one-line alt text describing the scene
}
/** Listening & reading sets: context + passage/audio + several questions. */
export interface CelpipSet<T extends 'cl1' | 'cl2' | 'cl3' | 'cl4' | 'cl5' | 'cl6' | 'cr1' | 'cr2' | 'cr3' | 'cr4'> extends Base<T> {
  context: string;       // one-line situation shown before the audio/text
  audio?: { speaker: Speaker; text: string }[][];  // LISTENING: sections of dialogue turns (Part 1 has 3 sections; others 1)
  passage?: string;      // READING Parts 1, 2, 4: the main text (letter, email, article)
  paragraphs?: string[]; // READING Part 3: paragraphs A–D
  diagram?: ChartSpec;   // READING Part 2: the diagram / schedule / comparison table
  reply?: string;        // READING Parts 1, 2, 4: a second text with {{n}} blanks; {{n}} = questions[n] (rendered as dropdowns)
  questions: CelpipQuestion[];
}
export type CelpipListening = CelpipSet<'cl1'> | CelpipSet<'cl2'> | CelpipSet<'cl3'> | CelpipSet<'cl4'> | CelpipSet<'cl5'> | CelpipSet<'cl6'>;
export type CelpipReading = CelpipSet<'cr1'> | CelpipSet<'cr2'> | CelpipSet<'cr3'> | CelpipSet<'cr4'>;
export interface CelpipWriting extends Base<'cw1' | 'cw2'> {
  prompt: string;        // the task text
  points?: string[];     // cw1: the 3 things the email must do
  choices?: [string, string]; // cw2: Option A / Option B
  keyPoints: string[];
  modelAnswer: string;   // 160–200 words
}
export interface CelpipSpeaking extends Base<'cs1' | 'cs2' | 'cs3' | 'cs4' | 'cs5' | 'cs6' | 'cs7' | 'cs8'> {
  prompt: string;        // the task question as shown on screen
  scene?: Scene;         // cs3, cs4, cs8
  choices?: { title: string; details: string[] }[]; // cs5 (two options), cs6 (two choices)
  keyPoints: string[];   // 3–5 ideas a strong response covers
  modelAnswer: string;   // natural spoken response sized to the response time
}

export type Item =
  | ReadAloud | RepeatSentence | AnswerShortQuestion | DescribeImage | RetellLecture
  | SummarizeGroupDiscussion | RespondToSituation
  | SummarizeWrittenText | WriteEssay
  | ReadingWritingFIB | ReadingMCMultiple | ReorderParagraphs | ReadingFIB | ReadingMCSingle
  | SummarizeSpokenText | ListeningMCMultiple | ListeningFIB | HighlightCorrectSummary
  | ListeningMCSingle | SelectMissingWord | HighlightIncorrectWords | WriteFromDictation
  | WriteEmail | CelpipListening | CelpipReading | CelpipWriting | CelpipSpeaking;

/** The item type(s) whose `task` can be T (works for interfaces covering several task codes). */
export type ItemOf<T extends TaskCode> = Item extends infer I ? (I extends { task: infer K } ? ([T] extends [K] ? I : T extends K ? I : never) : never) : never;
