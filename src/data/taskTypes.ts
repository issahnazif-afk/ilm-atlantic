import type { Skill, TaskCode } from './types';

export interface TaskMeta {
  code: TaskCode;
  name: string;
  short: string;
  section: Skill;                         // where it appears in the test
  contributes: Partial<Record<Skill, number>>; // weight towards communicative skill scores
  aiScored: boolean;
  isNew?: boolean;                        // added in the 2025 format update
  prepSec?: number;
  responseSec?: number;                   // speaking: recording time
  timeLimitSec?: number;                  // writing-type items with their own timer
  suggestedSec?: number;                  // untimed items: suggested pace for practice
  instruction: string;
  scoring: string;
  tips: string[];
}

export const TASKS: TaskMeta[] = [
  // ---------------- Speaking ----------------
  {
    code: 'ra', name: 'Read Aloud', short: 'RA', section: 'speaking', contributes: { speaking: 1, reading: 0.6 },
    aiScored: true, prepSec: 35, responseSec: 40,
    instruction: 'Look at the text below. In 35 seconds, you must read this text aloud as naturally and clearly as possible. You have 40 seconds to read aloud.',
    scoring: 'Content (every replaced, omitted or inserted word counts against you), Oral fluency 0–5, Pronunciation 0–5.',
    tips: ['Use the preparation time to mark phrase breaks — read in chunks of 3–6 words.', 'Keep going after a slip; do not restart the sentence.', 'Recording stops if you are silent for 3 seconds, so start promptly after the tone.'],
  },
  {
    code: 'rs', name: 'Repeat Sentence', short: 'RS', section: 'speaking', contributes: { speaking: 1, listening: 0.8 },
    aiScored: true, prepSec: 0, responseSec: 15,
    instruction: 'You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence only once.',
    scoring: 'Content 0–3 (all words in sequence = 3), Oral fluency 0–5, Pronunciation 0–5.',
    tips: ['Listen for meaning, not single words — meaning chunks are easier to hold.', 'Copy the speaker’s rhythm and intonation.', 'If you lose a word, keep the flow; fluency is scored separately.'],
  },
  {
    code: 'di', name: 'Describe Image', short: 'DI', section: 'speaking', contributes: { speaking: 1 },
    aiScored: true, prepSec: 25, responseSec: 40,
    instruction: 'Look at the image below. In 25 seconds, please speak into the microphone and describe in detail what the image is showing. You will have 40 seconds to give your response.',
    scoring: 'Content 0–5 (key elements, relationships, implications), Oral fluency 0–5, Pronunciation 0–5.',
    tips: ['Structure: overview → 2–3 key figures or trends → comparison → conclusion/implication.', 'Name the highest, lowest and the main trend using the real numbers.', 'Finish with an implication — content band 5 asks for it.'],
  },
  {
    code: 'rl', name: 'Re-tell Lecture', short: 'RL', section: 'speaking', contributes: { speaking: 1, listening: 0.8 },
    aiScored: true, prepSec: 10, responseSec: 40,
    instruction: 'You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give your response.',
    scoring: 'Content 0–5, Oral fluency 0–5, Pronunciation 0–5.',
    tips: ['Note the topic, 3–4 keywords and the conclusion — not full sentences.', 'Open with "The lecture discussed…" and close with the speaker’s conclusion.', 'Paraphrase; you are rewarded for meaning, not for copying phrases.'],
  },
  {
    code: 'asq', name: 'Answer Short Question', short: 'ASQ', section: 'speaking', contributes: { speaking: 0.6, listening: 0.6 },
    aiScored: true, prepSec: 0, responseSec: 10,
    instruction: 'You will hear a question. Please give a simple and short answer. Often just one or a few words is enough.',
    scoring: 'Vocabulary 0–1: the answer is correct or not.',
    tips: ['One or two words is enough — do not explain.', 'Answer straight after the tone.'],
  },
  {
    code: 'sgd', name: 'Summarize Group Discussion', short: 'SGD', section: 'speaking', contributes: { speaking: 1, listening: 1 }, isNew: true,
    aiScored: true, prepSec: 10, responseSec: 120,
    instruction: 'You will hear a group discussion. After listening, in 10 seconds, please speak into the microphone and summarise the discussion. You will have 2 minutes to give your response.',
    scoring: 'Content 0–5 (topic, each speaker’s view, outcome), Oral fluency 0–5, Pronunciation 0–5.',
    tips: ['Track each speaker’s position separately: who argued what, and why.', 'Use reporting verbs: argued, pointed out, disagreed, conceded, concluded.', 'End with where the group landed — agreement, compromise or open question.'],
  },
  {
    code: 'rts', name: 'Respond to a Situation', short: 'RTS', section: 'speaking', contributes: { speaking: 1, listening: 0.4 }, isNew: true,
    aiScored: true, prepSec: 20, responseSec: 40,
    instruction: 'Listen to and read a description of a situation. You will have 20 seconds to think about your answer. Then you will hear a beep. You will have 40 seconds to answer the question. Please answer as completely as you can.',
    scoring: 'Appropriacy 0–5 (purpose, register, politeness), Oral fluency 0–5, Pronunciation 0–5.',
    tips: ['Match the register to the listener: a professor or manager needs polite, indirect language.', 'Cover the function moves: greet → state purpose → explain → propose → close.', 'Use softeners: "I was wondering if…", "Would it be possible to…".'],
  },
  // ---------------- Writing ----------------
  {
    code: 'swt', name: 'Summarize Written Text', short: 'SWT', section: 'writing', contributes: { writing: 1, reading: 0.8 },
    aiScored: true, timeLimitSec: 600,
    instruction: 'Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points in the passage.',
    scoring: 'Content 0–2, Form 0–1 (one sentence, 5–75 words), Grammar 0–2, Vocabulary 0–2. Form 0 = item score 0.',
    tips: ['One sentence only: one capital at the start, one full stop at the end.', 'Main idea + 2 supporting points joined with "while", "which", "and", "; however,".', 'Aim for 30–50 words — long enough for content, short enough to control grammar.'],
  },
  {
    code: 'we', name: 'Write Essay', short: 'WE', section: 'writing', contributes: { writing: 1 },
    aiScored: true, timeLimitSec: 1200,
    instruction: 'You will have 20 minutes to plan, write and revise an essay about the topic below. Your response will be judged on how well you develop a position, organize your ideas, present supporting details, and control the elements of standard written English. You should write 200–300 words.',
    scoring: 'Content 0–3, Form 0–2, Development/structure/coherence 0–2, Grammar 0–2, General linguistic range 0–2, Vocabulary range 0–2, Spelling 0–2.',
    tips: ['Four or five paragraphs: introduction with position, two body paragraphs, (counter-argument), conclusion.', 'Answer every part of the prompt — content is judged against the question.', 'Leave 2 minutes to proofread spelling — there is no spell-checker in the test.'],
  },
  // ---------------- Reading ----------------
  {
    code: 'rwfib', name: 'Reading & Writing: Fill in the Blanks', short: 'R&W FIB', section: 'reading', contributes: { reading: 1, writing: 0.6 },
    aiScored: false, suggestedSec: 120,
    instruction: 'Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.',
    scoring: '1 point per correct blank.',
    tips: ['Read the whole sentence first, then check grammar (word class) and collocation.', 'Eliminate options that are the wrong part of speech before thinking about meaning.'],
  },
  {
    code: 'mcm', name: 'Reading: Multiple Choice, Multiple Answers', short: 'MCM', section: 'reading', contributes: { reading: 1 },
    aiScored: false, suggestedSec: 150,
    instruction: 'Read the text and answer the question by selecting all the correct responses. More than one response is correct.',
    scoring: '+1 for each correct option, −1 for each incorrect option (minimum 0).',
    tips: ['Negative marking applies — only select options you can justify from the text.', 'Read the question before the passage.'],
  },
  {
    code: 'rop', name: 'Re-order Paragraphs', short: 'ROP', section: 'reading', contributes: { reading: 1 },
    aiScored: false, suggestedSec: 150,
    instruction: 'The text boxes below have been placed in a random order. Restore the original order by moving the boxes into the right-hand panel.',
    scoring: '1 point for each correctly ordered adjacent pair.',
    tips: ['Find the topic sentence: it introduces a subject with no pronoun or "this/these".', 'Lock pairs using pronouns, articles (a → the) and connectives (however, as a result).'],
  },
  {
    code: 'rfib', name: 'Reading: Fill in the Blanks', short: 'R FIB', section: 'reading', contributes: { reading: 1 },
    aiScored: false, suggestedSec: 120,
    instruction: 'In the text below some words are missing. Drag words from the box below to the appropriate place in the text. To undo an answer choice, drag the word back to the box below the text.',
    scoring: '1 point per correct blank.',
    tips: ['Decide the word class needed for each gap before looking at the word bank.', 'There are extra words — expect distractors.'],
  },
  {
    code: 'mcs', name: 'Reading: Multiple Choice, Single Answer', short: 'MCS', section: 'reading', contributes: { reading: 1 },
    aiScored: false, suggestedSec: 120,
    instruction: 'Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.',
    scoring: '1 point if correct.',
    tips: ['The correct option paraphrases the text; options that copy text word-for-word are often traps.'],
  },
  // ---------------- Listening ----------------
  {
    code: 'sst', name: 'Summarize Spoken Text', short: 'SST', section: 'listening', contributes: { listening: 1, writing: 0.8 },
    aiScored: true, timeLimitSec: 600,
    instruction: 'You will hear a short lecture. Write a summary for a fellow student who was not present at the lecture. The summary should be 50–70 words. You have 10 minutes to finish this task.',
    scoring: 'Content 0–2, Form 0–2 (50–70 words), Grammar 0–2, Vocabulary 0–2, Spelling 0–2.',
    tips: ['Note-take with keywords while listening; write afterwards.', 'Two or three sentences: topic → key points → conclusion.'],
  },
  {
    code: 'lmcm', name: 'Listening: Multiple Choice, Multiple Answers', short: 'L-MCM', section: 'listening', contributes: { listening: 1 },
    aiScored: false, suggestedSec: 90,
    instruction: 'Listen to the recording and answer the question by selecting all the correct responses. You will need to select more than one response.',
    scoring: '+1 for each correct option, −1 for each incorrect option (minimum 0).',
    tips: ['Read the question and skim options before the audio starts.', 'Negative marking — leave out options you are unsure of.'],
  },
  {
    code: 'lfib', name: 'Listening: Fill in the Blanks', short: 'L FIB', section: 'listening', contributes: { listening: 1, writing: 0.5 },
    aiScored: false, suggestedSec: 60,
    instruction: 'You will hear a recording. Type the missing words in each blank.',
    scoring: '1 point per correctly spelled word.',
    tips: ['Type the first letters as you hear them, then complete after the audio.', 'Check spelling and plural -s at the end.'],
  },
  {
    code: 'hcs', name: 'Highlight Correct Summary', short: 'HCS', section: 'listening', contributes: { listening: 1, reading: 0.6 },
    aiScored: false, suggestedSec: 90,
    instruction: 'You will hear a recording. Click on the paragraph that best relates to the recording.',
    scoring: '1 point if correct.',
    tips: ['Eliminate summaries that contain a detail the speaker never said.', 'The right summary covers the main idea, not just one example.'],
  },
  {
    code: 'lmcs', name: 'Listening: Multiple Choice, Single Answer', short: 'L-MCS', section: 'listening', contributes: { listening: 1 },
    aiScored: false, suggestedSec: 60,
    instruction: 'Listen to the recording and answer the multiple-choice question by selecting the correct response. Only one response is correct.',
    scoring: '1 point if correct.',
    tips: ['Focus on the speaker’s purpose and main point.'],
  },
  {
    code: 'smw', name: 'Select Missing Word', short: 'SMW', section: 'listening', contributes: { listening: 1 },
    aiScored: false, suggestedSec: 45,
    instruction: 'You will hear a recording about a topic. At the end of the recording the last word or group of words has been replaced by a beep. Select the correct option to complete the recording.',
    scoring: '1 point if correct.',
    tips: ['Follow the argument — the ending usually completes the main idea.'],
  },
  {
    code: 'hiw', name: 'Highlight Incorrect Words', short: 'HIW', section: 'listening', contributes: { listening: 1, reading: 0.6 },
    aiScored: false, suggestedSec: 45,
    instruction: 'You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker said. Please click on the words that are different.',
    scoring: '+1 for each correct word, −1 for each incorrect click (minimum 0).',
    tips: ['Follow the text with your eyes (or cursor) word by word as you listen.', 'Click immediately — do not wait for the audio to end.'],
  },
  {
    code: 'wfd', name: 'Write From Dictation', short: 'WFD', section: 'listening', contributes: { listening: 1, writing: 1 },
    aiScored: true, suggestedSec: 45,
    instruction: 'You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.',
    scoring: '1 point per correctly spelled word.',
    tips: ['Type immediately — note the content words first, then fill the function words.', 'Check plurals, articles and verb endings before submitting.'],
  },
];

export const TASK = Object.fromEntries(TASKS.map((t) => [t.code, t])) as Record<TaskCode, TaskMeta>;

export const SKILLS: { key: Skill; label: string; color: string }[] = [
  { key: 'speaking', label: 'Speaking', color: 'var(--c-speaking)' },
  { key: 'writing', label: 'Writing', color: 'var(--c-writing)' },
  { key: 'reading', label: 'Reading', color: 'var(--c-reading)' },
  { key: 'listening', label: 'Listening', color: 'var(--c-listening)' },
];
