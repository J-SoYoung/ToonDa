import React from 'react';
import { MiddleNavBar } from '../navBar/MiddleNavBar';
import styles from '../../styles/detailPageStyle.module.scss';
import { useNavigate } from 'react-router-dom';

export const DitailCoverItem = ({ diaryData }) => {
  const navigate = useNavigate();

  const moveSearchPage = (item) => {
    console.log('해시태그내용', item);
    navigate('/search');
  };

  return (
    <div className={styles.detailCover}>
      <div className={styles.imgBox}>
        <img src={diaryData?.img} />
      </div>
      <div className={styles.diaryInfoBox}>
        <div>
          <img src="/img/user.jpg" />
          <div>
            <p>하루의 생각</p>
            <p>우리는 매일 생각하며 살아간다</p>
          </div>
        </div>
      </div>
      <MiddleNavBar isCover={true} />

      <div className={styles.diaryTitle}>
        <p>{diaryData?.title}</p>
        <p>툰 다이어리</p>
      </div>

      <div className={styles.hashtagBox}>
        <span
          onClick={() => {
            moveSearchPage(diaryData?.hashtag1);
          }}
        >
          {diaryData?.hashtag1 ? `#${diaryData?.hashtag1} ` : null}
        </span>
        <span
          onClick={() => {
            moveSearchPage(diaryData?.hashtag2);
          }}
        >
          {diaryData?.hashtag2 ? `#${diaryData?.hashtag2} ` : null}
        </span>
        <span
          onClick={() => {
            moveSearchPage(diaryData?.hashtag3);
          }}
        >
          {diaryData?.hashtag3 ? `#${diaryData?.hashtag3} ` : null}
        </span>
      </div>
    </div>
  );
};
