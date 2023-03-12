import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/homePageStyle.module.scss';
import { ReactComponent as Icon_DiaryAdd } from '../assets/black_diaryadd.svg';
import { HomeMiniDiary } from './HomeMiniDiary';

export const DiaryMypage = () => {
  const navigate = useNavigate();
  // 각자 페이지에 맞는 get요청하기
  const enterDiary = () => {};
  return (
    <>
      <div
        className={styles.mydiary}
        onClick={() => {
          navigate('/post/cover');
        }}
      >
        <Icon_DiaryAdd />
        <p>
          새 툰 다이어리
          <br />
          만들기
        </p>
      </div>
      <HomeMiniDiary />
      <HomeMiniDiary />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => {
            navigate('/detail/18');
          }}
        >
          id n18번
        </button>
        <button
          onClick={() => {
            navigate('/detail/19');
          }}
        >
          id 19번
        </button>
        <button
          onClick={() => {
            navigate('/detail/20');
          }}
        >
          id 20번
        </button>
        <button
          onClick={() => {
            navigate('/detail/21');
          }}
        >
          id 21번
        </button>
      </div>
    </>
  );
};
