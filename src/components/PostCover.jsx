import React, { useState } from "react";
import { SubNavBar } from "./navBar/SubNavBar";
import { useInput } from "../hooks/useInput";

import styles from "../styles/postPageStyle.module.scss";
import { ReactComponent as Icon_ImageAdd } from "../assets/gray_image_add.svg";

export const PostCover = () => {
  const [subTitle, onChangeDiaryTitle] = useInput();

  const [isSecret, setIsSecret] = useState(false);
  const [imgContain, setImgContain] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setImgContain(true);
    }
    // const target = e.currentTarget;
    // const files = target.files[0];
  };

  const handleImgEdit = () => {
    if (window.confirm("사진을 바꾸시겠습니까?")) {
      setImageUrl("");
      setImgContain(false);
    }
  };

  const handlePostCoverAdd = () => {
    console.log("일기커버 추가", isSecret, imageUrl, subTitle);
  };

  return (
    <>
      <SubNavBar
        children="새 툰 다이어리 만들기"
        checkbox={true}
        handleFunc={handlePostCoverAdd}
      />

      <div className={styles.postBox}>
        <div className={styles.coverBox}>
          <textarea
            className={styles.coverTextBox}
            type="text"
            maxLength="20"
            placeholder={`제목을 입력해주세요`}
            onChange={onChangeDiaryTitle}
          />
        </div>

        <div className={styles.togglebox}>
          <input
            type="checkbox"
            id="toggle"
            hidden
            onChange={(e) => {
              setIsSecret(e.target.checked);
            }}
          />
          <label htmlFor="toggle" className={styles.toggleSwitch}>
            <span className={styles.toggleButton}></span>
            <span className={isSecret ? styles.secret : styles.notSecret}>
              {isSecret ? "비공개" : "공개"}
            </span>
          </label>
        </div>

        <div className={styles.imgBox}>
          {imgContain ? (
            <div>
              <img src={imageUrl} onClick={handleImgEdit} />
            </div>
          ) : (
            <>
              <div className={styles.fileLoad}>
                <label htmlFor="file">
                  <p>
                    <Icon_ImageAdd />
                  </p>
                  <p>오늘의 툰을 올려주세요</p>
                </label>
              </div>
              <input
                type="file"
                id="file"
                accept="image/*"
                required
                onChange={handleChangeImage}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
