import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import { landingStyles } from './landing.css.jsx';
import { appStyles } from './app.css.jsx';
import { TWEAK_DEFAULTS, applyTweaks, Tweaks, tweaksStyles } from './tweaks.jsx';
import { Landing } from './landing.jsx';
import { Login } from './login.jsx';
import { App } from './app.jsx';

// ─── CSS-in-JS 전체 스타일 주입 ───────────────────────────────────────────────
const styleEl = document.createElement('style');
styleEl.id = 'runtime-styles';
styleEl.textContent = landingStyles + '\n' + appStyles + '\n' + tweaksStyles;
document.head.appendChild(styleEl);

// ─── 초기 라우트 결정 ─────────────────────────────────────────────────────────
// state 기반 라우터 — URL은 변경되지 않으며 localStorage로만 상태를 기억함.
function resolveInitialRoute() {
  try {
    const stored = localStorage.getItem('ab_top_route');
    if (stored === 'landing' || stored === 'login' || stored === 'app') return stored;
  } catch { /* 프라이빗 브라우징 등 localStorage 접근 불가 시 무시 */ }
  return 'landing';
}

// ─── 에러 바운더리 ────────────────────────────────────────────────────────────
class AppErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) {
    console.error('[AlphaBridge] 렌더 오류:', error, info.componentStack);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          padding: 40, minHeight: '100vh',
          background: '#070F22', color: '#E8C37A',
          fontFamily: 'monospace', lineHeight: 1.6,
        }}>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', opacity: 0.6 }}>MAGIC BRIDGE · 초기화 오류</p>
          <h2 style={{ margin: '12px 0', fontSize: 20 }}>앱을 불러오지 못했습니다</h2>
          <pre style={{ fontSize: 13, color: '#C47B6E', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {this.state.error.message}
          </pre>
          <button
            onClick={() => { localStorage.removeItem('ab_top_route'); window.location.reload(); }}
            style={{ marginTop: 24, padding: '10px 20px', background: '#D4A24C', color: '#1a1204', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}
          >
            초기화 후 새로고침
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Root 컴포넌트 ────────────────────────────────────────────────────────────
function Root() {
  const [route, setRoute] = useState(resolveInitialRoute);
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);

  useEffect(() => { applyTweaks(tweaks); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    try { localStorage.setItem('ab_top_route', route); } catch { /* ignore */ }
  }, [route]);

  return (
    <>
      {route === 'landing' && (
        <Landing heroStyle={tweaks.heroStyle} onLogin={() => setRoute('login')} />
      )}
      {route === 'login' && (
        <Login onSignIn={() => setRoute('app')} onBack={() => setRoute('landing')} />
      )}
      {route === 'app' && (
        <App onLogout={() => setRoute('landing')} />
      )}
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

// ─── React 마운트 ─────────────────────────────────────────────────────────────
const rootEl = document.getElementById('root');
if (!rootEl) {
  document.body.innerHTML = '<div style="padding:40px;color:#E8C37A;background:#070F22;font-family:monospace">#root 엘리먼트를 찾을 수 없습니다.</div>';
} else {
  createRoot(rootEl).render(
    <AppErrorBoundary>
      <Root />
    </AppErrorBoundary>
  );
}
