"""Time VoxCPM2 generation with/without torch.compile and with fewer diffusion steps."""
import sys
import time

import numpy as np

sys.path.insert(0, __file__.rsplit("\\", 1)[0].rsplit("/", 1)[0])
from accent_test import PASSAGE, VOICES  # noqa: E402

optimize = "--optimize" in sys.argv
from voxcpm import VoxCPM  # noqa: E402

t0 = time.time()
m = VoxCPM.from_pretrained("openbmb/VoxCPM2", load_denoiser=False, optimize=optimize)
sr = getattr(getattr(m, "tts_model", None), "sample_rate", None) or 48000
print(f"optimize={optimize} load {time.time() - t0:.0f}s", flush=True)
text = f"({VOICES[0][2]}){PASSAGE}"
for steps in (10, 10, 6):  # first run includes warm-up/compilation
    t = time.time()
    wav = np.asarray(m.generate(text=text, inference_timesteps=steps)).squeeze()
    el = time.time() - t
    print(f"steps={steps}: {len(wav) / sr:.1f}s audio in {el:.1f}s → RTF {el / (len(wav) / sr):.2f}", flush=True)
