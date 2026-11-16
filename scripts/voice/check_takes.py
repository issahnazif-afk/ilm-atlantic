"""Transcribe each accent-test take with Whisper and report word error rate vs the passage."""
import json
import re
import sys
from pathlib import Path

from faster_whisper import WhisperModel
from jiwer import wer

d = Path(sys.argv[1])
sys.path.insert(0, str(Path(__file__).parent))
from accent_test import PASSAGE  # noqa: E402

norm = lambda s: re.sub(r"\s+", " ", re.sub(r"[^a-z0-9' ]+", " ", s.lower().replace("-", " "))).strip()
asr = WhisperModel("small.en", device="cpu", compute_type="int8", cpu_threads=8)
rows = json.loads((d / "results.json").read_text())
for r in rows:
    segs, _ = asr.transcribe(str(d / r["file"]), language="en", beam_size=1)
    heard = " ".join(s.text for s in segs)
    r["wer"] = round(wer(norm(PASSAGE), norm(heard)), 3)
    print(f'{r["name"]:22} WER {r["wer"]:.2f}', "" if r["wer"] < 0.1 else f"  heard: {heard[:120]}")
(d / "results.json").write_text(json.dumps(rows, indent=1))
