// Magic Bridge — Landing Page
// ES Module — Vite 빌드용
import { useState, useEffect, useRef } from 'react';
import {
  IconWordmark, IconArrowRight, IconBulb, IconCompass, IconGear, IconLayers,
  IconLoop, IconMinus, IconPlus, IconShield, IconTrendingDown, IconCheck, IconX,
} from './icons.jsx';
import { HeroBridge, HeroAbstract, HeroPlaceholder } from './hero-visuals.jsx';

const NavBar = ({ onLogin, onHome }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`ab-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="ab-nav-inner">
        <button className="ab-nav-brand" onClick={onHome} aria-label="Magic Bridge home">
          <IconWordmark size={24}/>
        </button>
        <nav className="ab-nav-links">
          <a href="#why">문제 제기</a>
          <a href="#framework">학습 구조</a>
          <a href="#philosophy">철학</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="ab-nav-cta">
          <button className="ab-nav-login" onClick={onLogin}>로그인</button>
          <a href="#cta" className="btn btn-ghost" style={{height: 40, padding: '0 18px', fontSize: 13}}>설명회 신청</a>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ heroStyle }) => {
  return (
    <section className="ab-hero">
      <div className="ab-hero-bg" aria-hidden="true">
        {heroStyle === 'bridge' && <HeroBridge className="ab-hero-svg"/>}
        {heroStyle === 'abstract' && <HeroAbstract className="ab-hero-svg"/>}
        {heroStyle === 'placeholder' && <HeroPlaceholder className="ab-hero-svg"/>}
        <div className="ab-hero-vignette"/>
      </div>
      <div className="ab-hero-inner">
        <div className="ab-badge">
          <span className="ab-badge-dot"/>
          2026 OFFLINE BRIEFING · 상세 추후 공지
        </div>
        <h1 className="ab-hero-title kr-tight">
          혼자가 아닌,<br/>
          <span className="gold-text">시스템으로</span> 하는 투자.
        </h1>
        <p className="ab-hero-sub">
          Magic Bridge는 수익을 약속하지 않습니다.<br/>
          스스로의 투자 기준을 만들어드립니다.
        </p>
        <div className="ab-hero-cta">
          <a href="#cta" className="btn btn-primary">
            무료 설명회 신청하기 <IconArrowRight size={18}/>
          </a>
          <a href="#philosophy" className="btn btn-ghost">브랜드 철학 보기</a>
        </div>
        <div className="ab-hero-meta">
          <span><IconShield size={14}/> 수익 약속 없음</span>
          <span className="ab-dot"/>
          <span><IconLayers size={14}/> 기준을 만드는 교육</span>
          <span className="ab-dot"/>
          <span><IconLoop size={14}/> 학습 구조 · 3 Stage</span>
        </div>
      </div>
      <div className="ab-scroll-hint" aria-hidden="true">
        <span className="ab-scroll-label">SCROLL</span>
        <span className="ab-scroll-line"/>
      </div>
    </section>
  );
};

const WhySection = () => {
  const pains = [
    { n: '01', t: '기준 없는 매매', d: '명확한 원칙 없이 감에 의존하면, 같은 실수가 반복됩니다.', ic: <IconCompass size={22}/> },
    { n: '02', t: '반복되는 손실', d: '손실 이후의 흔들림이 다음 결정을 지배합니다. 그 고리를 끊어야 합니다.', ic: <IconTrendingDown size={22}/> },
    { n: '03', t: '대응 체계의 부재', d: '시장은 예측할 수 없습니다. 필요한 것은 예측이 아니라 대응할 수 있는 체계입니다.', ic: <IconShield size={22}/> },
  ];
  return (
    <section id="why" className="ab-section ab-why fade-up">
      <div className="ab-section-head">
        <p className="eyebrow">01 · WHY MAGIC BRIDGE</p>
        <h2 className="ab-h2 kr-tight">많은 개인 투자자들이<br/>공통적으로 겪는 어려움.</h2>
      </div>
      <div className="ab-why-grid">
        {pains.map(p => (
          <article key={p.n} className="card ab-pain">
            <div className="ab-pain-head">
              <span className="ab-pain-num">{p.n}</span>
              <span className="ab-pain-ic">{p.ic}</span>
            </div>
            <h3 className="ab-pain-title kr-tight">{p.t}</h3>
            <p className="ab-pain-desc">{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const StandardSection = () => (
  <section className="ab-section ab-standard fade-up">
    <div className="ab-section-head">
      <p className="eyebrow">02 · THE STANDARD, NOT THE TRICK</p>
      <h2 className="ab-h2 kr-tight">기법이 아닌 기준을<br/>만드는 교육입니다.</h2>
    </div>
    <div className="ab-standard-grid">
      <div className="ab-standard-card crossed">
        <span className="ab-ribbon ab-ribbon-off">NOT</span>
        <div className="ab-strike" aria-hidden="true"/>
        <h3 className="ab-standard-h">빠른 기법</h3>
        <p className="ab-standard-p">오늘 통하고 내일은 흔들리는 매매 신호, 단기 시그널, 남의 기준.</p>
      </div>
      <div className="ab-standard-divider" aria-hidden="true">
        <span className="ab-div-x"/>
      </div>
      <div className="ab-standard-card on">
        <span className="ab-ribbon ab-ribbon-on">THE STANDARD</span>
        <h3 className="ab-standard-h gold-text">나만의 기준</h3>
        <p className="ab-standard-p">시장이 어떻게 움직여도 스스로 판단하고 대응할 수 있는, 나의 언어로 쓰인 원칙.</p>
      </div>
    </div>
    <p className="ab-standard-foot">
      그것이 <span className="gold-text">Magic Bridge</span>의 본질입니다.
    </p>
  </section>
);

const FrameworkSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const reveal = () => setVisible(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { reveal(); io.disconnect(); } },
      { threshold: 0, rootMargin: '0px 0px -5% 0px' });
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      if (r.top < window.innerHeight) reveal();
      else io.observe(ref.current);
    }
    const onHash = () => {
      if (window.location.hash === '#framework') reveal();
    };
    window.addEventListener('hashchange', onHash);
    const t = setTimeout(reveal, 2000);
    return () => { io.disconnect(); clearTimeout(t); window.removeEventListener('hashchange', onHash); };
  }, []);
  const steps = [
    { n: '01', k: 'UNDERSTAND', t: '이해', d: '시장과 투자의 본질을 나만의 언어로 이해합니다. 외운 지식이 아닌, 내 것으로 번역된 지식이 기준의 출발점입니다.', ic: <IconBulb size={28}/> },
    { n: '02', k: 'APPLY', t: '적용', d: '이해한 내용을 실제 시장에 직접 적용합니다. 종이 위 이론이 아니라, 흔들리는 실제 국면 안에서 작동시켜봅니다.', ic: <IconGear size={28}/> },
    { n: '03', k: 'REPEAT', t: '반복', d: '반복을 통해 투자 기준이 마침내 내 것이 됩니다. 체화된 기준만이 시장의 변동 속에서 나를 붙잡아줍니다.', ic: <IconLoop size={28}/> },
  ];
  return (
    <section id="framework" ref={ref} className={`ab-section ab-framework fade-up ${visible ? 'animate' : ''}`}>
      <div className="ab-section-head">
        <p className="eyebrow">03 · 3 STAGE FRAMEWORK</p>
        <h2 className="ab-h2 kr-tight">이해 → 적용 → 반복.<br/>
          <span className="ab-h2-dim">기준이 내 것이 되는 학습 구조.</span>
        </h2>
      </div>
      <div className="ab-framework-grid">
        {steps.map((s, i) => (
          <React.Fragment key={s.n}>
            <article className="card ab-step" style={{ transitionDelay: `${i * 160}ms` }}>
              <span className="ab-step-num">{s.n}</span>
              <div className="ab-step-ic">{s.ic}</div>
              <p className="eyebrow" style={{marginTop: 20}}>{s.k}</p>
              <h3 className="ab-step-t kr-tight">{s.t}</h3>
              <p className="ab-step-d">{s.d}</p>
            </article>
            {i < 2 && (
              <div className="ab-step-connector" aria-hidden="true" style={{ transitionDelay: `${i * 160 + 80}ms` }}>
                <span className="ab-conn-line"/>
                <IconArrowRight size={16}/>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="ab-framework-banner">
        <span className="eyebrow">CORE PRINCIPLE</span>
        <p className="ab-framework-quote kr-tight">
          핵심은 <span className="ab-strike-gold">빠른 수익</span>이 아닌 <span className="gold-text">학습 구조</span>입니다.
        </p>
      </div>
    </section>
  );
};

const MarketChart = () => {
  // abstract price-ish line — single neutral gold stroke, no candles
  const pts = [
    [0,60],[40,58],[80,52],[120,62],[160,56],[200,48],[240,54],[280,44],[320,52],
    [360,38],[400,46],[440,34],[480,42],[520,30],[560,36],[600,28],[640,40],[680,32],[720,24],[760,30]
  ];
  const path = pts.map((p, i) => `${i ? 'L' : 'M'} ${p[0]} ${p[1]}`).join(' ');
  return (
    <svg viewBox="0 0 760 100" className="ab-market-svg" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="mcline" x1="0" x2="1">
          <stop offset="0" stopColor="var(--gold-1)" stopOpacity="0"/>
          <stop offset="0.3" stopColor="var(--gold-2)"/>
          <stop offset="1" stopColor="var(--gold-1)" stopOpacity="0.2"/>
        </linearGradient>
      </defs>
      {[20, 40, 60, 80].map(y => <line key={y} x1="0" x2="760" y1={y} y2={y} stroke="var(--hairline)"/>)}
      <path d={path} stroke="url(#mcline)" strokeWidth="1.4"/>
      {pts.filter((_, i) => i % 4 === 0).map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="1.4" fill="var(--gold-1)"/>
      ))}
    </svg>
  );
};

const MarketSection = () => (
  <section className="ab-section ab-market fade-up">
    <div className="ab-section-head">
      <p className="eyebrow">04 · MARKET RESPONSE</p>
      <h2 className="ab-h2 kr-tight">시장은 예측이 아니라<br/>대응하는 것입니다.</h2>
    </div>
    <div className="ab-market-grid">
      <div className="card ab-market-chart">
        <div className="ab-market-chart-head">
          <span className="ab-market-tick">KOSPI · ABSTRACTED</span>
          <span className="ab-market-tick dim">↕ 변동성은 변수가 아니라 상수입니다</span>
        </div>
        <MarketChart/>
        <p className="ab-market-caption">
          <span className="gold-text">시장은 항상 변합니다.</span> 예측은 불가능합니다.
        </p>
      </div>
      <div className="ab-market-standard">
        <div className="ab-market-icon"><IconCompass size={28}/></div>
        <h3 className="ab-market-h kr-tight">예측보다 <span className="gold-text">기준</span>이 중요합니다.</h3>
        <ul className="ab-market-list">
          <li><span className="ab-li-dot"/>시장 변화에 흔들리지 않는 나만의 투자 원칙</li>
          <li><span className="ab-li-dot"/>어떤 상황에서도 적용 가능한 판단 기준</li>
          <li><span className="ab-li-dot"/>Magic Bridge가 함께 만들어가는 대응 시스템</li>
        </ul>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const faqs = [
    { q: '수익이 정말 나나요?', a: 'Magic Bridge는 수익을 약속하지 않습니다. 저희가 만드는 것은 단기 수익이 아니라, 시장을 마주할 때의 기준입니다. 기준이 결과를 바꾸고, 결과가 태도를 바꿉니다.', chips: ['수익을 약속하지 않음', '기준을 만드는 교육', '기준이 결과를 바꿈'] },
    { q: '초보자도 할 수 있나요?', a: '전문가 대상의 고난도 매매 교육이 아닙니다. 개인 투자자, 그중에서도 처음 기준을 세우는 분을 위해 설계되었습니다. 단계별 학습 구조가 그 과정을 함께 합니다.', chips: ['전문가용 아님', '개인 투자자 설계', '단계별 학습'] },
    { q: '이미 손실이 많은데 괜찮을까요?', a: '많은 수강생들이 같은 지점에서 시작했습니다. 중요한 것은 어제까지의 결과가 아니라, 오늘부터의 기준입니다. 과거는 바꿀 수 없어도 기준은 오늘 세울 수 있습니다.', chips: ['같은 고민 많음', '앞으로의 기준이 중요', '기준은 오늘부터'] },
    { q: '매매를 직접 알려주는 건가요?', a: '특정 기법이나 종목을 따라 하게 하는 교육이 아닙니다. 스스로 판단할 수 있는 기준을 만드는 것이 목표이며, 그것이 지속 가능한 구조로 이어집니다.', chips: ['특정 기법 아님', '스스로 판단할 기준', '지속 가능한 구조'] },
    { q: '얼마나 배우면 사용할 수 있나요?', a: '학습 속도에는 개인차가 있습니다. 다만 체계적인 학습 구조가 각자의 속도를 안내합니다. 빠른 도달보다 기준이 체화되는 학습이 핵심입니다.', chips: ['개인차 있음', '체계적 구조가 안내', '학습 구조가 핵심'] },
    { q: '지금 시장 상황에서도 가능한가요?', a: '시장은 언제나 변합니다. 변동을 예측하는 것이 아니라, 변동 속에서도 작동하는 기준을 세우는 것이 이 교육의 방향입니다.', chips: ['시장은 항상 변함', '예측보다 기준', '대응 시스템'] },
    { q: '왜 이 교육을 시작하셨나요?', a: '기준 없는 투자로 흔들리는 분들을 가까이에서 지켜봤습니다. 혼자 싸우기보다 시스템으로 함께 하는 투자 — 그 믿음에서 Magic Bridge가 시작되었습니다.', chips: ['기준 없는 투자 목격', '시스템화 미션', '그 믿음의 결과물'] },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="ab-section ab-faq fade-up">
      <div className="ab-section-head">
        <p className="eyebrow">05 · FREQUENTLY ASKED</p>
        <h2 className="ab-h2 kr-tight">자주 묻는 질문.</h2>
      </div>
      <div className="ab-faq-list">
        {faqs.map((f, i) => (
          <div key={i} className={`ab-faq-item ${open === i ? 'open' : ''}`}>
            <button className="ab-faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span className="ab-faq-num num-tabular">Q · {String(i + 1).padStart(2, '0')}</span>
              <span className="ab-faq-qt kr-tight">{f.q}</span>
              <span className="ab-faq-ic">{open === i ? <IconMinus size={18}/> : <IconPlus size={18}/>}</span>
            </button>
            <div className="ab-faq-body">
              <div>
                <p className="ab-faq-a">{f.a}</p>
                <div className="ab-faq-chips">
                  {f.chips.map(c => <span key={c} className="ab-chip">{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PhilosophySection = () => (
  <section id="philosophy" className="ab-section ab-philosophy fade-up">
    <div className="ab-section-head">
      <p className="eyebrow">06 · FOUNDER'S STORY</p>
      <h2 className="ab-h2 kr-tight">가장 강력한 신뢰의 순간은<br/>브랜드 철학에서 온다고 믿습니다.</h2>
    </div>
    <div className="ab-phi-flow">
      {[
        { k: 'PROBLEM', t: '기준 없는 투자', d: '예측과 감에 기댄 매매가 반복되고, 같은 손실이 되돌아오는 현실을 오래 지켜봤습니다.' },
        { k: 'MISSION', t: '시스템화', d: '한 사람의 재능이 아니라, 누구나 따라 설 수 있는 구조. 투자 기준을 시스템으로 옮기는 일이 필요했습니다.' },
        { k: 'MAGIC BRIDGE', t: '기준을 잇는 다리', d: '시장과 개인 투자자 사이, 혼란과 원칙 사이. 그 사이를 잇는 다리로서 Magic Bridge가 시작되었습니다.' },
      ].map((p, i) => (
        <div key={p.k} className="ab-phi-card card">
          <span className="eyebrow">{`0${i + 1} · ${p.k}`}</span>
          <h3 className="ab-phi-t kr-tight">{p.t}</h3>
          <p className="ab-phi-d">{p.d}</p>
        </div>
      ))}
    </div>
    <blockquote className="ab-phi-quote">
      <span className="ab-quote-mark" aria-hidden="true">"</span>
      <p className="ab-quote-text">
        혼자가 아니라 <span className="gold-text">시스템으로</span> —<br/>
        Magic Bridge는 그 믿음에서 시작되었습니다.
      </p>
      <span className="ab-quote-sig">— FOUNDER, MAGIC BRIDGE</span>
    </blockquote>
  </section>
);

const AudienceSection = () => {
  const yes = [
    '스스로의 기준을 세우고 싶은 개인 투자자',
    '같은 실수가 반복되는 원인을 근본부터 짚고 싶은 분',
    '시장 변동에 흔들리지 않을 원칙을 만들고 싶은 분',
    '빠른 수익보다 지속 가능한 학습을 선택하는 분',
  ];
  const no = [
    '단기 수익 보장을 원하시는 분',
    '리딩 신호 · 특정 종목 추천을 받고 싶은 분',
    '"따라만 하면 되는" 매매 기법을 찾는 분',
    '본인의 판단 없이 의존할 교사를 구하는 분',
  ];
  return (
    <section className="ab-section ab-audience fade-up">
      <div className="ab-section-head">
        <p className="eyebrow">07 · WHO IT'S FOR</p>
        <h2 className="ab-h2 kr-tight">누구를 위한 교육인가,<br/>그리고 누구에게는 권하지 않는가.</h2>
      </div>
      <div className="ab-aud-grid">
        <div className="card ab-aud-card on">
          <span className="ab-aud-tag on">이런 분께 권합니다</span>
          <ul className="ab-aud-list">
            {yes.map(y => <li key={y}><IconCheck size={16} stroke="var(--gold-1)"/><span>{y}</span></li>)}
          </ul>
        </div>
        <div className="card ab-aud-card off">
          <span className="ab-aud-tag off">이런 분께는 권하지 않습니다</span>
          <ul className="ab-aud-list">
            {no.map(n => <li key={n}><IconX size={16} stroke="var(--fg-faint)"/><span>{n}</span></li>)}
          </ul>
          <p className="ab-aud-note">권하지 않는 영역을 명확히 하는 것이 신뢰의 시작이라고 믿습니다.</p>
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ onLogin }) => (
  <section id="cta" className="ab-section ab-cta fade-up">
    <div className="ab-cta-bg" aria-hidden="true">
      <HeroBridge className="ab-cta-svg"/>
      <div className="ab-cta-veil"/>
    </div>
    <div className="ab-cta-inner">
      <p className="eyebrow">08 · BRIEFING 2026</p>
      <h2 className="ab-cta-title kr-tight">
        투자는 더 이상<br/>
        <span className="gold-text">'혼자'의 싸움</span>이 아닙니다.
      </h2>
      <p className="ab-cta-sub">기준을 세우는 첫 걸음, 오프라인 설명회에서 함께 시작합니다.</p>
      <div className="ab-cta-btns">
        <button className="btn btn-primary">2026 설명회 신청하기 <IconArrowRight size={18}/></button>
        <button className="btn btn-ghost" onClick={onLogin}>기존 수강생 로그인</button>
      </div>
      <p className="ab-cta-foot">여러분의 성공적인 투자를 진심으로 응원합니다.</p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="ab-footer">
    <div className="ab-footer-inner">
      <div className="ab-footer-brand">
        <IconWordmark size={22}/>
        <p className="ab-footer-tag">혼자가 아닌 시스템으로 하는 투자.</p>
      </div>
      <div className="ab-footer-col">
        <p className="eyebrow">SITEMAP</p>
        <a href="#why">문제 제기</a>
        <a href="#framework">학습 구조</a>
        <a href="#philosophy">브랜드 철학</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="ab-footer-col">
        <p className="eyebrow">COMPANY</p>
        <a>회사 소개</a>
        <a>개인정보처리방침</a>
        <a>이용약관</a>
        <a>고객센터</a>
      </div>
      <div className="ab-footer-col wide">
        <p className="eyebrow">투자 유의사항 고지 (필수)</p>
        <p className="ab-footer-disclaimer">
          본 서비스는 투자자문업 · 투자일임업에 해당하지 아니하며, 특정 종목의 추천이나 수익을 보장하지 않습니다.
          제공되는 교육 콘텐츠는 투자 기준 수립을 돕기 위한 것이며, 모든 투자 결정과 그 결과는 투자자 본인에게 귀속됩니다.
        </p>
      </div>
    </div>
    <div className="ab-footer-base">
      <span>© 2026 Magic Bridge. All rights reserved.</span>
      <span className="num-tabular">v1.0 · BRIEFING EDITION</span>
    </div>
  </footer>
);

const Landing = ({ heroStyle, onLogin }) => {
  useEffect(() => {
    const reveal = (el) => el.classList.add('in');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    const els = document.querySelectorAll('.fade-up');
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      // Already at or above viewport bottom? reveal instantly (no missed transitions on jumps)
      if (r.top < window.innerHeight * 0.9) reveal(el);
      else io.observe(el);
    });
    // catch anchor-link jumps: on hashchange, reveal every fade-up the target will pass
    const onHash = () => {
      const tgt = document.querySelector(window.location.hash);
      if (!tgt) return;
      const tgtY = tgt.getBoundingClientRect().top + window.scrollY;
      document.querySelectorAll('.fade-up:not(.in)').forEach(el => {
        const y = el.getBoundingClientRect().top + window.scrollY;
        if (y <= tgtY + window.innerHeight) reveal(el);
      });
    };
    window.addEventListener('hashchange', onHash);
    // safety net
    const t = setTimeout(() => {
      document.querySelectorAll('.fade-up:not(.in)').forEach(reveal);
    }, 1500);
    return () => { io.disconnect(); clearTimeout(t); window.removeEventListener('hashchange', onHash); };
  }, []);
  return (
    <div className="ab-landing">
      <NavBar onLogin={onLogin} onHome={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
      <Hero heroStyle={heroStyle}/>
      <WhySection/>
      <StandardSection/>
      <FrameworkSection/>
      <MarketSection/>
      <FAQSection/>
      <PhilosophySection/>
      <AudienceSection/>
      <CTASection onLogin={onLogin}/>
      <Footer/>
    </div>
  );
};

export { Landing };
