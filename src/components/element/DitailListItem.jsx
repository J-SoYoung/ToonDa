import React from 'react';
import styles from '../../styles/detailPageStyle.module.scss';
import { MiddleNavBarList } from '../navBar/MiddleNavBarList';

export const DitailListItem = ({ diaryList }) => {
  return (
    <>
      {diaryList.map((list) => {
        return (
          <div key={list.diaryId} className={styles.detailList}>
            <div className={styles.ListSubTitle}>
              <p>{list.date}</p>
              <p>{list.title}</p>
            </div>
            <div className={styles.imgBox}>
              <img src={list.img} />
            </div>
            <MiddleNavBarList isCover={false} diaryId={list.diaryId} />
            <div className={styles.diaryTitle}>
              <span>{list.content}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
