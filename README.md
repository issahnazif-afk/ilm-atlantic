# Ilm Atlantic: PTE & CELPIP made easy (prototype v0.2)

Exam preparation for **PTE Academic**, **PTE Core** and **CELPIP-General**, with examiner-grade feedback.
Live site: https://issahnazif-afk.github.io/ilm-atlantic/

## Run it

```bash
npm install
npm run dev                             # http://localhost:5173
npm run build                           # static site in dist/ (GitHub Pages, hash routing)
npx tsx scripts/validate-items.ts       # validate the whole item bank
npx tsx scripts/answer-balance.ts       # check correct-answer position spread
```

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`).
Use **Chrome or Edge** for speaking tasks (built-in speech recognition).

## Content (all original)

| Exam | Task types | Items | Questions |
|---|---|---|---|
| PTE Academic (2025 format) | 22 | 349 | 349 |
| PTE Core | 19 (incl. Write Email) | 308 | 308 |
| CELPIP-General | 20 (L1–6, R1–4, W1–2, S1–8) | 120 sets/tasks = **6 complete practice tests** | ≈ 516 |
| **Total** | | **777** | **≈ 1,170** |

Plus:
- **Vocabulary trainer**: NGSL (2,809 words) and NAWL (958 words), CC BY-SA 4.0. See `public/vocab/*.json` for attribution.
- **Study resources**: 12 original strategy guides and 60+ curated links to free official materials (Pearson, Paragon/CELPIP, IRCC, CCLB) and open textbooks.

### Content policy
- Every question is original, written to the published formats in `docs/content-brief.md`.
- Pearson, Longman and Paragon/Prometric materials are used only as format and rubric references, and are **linked, never copied**.
- No recalled or "prediction" exam questions.
- Research and licences: `docs/research/exam-formats-and-resources.md`.
- Correct answers are spread evenly across option positions by a fixed-seed shuffle (`src/data/balance.ts`).

## Architecture

```
src/
  data/types.ts           item schema, the content contract
  data/taskTypes.ts       task metadata per exam: timings, instructions, scoring, tips, PTE Core overrides
  data/items/*.ts         item bank, loaded automatically (import.meta.glob)
  data/resources.ts       resource directory + original strategy guides
  lib/scoring.ts          PTE traits, PTE Core Write Email, CELPIP dimensions, exact marking
  lib/speech.ts           TTS prompts (multi-accent), Recorder (MediaRecorder + VAD + ASR)
  lib/store.ts            localStorage + IndexedDB (to be replaced by Supabase in Phase 2)
  components/tasks/       players: Speaking, Writing, Choice, Gap tasks, CELPIP sets
  pages/                  Landing, Dashboard, Library, Practice, Mock, Report, Resources, Vocabulary, Scoring, Examiner
scripts/                  validate-items, answer-balance, list-items, score-sample
```

## Phase 2

1. Supabase auth, Postgres and storage; Stripe in CAD.
2. Calibrated AI scoring (phoneme-level pronunciation plus an LLM marker trained on examiner marks).
3. Human-recorded or neural-TTS audio for listening items.
4. Code-split the item bank per exam (bundle is currently ~450 KB gzipped).

Not affiliated with Pearson, Paragon Testing Enterprises or Prometric. PTE and CELPIP are trademarks of their owners.
