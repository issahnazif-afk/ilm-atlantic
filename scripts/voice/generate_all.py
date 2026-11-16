"""Generate every listening clip with VoxCPM2 using the fixed voice cast, check each chunk with
Whisper, and write public/audio/<id>.mp3 + public/audio/manifest.json (resumable).

  C:/Users/csgrad/projects/ilm-voice/env/Scripts/python scripts/voice/generate_all.py [--limit N] [--only ID,ID]

Inputs:
  scripts/voice/clips.json   (npx tsx scripts/voice/export-clips.ts)
  scripts/voice/cast.json    {"en-CA/female": ["C:/.../cast/en-CA-female-1.wav", ...], ...}
Voices are designed (not cloned from real people); references are the chosen accent-test takes.
"""
import argparse
import hashlib
import json
import re
import sys
import time
from pathlib import Path

import numpy as np
import soundfile as sf

ROOT = Path(__file__).resolve().parents[2]
CLIPS = ROOT / "scripts/voice/clips.json"
CAST = ROOT / "scripts/voice/cast.json"
OUT = ROOT / "public/audio"
MANIFEST = OUT / "manifest.json"
SR_OUT = 24000
MAX_WORDS = 38          # per generation chunk (long inputs are less stable)
WER_OK = 0.08           # accept a chunk at or below this character error rate (on the squashed text)
TRIES = 3
GAP_SENT, GAP_TURN = 0.28, 0.55  # seconds of silence between chunks / speakers


def chunks_of(text: str):
    sents = re.findall(r"[^.!?]+[.!?]+[\"')\]]*|[^.!?]+$", text.strip())
    out, cur = [], []
    for s in (x.strip() for x in sents if x.strip()):
        if cur and len(" ".join(cur + [s]).split()) > MAX_WORDS:
            out.append(" ".join(cur)); cur = []
        cur.append(s)
    if cur:
        out.append(" ".join(cur))
    return out


