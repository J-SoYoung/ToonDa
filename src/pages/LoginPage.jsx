import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { DeveloperInfo } from '../components/DeveloperInfo';
import { useInput } from '../hooks/useInput';
import { postLogin } from '../service/api';

import styles from '../styles/loginPageStyle.module.scss';
import { Icon_G_EyeOpen, Icon_G_EyeClose } from '../assets/index';

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const [view, setView] = useState(false);

  const handleLogin = (data) => {
    postLogin(data);
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
              {...register('email', {
                required: '빈칸을 입력해주세요',
                pattern: {
                  value:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                  message: '이메일 형식을 확인해주세요',
                },
              })}
              placeholder="이메일을 입력하세요"
            />
            <p className={styles.warning}>{errors.email?.message}</p>
          </div>
          <div className={styles.inputList}>
            <p>비밀번호</p>
            <input
              {...register('password', {
                required: '빈칸을 입력해주세요',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,15}$/,
                  message: '비밀번호는 영어 대소문자, 숫자, 특수문자를 포함한 8-16자입니다',
                },
              })}
              type={view ? 'text' : 'password'}
              placeholder="비밀번호를 입력하세요"
            />
            <p className={styles.warning}>{errors.password?.message}</p>
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
          <button onClick={handleSubmit(handleLogin)}>로그인하기</button>
          <span>또는</span>
          <button>카카오톡으로 로그인하기</button>
          <span onClick={() => navigate('/signup')}>회원가입하러 가기</span>
        </div>
      </div>
      <DeveloperInfo />
    </>
  );
};
