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
import { useNavigate } from "react-router-dom";

export const MiddleNavBar = () => {
  const navigate = useNavigate();
  const [isMain, setIsMain] = useState(true);
  // const [isMain, setIsMain] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return (
    <div className={styles.middleNavBar}>
      <div className={styles.middleLeftBar}>
        {isMain ? (
          <div className={styles.mainPage}>
            <p
              onClick={() => {
                navigate(-1);
              }}
            >
              <Icon_ChevronLeft />
            </p>
            <div>
              <p
                onClick={() => {
                  navigate("/subscribe");
                }}
              >
                <Icon_Subscribe />
              </p>
              <span>1명 구독중</span>
            </div>
          </div>
        ) : (
          <div className={styles.listPage}>
            <p
              onClick={() => {
                navigate("/comment");
              }}
            >
              <Icon_Comment />
            </p>
            <p onClick={() => alert("스타")}>
              {isLike ? <Icon_StarFull /> : <Icon_StarStroke />}
            </p>
          </div>
        )}
      </div>

      <div className={styles.middleRightBar}>
        <p>
          <Icon_Share />
        </p>
        <p
          onClick={() => {
            navigate("/post");
          }}
        >
          <Icon_Pencil />
        </p>
        <p
          onClick={() => {
            alert("모달로 삭제/수정");
          }}
        >
          <Icon_Menu />
        </p>
      </div>
    </div>
  );
};
