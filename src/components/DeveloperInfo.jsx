import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/developerInfo.module.scss';

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
                  'https://www.notion.so/fun-blog/young-s-Blog-ad4aa1d36a3046238326b7d636322355',
                );
              }}
            >
              blog : notion으로 이동
            </p>
            <p
              onClick={() => {
                window.open('https://github.com/thdud2262');
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
            <img src="/img/sy.jpg" />
          </div>
          <div className={styles.infoBox}>
            <p>정소영</p>
            <p
              onClick={() => {
                window.open('https://www.notion.so/young-s-Blog-ad4aa1d36a3046238326b7d636322355');
              }}
            >
              blog : notion으로 이동
            </p>
            <p
              onClick={() => {
                window.open('https://github.com/thdud2262');
              }}
            >
              github : thdud2262 github
            </p>
            <p>email : thgml1444@naver.com</p>
            <p
              onClick={() => {
                window.open(
                  'https://www.notion.so/fun-blog/ToonDa-TIL-749c4c7334c54946ba52749d9f5f46bf',
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
