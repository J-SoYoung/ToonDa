import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { emailRegex, passwordRegex } from '../common/regEx';
import { DeveloperInfo } from '../components/DeveloperInfo';
import { useInput } from '../hooks/useInput';
import { emailCheckApi, nicknameCheckApi } from '../service/api';

import styles from '../styles/loginPageStyle.module.scss';
import { Icon_G_EyeOpen, Icon_G_EyeClose } from '../assets/index';

export const SignupPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValue: {
      email: 'example@exam.com',
      username: '김유저',
    },
  });

  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const [username, onChangeUsername] = useInput();
  const [password, onChangePassword] = useInput();
  const [passwordCheck, onChangePasswordCheck] = useInput();

  // 중복확인 체크, 비밀번호 재확인
  const [emailDoubleCheck, setEmailDoubleCheck] = useState(false);
  const [usernameDoubleCheck, setUsernameDoubleCheck] = useState(false);
  const [passwordDoubleCheck, setPasswordDoubleCheck] = useState('');

  // 정규식 확인
  const [passwordRegExCheck, setPasswordRegExCheck] = useState('');
  const [usernameCheck, setUsernameCheck] = useState(true);

  const handleClickSignup = () => {
    if (emailDoubleCheck === false) {
      alert('이메일 중복확인을 해주세요');
      return;
    }
    if (usernameDoubleCheck === false) {
      alert('닉네임 중복확인을 해주세요');
      return;
    }
  };

  // const handleUsernameDoubleCheck = () => {
  //   console.log(username);
  //   if (username.length < 5 || username.length > 10) {
  //     setUsernameCheck(false);
  //     alert('닉네임을 확인해주세요');
  //     return;
  //   }
  //   setUsernameCheck(true);
  //   setUsernameDoubleCheck(true);
  //   nicknameCheckApi(username);
  //   // alert("사용가능한 닉네임입니다");
  // };

  const goLogin = () => {
    navigate('/');
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
                {...register('email', {
                  required: '빈칸을 입력해주세요',
                  pattern: {
                    value:
                      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                    message: '이메일 형식을 확인해주세요',
                  },
                })}
                placeholder="이메일을 입력해주세요"
                readOnly={emailDoubleCheck ? true : false}
              />
              <button
                disabled={emailDoubleCheck ? true : false}
                className={emailDoubleCheck ? styles.disabled : null}
                onClick={handleSubmit((data) => {
                  console.log(data);
                  emailCheckApi(data)
                    .then((res) => {
                      console.log(res);
                      setEmailDoubleCheck(true);
                      alert('사용가능한 이메일입니다');
                    })
                    .catch((err) => {
                      alert(err);
                    });
                })}
              >
                중복확인
              </button>
            </div>
            <p className={styles.warning}>{errors.email?.message}</p>
          </div>
          {/* 
          <div className={styles.inputList}>
            <p>닉네임 </p>
            <div className={styles.subCheck}>
              <input
                {...register('username', {
                  required: '빈칸을 입력해주세요',
                  minLength: { value: 5, message: '5글자 이상 12글자 미만으로 적어주세요' },
                  maxLength: { value: 12, message: '5글자 이상 12글자 미만으로 적어주세요' },
                })}
                placeholder="닉네임을 입력해주세요"
                readOnly={usernameDoubleCheck ? true : false}
              />
              <button
                disabled={usernameDoubleCheck ? true : false}
                className={usernameDoubleCheck ? styles.disabled : null}
                // onClick={handleSubmit((data) => {
                //   console.log(data);
                // })}
              >
                중복확인
              </button>
            </div>
            <p>{errors.username?.message}</p>
          </div> */}

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
