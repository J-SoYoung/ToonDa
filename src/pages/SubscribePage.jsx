import React from "react";
import { SubNavBar } from "../components/navBar/SubNavBar";
import styles from "../styles/subscribePageStyle.module.scss";

export const SubscribePage = () => {
  return (
    <>
      <SubNavBar children="구독중" />
      <div className={styles.subscribeBox}>
        <div>
          <img src="/img/user.jpg" />
          <p>툰다툰다</p> 
        </div>
        <div>
          <img src="/img/user.jpg" />
          <p>툰다툰다</p>
        </div>
        <div>
          <img src="/img/user.jpg" />
          <p>툰다툰다</p>
        </div>
      </div>
    </>
  );
};
