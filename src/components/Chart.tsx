import type { ChartSpec } from '../data/types';

const PALETTE = ['#0e9f9a', '#e9b44c', '#3d7dd8', '#c9547e', '#6c7a91', '#2e9d5b', '#8e6bd1'];
const W = 640, H = 380;
const suffix = (unit?: string) => (unit === '%' ? '%' : '');

function niceMax(v: number) {
  const p = Math.pow(10, Math.floor(Math.log10(v || 1)));
  return Math.ceil(v / p) * p;
}

export function Chart({ spec }: { spec: ChartSpec }) {
  if (spec.kind === 'table') {
    // HTML (not SVG) so long cell text wraps cleanly
    return (
      <figure style={{ margin: 0, maxWidth: 720 }}>
        <div className="card flat" style={{ padding: 0, overflowX: 'auto' }}>
          <div style={{ textAlign: 'center', fontWeight: 700, color: 'var(--navy)', padding: '12px 12px 8px' }}>{spec.title}</div>
          <table className="t" style={{ fontSize: 13.5 }}>
            <thead><tr>{spec.columns.map((c) => <th key={c} style={{ background: 'var(--navy)', color: '#fff' }}>{c}</th>)}</tr></thead>
            <tbody>{spec.rows.map((r, i) => <tr key={i}>{r.map((cell, j) => <td key={j} style={{ fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </figure>
    );
  }
  return (
    <figure style={{ margin: 0, maxWidth: W }}>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label={spec.title} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12 }}>
        <text x={W / 2} y={28} textAnchor="middle" fontSize="16" fontWeight="700" fill="#0b2545">{spec.title}</text>
        {spec.kind === 'bar' || spec.kind === 'line' ? <XY spec={spec} /> : null}
        {spec.kind === 'pie' ? <Pie spec={spec} /> : null}
        
        {spec.kind === 'process' ? <Process spec={spec} /> : null}
      </svg>
    </figure>
  );
}

function XY({ spec }: { spec: Extract<ChartSpec, { kind: 'bar' | 'line' }> }) {
  const L = 70, R = 20, T = 56, B = 70;
  const pw = W - L - R, ph = H - T - B;
  const max = niceMax(Math.max(...spec.series.flatMap((s) => s.values)) * 1.08);
  const y = (v: number) => T + ph - (v / max) * ph;
  const n = spec.categories.length;
  const step = pw / n;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * max);
  const sfx = suffix(spec.unit);
  return (
    <g fontSize="12" fill="#34465f">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="#e7ecf3" />
          <text x={L - 8} y={y(t) + 4} textAnchor="end">{Math.round(t * 10) / 10}{sfx}</text>
        </g>
      ))}
      <text transform={`translate(18 ${T + ph / 2}) rotate(-90)`} textAnchor="middle" fontWeight="600">{spec.yLabel}</text>
      {spec.xLabel && <text x={L + pw / 2} y={H - 14} textAnchor="middle" fontWeight="600">{spec.xLabel}</text>}
      {spec.categories.map((c, i) => <text key={c} x={L + step * i + step / 2} y={T + ph + 18} textAnchor="middle">{c}</text>)}
      {spec.kind === 'bar'
        ? spec.series.map((s, si) => {
            const bw = (step * 0.7) / spec.series.length;
            return s.values.map((v, i) => {
              const x = L + step * i + step * 0.15 + bw * si;
              return (
                <g key={`${si}-${i}`}>
                  <rect x={x} y={y(v)} width={bw - 3} height={T + ph - y(v)} rx="3" fill={PALETTE[si % PALETTE.length]} />
                  <text x={x + (bw - 3) / 2} y={y(v) - 5} textAnchor="middle" fontSize="11" fontWeight="600">{v}{sfx}</text>
                </g>
              );
            });
          })
        : spec.series.map((s, si) => {
            const pts = s.values.map((v, i) => [L + step * i + step / 2, y(v)] as const);
            return (
              <g key={si}>
                <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke={PALETTE[si % PALETTE.length]} strokeWidth="3" strokeLinejoin="round" />
                {pts.map(([px, py], i) => (
                  <g key={i}>
                    <circle cx={px} cy={py} r="4.5" fill="#fff" stroke={PALETTE[si % PALETTE.length]} strokeWidth="2.5" />
                    <text x={px} y={py - 10} textAnchor="middle" fontSize="11" fontWeight="600">{s.values[i]}{sfx}</text>
                  </g>
                ))}
              </g>
            );
          })}
      <line x1={L} x2={W - R} y1={T + ph} y2={T + ph} stroke="#9fb0c7" />
      {spec.series.length > 1 && (
        <g transform={`translate(${L} ${H - 34})`}>
          {spec.series.map((s, i) => (
            <g key={s.name} transform={`translate(${i * 110 + pw / 2 - spec.series.length * 55} 0)`}>
              <rect width="12" height="12" rx="2" fill={PALETTE[i % PALETTE.length]} />
              <text x="18" y="10">{s.name}</text>
            </g>
          ))}
        </g>
      )}
    </g>
  );
}

