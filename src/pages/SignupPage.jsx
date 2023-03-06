import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import styles from '../styles/loginPageStyle.module.scss';
import { Icon_G_EyeOpen, Icon_G_EyeClose } from '../assets/index';
import { DeveloperInfo } from '../components/DeveloperInfo';
import { SignupEmail } from '../components/element/SignupEmail';
import { SignupUsername } from '../components/element/SignupUsername';
import { localLoadItem, SessionLoadItem } from '../service/storage';
import { signupApi } from '../service/api';

export const SignupPage = () => {
  const navigate = useNavigate();
  const signupData = useSelector((state) => state.signupData.signup);
  const [view, setView] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const password = watch('password');
  const checkPassword = watch('checkPassword');

  const handleClickSignup = () => {
    if (signupData[0].email == undefined) {
      alert('이메일 중복확인을 해주세요');
      return;
    }
    if (signupData[1].username == undefined) {
      alert('닉네임 중복확인을 해주세요');
      return;
    }
    if (password !== checkPassword) {
      return;
    }
    const newUser = {
      email: signupData[0].email,
      username: signupData[1].username,
      password: password,
    };
    // console.log(newUser);
    signupApi(newUser);
  };

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
          <SignupEmail />
          <SignupUsername />

          <div className={styles.inputList}>
            <p>비밀번호 </p>
            <input
              {...register('password', {
                required: '빈칸을 입력해주세요',
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,15}$/,
                  message: '영어 대소문자, 숫자, 특수문자를 포함한 8-16자를 입력하세요',
                },
              })}
              type={view ? 'text' : 'password'}
              placeholder="비밀번호를 작성해 주세요"
            />
            <button
              className={styles.iconBtn}
              onClick={() => {
                setView(!view);
              }}
            >
              <img src={view ? Icon_G_EyeOpen : Icon_G_EyeClose} />
            </button>
            <p className={styles.warning}>{errors.password?.message}</p>
          </div>
          <div className={styles.inputList}>
            <p>비밀번호 재확인 </p>
            <input
              {...register('checkPassword', {
                required: '빈칸을 입력해주세요',
                pattern: {
                  value: password !== checkPassword,
                  message: '비밀번호가 일치하지 않습니다',
                },
              })}
              type={view ? 'text' : 'password'}
              placeholder="비밀번호를 한 번 더 입력해주세요"
            />
            {password !== checkPassword && (
              <p className={styles.warning}> 비밀번호가 일치하지 않습니다.</p>
            )}

            <button
              className={styles.iconBtn}
              onClick={() => {
                setView(!view);
              }}
            >
              <img src={view ? Icon_G_EyeOpen : Icon_G_EyeClose} />
            </button>
          </div>
        </div>

        <div className={styles.buttonBox}>
          <button onClick={handleSubmit(handleClickSignup)}>ToonDa 가입하기</button>

          <span onClick={goLogin}>로그인 하러 가기</span>
        </div>
      </div>
      <DeveloperInfo />
    </>
  );
};
