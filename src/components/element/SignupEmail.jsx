import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { emailData } from '../../redux/signupSlice';
import { checkEmailApi } from '../../service/api';

import styles from '../../styles/loginPageStyle.module.scss';

export const SignupEmail = () => {
  const dispatch = useDispatch();

  const [emailDoubleCheck, setEmailDoubleCheck] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const checkEmail = (data) => {
    checkEmailApi(data)
      .then((res) => {
        if (res.data.success === true) {
          setEmailDoubleCheck(false);
          alert('사용중인 이메일입니다');
          return;
        }
        setEmailDoubleCheck(true);
        dispatch(emailData(data));
        alert('사용가능한 이메일입니다');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
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
            onClick={handleSubmit(checkEmail)}
          >
            중복확인
          </button>
        </div>
        <p className={styles.warning}>{errors.email?.message}</p>
      </div>
    </div>
  );
};
