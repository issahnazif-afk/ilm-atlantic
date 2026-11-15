# Ilm Atlantic — PTE made easy (prototype v0.1)

A PTE Academic preparation platform with examiner-grade feedback. Long-term: one home for Canada's English tests (PTE Academic → PTE Core → CELPIP-General).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/ (GitHub Pages-ready, hash routing, relative paths)
```

Use **Chrome or Edge** for speaking tasks (built-in speech recognition). Other browsers record audio and ask the learner to type what they said.

## What's in the prototype

| Area | Status |
|---|---|
| All 22 PTE Academic task types (incl. 2025: Summarize Group Discussion, Respond to a Situation) | ✅ realistic players with official timings |
| 113 original practice items | ✅ `src/data/items/*.ts` |
| Exact marking for reading/listening (negative marking, ROP pairs, WFD per word) | ✅ `src/lib/scoring.ts` |
| Speaking: recording, 3-s silence cut-off, pause & speech-rate analysis, transcription, content alignment / key-point coverage | ✅ estimates on official 0–5 trait scales |
| Writing: form rules, key-point coverage, rule-based grammar, Hunspell spelling, vocab/structure markers | ✅ estimates on official trait scales |
| Dashboard: 10–90 skill estimates vs target, streak, recommendations | ✅ |
| Mock tests (mini full, sectional, sprint) + score report with enabling skills | ✅ |
| Examiner console: review queue, trait marking, comments shown to learner | ✅ (local queue) |
| Accounts, cloud sync, payments | ⏭ Phase 2 |

## Architecture

```
src/
  data/types.ts         item schema (the content contract)
  data/taskTypes.ts     task metadata: timings, instructions, scoring, skill weights, tips
  data/items/           original item bank (speaking, writing-reading, listening)
  lib/speech.ts         TTS prompts (multi-accent voices), Recorder (MediaRecorder + VAD + ASR)
  lib/scoring.ts        all scorers + 10–90 aggregation
  lib/grammar.ts        rule-based grammar checks, academic word list
  lib/spell.ts          lazy Hunspell dictionary (public/dict)
  lib/store.ts          localStorage + IndexedDB (swap for Supabase in Phase 2)
  components/tasks/     one player per task family
  pages/                Landing, Dashboard, Library, Practice, Mock, Report, Examiner, Scoring
```

## Content policy

All items are original, written to the published task formats. Pearson/Longman books (Official Guide, Practice Tests Plus, Testbuilder, Score Guide) are used **only as format and rubric references** — never copied into the site. No recalled or "predicted" exam questions.

## Phase 2 (next)

1. Supabase auth + Postgres + storage (replace `lib/store.ts`), Stripe in CAD.
2. Server-side scoring: phoneme-level pronunciation assessment + LLM writing/speaking marker calibrated on examiner-marked responses (the examiner console already collects these).
3. Human-recorded audio for listening items; full-length mocks; item authoring CMS for examiners.
4. PTE Core, then CELPIP-General with CLB-band reporting.

Not affiliated with Pearson. PTE is a trademark of its owner.
