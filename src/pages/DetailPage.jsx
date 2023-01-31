import React, { useEffect, useState } from "react";
import styles from "../style/detailPageStyle.module.scss";

import { FooterBar } from "../components/navBar/FooterBar";

export const DetailPage = () => {
  return (
    <div className={styles.detailBox}>
      <div className={styles.detailMain}>
        <img src="/img/ee.jpg" />
        <div className={styles.diaryInfoBox}>
          <img src="/img/user.jpg" />
          <div>
            <p>하루의 생각</p>
            <p>우리는 매일 생각하며 살아간다</p>
          </div>
        </div>
        <div className={styles.diaryTitle}>제목입니다 제목입니다</div>
      </div>
      <FooterBar />
    </div>
  );
};
