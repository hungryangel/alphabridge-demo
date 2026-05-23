// Magic Bridge — App (Dashboard / Curriculum / Lesson / Resources / Community)
// ES Module — Vite 빌드용
import { useState as useS, useEffect as useE } from 'react';
import {
  IconWordmark, IconArrowRight, IconArrowUpRight, IconBell, IconBook, IconChat,
  IconCheck, IconClock, IconDoc, IconFolder, IconHeadset, IconHome, IconLock,
  IconPause, IconPlay, IconProgress, IconSearch,
} from './icons.jsx';

const SIDEBAR = [
  { id: 'dashboard', t: '대시보드', ic: IconHome },
  { id: 'curriculum', t: '커리큘럼', ic: IconBook },
  { id: 'progress', t: '내 학습', ic: IconProgress },
  { id: 'resources', t: '자료실', ic: IconFolder },
  { id: 'community', t: '커뮤니티', ic: IconChat },
  { id: 'support', t: '1:1 문의', ic: IconHeadset },
];

const CURRICULUM = [
  {
    id: 'understand', k: 'UNDERSTAND', t: '이해', color: 'var(--gold-2)',
    desc: '시장과 투자의 본질을 나만의 언어로 번역합니다.',
    chapters: [
      { n: '01', t: '왜 기준인가', dur: '18분', done: true },
      { n: '02', t: '시장의 본질 — 예측의 한계', dur: '24분', done: true },
      { n: '03', t: '위험과 변동성의 언어', dur: '22분', done: true },
      { n: '04', t: '나의 투자 목적을 정의하기', dur: '16분', done: false, cur: true },
      { n: '05', t: '기준을 세울 때 피해야 할 함정', dur: '20분', done: false },
    ],
  },
  {
    id: 'apply', k: 'APPLY', t: '적용', color: 'var(--gold-2)',
    desc: '배운 기준을 실제 시장에 직접 적용해봅니다.',
    chapters: [
      { n: '06', t: '진입 기준을 글로 쓰기', dur: '26분', done: false },
      { n: '07', t: '손절 · 익절의 개인 원칙', dur: '28분', done: false },
      { n: '08', t: '포지션 사이즈 — 숫자로 옮기기', dur: '22분', done: false, lock: true },
      { n: '09', t: '기록의 형식 설계', dur: '18분', done: false, lock: true },
    ],
  },
  {
    id: 'repeat', k: 'REPEAT', t: '반복', color: 'var(--gold-2)',
    desc: '반복을 통해 기준이 내 것으로 체화됩니다.',
    chapters: [
      { n: '10', t: '월간 기준 점검 루틴', dur: '24분', done: false, lock: true },
      { n: '11', t: '흔들림을 기록하는 법', dur: '20분', done: false, lock: true },
      { n: '12', t: '기준의 개정 — 바꿔야 할 때와 버텨야 할 때', dur: '32분', done: false, lock: true },
    ],
  },
];

