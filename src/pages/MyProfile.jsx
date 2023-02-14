import React, { useRef, useState } from "react";
import { SubNavBar } from "../components/navBar/SubNavBar";
import styles from "../styles/myprofilePage.module.scss";
import { ReactComponent as Icon_WhitePencil } from "../assets/white_pencil.svg";
import { useInput } from "../hooks/useInput";

export const MyProfile = () => {
  const [nickname, onChangeNickname] = useInput();
  const [diaryIntro, onChangeDiaryIntro] = useInput();

  const handleProfileEdit = () => {
    console.log("v프로필수정");
  };

  const handleImageEdit = () => {
    alert("모달: 기본이미지로 변경, 이미지불러오기, 취소");
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
          <p onClick={handleImageEdit}>
            <Icon_WhitePencil className={styles.icon} />
          </p>
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
