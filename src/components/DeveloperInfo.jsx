import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/developerInfo.module.scss";

export const DeveloperInfo = () => {
  return (
    <>
      <div className={styles.devBox}>
        <p>Toonda, developer's</p>
        <div className={styles.dev}>
          <div className={styles.imgBox}>
            <p>BACKEND</p>
            <img src="/img/2.jpg" />
          </div>
          <div className={styles.infoBox}>
            <p>김지민</p>
            <p
              onClick={() => {
                window.open(
                  "https://www.notion.so/fun-blog/young-s-Blog-ad4aa1d36a3046238326b7d636322355"
                );
              }}
            >
              blog : notion으로 이동
            </p>
            <p
              onClick={() => {
                window.open("https://github.com/thdud2262");
              }}
            >
              github : thdud2262 github
            </p>
            <p>email : thgml1444@naver.com</p>
          </div>
        </div>
        <div className={styles.dev}>
          <div className={styles.imgBox}>
            <p>FRONTEND</p>
            <img src="/img/ee.jpg" />
          </div>
          <div className={styles.infoBox}>
            <p>정소영</p>
            <p
              onClick={() => {
                window.open(
                  "https://www.notion.so/fun-blog/young-s-Blog-ad4aa1d36a3046238326b7d636322355"
                );
              }}
            >
              blog : notion으로 이동
            </p>
            <p
              onClick={() => {
                window.open("https://github.com/thdud2262");
              }}
            >
              github : thdud2262 github
            </p>
            <p>email : thgml1444@naver.com</p>
            <p
              onClick={() => {
                window.open(
                  "https://www.notion.so/fun-blog/c5c7743989514e6f8a7c08232f396743?v=712f3c8980eb4c2ba2c3d91d1a490c78"
                );
              }}
            >
              Toonda개발노트로 이동
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
