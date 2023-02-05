import React, { useState } from "react";
import styles from "../../style/navStyle.module.scss";
import { ReactComponent as Icon_ChevronLeft } from "../../assets/green_chevron_left.svg";
import { ReactComponent as Icon_Menu } from "../../assets/green_menu.svg";
import { ReactComponent as Icon_Pencil } from "../../assets/green_pencil.svg";
import { ReactComponent as Icon_Share } from "../../assets/green_share.svg";
import { ReactComponent as Icon_Comment } from "../../assets/green_comment.svg";
import { ReactComponent as Icon_StarStroke } from "../../assets/green_star_stroke.svg";
import { ReactComponent as Icon_StarFull } from "../../assets/green_star_full.svg";
import { ReactComponent as Icon_Subscribe } from "../../assets/green_subscribe.svg";

export const MiddleNavBar = () => {
  // const [main, setMain] = useState(true);
  const [isMain, setIsMain] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <div className={styles.middleNavBar}>
      <div className={styles.middleLeftBar}>
        {isMain ? (
          <div className={styles.mainPage}>
            <p>
              <Icon_ChevronLeft />
            </p>
            <div>
              <p>
                <Icon_Subscribe />
              </p>
              <span>1명 구독중</span>
            </div>
          </div>
        ) : (
          <div className={styles.listPage}>
            <p>
              <Icon_Comment />
            </p>
            <p>{isLike ? <Icon_StarFull /> : <Icon_StarStroke />}</p>
          </div>
        )}
      </div>

      <div className={styles.middleRightBar}>
        <p>
          <Icon_Share />
        </p>
        <p>
          <Icon_Pencil />
        </p>
        <p>
          <Icon_Menu />
        </p>
      </div>
    </div>
  );
};
