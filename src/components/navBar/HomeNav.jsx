import React from "react";
import styles from "../../style/homePageStyle.module.scss";

export const HomeNav = () => {
  return (
    <div className={styles.homeNav}>
      <p>ToonDa</p>
      <div >
        <p>
          <img src="/img/icon/search.png" />
        </p>
        <p>
          <img src="/img/icon/addPencil.png" />
        </p>
      </div>
    </div>
  );
};
