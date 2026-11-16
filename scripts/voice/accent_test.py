"""VoxCPM2 accent test: 2 takes x 10 designed voices reading the same passage.

Run with the voice venv (outside the repo):
  C:/Users/csgrad/projects/ilm-voice/.venv/Scripts/python scripts/voice/accent_test.py C:/Users/csgrad/projects/ilm-voice/accent-test

Voices are DESIGNED from a text description (no real person is cloned). Output: MP3 per take + index.html to compare them.
"""
import html
import inspect
import json
import sys
import time
from pathlib import Path

import numpy as np
import soundfile as sf

OUT = Path(sys.argv[1] if len(sys.argv) > 1 else "accent-test")
OUT.mkdir(parents=True, exist_ok=True)
TAKES = 2

PASSAGE = (
    "Good morning, everyone. Today we're looking at how cities across the country are preparing for hotter summers. "
    "Some are planting thousands of trees, while others are opening cooling centres in libraries and community halls. "
    "By the end of this session, you should be able to explain which approach works best, and why."
)

VOICES = [
    ("en-CA", "female", "A warm, clear woman in her thirties with a natural Canadian English accent, speaking at a steady, friendly pace"),
    ("en-CA", "male", "A calm, confident man in his forties with a natural Canadian English accent, speaking clearly like a radio host"),
    ("en-US", "female", "A bright, articulate young American woman with a General American accent, speaking like a university lecturer"),
    ("en-US", "male", "A relaxed, deep-voiced American man in his fifties with a General American accent, speaking like a podcast host"),
    ("en-GB", "female", "A composed British woman with a Southern English accent, speaking crisply like a BBC presenter"),
    ("en-GB", "male", "A thoughtful middle-aged British man with a standard English accent, speaking like a university professor"),
    ("en-AU", "female", "A cheerful Australian woman in her twenties with a clear Australian English accent, speaking naturally"),
    ("en-AU", "male", "An easy-going Australian man in his thirties with a broad but clear Australian English accent"),
    ("en-IN", "female", "A professional Indian woman with a clear Indian English accent, speaking fluently and precisely"),
    ("en-IN", "male", "A friendly Indian man in his forties with a clear Indian English accent, speaking like a lecturer"),
]


def main():
    import torch
    from voxcpm import VoxCPM

    print("torch", torch.__version__, "| GPU:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "none")
    t0 = time.time()
    # No denoiser (we never feed noisy prompts); torch.compile is unreliable on Windows.
    model = VoxCPM.from_pretrained("openbmb/VoxCPM2", load_denoiser=False, optimize=False)
    print(f"model loaded in {time.time() - t0:.0f}s")
    sig = inspect.signature(model.generate)
    print("generate() params:", list(sig.parameters))
    sr = getattr(getattr(model, "tts_model", None), "sample_rate", None) or 48000

    rows = []
    for accent, gender, desc in VOICES:
        for take in range(1, TAKES + 1):
            name = f"{accent}-{gender}-take{take}"
            text = f"({desc}){PASSAGE}"
            t = time.time()
            wav = model.generate(text=text)
            wav = np.asarray(wav, dtype=np.float32).squeeze()
            secs = len(wav) / sr
            path = OUT / f"{name}.mp3"
            sf.write(path, wav, sr, format="MP3")
            el = time.time() - t
            print(f"{name}: {secs:.1f}s audio in {el:.1f}s (RTF {el / max(secs, 0.1):.2f})", flush=True)
            rows.append({"name": name, "accent": accent, "gender": gender, "desc": desc, "file": path.name, "secs": round(secs, 1), "rtf": round(el / max(secs, 0.1), 2)})

    if torch.cuda.is_available():
        print(f"peak GPU memory: {torch.cuda.max_memory_allocated() / 2**30:.1f} GiB")
    (OUT / "results.json").write_text(json.dumps(rows, indent=1))

    cards = "\n".join(
        f'<div class="c"><b>{html.escape(r["name"])}</b><audio controls preload="none" src="{r["file"]}"></audio>'
        f'<small>{html.escape(r["desc"])} · {r["secs"]}s · RTF {r["rtf"]}</small></div>'
        for r in rows
    )
    (OUT / "index.html").write_text(
        "<!doctype html><meta charset=utf-8><title>VoxCPM2 accent test</title>"
        "<style>body{font:15px system-ui;max-width:900px;margin:30px auto;padding:0 16px}"
        ".c{border:1px solid #ddd;border-radius:10px;padding:12px;margin:10px 0;display:grid;gap:6px}audio{width:100%}small{color:#555}</style>"
        f"<h1>VoxCPM2 accent test</h1><p>Passage: {html.escape(PASSAGE)}</p>{cards}",
        encoding="utf-8",
    )
    print("wrote", OUT / "index.html")


if __name__ == "__main__":
    main()
