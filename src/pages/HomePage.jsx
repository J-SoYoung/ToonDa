import React, { useState } from "react";
import styles from "../style/homePageStyle.module.scss";
import Icon_subscribe from "../assets/subscribe.svg";
import { HomeNav } from "../components/navBar/HomeNav";
import { HomeTab } from "../components/navBar/HomeTab";

export const HomePage = () => {
  const handleClickTabList = (keyword) => {
    console.log(keyword);
  };
  return (
    <>
      <HomeNav />
      <HomeTab />
      {/* <div className={styles.homeTab}>
        <button
          onClick={() => {
            handleClickTabList("new");
          }}
        >
          최신
        </button>
        <button
          onClick={() => {
            handleClickTabList("subscribe");
          }}
        >
          구독중인
        </button>
        <button
          onClick={() => {
            handleClickTabList("mydiary");
          }}
        >
          MyDiary
        </button>
      </div> */}

      <div>
        <div className={styles.diaryList}>
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