function Pie({ spec }: { spec: Extract<ChartSpec, { kind: 'pie' }> }) {
  const total = spec.slices.reduce((s, x) => s + x.value, 0) || 1;
  const cx = 220, cy = 210, r = 135;
  let a = -Math.PI / 2;
  const sfx = suffix(spec.unit);
  return (
    <g fontSize="13" fill="#34465f">
      {spec.slices.map((s, i) => {
        const da = (s.value / total) * Math.PI * 2;
        const a2 = a + da;
        const large = da > Math.PI ? 1 : 0;
        const p = `M${cx},${cy} L${cx + r * Math.cos(a)},${cy + r * Math.sin(a)} A${r},${r} 0 ${large} 1 ${cx + r * Math.cos(a2)},${cy + r * Math.sin(a2)} Z`;
        const mid = a + da / 2;
        const lx = cx + r * 0.66 * Math.cos(mid), ly = cy + r * 0.66 * Math.sin(mid);
        a = a2;
        return (
          <g key={s.label}>
            <path d={p} fill={PALETTE[i % PALETTE.length]} stroke="#fff" strokeWidth="2" />
            {s.value / total > 0.05 && <text x={lx} y={ly + 4} textAnchor="middle" fill="#fff" fontWeight="700">{s.value}{sfx}</text>}
          </g>
        );
      })}
      {spec.slices.map((s, i) => (
        <g key={s.label} transform={`translate(400 ${110 + i * 30})`}>
          <rect width="14" height="14" rx="3" fill={PALETTE[i % PALETTE.length]} />
          <text x="22" y="12">{s.label} — {s.value}{sfx}</text>
        </g>
      ))}
    </g>
  );
}

function Process({ spec }: { spec: Extract<ChartSpec, { kind: 'process' }> }) {
  const n = spec.steps.length;
  const cx = W / 2, cy = 215, rx = 230, ry = 120;
  const pos = spec.steps.map((_, i) => {
    const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
    return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)] as const;
  });
  return (
    <g fontSize="12.5" fill="#1b2636">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#0e9f9a" />
        </marker>
      </defs>
      {pos.map(([x, y], i) => {
        const [x2, y2] = pos[(i + 1) % n];
        if (i === n - 1) return null; // flow, not a closed cycle
        const dx = x2 - x, dy = y2 - y, d = Math.hypot(dx, dy);
        return <line key={i} x1={x + (dx / d) * 70} y1={y + (dy / d) * 30} x2={x2 - (dx / d) * 70} y2={y2 - (dy / d) * 30} stroke="#0e9f9a" strokeWidth="2.5" markerEnd="url(#arr)" />;
      })}
      {pos.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 78} y={y - 24} width="156" height="48" rx="12" fill={i === 0 ? '#e3f5f4' : '#fff'} stroke="#0e9f9a" strokeWidth="1.5" />
          <circle cx={x - 78} cy={y - 24} r="11" fill="#0b2545" />
          <text x={x - 78} y={y - 20} textAnchor="middle" fill="#e9b44c" fontWeight="700" fontSize="11">{i + 1}</text>
          <foreignObject x={x - 72} y={y - 21} width="144" height="42">
            <div style={{ display: 'grid', placeItems: 'center', height: '100%', textAlign: 'center', fontSize: 12.5, lineHeight: 1.2, fontWeight: 600, color: '#1b2636' }}>{spec.steps[i]}</div>
          </foreignObject>
        </g>
      ))}
    </g>
  );
}
