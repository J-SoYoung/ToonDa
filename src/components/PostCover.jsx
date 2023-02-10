import React from "react";
import styles from "../style/postPageStyle.module.scss";

export const PostCover = () => {
  return (
    <div>
      
      <p>일기책만들기</p>
      <div className={styles.togglebox}>
        <input
          type="checkbox"
          id="toggle"
          hidden
          onChange={(e) => {
            console.log(e.target.checked);
          }}
        />
        <label for="toggle" className={styles.toggleSwitch}>
          <span className={styles.toggleButton}></span>
        </label>
      </div>
    </div>
  );
};
