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
// landing / app / tweaks 세 가지 CSS 문자열을 한 번에 주입.
// tweaksStyles가 누락되면 .tk-panel 등이 깨져 Tweaks 컴포넌트 렌더 실패로 이어짐.
const styleEl = document.createElement('style');
styleEl.id = 'runtime-styles';
styleEl.textContent = landingStyles + '\n' + appStyles + '\n' + tweaksStyles;
document.head.appendChild(styleEl);

// ─── BASE PATH ───────────────────────────────────────────────────────────────
// Vite 빌드 시 base:'/alphabridge-edu/' 옵션이 import.meta.env.BASE_URL 에 주입됨.
// 컴파일 타임에 "/alphabridge-edu/" 리터럴로 인라인되므로 런타임 환경 변수 의존 없음.
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, ''); // "/alphabridge-edu"

// ─── 초기 라우트 결정 ─────────────────────────────────────────────────────────
// 규칙:
//   1. localStorage 에 유효한 값(landing|login|app)이 있으면 그것을 사용.
//   2. pathname 이 BASE_PATH 로 시작하면 → 무조건 'landing' (최초 진입).
//   3. 그 외 모든 경우도 'landing' 으로 안전 fallback.
// 이 앱은 URL 을 변경하지 않는 state 기반 라우터이므로
// pathname 을 파싱해 특정 뷰를 지정하는 로직은 필요 없고,
// 서브경로가 붙어 있어도 항상 올바른 초기 상태를 돌려주기만 하면 됨.
function resolveInitialRoute() {
  try {
    const stored = localStorage.getItem('ab_top_route');
    if (stored === 'landing' || stored === 'login' || stored === 'app') {
      return stored;
    }
  } catch {
    // 프라이빗 브라우징 등 localStorage 접근 불가 시 무시
  }

  // pathname 이 /alphabridge-edu/ 또는 /alphabridge-edu 로 시작 → landing
  const { pathname } = window.location;
  if (pathname === BASE_PATH || pathname.startsWith(BASE_PATH + '/')) {
    return 'landing';
  }

  return 'landing'; // 모든 경우 landing 으로 fallback
}

// ─── 에러 바운더리 ────────────────────────────────────────────────────────────
// React 렌더 트리에서 발생하는 모든 uncaught 에러를 잡아
// 흰 화면 대신 에러 메시지를 보여준다 → 운영 중 디버깅에 필수.
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
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

  // 테마 CSS 변수 즉시 적용 (최초 1회)
  useEffect(() => { applyTweaks(tweaks); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // 라우트 변경 시 localStorage 동기화
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
  // #root 가 없으면 body 에 직접 오류 삽입 (index.html 문제)
  document.body.innerHTML = '<div style="padding:40px;color:#E8C37A;background:#070F22;font-family:monospace">#root 엘리먼트를 찾을 수 없습니다. index.html을 확인하세요.</div>';
} else {
  createRoot(rootEl).render(
    <AppErrorBoundary>
      <Root />
    </AppErrorBoundary>
  );
}
