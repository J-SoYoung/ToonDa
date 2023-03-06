import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { usernamData } from '../../redux/signupSlice';
import { checkUsernameApi } from '../../service/api';
import styles from '../../styles/loginPageStyle.module.scss';

export const SignupUsername = () => {
  const dispatch = useDispatch();
  const [usernameDoubleCheck, setUsernameDoubleCheck] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const checkUsername = (data) => {
    checkUsernameApi(data)
      .then((res) => {
        if (res.data.success === true) {
          setUsernameDoubleCheck(false);
          alert('사용중인 닉네임입니다');
          return;
        }
        setUsernameDoubleCheck(true);
        dispatch(usernamData(data));
        alert('사용가능한 닉네임입니다');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={styles.inputBox}>
      <div className={styles.inputList}>
        <p>닉네임</p>
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
            onClick={handleSubmit(checkUsername)}
          >
            중복확인
          </button>
        </div>
        <p className={styles.warning}>{errors.username?.message}</p>
      </div>
    </div>
  );
};