// --- DASHBOARD ---
const Dashboard = ({ onGoto }) => {
  return (
    <div className="db-view">
      <header className="db-head">
        <div>
          <p className="eyebrow" style={{marginBottom: 8}}>2026 · SPRING COHORT · WEEK 03</p>
          <h1 className="db-h1 kr-tight">안녕하세요, <span className="gold-text">지훈</span>님.</h1>
          <p className="db-sub">오늘의 한 걸음이 내일의 기준이 됩니다.</p>
        </div>
        <div className="db-stage-badge">
          <span className="db-stage-dot"/>
          <div>
            <p className="eyebrow" style={{opacity: 0.8}}>CURRENT STAGE</p>
            <p className="db-stage-text">UNDERSTAND · 이해</p>
          </div>
        </div>
      </header>

      <div className="db-grid">
        {/* this week lesson — wide */}
        <article className="card db-card db-next">
          <div className="db-next-head">
            <p className="eyebrow">THIS WEEK</p>
            <span className="db-next-meta num-tabular">04 / 12 · 다음 강의</span>
          </div>
          <div className="db-next-body">
            <div className="db-next-thumb" aria-hidden="true">
              <div className="db-next-thumb-grid">
                <span/><span/><span/><span/>
              </div>
              <button className="db-next-play"><IconPlay size={20}/></button>
              <span className="db-next-dur num-tabular">16:24</span>
            </div>
            <div className="db-next-meta-col">
              <h2 className="db-next-t kr-tight">나의 투자 목적을 정의하기</h2>
              <p className="db-next-d">왜 투자를 하는지에 대한 한 문장이 기준 전체의 토대가 됩니다. 짧은 연습 과제가 포함되어 있습니다.</p>
              <div className="db-prog">
                <div className="db-prog-bar"><span style={{width:'32%'}}/></div>
                <span className="num-tabular">32%</span>
              </div>
              <div className="db-next-btns">
                <button className="btn btn-primary" onClick={()=>onGoto('lesson')} style={{height:44, fontSize:14}}>이어서 학습하기 <IconArrowRight size={14}/></button>
                <button className="btn btn-ghost" onClick={()=>onGoto('curriculum')} style={{height:44, fontSize:14}}>커리큘럼 보기</button>
              </div>
            </div>
          </div>
        </article>

        {/* 3-stage donut */}
        <article className="card db-card db-stages">
          <p className="eyebrow">3 STAGE FRAMEWORK</p>
          <h3 className="db-card-h kr-tight">학습 구조 진행도</h3>
          <div className="db-stage-ring">
            <StageRing pct={60}/>
            <div className="db-stage-center">
              <p className="db-stage-pct num-tabular gold-text">24%</p>
              <p className="db-stage-small">OVERALL</p>
            </div>
          </div>
          <div className="db-stage-legend">
            <StageRow k="UNDERSTAND" t="이해" pct={60} cur/>
            <StageRow k="APPLY" t="적용" pct={0}/>
            <StageRow k="REPEAT" t="반복" pct={0} lock/>
          </div>
        </article>

        {/* recent log */}
        <article className="card db-card db-recent">
          <div className="db-card-head">
            <p className="eyebrow">RECENT SESSIONS</p>
            <button className="db-link">전체 보기 <IconArrowUpRight size={12}/></button>
          </div>
          <ul className="db-log">
            {[
              { d: '04·22 수', t: '위험과 변동성의 언어', m: '22분 · 완료', done: true },
              { d: '04·20 월', t: '시장의 본질 — 예측의 한계', m: '24분 · 완료', done: true },
              { d: '04·18 토', t: '왜 기준인가', m: '18분 · 완료', done: true },
              { d: '04·16 목', t: '오리엔테이션', m: '12분 · 완료', done: true },
            ].map((r, i) => (
              <li key={i}>
                <span className="db-log-date num-tabular">{r.d}</span>
                <span className="db-log-t">{r.t}</span>
                <span className="db-log-m num-tabular">{r.m}</span>
                <span className="db-log-ic"><IconCheck size={14} stroke="var(--gold-1)"/></span>
              </li>
            ))}
          </ul>
        </article>

        {/* insight */}
        <article className="card db-card db-insight">
          <p className="eyebrow">오늘의 인사이트</p>
          <blockquote className="db-insight-q">
            <span className="ab-quote-mark" style={{position:'static', fontSize: 48, lineHeight: 0.3, display:'inline-block'}}>"</span>
            <p className="db-insight-t kr-tight">
              기준은 시장이 조용할 때가 아니라,<br/>
              <span className="gold-text">시장이 흔들릴 때</span> 작동해야 합니다.
            </p>
          </blockquote>
          <div className="db-insight-foot">
            <span className="eyebrow">DAY 14 · OF 84</span>
          </div>
        </article>

        {/* schedule / briefing */}
        <article className="card db-card db-sched">
          <p className="eyebrow">UPCOMING</p>
          <h3 className="db-card-h kr-tight">다가오는 일정</h3>
          <ul className="db-sched-list">
            <li>
              <span className="db-sched-date"><b className="num-tabular">04·28</b><span>월</span></span>
              <div>
                <p className="db-sched-t">라이브 Q&A · UNDERSTAND</p>
                <p className="db-sched-m">20:00 · 온라인</p>
              </div>
            </li>
            <li>
              <span className="db-sched-date"><b className="num-tabular">05·03</b><span>토</span></span>
              <div>
                <p className="db-sched-t">월간 기준 점검 워크숍</p>
                <p className="db-sched-m">11:00 · 온라인</p>
              </div>
            </li>
            <li>
              <span className="db-sched-date"><b className="num-tabular">05·17</b><span>토</span></span>
              <div>
                <p className="db-sched-t">2026 OFFLINE BRIEFING</p>
                <p className="db-sched-m">상세 추후 공지</p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

const StageRing = ({ pct }) => {
  const r = 58, c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 140 140" width="140" height="140">
      <circle cx="70" cy="70" r={r} fill="none" stroke="var(--hairline)" strokeWidth="6"/>
      <circle cx="70" cy="70" r={r} fill="none" stroke="url(#ringGrad)" strokeWidth="6"
              strokeDasharray={`${(pct/100)*c} ${c}`} strokeLinecap="round"
              transform="rotate(-90 70 70)"/>
      <defs>
        <linearGradient id="ringGrad" x1="0" x2="1">
          <stop offset="0" stopColor="var(--gold-2)"/>
          <stop offset="1" stopColor="var(--gold-deep)"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const StageRow = ({ k, t, pct, cur, lock }) => (
  <div className={`db-stage-row ${cur ? 'cur' : ''} ${lock ? 'lock' : ''}`}>
    <div className="db-stage-row-head">
      <span className="db-stage-k">{k}</span>
      <span className="db-stage-t">· {t}</span>
      {cur && <span className="db-stage-chip">진행중</span>}
      {lock && <IconLock size={12} stroke="var(--fg-faint)"/>}
      <span className="db-stage-pctsm num-tabular">{pct}%</span>
    </div>
    <div className="db-stage-bar"><span style={{width: `${pct}%`}}/></div>
  </div>
);

// --- CURRICULUM ---
const Curriculum = ({ onOpenLesson }) => {
  const [tab, setTab] = useS('understand');
  const cur = CURRICULUM.find(s => s.id === tab);
  const total = CURRICULUM.reduce((a, s) => a + s.chapters.length, 0);
  const done = CURRICULUM.reduce((a, s) => a + s.chapters.filter(c => c.done).length, 0);
  return (
    <div className="cr-view">
      <header className="db-head">
        <div>
          <p className="eyebrow">CURRICULUM</p>
          <h1 className="db-h1 kr-tight">기준을 세우는 여정,<br/><span className="gold-text">3 Stage</span>로 설계되었습니다.</h1>
          <p className="db-sub">이해 → 적용 → 반복. 각 단계는 다음 단계의 전제가 됩니다.</p>
        </div>
        <div className="cr-overall">
          <p className="eyebrow">전체 진도</p>
          <p className="cr-overall-n num-tabular"><span className="gold-text">{done}</span> / {total}</p>
          <div className="db-prog-bar"><span style={{width: `${(done/total)*100}%`}}/></div>
        </div>
      </header>

      <div className="cr-tabs">
        {CURRICULUM.map((s, i) => (
          <button key={s.id} className={`cr-tab ${tab === s.id ? 'active' : ''}`} onClick={()=>setTab(s.id)}>
            <span className="cr-tab-n num-tabular">0{i+1}</span>
            <div>
              <span className="cr-tab-k">{s.k}</span>
              <span className="cr-tab-t">· {s.t}</span>
            </div>
            <span className="cr-tab-count num-tabular">{s.chapters.filter(c=>c.done).length}/{s.chapters.length}</span>
          </button>
        ))}
      </div>

      <div className="cr-stage card">
        <div className="cr-stage-head">
          <div>
            <p className="eyebrow">{cur.k}</p>
            <h2 className="cr-stage-t kr-tight">{cur.t} — {cur.desc}</h2>
          </div>
          <div className="cr-stage-meta">
            <span className="num-tabular">{cur.chapters.length} 챕터</span>
            <span className="ab-dot"/>
            <span className="num-tabular">{cur.chapters.reduce((a, c) => a + parseInt(c.dur), 0)}분</span>
          </div>
        </div>
        <ul className="cr-ch-list">
          {cur.chapters.map((c) => (
            <li key={c.n} className={`cr-ch ${c.done ? 'done' : ''} ${c.cur ? 'cur' : ''} ${c.lock ? 'lock' : ''}`}
                onClick={() => !c.lock && onOpenLesson(c)}>
              <span className="cr-ch-n num-tabular">{c.n}</span>
              <div className="cr-ch-body">
                <p className="cr-ch-t">{c.t}</p>
                <p className="cr-ch-m"><IconClock size={12}/> {c.dur}{c.cur && <><span className="ab-dot"/><span className="gold-text">진행중</span></>}</p>
              </div>
              <span className="cr-ch-state">
                {c.done && <IconCheck size={16} stroke="var(--gold-1)"/>}
                {c.cur && <IconPlay size={14} stroke="var(--gold-2)"/>}
                {c.lock && <IconLock size={14} stroke="var(--fg-faint)"/>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- LESSON VIEWER ---
const Lesson = ({ onBack }) => {
  const [tab, setTab] = useS('notes');
  const [playing, setPlaying] = useS(false);
  const chapters = CURRICULUM[0].chapters;
  return (
    <div className="ls-view">
      <header className="ls-head">
        <button className="ls-back" onClick={onBack}><IconArrowRight size={14} style={{transform:'rotate(180deg)'}}/> 커리큘럼</button>
        <div className="ls-path">
          <span className="eyebrow">UNDERSTAND · 이해</span>
          <span className="ab-dot"/>
          <span className="ls-path-n num-tabular">CH 04</span>
          <span className="ab-dot"/>
          <span className="ls-path-t">나의 투자 목적을 정의하기</span>
        </div>
      </header>
      <div className="ls-grid">
        <div className="ls-main">
          <div className="ls-player">
            <div className="ls-stage" aria-hidden="true">
              <div className="ls-stage-grid"><span/><span/><span/><span/></div>
              <div className="ls-stage-lbl"><span className="eyebrow" style={{letterSpacing:'0.3em'}}>VIDEO · 16:9</span></div>
            </div>
            <div className="ls-controls">
              <button className="ls-play" onClick={()=>setPlaying(!playing)}>
                {playing ? <IconPause size={18}/> : <IconPlay size={18}/>}
              </button>
              <div className="ls-time num-tabular">05:12 / 16:24</div>
              <div className="ls-track"><span style={{width:'32%'}}/></div>
              <div className="ls-spd num-tabular">1.0×</div>
            </div>
          </div>

          <div className="ls-tabs">
            {[['notes','강의 노트'],['qa','Q&A · 12'],['files','관련 자료 · 3'],['check','실습 체크리스트']].map(([k, t])=> (
              <button key={k} className={`ls-tab ${tab===k?'active':''}`} onClick={()=>setTab(k)}>{t}</button>
            ))}
          </div>

          <div className="ls-tab-body card">
            {tab === 'notes' && (
              <div className="ls-notes">
                <p className="eyebrow">CHAPTER NOTES</p>
                <h3 className="kr-tight">한 문장으로 시작합니다.</h3>
                <p>투자 기준을 세우기 전에, 먼저 답해야 할 질문이 있습니다. <b>나는 왜 투자하는가.</b> 이 한 문장이 이후 모든 판단의 기준점이 됩니다.</p>
                <ol className="ls-ol">
                  <li><b>목적을 쓰기</b> — 수익 자체가 아니라, 그 수익이 나의 삶에서 무엇을 해결하는지.</li>
                  <li><b>기간을 정하기</b> — 목적이 언제까지 필요한가. 시간은 기준의 형태를 결정합니다.</li>
                  <li><b>감당 범위를 정하기</b> — 어느 정도의 변동까지 나의 삶이 흔들리지 않는가.</li>
                </ol>
                <div className="ls-pull">
                  <span className="ab-quote-mark" aria-hidden="true">"</span>
                  <p className="kr-tight">목적이 없는 기준은 방향이 없고, 방향이 없는 기준은 지속되지 않습니다.</p>
                </div>
              </div>
            )}
            {tab === 'qa' && (
              <div className="ls-qa">
                {[
                  { u: '수강생 · 이○○', q: '목적을 꼭 수치화해야 할까요?', a: '수치가 아니라 "결정 가능한 형태"로 쓰면 됩니다. "노후 현금흐름 보완"처럼 판단이 가능한 문장이면 충분합니다.' },
                  { u: '수강생 · 박○○', q: '기간은 얼마나 길게 잡는 게 좋을까요?', a: '길이를 먼저 정하기보다, 목적이 필요한 시점을 역산합니다. 그 시점이 기간이 됩니다.' },
                  { u: '수강생 · 김○○', q: '목적이 여러 개일 때는?', a: '우선순위를 정하고 각 목적마다 별도의 기준을 세우는 것이 좋습니다. 기준은 목적에 종속되기 때문입니다.' },
                ].map((x, i) => (
                  <div key={i} className="ls-qa-row">
                    <span className="ls-qa-u">{x.u}</span>
                    <p className="ls-qa-q"><b>Q.</b> {x.q}</p>
                    <p className="ls-qa-a"><b className="gold-text">A.</b> {x.a}</p>
                  </div>
                ))}
              </div>
            )}
            {tab === 'files' && (
              <ul className="ls-files">
                {[
                  { n: '04 · 투자 목적 워크시트.pdf', m: 'PDF · 380KB' },
                  { n: '04 · 기준 수립 체크리스트.pdf', m: 'PDF · 210KB' },
                  { n: '04 · 참고 문헌.md', m: 'MD · 12KB' },
                ].map((f, i) => (
                  <li key={i}>
                    <IconDoc size={18} stroke="var(--gold-1)"/>
                    <span>{f.n}</span>
                    <span className="ls-files-m num-tabular">{f.m}</span>
                    <button className="ls-dl">다운로드</button>
                  </li>
                ))}
              </ul>
            )}
            {tab === 'check' && (
              <ul className="ls-check">
                {[
                  { t: '내가 투자하는 이유를 한 문장으로 썼다', done: true },
                  { t: '그 이유가 필요한 시점을 정했다', done: true },
                  { t: '감당 가능한 변동 범위를 문장으로 적었다', done: false },
                  { t: '목적 · 기간 · 범위를 한 문서로 정리했다', done: false },
                ].map((c, i) => (
                  <li key={i} className={c.done ? 'done' : ''}>
                    <span className="ls-check-box">{c.done && <IconCheck size={12} stroke="var(--bg-0)"/>}</span>
                    <span>{c.t}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <aside className="ls-side card">
          <p className="eyebrow">CHAPTER LIST · UNDERSTAND</p>
          <ul className="ls-ch-list">
            {chapters.map(c => (
              <li key={c.n} className={`${c.done ? 'done' : ''} ${c.cur ? 'cur' : ''}`}>
                <span className="num-tabular">{c.n}</span>
                <span className="ls-ch-t">{c.t}</span>
                <span className="ls-ch-m num-tabular">{c.dur}</span>
                <span className="ls-ch-s">
                  {c.done && <IconCheck size={12} stroke="var(--gold-1)"/>}
                  {c.cur && <IconPlay size={11} stroke="var(--gold-2)"/>}
                </span>
              </li>
            ))}
          </ul>
          <div className="ls-side-prog">
            <div className="ls-side-prog-row"><span>이 챕터</span><span className="num-tabular">32%</span></div>
            <div className="db-prog-bar"><span style={{width:'32%'}}/></div>
            <div className="ls-side-prog-row" style={{marginTop:16}}><span>UNDERSTAND 전체</span><span className="num-tabular">60%</span></div>
            <div className="db-prog-bar"><span style={{width:'60%'}}/></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

// --- RESOURCES / COMMUNITY / PLACEHOLDERS ---
const Resources = () => {
  const cats = ['전체', '워크시트', '체크리스트', '템플릿', '참고 문헌'];
  const [cat, setCat] = useS('전체');
  const files = [
    { t: '투자 목적 워크시트', k: '워크시트', stage: 'UNDERSTAND', s: 'PDF · 380KB' },
    { t: '기준 수립 체크리스트', k: '체크리스트', stage: 'UNDERSTAND', s: 'PDF · 210KB' },
    { t: '진입 기준 템플릿', k: '템플릿', stage: 'APPLY', s: 'DOCX · 48KB' },
    { t: '손절 · 익절 원칙 템플릿', k: '템플릿', stage: 'APPLY', s: 'DOCX · 52KB' },
    { t: '포지션 사이즈 계산기', k: '템플릿', stage: 'APPLY', s: 'XLSX · 124KB' },
    { t: '월간 기준 점검 체크리스트', k: '체크리스트', stage: 'REPEAT', s: 'PDF · 180KB' },
    { t: '기록의 형식 — 샘플 저널', k: '템플릿', stage: 'APPLY', s: 'PDF · 340KB' },
    { t: '위험과 변동성 — 권장 도서', k: '참고 문헌', stage: 'UNDERSTAND', s: 'MD · 8KB' },
    { t: '기준의 개정 워크시트', k: '워크시트', stage: 'REPEAT', s: 'PDF · 220KB' },
  ];
  const filtered = cat === '전체' ? files : files.filter(f => f.k === cat);
  return (
    <div className="rs-view">
      <header className="db-head">
        <div>
          <p className="eyebrow">RESOURCES</p>
          <h1 className="db-h1 kr-tight">자료실.</h1>
          <p className="db-sub">워크시트 · 체크리스트 · 템플릿. 직접 손으로 적어 기준을 내 것으로.</p>
        </div>
        <div className="rs-search">
          <IconSearch size={14}/>
          <input placeholder="자료 검색..."/>
        </div>
      </header>
      <div className="rs-cats">
        {cats.map(c => (
          <button key={c} className={`rs-cat ${cat === c ? 'active' : ''}`} onClick={()=>setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="rs-grid">
        {filtered.map((f, i) => (
          <article key={i} className="card rs-card">
            <div className="rs-ic"><IconDoc size={22}/></div>
            <span className="rs-stage">{f.stage}</span>
            <h3 className="rs-t kr-tight">{f.t}</h3>
            <div className="rs-meta">
              <span>{f.k}</span>
              <span className="ab-dot"/>
              <span className="num-tabular">{f.s}</span>
            </div>
            <button className="rs-dl">다운로드 <IconArrowUpRight size={12}/></button>
          </article>
        ))}
      </div>
    </div>
  );
};

const Community = () => (
  <div className="cm-view">
    <header className="db-head">
      <div>
        <p className="eyebrow">COMMUNITY</p>
        <h1 className="db-h1 kr-tight">수강생의 질문과 인사이트.</h1>
        <p className="db-sub">혼자가 아닌 시스템으로. 질문도 기준을 만드는 과정입니다.</p>
      </div>
    </header>
    <div className="cm-grid">
      <article className="card cm-pin">
        <span className="cm-pin-tag">관리자 공지 · 고정</span>
        <h3 className="kr-tight">4월 월간 Q&A · 4/28(월) 20:00</h3>
        <p>이번 달은 UNDERSTAND 단계의 "목적"에 대한 심화 Q&A를 진행합니다. 사전 질문은 아래 폼에 남겨주세요.</p>
      </article>
      {[
        { u: '이○○ · UNDERSTAND', t: '목적을 한 줄로 줄이기가 생각보다 어렵네요', c: 12, l: 34, tag: '기준 수립' },
        { u: '박○○ · UNDERSTAND', t: '변동성과 위험을 같은 개념으로 봐도 될까요?', c: 8, l: 22, tag: '개념' },
        { u: '김○○ · APPLY', t: '진입 기준을 글로 쓰기 — 제가 쓴 버전 공유합니다', c: 24, l: 58, tag: '기준 공유' },
        { u: '최○○ · UNDERSTAND', t: '기간을 정하는 것이 가장 막힙니다', c: 6, l: 14, tag: '기준 수립' },
        { u: '정○○ · REPEAT', t: '월간 기준 점검을 한 달째 해보니 — 후기', c: 31, l: 77, tag: '후기' },
      ].map((p, i) => (
        <article key={i} className="card cm-post">
          <span className="cm-post-tag">{p.tag}</span>
          <h3 className="kr-tight cm-post-t">{p.t}</h3>
          <div className="cm-post-meta">
            <span>{p.u}</span>
            <span className="cm-post-stats"><IconChat size={12}/> <span className="num-tabular">{p.c}</span></span>
            <span className="cm-post-stats">♡ <span className="num-tabular">{p.l}</span></span>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Placeholder = ({ t }) => (
  <div className="ph-view">
    <div className="ph-inner card">
      <p className="eyebrow">{t.toUpperCase()}</p>
      <h2 className="kr-tight">이 화면은 준비 중입니다.</h2>
      <p>본 프로토타입은 핵심 플로우(대시보드 · 커리큘럼 · 강의 뷰어 · 자료실 · 커뮤니티)에 초점을 맞추고 있습니다.</p>
    </div>
  </div>
);

// --- APP SHELL ---
const App = ({ onLogout }) => {
  const [route, setRoute] = useS(() => localStorage.getItem('ab_route') || 'dashboard');
  useE(() => { localStorage.setItem('ab_route', route); }, [route]);

  return (
    <div className="ab-app">
      <aside className="ab-side">
        <div className="ab-side-brand"><IconWordmark size={22}/></div>
        <nav className="ab-side-nav">
          {SIDEBAR.map(s => {
            const Ic = s.ic;
            return (
              <button key={s.id} className={`ab-side-link ${route === s.id ? 'active' : ''}`} onClick={()=>setRoute(s.id)}>
                <Ic size={18}/><span>{s.t}</span>
                {route === s.id && <span className="ab-side-active-bar"/>}
              </button>
            );
          })}
        </nav>
        <div className="ab-side-foot">
          <div className="ab-side-user">
            <div className="ab-avatar">지</div>
            <div>
              <p className="ab-side-user-n">지훈</p>
              <p className="ab-side-user-m">Spring Cohort</p>
            </div>
          </div>
          <button className="ab-side-logout" onClick={onLogout}>로그아웃</button>
        </div>
      </aside>

      <main className="ab-main scroll">
        <div className="ab-topbar">
          <div className="ab-search">
            <IconSearch size={14}/>
            <input placeholder="강의, 자료, 커뮤니티 검색..."/>
            <span className="ab-kbd num-tabular">⌘ K</span>
          </div>
          <button className="ab-topbar-icbtn"><IconBell size={16}/></button>
        </div>

        {route === 'dashboard' && <Dashboard onGoto={setRoute}/>}
        {route === 'curriculum' && <Curriculum onOpenLesson={()=>setRoute('lesson')}/>}
        {route === 'lesson' && <Lesson onBack={()=>setRoute('curriculum')}/>}
        {route === 'resources' && <Resources/>}
        {route === 'community' && <Community/>}
        {route === 'progress' && <Placeholder t="내 학습"/>}
        {route === 'support' && <Placeholder t="1:1 문의"/>}
      </main>
    </div>
  );
};

export { App };
