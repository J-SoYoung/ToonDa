import React from "react";
import { ReactComponent as Icon_Search } from "../../assets/search.svg";
import { ReactComponent as Icon_Pencil } from "../../assets/pencil.svg";

import styles from "../../style/homePageStyle.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const HomeNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeNav}>
      <p
        onClick={() => {
          navigate("/home/new");
        }}
      >
        ToonDa
      </p>
      <div>
        <p
          onClick={() => {
            navigate("/search");
          }}
        >
          <Icon_Search />
        </p>
        <p
          onClick={() => {
            navigate("/post/cover");
          }}
        >
          <Icon_Pencil />
        </p>
      </div>
    </div>
  );
};
