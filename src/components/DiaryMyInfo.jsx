import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/homePageStyle.module.scss";

export const DiaryUserInfo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homeUserInfo}>
      <h2>나의 툰 다이어리</h2>
      <div className={styles.userInfo}>
        <img src="/img/user.jpg" />
        <div>
          <span>기록하지 않으면 모든 생각들은 무의미하게 흘러갈 뿐이다</span>
          <button
            onClick={() => {
              navigate("/myprofile");
            }}
          >
            프로필 수정
          </button>
        </div>
      </div>
    </div>
  );
};
