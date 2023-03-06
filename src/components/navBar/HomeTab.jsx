import React from 'react';
import { useNavigate } from 'react-router-dom';
import { localLoadItem, localSaveItem } from '../../service/storage';
import styles from '../../styles/homePageStyle.module.scss';

export const HomeTab = () => {
  const navigate = useNavigate();
  const isSelect = localLoadItem('tabKeyword');

  return (
    <div className={styles.homeTab}>
      <button
        className={isSelect === 'new' ? styles.select : null}
        onClick={() => {
          navigate('/home/new');
          localSaveItem('tabKeyword', 'new');
        }}
      >
        최신
      </button>
      <button
        className={isSelect === 'new' ? null : isSelect === 'subscribe' ? styles.select : null}
        onClick={() => {
          navigate('/home/subscribe');
          localSaveItem('tabKeyword', 'subscribe');
        }}
      >
        구독중인
      </button>
      <button
        className={isSelect === 'new' ? null : isSelect === 'subscribe' ? null : styles.select}
        onClick={() => {
          navigate('/home/mydiary');
          localSaveItem('tabKeyword', 'mydiary');
        }}
      >
        MyDiary
      </button>
    </div>
  );
};
