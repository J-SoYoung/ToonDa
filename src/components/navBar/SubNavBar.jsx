import React, { useState } from "react";
import styles from "../../style/navFooterStyle.module.scss";
import { ReactComponent as Icon_ChevronLeft } from "../../assets/white_chevron_left.svg";
import { ReactComponent as Icon_CheckSqure } from "../../assets/white_check_squre.svg";

import { useNavigate } from "react-router-dom";

export const SubNavBar = ({ children, checkbox, handleFunc }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.subNavBar}>
        <p
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon_ChevronLeft />
        </p>

        <p>{children}</p>
        <p
          onClick={() => {
            handleFunc();
          }}
        >
          {checkbox ? <Icon_CheckSqure /> : null}
        </p>
      </div>
    </>
  );
};
