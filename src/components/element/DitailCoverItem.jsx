import React from 'react';
import { MiddleNavBar } from '../navBar/MiddleNavBarList';
import styles from '../../styles/detailPageStyle.module.scss';
import { useNavigate } from 'react-router-dom';
import { MiddleNavBarCover } from '../navBar/MiddleNavBarCover';

export const DitailCoverItem = ({ diaryData }) => {
  const navigate = useNavigate();
  // console.log(diaryData);

  const moveSearchPage = (item) => {
    console.log('해시태그내용', item);
    navigate('/search');
  };

  return (
    <div className={styles.detailCover}>
      <div className={styles.imgBox}>
        <img src={diaryData?.folderImg} />
      </div>
      <div className={styles.diaryInfoBox}>
        <div>
          <img src={diaryData?.userImg ? diaryData?.userImg : '/img/user.jpg'} />
          <div>
            <p>{diaryData?.username}</p>
          </div>
        </div>
      </div>
      <MiddleNavBarCover isCover={true} folderId={diaryData?.folderId} />

      <div className={styles.diaryTitle}>
        <p>{diaryData?.title}</p>
        <p>툰 다이어리</p>
      </div>

      <div className={styles.hashtagBox}>
        {diaryData?.hashtagList.map((hash) => {
          console.log(hash);
          // return (
          // )
        })}
        {/* <span
            onClick={() => {
              moveSearchPage(hash?.hashtag1);
            }}
          >
            {diaryData?.hashtag1 ? `#${diaryData?.hashtag1} ` : null}
          </span>; */}
        {/* <span
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
        </span> */}
      </div>
    </div>
  );
};
