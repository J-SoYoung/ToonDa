import React from "react";
import styles from "../../style/navFooterStyle.module.scss";

export const FooterBar = () => {
  return (
    <div className={styles.footerBar}>
      <p>ToonDa</p>
      <div>
        <img src="/img/icon/search.png" />
      </div>
    </div>
  );
};
