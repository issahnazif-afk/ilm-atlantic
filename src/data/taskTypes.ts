import type { Exam, Item, Skill, TaskCode } from './types';

export interface TaskMeta {
  code: TaskCode;
  name: string;
  short: string;
  section: Skill;                         // where it appears in the test
  contributes: Partial<Record<Skill, number>>; // weight towards communicative skill scores
  aiScored: boolean;
  isNew?: boolean;                        // added in the 2025 format update
  unit?: string;                          // what one item is called, e.g. 'sets' for CELPIP passages
  only?: Exam;                            // task exists only in this exam (e.g. CELPIP tasks, PTE Core Write Email)
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
    aiScored: true, prepSec: 10, responseSec: 40,
    instruction: 'Listen to and read a description of a situation. You will have 10 seconds to think about your answer. After the audio you have 10 more seconds, then you will hear a beep. You will have 40 seconds to answer the question. Please answer as completely as you can.',
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

// ---------------- PTE Core only ----------------
TASKS.push({
  code: 'wem', name: 'Write Email', short: 'Email', section: 'writing', contributes: { writing: 1 }, only: 'pte-core',
  aiScored: true, timeLimitSec: 540,
  instruction: 'Read the description of a situation. Then write an email about the situation. You will have 9 minutes. You should aim to write between 50 and 120 words (80 to 120 recommended).',
  scoring: 'Content 0-3, Email conventions 0-2, Form 0-2 (50-120 words), Organization 0-2, Vocabulary range 0-2, Grammar 0-2, Spelling 0-2.',
  tips: ['Cover all three bullet points: each one is part of Content.', 'Match register to the reader: "Dear Ms Chen ... Kind regards" vs "Hi Sam ... Cheers".', 'Greeting, purpose, one short paragraph per point, polite close, sign-off.'],
});

// ---------------- CELPIP-General ----------------
const C = (t: Omit<TaskMeta, 'only' | 'contributes'> & { contributes?: TaskMeta['contributes'] }): TaskMeta =>
  ({ only: 'celpip', contributes: { [t.section]: 1 }, ...t });
const L = (code: TaskCode, n: number, name: string, q: number, desc: string, tips: string[]) => C({
  code, name: `Listening Part ${n}: ${name}`, short: `L${n}`, section: 'listening', aiScored: false, unit: 'sets', suggestedSec: q * 60,
  instruction: `${desc} You will hear the recording only once. Then answer ${q} questions by choosing the best answer from the drop-down menu.`,
  scoring: `${q} questions, 1 point each. The raw listening score (out of 38 on the full test) is converted to a CELPIP level.`, tips,
});
const R = (code: TaskCode, n: number, name: string, q: number, desc: string, mins: number, tips: string[]) => C({
  code, name: `Reading Part ${n}: ${name}`, short: `R${n}`, section: 'reading', aiScored: false, unit: 'sets', suggestedSec: mins * 60,
  instruction: `${desc} Choose the best option for each of the ${q} questions. Suggested time: about ${mins} minutes.`,
  scoring: `${q} questions, 1 point each. The raw reading score (out of 38) is converted to a CELPIP level.`, tips,
});
const S = (code: TaskCode, n: number, name: string, prep: number, resp: number, instruction: string, tips: string[]) => C({
  code, name: `Speaking Task ${n}: ${name}`, short: `S${n}`, section: 'speaking', aiScored: true, prepSec: prep, responseSec: resp, instruction,
  scoring: 'Rated on Content/Coherence, Vocabulary, Listenability and Task Fulfillment, giving a CELPIP level.', tips,
});
TASKS.push(
  L('cl1', 1, 'Problem Solving', 8, 'Listen to a conversation in three sections about a problem being solved.', ['Each section is followed by its own questions. Focus on what changes from one section to the next.', 'Track who suggests what and what is finally decided.']),
  L('cl2', 2, 'Daily Life Conversation', 5, 'Listen to an everyday conversation.', ["Listen for each speaker's attitude and the reason behind it."]),
  L('cl3', 3, 'Listening for Information', 6, 'Listen to a conversation in which one person gives information to another.', ['Note numbers, names, steps and conditions: questions test details.']),
  L('cl4', 4, 'News Item', 5, 'Listen to a news report.', ['Who, what, where, why, and what happens next.']),
  L('cl5', 5, 'Discussion', 8, 'Listen to a discussion between several people (in the real test this is a video).', ['Keep a column per speaker: opinion, reason, change of mind.']),
  L('cl6', 6, 'Viewpoints', 6, 'Listen to a report presenting different viewpoints on an issue.', ["Separate the speaker's own view from views they report."]),
  R('cr1', 1, 'Correspondence', 11, 'Read a message, then complete a response to it.', 11, ['Questions 1-6 test the message; 7-11 test whether you understood it well enough to reply.', 'Check that the completed reply is consistent with the original message.']),
  R('cr2', 2, 'Apply a Diagram', 8, 'Read an email and use the diagram to complete a reply.', 9, ['Read the email first to know what the writer needs, then scan the diagram for it.']),
  R('cr3', 3, 'Information', 9, 'Read four paragraphs. Decide which paragraph (A-D) contains the information in each statement, or E if none of them does.', 10, ['Paraphrase is key: the statement rarely repeats the paragraph words.', 'Choose E only when no paragraph says it, not when it is merely implied.']),
  R('cr4', 4, 'Viewpoints', 10, "Read an article, then complete a reader's comment about it.", 13, ["Identify the writer's position and the opposing view early.", 'In the comment, keep track of whether the reader agrees or disagrees.']),
  C({ code: 'cw1', name: 'Writing Task 1: Writing an Email', short: 'W1', section: 'writing', aiScored: true, timeLimitSec: 27 * 60,
    instruction: 'Read the situation and write an email of about 150-200 words that does all three things listed. You have 27 minutes.',
    scoring: 'Rated on Content/Coherence, Vocabulary, Readability and Task Fulfillment, giving a CELPIP level.',
    tips: ['Address all three bullet points, one paragraph each.', 'Choose the right tone for the reader (friend vs. manager vs. company).', 'Stay within 150-200 words: length is part of Task Fulfillment.'] }),
  C({ code: 'cw2', name: 'Writing Task 2: Responding to Survey Questions', short: 'W2', section: 'writing', aiScored: true, timeLimitSec: 26 * 60,
    instruction: 'Read the survey question and choose Option A or Option B. Explain your choice in about 150-200 words. You have 26 minutes.',
    scoring: 'Rated on Content/Coherence, Vocabulary, Readability and Task Fulfillment, giving a CELPIP level.',
    tips: ['State your choice in the first sentence.', 'Give two developed reasons with examples; you may briefly say why the other option is weaker.'] }),
  S('cs1', 1, 'Giving Advice', 30, 90, 'Give advice to the person described. You have 30 seconds to prepare and 90 seconds to speak.', ['Offer 2-3 pieces of advice, each with a reason.', 'Speak directly to the person: "If I were you...", "You might want to...".']),
  S('cs2', 2, 'Talking about a Personal Experience', 30, 60, 'Talk about a personal experience. You have 30 seconds to prepare and 60 seconds to speak.', ['Set the scene (when, where, who), tell what happened, then how you felt or what you learned.']),
  S('cs3', 3, 'Describing a Scene', 30, 60, 'Describe some things that are happening in the picture as well as you can. The person you are speaking to cannot see the picture. 30 seconds to prepare, 60 seconds to speak.', ['Move systematically: foreground to background, left to right.', 'Use the present continuous: "A man is pushing...".']),
  S('cs4', 4, 'Making Predictions', 30, 60, 'In this picture, what do you think will most probably happen next? 30 seconds to prepare, 60 seconds to speak.', ['Make 3-4 predictions with reasons from the picture: "Because..., he will probably...".']),
  S('cs5', 5, 'Comparing and Persuading', 60, 60, 'Choose one of the two options, then persuade a family member that your choice is better than the other one. 60 seconds to choose and prepare, 60 seconds to speak.', ['Compare on the same features (price, location, size).', 'Persuade: acknowledge the other option, then show why yours wins.']),
  S('cs6', 6, 'Dealing with a Difficult Situation', 60, 60, 'Read the situation, choose one option, and speak to the person indicated. 60 seconds to prepare, 60 seconds to speak.', ['Be polite and diplomatic; explain your decision and offer a solution.']),
  S('cs7', 7, 'Expressing Opinions', 30, 90, 'Answer the question and give reasons for your opinion. 30 seconds to prepare and 90 seconds to speak.', ['State your opinion clearly, give two or three reasons with examples, then conclude.']),
  S('cs8', 8, 'Describing an Unusual Situation', 30, 60, 'Describe this unusual situation to someone on the phone who cannot see it. 30 seconds to prepare, 60 seconds to speak.', ['Describe size, shape, colour and location: the listener must picture it from your words alone.']),
);

export const TASK = Object.fromEntries(TASKS.map((t) => [t.code, t])) as Record<TaskCode, TaskMeta>;

export const SKILLS: { key: Skill; label: string; color: string }[] = [
  { key: 'speaking', label: 'Speaking', color: 'var(--c-speaking)' },
  { key: 'writing', label: 'Writing', color: 'var(--c-writing)' },
  { key: 'reading', label: 'Reading', color: 'var(--c-reading)' },
  { key: 'listening', label: 'Listening', color: 'var(--c-listening)' },
];

// ---------------------------------------------------------------- Exams

export interface ExamMeta {
  key: Exam;
  name: string;
  short: string;
  scale: 'pte' | 'celpip';
  blurb: string;
}

export const EXAMS: ExamMeta[] = [
  { key: 'pte-a', name: 'PTE Academic', short: 'PTE-A', scale: 'pte', blurb: 'For university admission and visas in Australia, the UK, New Zealand and Canada (student).' },
  { key: 'pte-core', name: 'PTE Core', short: 'PTE Core', scale: 'pte', blurb: 'The general-English PTE test accepted by IRCC for Canadian PR and citizenship.' },
  { key: 'celpip', name: 'CELPIP-General', short: 'CELPIP', scale: 'celpip', blurb: 'Canada’s everyday-English test for PR and citizenship, scored in CLB-aligned levels 1–12.' },
];
export const EXAM = Object.fromEntries(EXAMS.map((e) => [e.key, e])) as Record<Exam, ExamMeta>;

/** Task codes offered in each exam, in test order. */
export const EXAM_TASKS: Record<Exam, TaskCode[]> = {
  'pte-a': TASKS.filter((t) => !t.only).map((t) => t.code),
  'pte-core': ['ra', 'rs', 'di', 'rts', 'asq', 'swt', 'wem', 'rwfib', 'mcm', 'rop', 'rfib', 'mcs', 'sst', 'lmcm', 'lfib', 'lmcs', 'smw', 'hiw', 'wfd'],
  celpip: ['cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6', 'cr1', 'cr2', 'cr3', 'cr4', 'cw1', 'cw2', 'cs1', 'cs2', 'cs3', 'cs4', 'cs5', 'cs6', 'cs7', 'cs8'],
};

/** Per-exam overrides of task metadata (e.g. PTE Core timings). */
export const OVERRIDES: Partial<Record<Exam, Partial<Record<TaskCode, Partial<TaskMeta>>>>> = {
  'pte-core': {
    ra: { instruction: 'Look at the text below. In 30-40 seconds, you must read this text aloud as naturally and clearly as possible.' },
    rts: {
      prepSec: 20,
      instruction: 'Read and listen to a description of a situation. You have 20 seconds to think, the situation is read aloud, then you have 20 more seconds before the beep. You will have 40 seconds to respond.',
      scoring: 'Appropriacy 0-3 (purpose, register, politeness), Oral fluency 0-5, Pronunciation 0-5.',
    },
    swt: {
      instruction: 'Read the passage below and summarize it using one sentence. Type your response in the box at the bottom of the screen. You have 10 minutes. Write 25-50 words.',
      scoring: 'Content 0-2, Form 0-2 (one sentence; 25-50 words = 2, 5-24 or 51-60 = 1), Grammar 0-2, Vocabulary 0-2. Form 0 = item score 0.',
      tips: ['One sentence of 25-50 words.', 'Main idea plus the most important supporting detail.'],
    },
    sst: {
      timeLimitSec: 480,
      instruction: 'You will hear a short recording. Write a summary for someone who did not hear it. You should write 20-30 words. You have 8 minutes to finish this task.',
      scoring: 'Content 0-2, Form 0-2 (20-30 words = 2, 5-19 or 31-40 = 1), Grammar 0-2, Vocabulary 0-2, Spelling 0-2.',
      tips: ['20-30 words: one or two sentences with the main point and one key detail.'],
    },
  },
};

export const examOf = (item: Pick<Item, 'exam'>): Exam => item.exam ?? 'pte-a';

export function taskMeta(code: TaskCode, exam: Exam = 'pte-a'): TaskMeta {
  return { ...TASK[code], ...(OVERRIDES[exam]?.[code] ?? {}) };
}
export const metaFor = (item: Item) => taskMeta(item.task, examOf(item));
