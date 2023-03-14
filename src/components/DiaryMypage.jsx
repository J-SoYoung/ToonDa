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
            navigate('/detail/25');
          }}
        >
          id n25번
        </button>
        <button
          onClick={() => {
            navigate('/detail/26');
          }}
        >
          id 26번
        </button>
        <button
          onClick={() => {
            navigate('/detail/27');
          }}
        >
          id 27번
        </button>
      </div>
    </>
  );
};
