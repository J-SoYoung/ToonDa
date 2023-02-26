import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailRegex, passwordRegex } from '../common/regEx';
import { DeveloperInfo } from '../components/DeveloperInfo';
import { useInput } from '../hooks/useInput';
import { emailCheckApi, nicknameCheckApi } from '../service/api';

import styles from '../styles/loginPageStyle.module.scss';
import { Icon_G_EyeOpen, Icon_G_EyeClose } from '../assets/index';

export const SignupPage = () => {
  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const [email, onChangeEmail] = useInput();
  const [username, onChangeUsername] = useInput();
  const [password, onChangePassword] = useInput();
  const [passwordCheck, onChangePasswordCheck] = useInput();

  // 중복확인 체크, 비밀번호 재확인
  const [emailDoubleCheck, setEmailDoubleCheck] = useState(true);
  const [usernameDoubleCheck, setUsernameDoubleCheck] = useState(false);
  const [passwordDoubleCheck, setPasswordDoubleCheck] = useState('');

  // 정규식 확인
  const [emailRegExCheck, setEmailRegExCheck] = useState(true);
  const [passwordRegExCheck, setPasswordRegExCheck] = useState('');
  const [usernameCheck, setUsernameCheck] = useState(true);

  const handleClickSignup = () => {
    // console.log
  };

  // 이메일, 닉네임 중복확인 + 정규식도 같이 확인
  const handleEmailDoubleCheck = () => {
    // 중복확인 API
    if (email === '') {
      setEmailDoubleCheck(false);
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailDoubleCheck(false);
      setEmailRegExCheck(false);
      return;
    }
    emailCheckApi(email).then((res) => {
      if (res.data.success === false) {
        // setEmailDoubleCheck(true);
      } else {
        alert('중복된 이메일입니다');
        // setEmailDoubleCheck(false);
      }
      console.log(res);
    });
    // setEmailDoubleCheck(true);
  };

  const handleUsernameDoubleCheck = () => {
    console.log(username);
    if (username.length < 5 || username.length > 10) {
      setUsernameCheck(false);
      alert('닉네임을 확인해주세요');
      return;
    }
    setUsernameCheck(true);
    setUsernameDoubleCheck(true);
    nicknameCheckApi(username);
    // alert("사용가능한 닉네임입니다");
  };

  const goLogin = () => {
    navigate('/');
    //
  };

  return (
    <>
      <div className={styles.loginBox}>
        <div className={styles.signupTitleBox}>
          <p>Toonda</p>
          <span>툰다에 오신것을 환영합니다!</span>
        </div>

        <div className={styles.inputBox}>
          <div className={styles.inputList}>
            <p>이메일</p>
            <div className={styles.subCheck}>
              <input
                type="email"
                value={email || ''}
                onChange={onChangeEmail}
                placeholder="이메일 주소를 입력하세요"
                // readOnly={emailDoubleCheck ? true : false}
              />
              <button onClick={handleEmailDoubleCheck}>중복확인</button>
            </div>
            {!emailDoubleCheck ? (
              <label className={emailDoubleCheck ? null : styles.warning}>
                이메일 형식을 확인하세요
              </label>
            ) : null}
          </div>

          <div className={styles.inputList}>
            <p>닉네임 </p>
            <div className={styles.subCheck}>
              <input
                type="text"
                value={username || ''}
                onChange={onChangeUsername}
                placeholder="닉네임을 작성해주세요"
                // readOnly={usernameDoubleCheck ? true :  false}
              />
              <button onClick={handleUsernameDoubleCheck}>중복확인</button>
            </div>
            <label className={usernameCheck ? styles.default : styles.warning}>
              닉네임은 5-10자 입력하세요
            </label>
          </div>

          <div className={styles.inputList}>
            <p>비밀번호 </p>
            <input
              type="password"
              value={password || ''}
              onChange={onChangePassword}
              placeholder="비밀번호를 작성해 주세요"
            />
            <label warning={'default'}>
              {/* <label warning={passwordRegExCheck ? false : true}> */}
              영어 대소문자, 숫자, 특수문자를 포함한 8-16자를 입력하세요
            </label>
            <button
              className={styles.signupBtn}
              onClick={() => {
                setView(!view);
              }}
            >
              <img src={view ? Icon_G_EyeOpen : Icon_G_EyeClose} />
            </button>
          </div>

          <div className={styles.inputList}>
            <p>비밀번호 재확인 </p>
            <input
              type="password"
              value={passwordCheck || ''}
              onChange={onChangePasswordCheck}
              placeholder="비밀번호를 확인 주세요"
            />
            <label warning={'default'}>
              {/* <span warning={passwordDoubleCheck ? false : true}> */}
              동일한 비밀번호를 입력하세요
            </label>
            <button
              className={styles.signupBtn}
              onClick={() => {
                setView(!view);
              }}
            >
              <img src={view ? Icon_G_EyeOpen : Icon_G_EyeClose} />
            </button>
          </div>
        </div>

        <div className={styles.buttonBox}>
          <button onClick={handleClickSignup}>ToonDa 가입하기</button>
          <span onClick={goLogin}>로그인 하러 가기</span>
        </div>
      </div>
      <DeveloperInfo />
    </>
  );
};
