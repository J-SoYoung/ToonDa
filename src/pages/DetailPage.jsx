import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import styles from '../styles/detailPageStyle.module.scss';

import { FooterBar } from '../components/navBar/FooterBar';
import { MiddleNavBar } from '../components/navBar/MiddleNavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { getDetailDiaryApi } from '../service/api';
import { localLoadItem } from '../service/storage';

export const DetailPage = () => {
  const QueryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading } = useQuery(['detail', id], () => {
    return getDetailDiaryApi(id);
  });
  const diaryData = data?.data.data;
  const diaryList = diaryData?.diaryList;
  const userProfile = localLoadItem();
  const moveSearchPage = (item) => {
    navigate('/search');
  };

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
              {/* <img src="/img/user.jpg" /> */}
              <div>
                <p>하루의 생각</p>
                <p>우리는 매일 생각하며 살아간다</p>
              </div>
            </div>
          </div>
          <MiddleNavBar diaryTitle={diaryData?.title} />

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
        {/* 
        {diaryList?.map((l) => {
          //
        })} */}
        <div className={styles.detailList}>
          <div className={styles.ListSubTitle}>
            <p>2023년 2월 6일</p>
            <p>부제목은 10글자로제한</p>
          </div>
          <div className={styles.imgBox}>
            <img src="/img/ee.jpg" />
          </div>
          <MiddleNavBar />
          <div className={styles.diaryTitle}>
            <span>
              우리는 매일 생각하며 살아간다 동해물과 백두산이 마르고 닳도록 하나님이 보우하사
              우리나라만세 무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세 우리나라만세
              무궁화 삼천리 화려
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
