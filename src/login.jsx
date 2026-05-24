// Magic Bridge — Login (transition screen)
// ES Module — Vite 빌드용
import React, { useState } from 'react';
import { IconArrowRight, IconWordmark } from './icons.jsx';
import { HeroAbstract } from './hero-visuals.jsx';

const Login = ({ onSignIn, onBack }) => {
  const [email, setEmail] = useState('student@magicbridge.kr');
  const [pw, setPw] = useState('••••••••');
  return (
    <div className="ab-login">
      <div className="ab-login-bg" aria-hidden="true">
        <HeroAbstract className="ab-hero-svg"/>
      </div>
      <button className="ab-login-back" onClick={onBack}><IconArrowRight size={16} style={{transform:'rotate(180deg)'}}/> 랜딩으로</button>
      <div className="ab-login-inner">
        <div className="ab-login-brand"><IconWordmark size={26}/></div>
        <p className="eyebrow" style={{marginTop: 32}}>STUDENT SIGN-IN</p>
        <h1 className="ab-login-h kr-tight">다시 돌아오신 것을<br/>환영합니다.</h1>
        <p className="ab-login-sub">오늘의 한 걸음이 내일의 기준이 됩니다.</p>
        <form className="ab-login-form" onSubmit={(e)=>{ e.preventDefault(); onSignIn(); }}>
          <label className="ab-input">
            <span>이메일</span>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
          </label>
          <label className="ab-input">
            <span>비밀번호</span>
            <input type="password" value={pw} onChange={e=>setPw(e.target.value)}/>
          </label>
          <div className="ab-login-row">
            <label className="ab-check"><input type="checkbox" defaultChecked/> 로그인 상태 유지</label>
            <a className="ab-login-forgot">비밀번호 찾기</a>
          </div>
          <button type="submit" className="btn btn-primary" style={{width:'100%'}}>로그인 <IconArrowRight size={16}/></button>
          <p className="ab-login-alt">아직 수강생이 아니신가요? <a onClick={onBack} style={{color:'var(--gold-2)', cursor:'pointer'}}>설명회 신청하기 →</a></p>
        </form>
      </div>
    </div>
  );
};

export { Login };
