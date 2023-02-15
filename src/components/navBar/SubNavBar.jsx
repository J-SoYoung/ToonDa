import React, { useState } from "react";
import styles from "../../styles/navFooterStyle.module.scss";
import { ReactComponent as Icon_ChevronLeft } from "../../assets/white_chevron_left.svg";
import { ReactComponent as Icon_CheckSqure } from "../../assets/white_check_squre.svg";

import { useNavigate } from "react-router-dom";

export const SubNavBar = ({ children, checkbox, handleFunc, selectFunc }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // console.log(children);
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
        {selectFunc ? (
          <p
            onClick={() => {
              selectFunc();
            }}
          >
            {children}
          </p>
        ) : (
          <p>{children}</p>
        )}

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
