import React, { useState } from "react";
import styles from "../style/homePageStyle.module.scss";

import { ReactComponent as Icon_DiaryAdd } from "../assets/black_diaryadd.svg";

import { HomeNavBar } from "../components/navBar/HomeNavBar";
import { HomeTab } from "../components/navBar/HomeTab";
import { DiaryUserInfo } from "../components/DiaryUserInfo";
import { useNavigate } from "react-router-dom";
import { saveItem } from "../common/storage";
import { DiaryList } from "../components/DiaryList";

export const HomePage = () => {
  const navigate = useNavigate();
  const [mydiary, setMydiary] = useState(true);

  const handleClickTabList = (keyword) => {
    console.log(keyword);
  };
  return (
    <>
      <HomeNavBar />
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
              <Icon_DiaryAdd />
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