def norm(s: str):
    s = s.lower().replace("’", "'").replace("-", " ")
    s = re.sub(r"[^a-z0-9' ]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


ONES = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split()
TENS = "_ _ twenty thirty forty fifty sixty seventy eighty ninety".split()


def say_num(n: int) -> str:
    if n < 20: return ONES[n]
    if n < 100: return TENS[n // 10] + (ONES[n % 10] if n % 10 else "")
    if n < 1000: return ONES[n // 100] + "hundred" + (say_num(n % 100) if n % 100 else "")
    if 1100 <= n < 10000 and n % 100:                     # years: 2028 -> twenty twenty-eight
        return say_num(n // 100) + say_num(n % 100)
    return say_num(n // 1000) + "thousand" + (say_num(n % 1000) if n % 1000 else "")


def squash(s: str):
    """Spelling-tolerant form for the Whisper check: digits vs words ("47" / "forty-seven"), spaces,
    hyphens and doubled letters differ between the script and Whisper without anything being misspoken."""
    s = re.sub(r"(\d),(\d{3})", r"\1\2", s)
    s = re.sub(r"\d+", lambda m: say_num(int(m.group())) if len(m.group()) <= 6 else m.group(), norm(s))
    s = re.sub(r"\band\b", " ", s).replace("'", "").replace(" ", "")
    return re.sub(r"(.)\1+", r"\1", s)


def stable(name: str):
    return int(hashlib.md5(name.encode()).hexdigest(), 16)


def assign_voices(clip, cast):
    """One reference per speaker; distinct within the clip; same name → same voice across clips."""
    used, voice = set(), {}
    for t in clip["turns"]:
        sp = t["speaker"]
        key = sp["name"] + "|" + sp["accent"] + "|" + sp["gender"]
        if key in voice:
            continue
        pool = list(cast.get(f'{sp["accent"]}/{sp["gender"]}', []))
        # fall back to other accents of the same gender if this accent has no free voice
        others = [r for k, rs in sorted(cast.items()) if k.endswith("/" + sp["gender"]) for r in rs if r not in pool]
        start = stable(sp["name"]) % max(1, len(pool))
        ordered = pool[start:] + pool[:start] + others
        ref = next((r for r in ordered if r not in used), ordered[0])
        used.add(ref)
        voice[key] = ref
    return lambda sp: voice[sp["name"] + "|" + sp["accent"] + "|" + sp["gender"]]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--only", default="")
    args = ap.parse_args()

    import torch
    import torchaudio.functional as AF
    from faster_whisper import WhisperModel
    from jiwer import cer
    from voxcpm import VoxCPM

    clips = json.loads(CLIPS.read_text())
    cast = json.loads(CAST.read_text())
    if args.only:
        keep = set(args.only.split(","))
        clips = [c for c in clips if c["id"] in keep]
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}

    import os  # torch.compile (VOX_OPTIMIZE=1) is faster but spills a 12 GB card
    tts = VoxCPM.from_pretrained("openbmb/VoxCPM2", load_denoiser=False, optimize=os.environ.get("VOX_OPTIMIZE") == "1")
    sr = getattr(getattr(tts, "tts_model", None), "sample_rate", None) or 48000
    asr = WhisperModel("small.en", device="cpu", compute_type="int8", cpu_threads=8)

    def say(text, ref):
        best = None
        for attempt in range(TRIES):
            wav = np.asarray(tts.generate(text=text, reference_wav_path=ref), dtype=np.float32).squeeze()
            wav16 = AF.resample(torch.from_numpy(wav), sr, 16000).numpy()
            heard = " ".join(s.text for s in asr.transcribe(wav16, language="en", beam_size=1)[0])
            e = cer(squash(text), squash(heard)) if squash(text) else 0.0
            if best is None or e < best[1]:
                best = (wav, e, heard)
            if e <= WER_OK:
                break
        return best

    done = 0
    t_start = time.time()
    for clip in clips:
        sig = hashlib.md5(json.dumps([clip["turns"], json.loads(CAST.read_text())], sort_keys=True).encode()).hexdigest()[:12]
        if manifest.get(clip["id"], {}).get("sig") == sig and (OUT / manifest[clip["id"]]["file"]).exists():
            continue
        voice_for = assign_voices(clip, cast)
        pieces, turn_starts, t, worst = [], [], 0.0, 0.0
        for ti, turn in enumerate(clip["turns"]):
            if ti:
                pieces.append(np.zeros(int(sr * GAP_TURN), np.float32)); t += GAP_TURN
            turn_starts.append(round(t, 2))
            for ci, ch in enumerate(chunks_of(turn["text"])):
                if ci:
                    pieces.append(np.zeros(int(sr * GAP_SENT), np.float32)); t += GAP_SENT
                wav, e, heard = say(ch, voice_for(turn["speaker"]))
                worst = max(worst, e)
                if e > WER_OK:
                    print(f"  ! {clip['id']} chunk WER {e:.2f}: '{ch[:60]}' heard '{heard[:60]}'", flush=True)
                pieces.append(wav); t += len(wav) / sr
        audio = np.concatenate(pieces)
        audio = audio / max(1e-6, np.abs(audio).max()) * 0.89            # peak ≈ -1 dBFS
        audio = AF.resample(torch.from_numpy(audio), sr, SR_OUT).numpy()
        fname = f'{clip["id"]}.mp3'
        sf.write(OUT / fname, audio, SR_OUT, format="MP3", compression_level=0.7)
        manifest[clip["id"]] = {"file": fname, "dur": round(len(audio) / SR_OUT, 2), "turns": turn_starts, "sig": sig, "wer": round(worst, 3)}
        MANIFEST.write_text(json.dumps(manifest, indent=0, sort_keys=True))
        done += 1
        el = time.time() - t_start
        print(f"[{done}] {clip['id']}: {len(audio) / SR_OUT:.0f}s audio, worst WER {worst:.2f} · {el / 60:.1f} min elapsed", flush=True)
        if args.limit and done >= args.limit:
            break
    print("finished", done, "clips")


if __name__ == "__main__":
    sys.exit(main())
