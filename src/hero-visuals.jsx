// Magic Bridge — Hero visuals (3 variants, selected by tweaks)
// ES Module — Vite 빌드용
import React from 'react';
const HeroBridge = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1440 720" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="hBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--bg-1)" stopOpacity="0"/>
        <stop offset="1" stopColor="var(--bg-0)"/>
      </linearGradient>
      <linearGradient id="hGold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="var(--gold-1)" stopOpacity="0"/>
        <stop offset="0.5" stopColor="var(--gold-2)" stopOpacity="0.9"/>
        <stop offset="1" stopColor="var(--gold-1)" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="hGlow" cx="50%" cy="78%" r="50%">
        <stop offset="0" stopColor="var(--gold-1)" stopOpacity="0.22"/>
        <stop offset="1" stopColor="var(--gold-1)" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1440" height="720" fill="url(#hBg)"/>
    <rect width="1440" height="720" fill="url(#hGlow)"/>
    {/* deck */}
    <path d="M0 560 H1440" stroke="url(#hGold)" strokeWidth="1.2"/>
    {/* towers */}
    <g stroke="var(--gold-1)" strokeOpacity="0.55" strokeWidth="1">
      <path d="M360 560 V 200"/>
      <path d="M1080 560 V 200"/>
      <path d="M360 240 H 1080"/>
      <path d="M360 270 H 1080" strokeOpacity="0.25"/>
    </g>
    {/* main cable — catenary */}
    <path d="M0 470 Q 360 200 720 480 T 1440 470" stroke="url(#hGold)" strokeWidth="1.2" fill="none"/>
    {/* secondary cable */}
    <path d="M0 500 Q 360 260 720 510 T 1440 500" stroke="var(--gold-1)" strokeOpacity="0.35" strokeWidth="0.8" fill="none"/>
    {/* hangers */}
    <g stroke="var(--gold-1)" strokeOpacity="0.35" strokeWidth="0.7">
      {Array.from({ length: 48 }, (_, i) => {
        const x = 30 + i * 29;
        // approximate catenary y at x
        const t = (x - 720) / 720;
        const y = 470 + 240 * (1 - (1 - t * t)) * -1 + 240 * (1 - t * t);
        // simpler: sag using parabola between towers
        const inSpan = x >= 360 && x <= 1080;
        const u = (x - 360) / 720;
        const sag = inSpan ? 200 + 320 * (4 * (u - 0.5) * (u - 0.5)) : 470;
        return <line key={i} x1={x} y1={Math.min(sag, 470)} x2={x} y2={560}/>;
      })}
    </g>
    {/* horizon glow line */}
    <path d="M0 561 H 1440" stroke="var(--gold-2)" strokeOpacity="0.12" strokeWidth="2"/>
    {/* atmospheric scatter */}
    <g fill="var(--gold-1)" opacity="0.5">
      {Array.from({ length: 28 }, (_, i) => {
        const x = (i * 137) % 1440;
        const y = 80 + ((i * 211) % 400);
        const r = 0.6 + (i % 3) * 0.3;
        return <circle key={i} cx={x} cy={y} r={r}/>;
      })}
    </g>
  </svg>
);

const HeroAbstract = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1440 720" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="aBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--bg-1)" stopOpacity="0"/>
        <stop offset="1" stopColor="var(--bg-0)"/>
      </linearGradient>
      <linearGradient id="aGold" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="var(--gold-1)" stopOpacity="0"/>
        <stop offset="0.5" stopColor="var(--gold-2)"/>
        <stop offset="1" stopColor="var(--gold-1)" stopOpacity="0"/>
      </linearGradient>
      <radialGradient id="aGlow" cx="70%" cy="50%" r="55%">
        <stop offset="0" stopColor="var(--gold-1)" stopOpacity="0.2"/>
        <stop offset="1" stopColor="var(--gold-1)" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1440" height="720" fill="url(#aBg)"/>
    <rect width="1440" height="720" fill="url(#aGlow)"/>
    {Array.from({ length: 14 }, (_, i) => {
      const o = 0.1 + i * 0.045;
      const yShift = i * 14;
      return (
        <path key={i} d={`M-50 ${520 - yShift} Q 400 ${260 - yShift * 1.4} 900 ${440 - yShift} T 1490 ${340 - yShift * 1.1}`}
              stroke="url(#aGold)" strokeOpacity={o} strokeWidth="1" fill="none"/>
      );
    })}
    <path d="M-50 540 Q 450 200 950 480 T 1490 380" stroke="var(--gold-2)" strokeOpacity="0.7" strokeWidth="1.4" fill="none"/>
  </svg>
);

const HeroPlaceholder = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 1440 720" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <pattern id="pStripes" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="24" height="24" fill="var(--bg-1)"/>
        <line x1="0" y1="0" x2="0" y2="24" stroke="var(--gold-1)" strokeOpacity="0.08"/>
      </pattern>
    </defs>
    <rect width="1440" height="720" fill="url(#pStripes)"/>
    <g fontFamily="var(--f-mono)" fontSize="11" fill="var(--gold-1)" fillOpacity="0.5" letterSpacing="0.2em">
      <text x="60" y="60">HERO / BRIDGE VISUAL — PLACEHOLDER</text>
      <text x="60" y="680">REPLACE WITH FINAL ARTWORK</text>
    </g>
    <rect x="60" y="90" width="1320" height="560" fill="none" stroke="var(--gold-1)" strokeOpacity="0.35" strokeDasharray="4 6"/>
  </svg>
);

export { HeroBridge, HeroAbstract, HeroPlaceholder };
