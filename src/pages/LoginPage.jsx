import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeveloperInfo } from '../components/DeveloperInfo';
import { useInput } from '../hooks/useInput';
import { postLogin } from '../service/api';

import styles from '../styles/loginPageStyle.module.scss';
import { Icon_G_EyeOpen, Icon_G_EyeClose } from '../assets/index';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();
  const [view, setView] = useState(false);

  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('빈칸을 채워주세요');
      return;
    }
    postLogin({ email, password });
  };

  return (
    <>
      <div className={styles.loginBox}>
        <div className={styles.logoBox}>
          <img src="/img/test.jpg" />
          <h2>ToonDa</h2>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.inputList}>
            <p>이메일</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className={styles.inputList}>
            <p>비밀번호</p>
            <input
              type={view ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="비밀번호를 입력하세요"
            />
            <button
              className={styles.loginBtn}
              onClick={() => {
                setView(!view);
              }}
            >
              <img src={view ? Icon_G_EyeOpen : Icon_G_EyeClose} />
            </button>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button onClick={handleLogin}>로그인하기</button>
          <span>또는</span>
          <button>카카오톡으로 로그인하기</button>
          <span onClick={() => navigate('/signup')}>회원가입하러 가기</span>
        </div>
      </div>
      <DeveloperInfo />
    </>
  );
};
