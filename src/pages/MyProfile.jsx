import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { SubNavBar } from "../components/navBar/SubNavBar";
import styles from "../styles/myprofilePage.module.scss";
import { ReactComponent as Icon_WhitePencil } from "../assets/white_pencil.svg";
import { useInput } from "../hooks/useInput";
import { ModalMessageForm } from "../components/ModalForm";

export const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);

  const [nickname, onChangeNickname] = useInput();
  const [diaryIntro, onChangeDiaryIntro] = useInput();

  const handleProfileEdit = () => {
    console.log("v프로필수정");
  };

  const handleImageEdit = () => {
    console.log("이미지 수정");
  };
  const handleImageBasic = () => {
    console.log("기본이미지로");
  };

  return (
    <>
      <SubNavBar
        children="프로필수정"
        checkbox={true}
        handleFunc={handleProfileEdit}
      />
      <div className={styles.myprofileBox}>
        <div className={styles.imgBox}>
          <img src="/img/user.jpg" />
          <p
            onClick={() => {
              setShowModal(true);
            }}
          >
            <Icon_WhitePencil className={styles.icon} />
          </p>
          {showModal &&
            createPortal(
              <ModalMessageForm
                onClose={() => {
                  setShowModal(false);
                }}
                title="프로필 변경"
                text1="앨범에서 선택"
                text2="기본 프로필로 설정"
                handleFunc1={handleImageEdit}
                handleFunc2={handleImageBasic}
              />,
              document.body
            )}
        </div>
        <div className={styles.textBox}>
          <div>
            <p>닉네임</p>
            <input
              placeholder="defaultValue"
              value={nickname}
              maxLength="10"
              onChange={onChangeNickname}
            />
            <span>{nickname.length}/10</span>
          </div>
          <div>
            <p>소&nbsp;&nbsp;개</p>
            <input
              placeholder="나를 소개해주세요"
              value={diaryIntro}
              maxLength="40"
              onChange={onChangeDiaryIntro}
            />
            <span>{diaryIntro.length}/40</span>
          </div>
        </div>
      </div>
    </>
  );
};
