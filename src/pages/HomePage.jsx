import React, { useState } from "react";
import styles from "../style/homePageStyle.module.scss";

import { HomeNav } from "../components/navBar/HomeNav";
import { HomeTab } from "../components/navBar/HomeTab";
import { DiaryUserInfo } from "../components/DiaryUserInfo";
import { useNavigate } from "react-router-dom";
import { saveItem } from "../common/storage";
import { DiaryList } from "../components/DiaryList";
import { FooterBar } from "../components/navBar/FooterBar";

export const HomePage = () => {
  const navigate = useNavigate();
  const [mydiary, setMydiary] = useState(true);

  const handleClickTabList = (keyword) => {
    console.log(keyword);
  };
  return (
    <>
      <HomeNav />
      {mydiary ? <DiaryUserInfo /> : null}
      <HomeTab />

      <div>
        <div className={styles.diaryList}>
          {mydiary ? (
            <div
              className={styles.mydiary}
              onClick={() => {
                saveItem("postKeyword", "ToonDiary");
                navigate("/post");
              }}
            >
              <img src="/img/icon/newDiary.png" />
              <p>
                새 툰 다이어리
                <br />
                만들기
              </p>
            </div>
          ) : null}

          <DiaryList />
        </div>
      </div>
    </>
  );
};
