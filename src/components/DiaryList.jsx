import React from "react";
import styles from "../style/homePageStyle.module.scss";
import Icon_subscribe from "../assets/subscribe.svg";

export const DiaryList = () => {
  return (
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
      </div>
    </div>
  );
};
