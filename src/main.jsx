import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import { landingStyles } from './landing.css.jsx';
import { appStyles } from './app.css.jsx';
import { TWEAK_DEFAULTS, applyTweaks, Tweaks, tweaksStyles } from './tweaks.jsx';
import { Landing } from './landing.jsx';
import { Login } from './login.jsx';
import { App } from './app.jsx';

// ─── BASE PATH 처리 ──────────────────────────────────────────────────────────
// Vite의 base 옵션('/alphabridge-edu/')이 import.meta.env.BASE_URL로 주입된다.
// 런타임에 window.location.pathname 에서 서브경로 prefix를 안전하게 제거하기 위한 헬퍼.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // e.g. "/alphabridge-edu"

/**
 * pathname에서 BASE prefix를 제거해 앱 내부 경로를 반환한다.
 *  /alphabridge-edu/       → "/"
 *  /alphabridge-edu/login  → "/login"
 *  /other                  → "/other"  (BASE 없이 서빙되는 경우 방어)
 */
function stripBase(pathname) {
  if (BASE && pathname.startsWith(BASE)) {
    const stripped = pathname.slice(BASE.length) || '/';
    return stripped.startsWith('/') ? stripped : '/' + stripped;
  }
  return pathname;
}

// ─── 초기 라우트 결정 ─────────────────────────────────────────────────────────
// 이 앱은 state 기반 라우터(URL 미변경)를 사용하므로
// 기본값은 localStorage → 없으면 'landing'.
// Cloudflare Worker가 서브경로로 서빙할 때 pathname이
// "/alphabridge-edu" 또는 "/alphabridge-edu/" 로 오더라도
// stripBase()를 통해 정규화한 뒤 라우트를 결정한다.
function resolveInitialRoute() {
  const stored = localStorage.getItem('ab_top_route');
  if (stored === 'landing' || stored === 'login' || stored === 'app') return stored;

  // URL 경로 기반 폴백: 서브경로를 제거한 순수 경로가 '/'이면 landing
  const path = stripBase(window.location.pathname);
  if (path === '/' || path === '') return 'landing';

  return 'landing'; // 알 수 없는 경로는 landing으로 안전 fallback
}

// ─── CSS-in-JS 전체 스타일 주입 ───────────────────────────────────────────────
// landing / app / tweaks 세 가지 CSS 문자열을 모두 한 번에 주입한다.
// (이전 코드에서 tweaksStyles 누락으로 tk-panel 등 스타일이 빠지던 버그 수정)
const styleEl = document.createElement('style');
styleEl.id = 'runtime-styles';
styleEl.textContent = landingStyles + '\n' + appStyles + '\n' + tweaksStyles;
document.head.appendChild(styleEl);

// ─── Root 컴포넌트 ────────────────────────────────────────────────────────────
function Root() {
  const [route, setRoute] = useState(resolveInitialRoute);
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);

  // 테마 CSS 변수 즉시 적용
  useEffect(() => { applyTweaks(tweaks); }, []);

  // 라우트 변경 시 localStorage 동기화
  useEffect(() => { localStorage.setItem('ab_top_route', route); }, [route]);

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
if (rootEl) {
  createRoot(rootEl).render(<Root />);
} else {
  console.error('[alphabridge] #root 엘리먼트를 찾을 수 없습니다. index.html을 확인하세요.');
}
