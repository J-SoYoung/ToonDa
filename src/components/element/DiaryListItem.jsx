import React from 'react';
import styles from '../../styles/detailPageStyle.module.scss';
import { MiddleNavBar } from '../navBar/MiddleNavBar';

export const DiaryListItem = ({ diaryList }) => {
  return (
    <>
      {diaryList.map((list) => {
        return (
          <div className={styles.detailList}>
            <div className={styles.ListSubTitle}>
              <p>{list.date}</p>
              <p>{list.title}</p>
            </div>
            <div className={styles.imgBox}>
              <img src={list.img} />
            </div>
            <MiddleNavBar isCover={false} />
            <div className={styles.diaryTitle}>
              <span>{list.content}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
