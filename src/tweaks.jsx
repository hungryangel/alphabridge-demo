// Magic Bridge — Tweaks panel
// ES Module — Vite 빌드용
import React, { useState as useTS, useEffect as useTE } from 'react';
import { IconX } from './icons.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "goldIntensity": "standard",
  "heroStyle": "bridge",
  "bgTone": "navy",
  "serifHeadlines": false
}/*EDITMODE-END*/;

const GOLD_PRESETS = {
  brass:    { g1: '#B8893A', g2: '#D4A86B', gd: '#9A6F2A', glow: 'rgba(184, 137, 58, 0.14)' },
  standard: { g1: '#D4A24C', g2: '#E8C37A', gd: '#B8893A', glow: 'rgba(212, 162, 76, 0.14)' },
  champagne:{ g1: '#E8C37A', g2: '#F4DCA3', gd: '#C8A05A', glow: 'rgba(232, 195, 122, 0.18)' },
};
const BG_PRESETS = {
  navy:      { b0: '#070F22', b1: '#0A1936', b2: '#12224A', b3: '#19305F' },
  midnight:  { b0: '#060A1A', b1: '#0B1024', b2: '#141A38', b3: '#1B2548' },
  charcoal:  { b0: '#0B0E14', b1: '#12161F', b2: '#1B2030', b3: '#262C40' },
};

function applyTweaks(t) {
  const g = GOLD_PRESETS[t.goldIntensity] || GOLD_PRESETS.standard;
  const b = BG_PRESETS[t.bgTone] || BG_PRESETS.navy;
  const r = document.documentElement.style;
  r.setProperty('--gold-1', g.g1);
  r.setProperty('--gold-2', g.g2);
  r.setProperty('--gold-deep', g.gd);
  r.setProperty('--gold-glow', g.glow);
  r.setProperty('--bg-0', b.b0);
  r.setProperty('--bg-1', b.b1);
  r.setProperty('--bg-2', b.b2);
  r.setProperty('--bg-3', b.b3);
  r.setProperty('--f-display', t.serifHeadlines ? "'Playfair Display', 'Noto Serif KR', serif" : "'Pretendard', 'Pretendard Variable', 'Inter', sans-serif");
  document.documentElement.classList.toggle('serif-h', !!t.serifHeadlines);
}

const Tweaks = ({ tweaks, setTweaks }) => {
  const [active, setActive] = useTS(false);
  useTE(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setActive(true);
      if (e.data.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const set = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    applyTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  if (!active) return null;

  return (
    <div className="tk-panel">
      <header className="tk-head">
        <p className="eyebrow">TWEAKS · MAGIC BRIDGE</p>
        <button className="tk-close" onClick={() => setActive(false)}><IconX size={14}/></button>
      </header>

      <div className="tk-group">
        <label>골드 강도</label>
        <div className="tk-opts">
          {[['brass','황동'],['standard','표준'],['champagne','샴페인']].map(([k, t]) => (
            <button key={k} className={`tk-opt ${tweaks.goldIntensity === k ? 'on' : ''}`} onClick={()=>set('goldIntensity', k)}>
              <span className="tk-swatch" style={{background: `linear-gradient(135deg, ${GOLD_PRESETS[k].g2}, ${GOLD_PRESETS[k].gd})`}}/>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="tk-group">
        <label>Hero 비주얼 스타일</label>
        <div className="tk-opts col">
          {[['bridge','라인 브리지 (기본)'],['abstract','추상 골드 곡선'],['placeholder','플레이스홀더 (리소스 교체용)']].map(([k, t]) => (
            <button key={k} className={`tk-opt ${tweaks.heroStyle === k ? 'on' : ''}`} onClick={()=>set('heroStyle', k)}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="tk-group">
        <label>배경 톤</label>
        <div className="tk-opts">
          {[['navy','딥 네이비'],['midnight','미드나이트'],['charcoal','차콜']].map(([k, t]) => (
            <button key={k} className={`tk-opt ${tweaks.bgTone === k ? 'on' : ''}`} onClick={()=>set('bgTone', k)}>
              <span className="tk-swatch" style={{background: BG_PRESETS[k].b1}}/>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="tk-group">
        <label>헤드라인 세리프 on/off</label>
        <div className="tk-toggle">
          <button className={`tk-opt ${!tweaks.serifHeadlines ? 'on' : ''}`} onClick={()=>set('serifHeadlines', false)}>Sans (기본)</button>
          <button className={`tk-opt ${tweaks.serifHeadlines ? 'on' : ''}`} onClick={()=>set('serifHeadlines', true)}>Playfair Serif</button>
        </div>
      </div>

      <p className="tk-note">변경사항은 실시간 반영되며, Tweaks 토글을 끄면 숨겨집니다.</p>
    </div>
  );
};

const tweaksStyles = `
.tk-panel {
  position: fixed; right: 20px; bottom: 20px; z-index: 100;
  width: 320px; padding: 20px 22px;
  background: rgba(7,15,34,0.92); backdrop-filter: blur(16px);
  border: 1px solid var(--card-border-strong); border-radius: 14px;
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,162,76,0.1);
  font-family: var(--f-sans);
  color: var(--fg);
}
.tk-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--hairline); }
.tk-close { width: 24px; height: 24px; border-radius: 6px; color: var(--fg-muted); display: flex; align-items: center; justify-content: center; }
.tk-close:hover { color: var(--gold-2); background: var(--hairline); }
.tk-group { margin-bottom: 16px; }
.tk-group label { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.18em; color: var(--gold-1); text-transform: uppercase; display: block; margin-bottom: 8px; }
.tk-opts { display: flex; gap: 6px; flex-wrap: wrap; }
.tk-opts.col { flex-direction: column; }
.tk-opts.col .tk-opt { width: 100%; justify-content: flex-start; }
.tk-toggle { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.tk-opt {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 12px; font-size: 12px;
  border: 1px solid var(--hairline); border-radius: 6px;
  color: var(--fg-dim); background: rgba(255,255,255,0.02);
  transition: all 0.18s;
}
.tk-opt:hover { border-color: var(--card-border); color: var(--fg); }
.tk-opt.on { border-color: var(--gold-1); color: var(--gold-2); background: rgba(212,162,76,0.08); }
.tk-swatch { width: 14px; height: 14px; border-radius: 3px; border: 1px solid rgba(255,255,255,0.1); display: inline-block; }
.tk-note { font-size: 10px; color: var(--fg-muted); margin: 16px 0 0; padding-top: 12px; border-top: 1px solid var(--hairline); line-height: 1.5; }
`;

export { Tweaks, TWEAK_DEFAULTS, applyTweaks, tweaksStyles };
