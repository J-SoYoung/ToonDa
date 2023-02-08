import React from "react";
import styles from "../../style/navFooterStyle.module.scss";
import { ReactComponent as Icon_ChevronLeft } from "../../assets/white-chevron-left.svg";
import { useNavigate } from "react-router-dom";

export const SubNavBar = ({ children }) => {
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
      </div>
    </>
  );
};
