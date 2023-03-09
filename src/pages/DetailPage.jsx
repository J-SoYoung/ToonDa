import React from 'react';
import { useQuery } from 'react-query';
import styles from '../styles/detailPageStyle.module.scss';

import Lottie from 'lottie-react';
import loading from '../assets/lottie/loading.json';

import { MiddleNavBar } from '../components/navBar/MiddleNavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailDiaryApi } from '../service/api';
import { DiaryListItem } from '../components/element/DiaryListItem';

export const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery(['detail', id], () => {
    return getDetailDiaryApi(id);
  });

  const diaryData = data?.data.data;
  const diaryList = diaryData?.diaryList;
  console.log(diaryData?.title);

  const moveSearchPage = (item) => {
    navigate('/search');
  };

  if (isLoading) {
    return (
      <>
        <Lottie animationData={loading} />
      </>
    );
  }

  return (
    <div className={styles.detail}>
      <div className={styles.detailBox}>
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
          <MiddleNavBar diaryTitle={diaryData?.title} isCover={true} />

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
        <DiaryListItem diaryList={diaryList} />;
      </div>
    </div>
  );
};
