import React, { useState } from "react";
import { loadItem } from "../common/storage";
import { SubNavBar } from "./navBar/SubNavBar";
import { useInput } from "../hooks/useInput";

import styles from "../styles/postPageStyle.module.scss";
import { ReactComponent as Icon_ImageAdd } from "../assets/gray_image_add.svg";

export const PostList = () => {
  const [imgContain, setImgContain] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [subTitle, onChangeSubTitle] = useInput();
  const [textarea, onChangeTextarea] = useInput();

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

  const handlePostAdd = () => {
    console.log(
      "작성페이지 네비게이션 추가버튼",
      imageUrl,
      subTitle,
      date,
      textarea
    );
    setDate("");
    setImageUrl("");
    setImgContain(false);
  };

  return (
    <>
      <SubNavBar
        children="( 일기장 제목 ) 툰 일기"
        checkbox={true}
        handleFunc={handlePostAdd}
      />

      <div className={styles.postBox}>
        <div className={styles.subContent}>
          <div className={styles.dateBox}>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              maxLength="20"
              placeholder={`부제목을 입력해주세요`}
              onChange={onChangeSubTitle}
            />
          </div>
        </div>

        <div className={styles.textareaBox}>
          <textarea
            className={styles.textarea}
            maxLength="100"
            placeholder="오늘의 툰을 설명해주세요"
            onChange={onChangeTextarea}
          />
          <p className={styles.textNumbering}>{textarea.length}/100</p>
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
