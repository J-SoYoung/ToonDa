import React from "react";
import styles from "../../style/homePageStyle.module.scss";

export const HomeTab = () => {
  const handleClickTabList = (keyword) => {
    console.log(keyword);
  };

  return (
    <div className={styles.homeTab}>
      <button
        onClick={() => {
          handleClickTabList("new");
        }}
      >
        최신
      </button>
      <button
        onClick={() => {
          handleClickTabList("subscribe");
        }}
      >
        구독중인
      </button>
      <button
        onClick={() => {
          handleClickTabList("mydiary");
        }}
      >
        MyDiary
      </button>
    </div>
  );
};
