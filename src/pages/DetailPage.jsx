import React, { useEffect, useState } from "react";
import styles from "../styles/detailPageStyle.module.scss";

import { FooterBar } from "../components/navBar/FooterBar";
import { MiddleNavBar } from "../components/navBar/MiddleNavBar";

export const DetailPage = () => {
  return (
    <div className={styles.detail}>
      <div className={styles.detailBox}>
        <div className={styles.detailMain}>
          <div className={styles.imgBox}>
            <img src="/img/ee.jpg" />
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
          <MiddleNavBar />
          <div className={styles.diaryTitle}>
            <p>우리는 매일 생각하며 살아간다</p>
            <p>툰 다이어리</p>
          </div>
        </div>

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
              우리는 매일 생각하며 살아간다 동해물과 백두산이 마르고 닳도록
              하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람
              대한으로 길이 보전하세 우리나라만세 무궁화 삼천리 화려
            </span>
          </div>
        </div>
        
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
              우리는 매일 생각하며 살아간다 동해물과 백두산이 마르고 닳도록
              하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람
              대한으로 길이 보전하세 우리나라만세 무궁화 삼천리 화려
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
