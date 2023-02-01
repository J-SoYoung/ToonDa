import React from "react";
import styles from "../style/homePageStyle.module.scss";
import Icon_subscribe from "../assets/subscribe.svg";
import { Link } from "react-router-dom";

export const DiaryList = () => {
  return (
    <Link to="/detail/1">
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
    </Link>
  );
};