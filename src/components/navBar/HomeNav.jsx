import React from "react";
import styles from "../../style/homePageStyle.module.scss";

export const HomeNav = () => {
  return (
    <div className={styles.homeNav}>
      <p>ToonDa</p>
      <div>
        <img src="/img/icon/search.png" />
      </div>
    </div>
  );
};
