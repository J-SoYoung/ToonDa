import React, { useState } from "react";
import styles from "../style/homePageStyle.module.scss";
import Icon_subscribe from "../assets/subscribe.svg";
import { HomeNav } from "../components/navBar/HomeNav";
import { HomeTab } from "../components/navBar/HomeTab";
import { MyDiaryUserInfo } from "../components/MyDiaryUserInfo";

export const HomePage = () => {
  const [mydiary, setMydiary] = useState(true);

  const handleClickTabList = (keyword) => {
    console.log(keyword);
  };
  return (
    <>
      <HomeNav />
      {mydiary ? <MyDiaryUserInfo /> : null}
      <HomeTab />

      <div>
        <div className={styles.diaryList}>
          {mydiary ? (
            <div>
              <img src="/img/icon/newDiary.png" />
              <p>새 툰 다이어리 만들기</p>
            </div>
          ) : null}

          <div className={styles.diaryItem}>
            <div className={styles.imgBackground}>
              <img src="/img/2.jpg" />
            </div>
            <div className={styles.content}>
              <p>오늘의툰오늘의툰오늘의툰 </p>
              <div className={styles.subContent}>
                <img src={Icon_subscribe} />
                <div>
                  <p>12</p>
                  <p>100p</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.diaryItem}>
            <div className={styles.imgBackground}>
              <img src="/img/2.jpg" />
            </div>
            <div className={styles.content}>
              <p>오늘의툰오늘의툰오늘의툰 </p>
              <div className={styles.subContent}>
                <img src={Icon_subscribe} />
                <div>
                  <p>12</p>
                  <p>100p</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
