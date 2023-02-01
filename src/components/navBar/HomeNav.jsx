import React from "react";
import { ReactComponent as Pencil } from "../../assets/pencil.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

import styles from "../../style/homePageStyle.module.scss";

export const HomeNav = () => {
  return (
    <div className={styles.homeNav}>
      <p>ToonDa</p>
      <div>
        <p>
          <Search />
        </p>
        <p>
          <Pencil />
        </p>
      </div>
    </div>
  );
};
