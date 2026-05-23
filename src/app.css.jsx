// Magic Bridge — App + Login styles
// ES Module — Vite 빌드용
export const appStyles = `
/* ============ LOGIN ============ */
.ab-login {
  min-height: 100vh; position: relative; overflow: hidden;
  background: radial-gradient(ellipse at 30% 20%, var(--bg-2), var(--bg-0) 70%);
  display: flex; align-items: center; justify-content: center;
  padding: 40px;
}
.ab-login-bg { position: absolute; inset: 0; pointer-events: none; opacity: 0.6; }
.ab-login-back {
  position: absolute; top: 32px; left: 40px;
  display: inline-flex; align-items: center; gap: 8px;
  font-size: 13px; color: var(--fg-muted);
  transition: color 0.2s;
}
.ab-login-back:hover { color: var(--gold-2); }
.ab-login-inner {
  position: relative; max-width: 440px; width: 100%;
  padding: 48px;
  background: linear-gradient(180deg, rgba(7,15,34,0.7), rgba(7,15,34,0.9));
  backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  border-radius: var(--r-lg);
  box-shadow: var(--shadow-card);
}
.ab-login-brand { margin-bottom: 8px; }
.ab-login-h { font-size: 34px; font-weight: 700; margin: 14px 0 10px; letter-spacing: -0.025em; line-height: 1.15; }
.ab-login-sub { font-size: 14px; color: var(--fg-muted); margin: 0 0 32px; }
.ab-login-form { display: flex; flex-direction: column; gap: 16px; }
.ab-input { display: flex; flex-direction: column; gap: 8px; }
.ab-input span { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; color: var(--gold-1); text-transform: uppercase; }
.ab-input input {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--hairline);
  border-radius: 8px;
  padding: 14px 16px;
  color: var(--fg); font-family: var(--f-sans); font-size: 15px;
  transition: border-color 0.2s;
}
.ab-input input:focus { outline: none; border-color: var(--gold-1); }
.ab-login-row { display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--fg-muted); margin-top: 4px; margin-bottom: 8px; }
.ab-check { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
.ab-check input { accent-color: var(--gold-1); }
.ab-login-forgot { cursor: pointer; color: var(--fg-muted); }
.ab-login-forgot:hover { color: var(--gold-2); }
.ab-login-alt { font-size: 13px; color: var(--fg-muted); text-align: center; margin: 16px 0 0; }

/* ============ APP SHELL ============ */
.ab-app {
  display: grid; grid-template-columns: 256px 1fr;
  min-height: 100vh;
  background: var(--bg-0);
}
.ab-side {
  background: linear-gradient(180deg, var(--bg-1), var(--bg-0));
  border-right: 1px solid var(--hairline);
  padding: 28px 18px;
  display: flex; flex-direction: column; gap: 28px;
  position: sticky; top: 0; height: 100vh;
}
.ab-side-brand { padding: 4px 10px 12px; border-bottom: 1px solid var(--hairline); }
.ab-side-nav { display: flex; flex-direction: column; gap: 2px; flex: 1; }
.ab-side-link {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 14px; border-radius: 8px;
  font-size: 14px; color: var(--fg-dim);
  position: relative;
  transition: background 0.2s, color 0.2s;
}
.ab-side-link svg { color: var(--fg-muted); transition: color 0.2s; }
.ab-side-link:hover { background: rgba(255,255,255,0.03); color: var(--fg); }
.ab-side-link:hover svg { color: var(--gold-1); }
.ab-side-link.active {
  background: linear-gradient(90deg, rgba(212,162,76,0.1), transparent);
  color: var(--gold-2);
}
.ab-side-link.active svg { color: var(--gold-2); }
.ab-side-active-bar { position: absolute; left: -18px; top: 8px; bottom: 8px; width: 2px; background: var(--gold-1); border-radius: 0 2px 2px 0; }

.ab-side-foot { border-top: 1px solid var(--hairline); padding-top: 20px; }
.ab-side-user { display: flex; align-items: center; gap: 12px; padding: 0 4px 14px; }
.ab-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--gold-2), var(--gold-deep));
  color: var(--bg-0); font-weight: 700; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
}
.ab-side-user-n { font-size: 14px; font-weight: 600; margin: 0; }
.ab-side-user-m { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.15em; color: var(--fg-muted); margin: 2px 0 0; }
.ab-side-logout {
  width: 100%; padding: 10px; font-size: 12px; color: var(--fg-muted);
  border: 1px solid var(--hairline); border-radius: 6px;
  transition: color 0.2s, border-color 0.2s;
}
.ab-side-logout:hover { color: var(--gold-2); border-color: var(--card-border-strong); }

.ab-main { overflow-y: auto; height: 100vh; }
.ab-topbar {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; gap: 16px;
  padding: 16px 40px;
  background: rgba(7,15,34,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--hairline);
}
.ab-search {
  flex: 1; max-width: 480px;
  display: flex; align-items: center; gap: 10px;
  padding: 9px 14px; border-radius: 8px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--hairline);
  color: var(--fg-muted);
}
.ab-search input { flex: 1; background: transparent; border: none; outline: none; color: var(--fg); font-size: 13px; font-family: var(--f-sans); }
.ab-kbd {
  padding: 2px 8px; border: 1px solid var(--hairline); border-radius: 4px;
  font-size: 10px; letter-spacing: 0.1em;
}
.ab-topbar-icbtn {
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: var(--fg-muted); border: 1px solid var(--hairline);
  margin-left: auto;
}
.ab-topbar-icbtn:hover { color: var(--gold-2); border-color: var(--card-border-strong); }

@media (max-width: 960px) {
  .ab-app { grid-template-columns: 1fr; }
  .ab-side { position: static; height: auto; flex-direction: row; gap: 8px; overflow-x: auto; padding: 12px; }
  .ab-side-nav { flex-direction: row; flex: 1; }
  .ab-side-link span { display: none; }
  .ab-side-foot, .ab-side-brand { display: none; }
}

/* ============ DASHBOARD ============ */
.db-view, .cr-view, .ls-view, .rs-view, .cm-view, .ph-view { padding: 40px; max-width: 1320px; margin: 0 auto; }
.db-head {
  display: flex; justify-content: space-between; align-items: flex-start;
  gap: 32px; margin-bottom: 40px; flex-wrap: wrap;
}
.db-h1 { font-size: 40px; font-weight: 700; margin: 8px 0 10px; letter-spacing: -0.025em; line-height: 1.15; }
.db-sub { color: var(--fg-muted); margin: 0; font-size: 15px; }
.db-stage-badge {
  display: flex; align-items: center; gap: 14px;
  padding: 12px 18px; border: 1px solid var(--card-border-strong); border-radius: 10px;
  background: linear-gradient(90deg, rgba(212,162,76,0.06), transparent);
}
.db-stage-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--gold-2); box-shadow: 0 0 10px var(--gold-1); }
.db-stage-text { font-size: 14px; color: var(--fg); margin: 2px 0 0; font-weight: 600; letter-spacing: -0.005em; }

.db-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 20px;
}
.db-card { padding: 28px; }
.db-next { grid-column: span 2; }
.db-stages { grid-column: span 1; grid-row: span 2; }
.db-recent { grid-column: span 2; }
.db-insight { grid-column: span 2; }
.db-sched { grid-column: span 1; }

.db-next-head, .db-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
.db-next-meta { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.16em; color: var(--fg-muted); }
.db-next-body { display: grid; grid-template-columns: 240px 1fr; gap: 28px; }
.db-next-thumb {
  position: relative; aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, var(--bg-2), var(--bg-0));
  border: 1px solid var(--card-border);
  border-radius: var(--r);
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.db-next-thumb-grid { position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--hairline); opacity: 0.4; }
.db-next-thumb-grid > span { background: var(--bg-1); }
.db-next-play {
  width: 52px; height: 52px; border-radius: 50%;
  background: linear-gradient(180deg, var(--gold-2), var(--gold-deep));
  color: var(--bg-0); position: relative; z-index: 2;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 10px 30px -10px var(--gold-1), 0 0 0 6px var(--gold-glow);
}
.db-next-dur {
  position: absolute; bottom: 10px; right: 10px; z-index: 2;
  font-size: 11px; padding: 3px 8px; background: rgba(7,15,34,0.8); border-radius: 4px; color: var(--gold-2);
}
.db-next-meta-col { display: flex; flex-direction: column; gap: 14px; }
.db-next-t { font-size: 22px; font-weight: 700; margin: 0; letter-spacing: -0.015em; }
.db-next-d { font-size: 14px; line-height: 1.7; color: var(--fg-muted); margin: 0; }
.db-next-btns { display: flex; gap: 10px; margin-top: auto; flex-wrap: wrap; }
.db-prog { display: flex; align-items: center; gap: 12px; font-size: 11px; font-family: var(--f-mono); color: var(--gold-2); }
.db-prog-bar { flex: 1; height: 4px; background: var(--hairline); border-radius: 2px; overflow: hidden; }
.db-prog-bar span { display: block; height: 100%; background: linear-gradient(90deg, var(--gold-2), var(--gold-1)); }

.db-card-h { font-size: 18px; font-weight: 600; margin: 6px 0 18px; letter-spacing: -0.01em; }
.db-stage-ring {
  position: relative; display: flex; align-items: center; justify-content: center;
  margin: 8px auto 24px;
}
.db-stage-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.db-stage-pct { font-size: 28px; font-weight: 700; margin: 0; letter-spacing: -0.02em; }
.db-stage-small { font-family: var(--f-mono); font-size: 9px; letter-spacing: 0.25em; color: var(--fg-muted); margin: 2px 0 0; }
.db-stage-legend { display: flex; flex-direction: column; gap: 16px; }
.db-stage-row-head { display: flex; align-items: center; gap: 8px; font-size: 12px; margin-bottom: 6px; }
.db-stage-k { font-family: var(--f-mono); letter-spacing: 0.15em; color: var(--gold-2); }
.db-stage-t { color: var(--fg-dim); }
.db-stage-chip { font-family: var(--f-mono); font-size: 9px; letter-spacing: 0.15em; padding: 2px 6px; border-radius: 3px; background: rgba(212,162,76,0.1); color: var(--gold-2); }
.db-stage-pctsm { margin-left: auto; color: var(--fg-muted); }
.db-stage-bar { height: 3px; background: var(--hairline); border-radius: 2px; overflow: hidden; }
.db-stage-bar span { display: block; height: 100%; background: var(--gold-1); }
.db-stage-row.lock { opacity: 0.4; }
.db-stage-row.lock .db-stage-bar span { background: var(--fg-faint); }

.db-log { list-style: none; padding: 0; margin: 0; }
.db-log li {
  display: grid; grid-template-columns: 80px 1fr auto 20px; gap: 16px;
  align-items: center; padding: 14px 0;
  border-bottom: 1px solid var(--hairline); font-size: 14px;
}
.db-log li:last-child { border-bottom: none; }
.db-log-date { font-family: var(--f-mono); font-size: 11px; color: var(--fg-muted); letter-spacing: 0.1em; }
.db-log-t { color: var(--fg); }
.db-log-m { font-size: 11px; color: var(--fg-muted); font-family: var(--f-mono); }
.db-link { font-size: 11px; font-family: var(--f-mono); letter-spacing: 0.15em; color: var(--gold-2); display: inline-flex; align-items: center; gap: 6px; }

.db-insight-q { margin: 12px 0 0; padding: 0; }
.db-insight-t { font-family: var(--f-serif); font-size: clamp(22px, 2.4vw, 30px); font-weight: 400; font-style: italic; line-height: 1.4; margin: 12px 0 0; color: var(--fg); letter-spacing: -0.01em; }
.db-insight-foot { margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--hairline); }

.db-sched-list { list-style: none; padding: 0; margin: 14px 0 0; display: flex; flex-direction: column; gap: 14px; }
.db-sched-list li { display: flex; gap: 14px; align-items: center; padding: 14px; background: rgba(255,255,255,0.02); border-radius: 8px; }
.db-sched-date { display: flex; flex-direction: column; align-items: center; width: 56px; flex-shrink: 0; }
.db-sched-date b { font-size: 15px; color: var(--gold-2); letter-spacing: -0.005em; }
.db-sched-date span { font-family: var(--f-mono); font-size: 10px; color: var(--fg-muted); margin-top: 2px; }
.db-sched-t { font-size: 14px; font-weight: 500; margin: 0 0 4px; }
.db-sched-m { font-size: 12px; color: var(--fg-muted); margin: 0; }

@media (max-width: 1100px) {
  .db-grid { grid-template-columns: 1fr 1fr; }
  .db-next, .db-recent, .db-insight { grid-column: span 2; }
  .db-stages { grid-column: span 2; grid-row: auto; }
  .db-sched { grid-column: span 2; }
}
@media (max-width: 640px) {
  .db-grid { grid-template-columns: 1fr; }
  .db-view, .cr-view, .ls-view, .rs-view, .cm-view, .ph-view { padding: 24px 16px; }
  .db-next, .db-stages, .db-recent, .db-insight, .db-sched { grid-column: span 1; }
  .db-next-body { grid-template-columns: 1fr; }
  .db-h1 { font-size: 28px; }
  .ab-topbar { padding: 12px 16px; }
}

/* ============ CURRICULUM ============ */
.cr-overall { min-width: 220px; padding: 16px 20px; border: 1px solid var(--card-border); border-radius: var(--r); }
.cr-overall-n { font-size: 22px; font-weight: 700; margin: 6px 0 10px; letter-spacing: -0.01em; }
.cr-tabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 32px; }
.cr-tab {
  display: flex; align-items: center; gap: 14px;
  padding: 18px 20px; text-align: left;
  border: 1px solid var(--hairline); border-radius: 10px;
  background: rgba(255,255,255,0.02);
  transition: border-color 0.2s, background 0.2s;
}
.cr-tab:hover { border-color: var(--card-border-strong); }
.cr-tab.active { border-color: var(--gold-1); background: linear-gradient(90deg, rgba(212,162,76,0.08), transparent); }
.cr-tab-n { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.2em; color: var(--gold-1); }
.cr-tab-k { font-family: var(--f-mono); font-size: 12px; letter-spacing: 0.15em; color: var(--gold-2); }
.cr-tab-t { font-size: 14px; margin-left: 6px; color: var(--fg); }
.cr-tab-count { margin-left: auto; font-size: 12px; font-family: var(--f-mono); color: var(--fg-muted); }

.cr-stage { padding: 32px 36px; }
.cr-stage-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 24px; margin-bottom: 28px; flex-wrap: wrap; }
.cr-stage-t { font-size: 22px; font-weight: 700; margin: 8px 0 0; letter-spacing: -0.015em; line-height: 1.4; }
.cr-stage-meta { display: flex; gap: 10px; align-items: center; color: var(--fg-muted); font-size: 12px; font-family: var(--f-mono); }
.cr-ch-list { list-style: none; padding: 0; margin: 0; }
.cr-ch {
  display: grid; grid-template-columns: 60px 1fr 40px;
  gap: 20px; align-items: center;
  padding: 20px 8px; border-top: 1px solid var(--hairline);
  cursor: pointer;
  transition: background 0.2s;
}
.cr-ch:last-child { border-bottom: 1px solid var(--hairline); }
.cr-ch:hover { background: rgba(212,162,76,0.03); }
.cr-ch.lock { cursor: not-allowed; opacity: 0.5; }
.cr-ch.lock:hover { background: none; }
.cr-ch.cur { background: linear-gradient(90deg, rgba(212,162,76,0.06), transparent); }
.cr-ch-n { font-family: var(--f-mono); font-size: 13px; color: var(--gold-1); letter-spacing: 0.1em; }
.cr-ch-body { display: flex; flex-direction: column; gap: 4px; }
.cr-ch.done .cr-ch-t { color: var(--fg-muted); }
.cr-ch-t { font-size: 15px; font-weight: 500; margin: 0; color: var(--fg); letter-spacing: -0.005em; }
.cr-ch-m { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-family: var(--f-mono); color: var(--fg-muted); margin: 0; }
.cr-ch-state { justify-self: end; }

@media (max-width: 760px) {
  .cr-tabs { grid-template-columns: 1fr; }
  .cr-stage { padding: 24px 20px; }
  .cr-ch { grid-template-columns: 40px 1fr 28px; gap: 12px; }
}

/* ============ LESSON ============ */
.ls-head { display: flex; align-items: center; gap: 20px; margin-bottom: 24px; flex-wrap: wrap; }
.ls-back {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 14px; border: 1px solid var(--hairline); border-radius: 6px;
  font-size: 12px; color: var(--fg-muted);
}
.ls-back:hover { color: var(--gold-2); border-color: var(--card-border-strong); }
.ls-path { display: flex; align-items: center; gap: 12px; font-size: 13px; color: var(--fg-dim); flex-wrap: wrap; }
.ls-path-n { font-family: var(--f-mono); color: var(--gold-2); letter-spacing: 0.1em; }
.ls-path-t { color: var(--fg); }

.ls-grid { display: grid; grid-template-columns: 1fr 320px; gap: 24px; align-items: start; }
.ls-main { display: flex; flex-direction: column; gap: 20px; }
.ls-player { border: 1px solid var(--card-border); border-radius: var(--r-lg); overflow: hidden; }
.ls-stage {
  aspect-ratio: 16 / 9; position: relative;
  background: linear-gradient(135deg, var(--bg-1), var(--bg-0));
  display: flex; align-items: center; justify-content: center;
}
.ls-stage-grid { position: absolute; inset: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--hairline); opacity: 0.3; }
.ls-stage-grid > span { background: var(--bg-1); }
.ls-stage-lbl { position: relative; z-index: 2; padding: 14px 20px; border: 1px dashed var(--card-border); border-radius: 8px; background: rgba(7,15,34,0.6); }
.ls-controls {
  display: flex; align-items: center; gap: 16px;
  padding: 16px 20px; background: var(--bg-0);
  border-top: 1px solid var(--hairline);
}
.ls-play {
  width: 40px; height: 40px; border-radius: 50%;
  background: linear-gradient(180deg, var(--gold-2), var(--gold-deep));
  color: var(--bg-0);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 6px 20px -6px var(--gold-1);
}
.ls-time, .ls-spd { font-family: var(--f-mono); font-size: 12px; color: var(--fg-muted); letter-spacing: 0.05em; }
.ls-track { flex: 1; height: 3px; background: var(--hairline); border-radius: 2px; overflow: hidden; cursor: pointer; position: relative; }
.ls-track span { display: block; height: 100%; background: linear-gradient(90deg, var(--gold-2), var(--gold-1)); }
.ls-track span::after { content: ''; position: absolute; right: 68%; top: -4px; width: 10px; height: 10px; border-radius: 50%; background: var(--gold-2); box-shadow: 0 0 0 3px var(--gold-glow); }

.ls-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--hairline); }
.ls-tab {
  padding: 12px 18px;
  font-size: 13px; color: var(--fg-muted);
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: -1px;
}
.ls-tab:hover { color: var(--fg); }
.ls-tab.active { color: var(--gold-2); border-bottom-color: var(--gold-1); }

.ls-tab-body { padding: 32px 36px; }
.ls-notes h3 { font-size: 22px; font-weight: 600; margin: 14px 0 18px; letter-spacing: -0.015em; }
.ls-notes p { font-size: 15px; line-height: 1.8; color: var(--fg-dim); margin: 0 0 16px; }
.ls-ol { padding-left: 20px; margin: 16px 0; }
.ls-ol li { font-size: 15px; line-height: 1.8; color: var(--fg-dim); margin-bottom: 10px; }
.ls-ol li b { color: var(--gold-2); font-weight: 600; }
.ls-pull {
  margin-top: 28px; padding: 28px 32px;
  background: linear-gradient(90deg, rgba(212,162,76,0.05), transparent);
  border-left: 1px solid var(--gold-1);
  font-family: var(--f-serif); font-style: italic;
  font-size: 18px; color: var(--fg); line-height: 1.5;
  position: relative;
}
.ls-pull .ab-quote-mark { position: static; font-size: 40px; line-height: 0.2; opacity: 0.3; margin-right: 6px; display: inline-block; vertical-align: -8px; }
.ls-pull p { display: inline; }

.ls-qa-row { padding: 20px 0; border-bottom: 1px solid var(--hairline); }
.ls-qa-row:last-child { border-bottom: none; }
.ls-qa-u { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.12em; color: var(--gold-1); }
.ls-qa-q { font-size: 15px; color: var(--fg); margin: 8px 0 10px; }
.ls-qa-q b, .ls-qa-a b { margin-right: 6px; }
.ls-qa-a { font-size: 14px; color: var(--fg-muted); line-height: 1.7; margin: 0; padding-left: 16px; border-left: 1px solid var(--hairline); }

.ls-files { list-style: none; padding: 0; margin: 0; }
.ls-files li { display: grid; grid-template-columns: 20px 1fr auto auto; gap: 14px; align-items: center; padding: 14px 0; border-bottom: 1px solid var(--hairline); font-size: 14px; }
.ls-files li:last-child { border-bottom: none; }
.ls-files-m { font-size: 11px; color: var(--fg-muted); font-family: var(--f-mono); }
.ls-dl { font-size: 12px; color: var(--gold-2); padding: 6px 12px; border: 1px solid var(--card-border); border-radius: 6px; }
.ls-dl:hover { border-color: var(--gold-1); }

.ls-check { list-style: none; padding: 0; margin: 0; }
.ls-check li { display: flex; align-items: center; gap: 14px; padding: 14px 0; font-size: 15px; color: var(--fg); border-bottom: 1px solid var(--hairline); }
.ls-check li:last-child { border-bottom: none; }
.ls-check li.done { color: var(--fg-muted); text-decoration: line-through; text-decoration-color: var(--hairline); }
.ls-check-box {
  width: 20px; height: 20px; border: 1px solid var(--card-border); border-radius: 4px;
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
}
.ls-check li.done .ls-check-box { background: var(--gold-1); border-color: var(--gold-1); }

.ls-side { padding: 24px; position: sticky; top: 80px; }
.ls-ch-list { list-style: none; padding: 0; margin: 16px 0; }
.ls-ch-list li {
  display: grid; grid-template-columns: 30px 1fr auto 14px; gap: 10px;
  align-items: center; padding: 10px 6px; border-radius: 6px;
  font-size: 13px; color: var(--fg-dim);
}
.ls-ch-list li.cur { background: rgba(212,162,76,0.07); color: var(--fg); }
.ls-ch-list li.done { color: var(--fg-muted); }
.ls-ch-list li.done .ls-ch-t { color: var(--fg-muted); }
.ls-ch-list li > span:first-child { font-family: var(--f-mono); font-size: 11px; color: var(--gold-1); }
.ls-ch-t { font-size: 13px; letter-spacing: -0.005em; }
.ls-ch-m { font-size: 10px; color: var(--fg-muted); font-family: var(--f-mono); }
.ls-side-prog { margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--hairline); }
.ls-side-prog-row { display: flex; justify-content: space-between; font-size: 12px; color: var(--fg-muted); margin-bottom: 6px; }

@media (max-width: 1100px) {
  .ls-grid { grid-template-columns: 1fr; }
  .ls-side { position: static; }
}

/* ============ RESOURCES ============ */
.rs-search {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 14px; border: 1px solid var(--hairline); border-radius: 8px;
  min-width: 260px;
  color: var(--fg-muted);
}
.rs-search input { background: transparent; border: none; outline: none; color: var(--fg); font-family: var(--f-sans); font-size: 13px; width: 100%; }
.rs-cats { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
.rs-cat {
  padding: 8px 16px; font-size: 13px; color: var(--fg-dim);
  border: 1px solid var(--hairline); border-radius: 999px;
  transition: all 0.2s;
}
.rs-cat:hover { color: var(--fg); border-color: var(--card-border); }
.rs-cat.active { background: rgba(212,162,76,0.08); border-color: var(--gold-1); color: var(--gold-2); }
.rs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.rs-card { padding: 28px; display: flex; flex-direction: column; gap: 14px; transition: border-color 0.2s, transform 0.2s; }
.rs-card:hover { border-color: var(--card-border-strong); transform: translateY(-2px); }
.rs-ic {
  width: 44px; height: 44px; border-radius: 10px;
  border: 1px solid var(--card-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold-1);
}
.rs-stage { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; color: var(--gold-2); }
.rs-t { font-size: 17px; font-weight: 600; margin: 0; letter-spacing: -0.01em; line-height: 1.4; }
.rs-meta { display: flex; gap: 10px; align-items: center; font-size: 11px; color: var(--fg-muted); font-family: var(--f-mono); }
.rs-dl { margin-top: auto; display: inline-flex; align-items: center; gap: 6px; font-size: 12px; color: var(--gold-2); align-self: flex-start; padding-top: 10px; }
@media (max-width: 860px) { .rs-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .rs-grid { grid-template-columns: 1fr; } }

/* ============ COMMUNITY ============ */
.cm-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.cm-pin { grid-column: span 2; padding: 28px; background: linear-gradient(90deg, rgba(212,162,76,0.06), transparent); border-color: var(--card-border-strong); }
.cm-pin h3 { font-size: 19px; font-weight: 600; margin: 10px 0 8px; }
.cm-pin p { color: var(--fg-dim); margin: 0; font-size: 14px; line-height: 1.7; }
.cm-pin-tag { font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.18em; color: var(--gold-2); }
.cm-post { padding: 24px 26px; transition: border-color 0.2s; cursor: pointer; }
.cm-post:hover { border-color: var(--card-border-strong); }
.cm-post-tag { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.15em; color: var(--gold-1); }
.cm-post-t { font-size: 17px; font-weight: 600; margin: 10px 0 16px; line-height: 1.4; letter-spacing: -0.01em; }
.cm-post-meta { display: flex; align-items: center; gap: 16px; font-size: 12px; color: var(--fg-muted); }
.cm-post-stats { display: inline-flex; align-items: center; gap: 6px; margin-left: auto; }
.cm-post-stats:first-of-type { margin-left: auto; }
@media (max-width: 760px) { .cm-grid, .cm-pin { grid-template-columns: 1fr; } .cm-pin { grid-column: span 1; } }

/* ============ PLACEHOLDER ============ */
.ph-inner { padding: 60px; max-width: 640px; margin: 80px auto; text-align: center; }
.ph-inner h2 { font-size: 28px; font-weight: 700; margin: 12px 0 16px; letter-spacing: -0.02em; }
.ph-inner p { color: var(--fg-muted); margin: 0; line-height: 1.7; }
`;
