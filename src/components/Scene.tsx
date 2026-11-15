import type { Scene } from '../data/types';

// Backdrops are simple layered gradients + ground shapes; emoji elements are placed on top.
const BACKDROPS: Record<Scene['backdrop'], { sky: string; ground: string; horizon: number; extra?: string }> = {
  park: { sky: 'linear-gradient(#bfe6ff, #e8f6ff)', ground: '#8fcf7a', horizon: 48 },
  street: { sky: 'linear-gradient(#cfe3f5, #eef5fb)', ground: '#9aa3ad', horizon: 55, extra: 'repeating-linear-gradient(90deg, transparent 0 46px, #f5f5f5 46px 70px)' },
  kitchen: { sky: 'linear-gradient(#fff4e0, #fdebd0)', ground: '#c9a27c', horizon: 62 },
  'living-room': { sky: 'linear-gradient(#f3ead8, #efe2c9)', ground: '#b98c5f', horizon: 66 },
  office: { sky: 'linear-gradient(#e9eef5, #dfe6ef)', ground: '#8d99a8', horizon: 64 },
  store: { sky: 'linear-gradient(#fdfbf3, #f1ede0)', ground: '#d7d2c4', horizon: 64 },
  beach: { sky: 'linear-gradient(#9fd7ff, #dff2ff)', ground: '#f3d9a4', horizon: 50, extra: 'linear-gradient(#4aa8d8, #4aa8d8)' },
  campsite: { sky: 'linear-gradient(#ffd6a5, #ffeccf)', ground: '#6fae5f', horizon: 50 },
  classroom: { sky: 'linear-gradient(#f4f1e8, #ebe6d6)', ground: '#a9825c', horizon: 66 },
  airport: { sky: 'linear-gradient(#dfe9f3, #f5f8fb)', ground: '#c3c9d1', horizon: 60 },
  restaurant: { sky: 'linear-gradient(#fbeee0, #f3dcc3)', ground: '#8f5f3c', horizon: 64 },
  backyard: { sky: 'linear-gradient(#c6e7ff, #eef8ff)', ground: '#7cc26b', horizon: 52 },
  winter: { sky: 'linear-gradient(#d9e6f2, #f4f8fc)', ground: '#ffffff', horizon: 52 },
};

export function SceneView({ scene }: { scene: Scene }) {
  const b = BACKDROPS[scene.backdrop] ?? BACKDROPS.park;
  return (
    <figure style={{ margin: 0, maxWidth: 640 }}>
      <div
        role="img"
        aria-label={scene.caption}
        style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--line)', background: b.sky }}
      >
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: `${b.horizon}%`, background: b.ground }} />
        {b.extra && scene.backdrop === 'beach' && <div style={{ position: 'absolute', left: 0, right: 0, top: `${b.horizon - 8}%`, height: '8%', background: b.extra }} />}
        {b.extra && scene.backdrop === 'street' && <div style={{ position: 'absolute', left: 0, right: 0, top: '78%', height: 6, background: b.extra }} />}
        {scene.elements.map((el, i) => (
          <div
            key={i}
            title={el.label}
            style={{ position: 'absolute', left: `${el.x}%`, top: `${el.y}%`, transform: 'translate(-50%, -50%)', fontSize: el.size ?? 44, lineHeight: 1, filter: 'drop-shadow(0 2px 2px rgba(0,0,0,.18))', textAlign: 'center' }}
          >
            {el.e}
          </div>
        ))}
      </div>
      <figcaption className="small muted" style={{ marginTop: 6 }}>Illustration: {scene.caption}</figcaption>
    </figure>
  );
}
