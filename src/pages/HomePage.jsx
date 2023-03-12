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
