# Ilm Atlantic: content writer's brief

You are writing practice items for Ilm Atlantic, an exam-prep site for **PTE Academic**, **PTE Core** and **CELPIP-General**. The site is a Vite + React + TypeScript app at `C:\Users\csgrad\projects\ilm-atlantic`.

## The contract
- `src/data/types.ts` is the schema. Read it first and follow every field comment: word counts, option counts, marker formats.
- Read the relevant section of `docs/research/exam-formats-and-resources.md` for the official format of your exam. Where it disagrees with a comment in types.ts, the overrides below win.
- Look at one or two existing items in `src/data/items/speaking.ts`, `writing-reading.ts` or `listening.ts` to match the style.
- Your file exports exactly one array: `export const <camelName>: Item[] = [ ... ];` with `import type { Item } from '../types';`. Create **only** the file you are assigned. Do not edit any other file.

## Non-negotiable rules
1. **100% original writing.** Do not reproduce, closely paraphrase or "reconstruct" any item from Pearson, Longman, Paragon/Prometric (CELPIP), any prep website, or any "real exam", "recalled" or "prediction" question. Do not look such questions up. Write fresh material to the published *format* only.
2. **Facts must be true, or clearly generic or hypothetical.** For example, "a city council survey found…" is fine. Do not attribute invented findings to real named studies, people or organisations. Charts use plausible, internally consistent numbers.
3. **Register:** PTE Academic is academic (lectures, research, campus). PTE Core and CELPIP use everyday, workplace and community English, and Canadian settings are welcome: transit, landlords, community centres, workplaces, weather, banking, healthcare clinics, school boards, volunteering, newcomers. CELPIP is Canadian-made: use Canadian spelling and contexts (neighbour, centre, colour, cheque).
4. **Use plain ASCII quotes and apostrophes** in TS strings. Prefer double-quoted strings; escape where needed.
5. **Spread** difficulty (easy/medium/hard roughly 30/45/25 %) and `topic` across many topics. Vary `Speaker` accents (en-CA, en-US, en-GB, en-AU, en-IN) and genders. Speakers in a dialogue must be distinct.
6. **Audio is browser text-to-speech.** Transcripts must be natural spoken English with no stage directions, no sound effects, no "(laughs)", and no speaker labels inside `text`.
7. **Explanations teach:** say why the answer is right and why the most tempting distractor is wrong.
8. Model answers show a high-band response, C1 or CELPIP 10+, at the right length.

## IDs and exam field
- **PTE Academic:** `"<task>-NNN"`, e.g. `"ra-006"`. Omit `exam`, or set `exam: "pte-a"`. Use only the number range you are given.
- **PTE Core:** `"core-<task>-NNN"`, e.g. `"core-ra-001"`. Set `exam: "pte-core"`.
- **CELPIP:** `"cel-<task>-NN"`, e.g. `"cel-cl1-01"`. Set `exam: "celpip"` and `testNo` (the practice-test number you are given).

## Format overrides (these win over the comments in types.ts)
- **PTE Core SWT:** `passage` 120–200 words. `modelAnswer` is ONE sentence of 25–50 words.
- **PTE Core SST:** `transcript` 110–180 words (45–75 s of audio). `modelAnswer` is 20–30 words.
- **PTE Core WEM (Write Email):** `situation` ≤ 100 words. `points` is exactly 3 bullet items. `modelAnswer` is 80–120 words with a greeting, short paragraphs and a sign-off, separated by `\n`.
- **PTE Core RTS:** everyday or workplace situations. The response should be polite and appropriate in register.
- **PTE Core reading:** R&W FIB text ≤ 200 words; MCM ≤ 275; ROP ≤ 110 words in total; R-FIB ≤ 80; MCS ≤ 110.
- **CELPIP sets (listening and reading):** set `questions` to exactly the number for the part:
  - cl1 = 8: `audio` has exactly **3 sections**; each question has `section` 0, 1 or 2, e.g. 3/3/2.
  - cl2 = 5, cl3 = 6, cl4 = 5 (news report, one speaker), cl5 = 8 (discussion, 3 speakers), cl6 = 6 (viewpoints talk or report).
  - cr1 = 11: `passage` is a letter or email. Questions 0–5 are MC about it. `reply` is a response message containing `{{6}}`…`{{10}}`, and questions 6–10 are the dropdown blanks.
  - cr2 = 8: `diagram` is a ChartSpec, usually a `table` comparing options or a schedule. `passage` is an email. `reply` contains `{{0}}`…`{{4}}`, and questions 0–4 are the blanks that need the diagram. Questions 5–7 are MC.
  - cr3 = 9: `paragraphs` is exactly 4 (A–D). Each question is a statement with options `["A","B","C","D","E"]`, where E = "not given in any paragraph". Use E for 1–2 questions.
  - cr4 = 10: `passage` is an opinion article. Questions 0–4 are MC. `reply` is a reader's comment with `{{5}}`…`{{9}}`, and questions 5–9 are the blanks.
  - Blank questions: `prompt` = the sentence with `_____`, and 3–4 `options`.
  - Listening and reading MC have 4 options. Questions should test detail, inference, the speaker's attitude and purpose, as on the real test.
- **CELPIP writing:** cw1 has `points` (3) and a model answer of 150–200 words. cw2 has `choices` [Option A, Option B] and a model answer of 150–200 words that argues for one choice.
- **CELPIP speaking:**
  - cs3, cs4 and cs8 need a `scene`: emoji `elements` on a `backdrop`, with x/y in %. Use 6–12 elements that make a describable picture. cs4 predicts from the same kind of scene.
  - cs5 has two `choices`, each with a title and 3–4 details.
  - cs6 has two `choices` (the two people or options in the dilemma).
  - Model answers are about 130 words for 60 s tasks and about 190 words for 90 s tasks.

## Before you finish
Run both checks from the project root and fix every error:
```
npx tsc --noEmit --strict --skipLibCheck --target ES2020 --module ESNext --moduleResolution bundler src/data/items/<your-file>.ts
npx tsx scripts/validate-items.ts src/data/items/<your-file>.ts
```
Then reply with the counts per task and anything in the spec that was ambiguous. Keep it brief.
