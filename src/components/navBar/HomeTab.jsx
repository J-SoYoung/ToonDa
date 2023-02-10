import React from "react";
import { useNavigate } from "react-router-dom";
import { loadItem, saveItem } from "../../service/storage";
import styles from "../../style/homePageStyle.module.scss";

export const HomeTab = () => {
  const navigate = useNavigate();
  const isSelect = loadItem("tabKeyword");

  return (
    <div className={styles.homeTab}>
      <button
        className={isSelect === "new" ? styles.select : null}
        onClick={() => {
          navigate("/home/new");
          saveItem("tabKeyword", "new");
        }}
      >
        최신
      </button>
      <button
        className={
          isSelect === "new"
            ? null
            : isSelect === "subscribe"
            ? styles.select
            : null
        }
        onClick={() => {
          navigate("/home/subscribe");
          saveItem("tabKeyword", "subscribe");
        }}
      >
        구독중인
      </button>
      <button
        className={
          isSelect === "new"
            ? null
            : isSelect === "subscribe"
            ? null
            : styles.select
        }
        onClick={() => {
          navigate("/home/mydiary");
          saveItem("tabKeyword", "mydiary");
        }}
      >
        MyDiary
      </button>
    </div>
  );
};
