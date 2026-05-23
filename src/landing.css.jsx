// Magic Bridge — Landing CSS styles (loaded inline as a string, appended to <style>)
// ES Module — Vite 빌드용
export const landingStyles = `
/* ============ NAV ============ */
.ab-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 50;
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}
.ab-nav.scrolled {
  background: rgba(7, 15, 34, 0.72);
  backdrop-filter: saturate(1.2) blur(14px);
  -webkit-backdrop-filter: saturate(1.2) blur(14px);
  border-bottom-color: var(--hairline);
}
.ab-nav-inner {
  max-width: 1280px; margin: 0 auto; padding: 18px 40px;
  display: flex; align-items: center; gap: 40px;
}
.ab-nav-brand { display: flex; align-items: center; }
.ab-nav-links { display: flex; gap: 28px; margin-left: auto; }
.ab-nav-links a {
  font-size: 13px; color: var(--fg-dim); letter-spacing: -0.005em;
  transition: color 0.2s;
}
.ab-nav-links a:hover { color: var(--gold-2); }
.ab-nav-cta { display: flex; gap: 14px; align-items: center; }
.ab-nav-login {
  font-size: 13px; color: var(--fg-dim); padding: 8px 4px;
  transition: color 0.2s;
}
.ab-nav-login:hover { color: var(--gold-2); }

@media (max-width: 860px) {
  .ab-nav-links { display: none; }
  .ab-nav-inner { padding: 14px 20px; }
}

/* ============ HERO ============ */
.ab-hero {
  position: relative; min-height: 100vh;
  display: flex; align-items: center;
  padding: 180px 40px 120px;
  overflow: hidden;
  background: radial-gradient(ellipse at 20% 0%, var(--bg-2) 0%, var(--bg-1) 45%, var(--bg-0) 100%);
}
.ab-hero-bg { position: absolute; inset: 0; pointer-events: none; }
.ab-hero-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.ab-hero-vignette {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 100%, transparent 40%, var(--bg-0) 95%);
}
.ab-hero-inner {
  position: relative; max-width: 1280px; margin: 0 auto; width: 100%;
  display: flex; flex-direction: column; align-items: flex-start;
}
.ab-badge {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 7px 14px;
  border: 1px solid var(--card-border-strong);
  border-radius: 999px;
  font-family: var(--f-mono); font-size: 11px;
  letter-spacing: 0.16em; color: var(--gold-2);
  background: rgba(212, 162, 76, 0.05);
}
.ab-badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold-2);
  box-shadow: 0 0 10px var(--gold-1);
  animation: ab-pulse 2.6s ease-in-out infinite;
}
@keyframes ab-pulse { 50% { opacity: 0.35; } }
.ab-hero-title {
  margin: 32px 0 28px;
  font-size: clamp(48px, 7vw, 96px);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: var(--fg);
  max-width: 16ch;
  text-wrap: balance;
}
.ab-hero-sub {
  margin: 0 0 40px;
  font-size: clamp(16px, 1.3vw, 19px);
  line-height: 1.7;
  color: var(--fg-dim);
  max-width: 52ch;
}
.ab-hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }
.ab-hero-meta {
  display: flex; gap: 18px; flex-wrap: wrap; align-items: center;
  font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.14em;
  color: var(--fg-muted); text-transform: uppercase;
}
.ab-hero-meta span { display: inline-flex; align-items: center; gap: 8px; }
.ab-hero-meta svg { color: var(--gold-1); }
.ab-dot { width: 3px; height: 3px; background: var(--fg-faint); border-radius: 50%; }

.ab-scroll-hint {
  position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 14px;
}
.ab-scroll-label {
  font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.3em;
  color: var(--fg-faint);
}
.ab-scroll-line {
  width: 1px; height: 48px;
  background: linear-gradient(180deg, var(--gold-1), transparent);
  position: relative; overflow: hidden;
}
.ab-scroll-line::after {
  content: ''; position: absolute; top: -24px; left: 0; width: 1px; height: 24px;
  background: var(--gold-2);
  animation: ab-scroll 2.4s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
@keyframes ab-scroll {
  0% { top: -24px; } 100% { top: 48px; }
}

/* ============ SECTIONS ============ */
.ab-section {
  position: relative;
  max-width: 1280px; margin: 0 auto;
  padding: 140px 40px;
}
.ab-section-head { margin-bottom: 72px; max-width: 820px; }
.ab-section-head .eyebrow { margin-bottom: 18px; display: block; }
.ab-h2 {
  font-size: clamp(34px, 4.4vw, 54px);
  font-weight: 700; line-height: 1.15; letter-spacing: -0.025em;
  color: var(--fg); margin: 0;
  text-wrap: balance;
}
.ab-h2-dim { color: var(--fg-muted); font-weight: 500; }

@media (max-width: 640px) {
  .ab-section { padding: 90px 20px; }
  .ab-section-head { margin-bottom: 48px; }
}

/* ============ WHY ============ */
.ab-why-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
}
.ab-pain { padding: 36px 32px; transition: border-color 0.3s, transform 0.3s; }
.ab-pain:hover { border-color: var(--card-border-strong); transform: translateY(-3px); }
.ab-pain-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 48px; }
.ab-pain-num {
  font-family: var(--f-mono); font-size: 13px; letter-spacing: 0.2em; color: var(--gold-1);
}
.ab-pain-ic { color: var(--gold-1); opacity: 0.8; }
.ab-pain-title { font-size: 22px; font-weight: 600; margin: 0 0 14px; color: var(--fg); }
.ab-pain-desc { font-size: 15px; line-height: 1.7; color: var(--fg-muted); margin: 0; }

@media (max-width: 860px) {
  .ab-why-grid { grid-template-columns: 1fr; gap: 16px; }
}

/* ============ STANDARD ============ */
.ab-standard-grid {
  display: grid; grid-template-columns: 1fr auto 1fr; gap: 24px; align-items: stretch;
}
.ab-standard-card {
  padding: 48px 40px; border-radius: var(--r-lg);
  position: relative; overflow: hidden;
  display: flex; flex-direction: column; justify-content: flex-end;
  min-height: 280px;
}
.ab-standard-card.crossed {
  background: rgba(155, 164, 184, 0.03);
  border: 1px solid var(--hairline);
  color: var(--fg-faint);
}
.ab-standard-card.on {
  background: linear-gradient(180deg, rgba(212,162,76,0.08), rgba(212,162,76,0.02));
  border: 1px solid var(--card-border-strong);
  box-shadow: 0 0 80px rgba(212, 162, 76, 0.08) inset;
}
.ab-ribbon {
  position: absolute; top: 24px; left: 24px;
  font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.3em;
  padding: 4px 10px; border: 1px solid currentColor; border-radius: 4px;
}
.ab-ribbon-off { color: var(--fg-faint); }
.ab-ribbon-on { color: var(--gold-2); background: rgba(212,162,76,0.06); }
.ab-strike {
  position: absolute; inset: 0;
  background-image: linear-gradient(120deg, transparent 49.3%, var(--fg-faint) 49.5%, var(--fg-faint) 50.5%, transparent 50.7%);
  opacity: 0.5;
  pointer-events: none;
}
.ab-standard-h { font-size: clamp(32px, 4vw, 48px); font-weight: 700; margin: 0 0 14px; letter-spacing: -0.02em; }
.ab-standard-p { font-size: 15px; line-height: 1.7; margin: 0; color: var(--fg-muted); }
.ab-standard-card.on .ab-standard-p { color: var(--fg-dim); }
.ab-standard-divider { display: flex; align-items: center; position: relative; width: 48px; }
.ab-div-x {
  width: 1px; height: 100%; background: var(--hairline); margin: 0 auto;
  position: relative;
}
.ab-div-x::before {
  content: '→';
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  background: var(--bg-1); padding: 8px;
  color: var(--gold-2); font-family: var(--f-mono); font-size: 14px;
}
.ab-standard-foot {
  margin-top: 48px; font-size: clamp(18px, 2vw, 24px);
  text-align: center; color: var(--fg-dim); font-weight: 300;
  letter-spacing: -0.01em;
}

@media (max-width: 860px) {
  .ab-standard-grid { grid-template-columns: 1fr; }
  .ab-standard-divider { width: 100%; height: 48px; }
  .ab-div-x { width: 100%; height: 1px; }
}

/* ============ FRAMEWORK ============ */
.ab-framework-grid {
  display: grid; grid-template-columns: 1fr 40px 1fr 40px 1fr; gap: 16px;
  align-items: stretch;
}
.ab-step {
  padding: 40px 32px; transition: transform 0.6s, opacity 0.6s, border-color 0.3s;
  opacity: 0; transform: translateY(20px);
}
.ab-framework.animate .ab-step { opacity: 1; transform: translateY(0); }
.ab-step:hover { border-color: var(--card-border-strong); }
.ab-step-num {
  font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.25em;
  color: var(--gold-1); position: absolute; top: 24px; right: 28px;
}
.ab-step-ic {
  width: 64px; height: 64px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--card-border-strong); border-radius: 12px;
  color: var(--gold-2);
  background: radial-gradient(circle at center, rgba(212,162,76,0.1), transparent 70%);
}
.ab-step-t { font-size: 28px; font-weight: 700; margin: 6px 0 14px; letter-spacing: -0.02em; }
.ab-step-d { font-size: 15px; line-height: 1.75; color: var(--fg-muted); margin: 0; }

.ab-step-connector {
  display: flex; align-items: center; justify-content: center;
  color: var(--gold-1); opacity: 0;
  transition: opacity 0.8s;
  flex-direction: column;
}
.ab-framework.animate .ab-step-connector { opacity: 1; }
.ab-conn-line {
  display: block; width: 40px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-1), transparent);
  margin-bottom: 8px;
}
.ab-framework-banner {
  margin-top: 72px;
  padding: 36px 40px;
  border: 1px solid var(--card-border);
  border-radius: var(--r-lg);
  background: linear-gradient(90deg, rgba(212,162,76,0.04), transparent 60%);
  display: flex; align-items: center; gap: 32px;
  flex-wrap: wrap;
}
.ab-framework-banner .eyebrow { flex-shrink: 0; }
.ab-framework-quote { font-size: clamp(18px, 2.2vw, 26px); font-weight: 500; margin: 0; color: var(--fg); letter-spacing: -0.015em; }
.ab-strike-gold { color: var(--fg-faint); text-decoration: line-through; text-decoration-color: var(--fg-faint); }

@media (max-width: 860px) {
  .ab-framework-grid { grid-template-columns: 1fr; gap: 12px; }
  .ab-step-connector { transform: rotate(90deg); margin: 8px 0; }
}

/* ============ MARKET ============ */
.ab-market-grid {
  display: grid; grid-template-columns: 1.3fr 1fr; gap: 32px; align-items: stretch;
}
.ab-market-chart { padding: 36px; display: flex; flex-direction: column; gap: 24px; }
.ab-market-chart-head {
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
}
.ab-market-tick {
  font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.2em;
  color: var(--gold-1);
}
.ab-market-tick.dim { color: var(--fg-muted); }
.ab-market-svg { width: 100%; height: auto; }
.ab-market-caption { font-size: 17px; color: var(--fg-dim); margin: 0; font-weight: 500; }
.ab-market-standard {
  padding: 36px; border: 1px solid var(--card-border);
  border-radius: var(--r-lg);
  background: linear-gradient(180deg, rgba(212,162,76,0.05), transparent);
  display: flex; flex-direction: column; gap: 18px;
}
.ab-market-icon {
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--card-border-strong); border-radius: 12px;
  color: var(--gold-2);
}
.ab-market-h { font-size: 26px; font-weight: 700; margin: 0; letter-spacing: -0.02em; }
.ab-market-list { list-style: none; padding: 0; margin: 8px 0 0; display: flex; flex-direction: column; gap: 14px; }
.ab-market-list li { display: flex; gap: 12px; align-items: flex-start; font-size: 15px; color: var(--fg-dim); line-height: 1.6; }
.ab-li-dot {
  width: 5px; height: 5px; margin-top: 9px; flex-shrink: 0;
  background: var(--gold-1); border-radius: 50%;
}

@media (max-width: 860px) {
  .ab-market-grid { grid-template-columns: 1fr; gap: 20px; }
}

/* ============ FAQ ============ */
.ab-faq-list {
  border-top: 1px solid var(--hairline);
}
.ab-faq-item {
  border-bottom: 1px solid var(--hairline);
  transition: background 0.3s;
}
.ab-faq-item.open { background: linear-gradient(90deg, rgba(212,162,76,0.03), transparent 70%); }
.ab-faq-q {
  display: grid; grid-template-columns: 84px 1fr 32px; gap: 24px;
  align-items: center; width: 100%; text-align: left;
  padding: 28px 8px; cursor: pointer;
  color: var(--fg);
}
.ab-faq-num { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.18em; color: var(--gold-1); }
.ab-faq-qt { font-size: clamp(17px, 1.6vw, 20px); font-weight: 600; letter-spacing: -0.015em; }
.ab-faq-ic { color: var(--gold-2); justify-self: end; transition: transform 0.4s; }
.ab-faq-item.open .ab-faq-ic { transform: rotate(180deg); }
.ab-faq-body {
  display: grid; grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.ab-faq-item.open .ab-faq-body { grid-template-rows: 1fr; }
.ab-faq-body > div { overflow: hidden; padding: 0 8px 28px 116px; }
.ab-faq-a { font-size: 15px; line-height: 1.8; color: var(--fg-muted); margin: 0 0 18px; max-width: 72ch; }
.ab-faq-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.ab-chip {
  font-size: 12px; padding: 6px 12px;
  border: 1px solid var(--card-border); border-radius: 999px;
  color: var(--gold-2);
  font-family: var(--f-mono); letter-spacing: 0.04em;
}
@media (max-width: 640px) {
  .ab-faq-q { grid-template-columns: 1fr 24px; gap: 12px; }
  .ab-faq-num { display: none; }
  .ab-faq-body > div { padding-left: 8px; }
}

/* ============ PHILOSOPHY ============ */
.ab-phi-flow {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  position: relative;
}
.ab-phi-flow::before {
  content: ''; position: absolute; top: 50%; left: 8%; right: 8%; height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-1), transparent);
  opacity: 0.3;
}
.ab-phi-card { padding: 36px 32px; position: relative; }
.ab-phi-t { font-size: 22px; font-weight: 600; margin: 18px 0 12px; letter-spacing: -0.01em; }
.ab-phi-d { font-size: 15px; line-height: 1.75; color: var(--fg-muted); margin: 0; }
.ab-phi-quote {
  margin: 80px auto 0; max-width: 920px;
  padding: 56px 40px; text-align: center; position: relative;
  border-top: 1px solid var(--hairline); border-bottom: 1px solid var(--hairline);
}
.ab-quote-mark {
  font-family: var(--f-serif); font-size: 120px; line-height: 0;
  position: absolute; top: 56px; left: 50%; transform: translateX(-50%);
  color: var(--gold-1); opacity: 0.2;
}
.ab-quote-text {
  font-family: var(--f-serif);
  font-size: clamp(24px, 3vw, 36px); font-weight: 400;
  line-height: 1.45; color: var(--fg); margin: 0;
  font-style: italic; letter-spacing: -0.01em;
}
.ab-quote-sig {
  display: block; margin-top: 28px;
  font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.3em;
  color: var(--fg-muted);
}
@media (max-width: 860px) {
  .ab-phi-flow { grid-template-columns: 1fr; }
  .ab-phi-flow::before { display: none; }
}

/* ============ AUDIENCE ============ */
.ab-aud-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.ab-aud-card { padding: 40px 36px; display: flex; flex-direction: column; gap: 22px; }
.ab-aud-card.on { border-color: var(--card-border-strong); background: linear-gradient(180deg, rgba(212,162,76,0.04), transparent); }
.ab-aud-card.off { border-color: var(--hairline); }
.ab-aud-tag {
  font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.2em;
  padding: 6px 12px; border-radius: 4px; align-self: flex-start;
}
.ab-aud-tag.on { color: var(--gold-2); background: rgba(212,162,76,0.08); }
.ab-aud-tag.off { color: var(--fg-muted); background: rgba(155,164,184,0.06); }
.ab-aud-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.ab-aud-list li { display: flex; gap: 12px; align-items: flex-start; font-size: 15px; line-height: 1.6; color: var(--fg-dim); }
.ab-aud-list svg { flex-shrink: 0; margin-top: 3px; }
.ab-aud-note { font-size: 13px; color: var(--fg-muted); margin: auto 0 0; font-style: italic; }
@media (max-width: 860px) {
  .ab-aud-grid { grid-template-columns: 1fr; }
}

/* ============ CTA ============ */
.ab-cta {
  max-width: none; padding: 160px 40px; position: relative; overflow: hidden;
  background: var(--bg-0);
}
.ab-cta-bg { position: absolute; inset: 0; pointer-events: none; }
.ab-cta-svg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.5; }
.ab-cta-veil {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at center, rgba(7,15,34,0.1) 0%, var(--bg-0) 80%);
}
.ab-cta-inner {
  position: relative; max-width: 880px; margin: 0 auto; text-align: center;
}
.ab-cta-inner .eyebrow { margin-bottom: 24px; display: block; }
.ab-cta-title {
  font-size: clamp(40px, 6vw, 76px); font-weight: 700;
  line-height: 1.1; letter-spacing: -0.03em; margin: 0 0 28px;
  text-wrap: balance;
}
.ab-cta-sub { font-size: 17px; color: var(--fg-dim); margin: 0 0 48px; line-height: 1.7; }
.ab-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.ab-cta-foot {
  margin: 48px 0 0; font-size: 13px; color: var(--fg-muted);
  font-family: var(--f-mono); letter-spacing: 0.1em;
}

/* ============ FOOTER ============ */
.ab-footer {
  background: var(--bg-0);
  border-top: 1px solid var(--hairline);
  padding: 72px 40px 32px;
}
.ab-footer-inner {
  max-width: 1280px; margin: 0 auto;
  display: grid; grid-template-columns: 1.2fr 1fr 1fr 1.8fr; gap: 48px;
  padding-bottom: 48px; border-bottom: 1px solid var(--hairline);
}
.ab-footer-brand { display: flex; flex-direction: column; gap: 16px; }
.ab-footer-tag { font-size: 13px; color: var(--fg-muted); margin: 0; line-height: 1.6; }
.ab-footer-col { display: flex; flex-direction: column; gap: 10px; }
.ab-footer-col .eyebrow { margin-bottom: 10px; }
.ab-footer-col a { font-size: 13px; color: var(--fg-dim); cursor: pointer; transition: color 0.2s; }
.ab-footer-col a:hover { color: var(--gold-2); }
.ab-footer-col.wide { grid-column: span 1; }
.ab-footer-disclaimer { font-size: 12px; line-height: 1.75; color: var(--fg-muted); margin: 0; }
.ab-footer-base {
  max-width: 1280px; margin: 24px auto 0;
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;
  font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.12em; color: var(--fg-faint);
}
@media (max-width: 860px) {
  .ab-footer-inner { grid-template-columns: 1fr 1fr; gap: 32px; }
  .ab-footer-col.wide { grid-column: 1 / -1; }
}
`;
