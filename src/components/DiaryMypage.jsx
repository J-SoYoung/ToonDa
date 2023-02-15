import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/homePageStyle.module.scss";
import { ReactComponent as Icon_DiaryAdd } from "../assets/black_diaryadd.svg";
import { DiaryItem } from "./DiaryItem";

export const DiaryMypage = () => {
  const navigate = useNavigate();
  // 각자 페이지에 맞는 get요청하기

  return (
    <>
      <div
        className={styles.mydiary}
        onClick={() => {
          navigate("/post/cover");
        }}
      >
        <Icon_DiaryAdd />
        <p>
          새 툰 다이어리
          <br />
          만들기
        </p>
      </div>
      <DiaryItem />
      <DiaryItem />
    </>
  );
};
