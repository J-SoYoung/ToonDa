import React, { useState } from "react";
import { SubNavBar } from "../components/navBar/SubNavBar";
import styles from "../style/commentPageStyle.module.scss";
import { ReactComponent as Icon_Check } from "../assets/gray_check.svg";

export const CommentPage = () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <SubNavBar children="공감글" />

      <div className={styles.commentBox}>
        <div className={styles.commentViewBox}>
          <div className={styles.commentList}>
            <div className={styles.commentInfo}>
              <img src="/img/user.jpg" />
              <div>
                <div className={styles.commentUserInfo}>
                  <p>아이디입니다</p>
                  <p>기록한날짜2023.02.08 17:05</p>
                </div>
                <p className={styles.comment}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores sint voluptate fuga, soluta
                </p>
              </div>
            </div>
            <div className={styles.commentInfo}>
              <img src="/img/user.jpg" />
              <div>
                <div className={styles.commentUserInfo}>
                  <p>아이디입니다</p>
                  <p>기록한날짜2023.02.08 17:05</p>
                </div>
                <p className={styles.comment}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores sint voluptate fuga, soluta
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.commentInput}>
          <input
            type="text"
            placeholder="공감글을 작성해주세요"
            onChange={(e) => {
              setComment(e.tar.value);
            }}
          />
          <button>
            <Icon_Check style={{ width: "30px", height: "30px" }} />
          </button>
        </div>
      </div>
    </>
  );
};
