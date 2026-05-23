import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './tokens.css';
import { landingStyles } from './landing.css.jsx';
import { appStyles } from './app.css.jsx';
import { TWEAK_DEFAULTS, applyTweaks, Tweaks } from './tweaks.jsx';
import { Landing } from './landing.jsx';
import { Login } from './login.jsx';
import { App } from './app.jsx';

// CSS-in-JS 스타일 주입
const styleEl = document.createElement('style');
styleEl.id = 'runtime-styles';
styleEl.textContent = landingStyles + '\n' + appStyles;
document.head.appendChild(styleEl);

function Root() {
  const [route, setRoute] = useState(() => localStorage.getItem('ab_top_route') || 'landing');
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  useEffect(() => { applyTweaks(tweaks); }, []);
  useEffect(() => { localStorage.setItem('ab_top_route', route); }, [route]);

  return (
    <>
      {route === 'landing' && <Landing heroStyle={tweaks.heroStyle} onLogin={() => setRoute('login')} />}
      {route === 'login' && <Login onSignIn={() => setRoute('app')} onBack={() => setRoute('landing')} />}
      {route === 'app' && <App onLogout={() => setRoute('landing')} />}
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
