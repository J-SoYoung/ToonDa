import React from "react";
import styles from "../../style/navFooterStyle.module.scss";
import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";
import { ReactComponent as Share } from "../../assets/share.svg";

export const FooterBar = () => {
  return (
    <div className={styles.footerBar}>
      <div className={styles.footerLeftBar}>
        <spna>
          <ChevronLeft />
        </spna>
        <spna>1명 구독중</spna>
      </div>
      <div className={styles.footerRightBar}>
        <span>
          <Share />
        </span>
        <span>
          <Pencil />
        </span>
        <span>
          <Menu />
        </span>
      </div>
    </div>
  );
};
