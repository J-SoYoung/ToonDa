import React, { useEffect, useState } from 'react';
import styles from '../styles/homePageStyle.module.scss';

import { HomeNavBar } from '../components/navBar/HomeNavBar';
import { HomeTab } from '../components/navBar/HomeTab';
import { DiaryUserInfo } from '../components/DiaryMyInfo';
import { useNavigate, useParams } from 'react-router-dom';
import { DiarySubscribe } from '../components/DiarySubscribe';
import { DiaryMypage } from '../components/DiaryMypage';
import { DiaryNew } from '../components/DiaryNew';
import { CarouselImg } from '../components/element/CarouselImg';

export const HomePage = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();

  // function handleBackButton(event) {
  //   event.preventDefault();
  //   console.log('만료된 페이지입니다 - 홈페이지');
  //   alert('만료된 페이지입니다 - 홈페이지');
  // }
  // useEffect(() => {
  //   window.addEventListener('popstate', handleBackButton);
  //   return () => {
  //     window.removeEventListener('popstate', handleBackButton);
  //   };
  // }, []);

  return (
    <div className={styles.homeBox}>
      <HomeNavBar />
      {keyword === 'mydiary' ? (
        <DiaryUserInfo />
      ) : (
        <div className={styles.homeBanner}>
          <CarouselImg />
        </div>
      )}

      <HomeTab />
      <div>
        <div className={styles.diaryList}>
          {keyword === 'mydiary' ? (
            <DiaryMypage />
          ) : keyword === 'new' ? (
            <DiaryNew />
          ) : (
            <DiarySubscribe />
          )}
        </div>
      </div>
    </div>
  );
};
