import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import styles from '../styles/settingPage.module.scss';
import { SubNavBar } from '../components/navBar/SubNavBar';
import { localAllRemoveItem } from '../service/storage';
import { ModalConfirmForm } from '../components/common/ModalForm';

export const SettingPage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleBackButton = (event) => {
    event.preventDefault();
    alert('만료된 페이지입니다-세팅');
    navigate('/');
  };

  const handleClickLogout = () => {
    localAllRemoveItem();
    navigate('/');
    window.addEventListener('popstate', handleBackButton);
  };

  return (
    <>
      <SubNavBar children="설정" />
      <div className={styles.settingBox}>
        <p>계정관리</p>
        <p
          onClick={() => {
            setShowModal(true);
          }}
        >
          로그아웃
        </p>
      </div>
      {showModal &&
        createPortal(
          <ModalConfirmForm
            onClose={() => {
              setShowModal(false);
            }}
            message="정말 로그아웃 하시겠습니까?"
            handleFunc={handleClickLogout}
          />,
          document.body,
        )}
    </>
  );
};
