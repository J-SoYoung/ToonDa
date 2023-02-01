import React, { useEffect, useState } from "react";
import styles from "../style/detailPageStyle.module.scss";

import { FooterBar } from "../components/navBar/FooterBar";

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
          <div className={styles.diaryTitle}>
            <p>우리는 매일 생각하며 살아간다</p>
            <p>툰 다이어리</p>
          </div>
        </div>

      </div>
      <FooterBar />
    </div>
  );
};
