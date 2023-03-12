import React from 'react';
import styles from '../../styles/detailPageStyle.module.scss';
import { MiddleNavBar } from '../navBar/MiddleNavBar';

export const DitailListItem = ({ diaryList }) => {
  return (
    <>
      {diaryList.map((list) => {
        return (
          <div key={list.modifiedAt} className={styles.detailList}>
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
