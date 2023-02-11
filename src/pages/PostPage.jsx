import React, { useState } from "react";
import { loadItem } from "../common/storage";
import { SubNavBar } from "../components/navBar/SubNavBar";

import styles from "../style/postPageStyle.module.scss";
// import styles from "../style/navFooterStyle.module.scss";
import { ReactComponent as Icon_ImageAdd } from "../assets/gray_image_add.svg";
import { ReactComponent as Icon_ChevronLeft } from "../assets/white_chevron_left.svg";
import { ReactComponent as Icon_CheckSqure } from "../assets/white_check_squre.svg";

export const PostPage = () => {
  const keyowrd = loadItem("postKeyword");
  const [textLength, setTextLength] = useState(0);
  const [textareaBox, setTextareaBox] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imgBox, setImgBox] = useState(false);
  const [imgIcon, setImgIcon] = useState(true);
  const [postKeyword, setPostKeyword] = useState(keyowrd);

  const today = new Date();
  const day = today.toISOString().split("T")[0].split("-");

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setImgIcon(false);
      setImgBox(true);
    }
    const target = e.currentTarget;
    const files = target.files[0];
  };

  const handleImgEdit = () => {
    if (window.confirm("사진을 바꾸시겠습니까?")) {
      setImgIcon(true);
      setImageUrl("");
      setImgBox(false);
    }
  };

  const handlePostAdd = () => {
    console.log("작성페이지 네비게이션 추가버튼");
  };
  return (
    <>
      {/* {keyowrd === "ToonDiary" ? (
        <div>새 툰 다이어리 만들기 컴포넌트</div>
      ) : (
        <div>새 툰 만들기 컴포넌트</div>
      )} */}
      {/* 어떤 경로로 들어오느냐에 따라서 리스트를 작성 / 다이어리 생성할건지 */}

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
              placeholder={`${day[0]}년 ${day[1]}월 ${day[2]}일 `}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              maxLength="20"
              placeholder={`부제목을 입력해주세요`}
            />
          </div>
        </div>
        <div className={styles.textareaBox}>
          <textarea
            className={styles.textarea}
            maxLength="100"
            placeholder="오늘의 툰을 설명해주세요"
            onChange={(e) => {
              setTextLength(e.target.value.length);
              setTextareaBox(e.target.value);
            }}
          />
          <p className={styles.textNumbering}>{textLength}/100</p>
        </div>

        <div className={styles.imgBox}>
          {imgBox ? (
            <div>
              <img src={imageUrl} onClick={handleImgEdit} />
            </div>
          ) : null}
          {imgIcon ? (
            <>
              <p className={styles.fileLoad}>
                <label htmlFor="file">
                  <p>
                    <Icon_ImageAdd />
                  </p>
                  <p>오늘의 툰을 올려주세요</p>
                </label>
              </p>
              <input
                className="fileInput"
                type="file"
                id="file"
                accept="image/*"
                required
                onChange={handleChangeImage}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

// 우리는 매일 생각하며 살아간다 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람  대한으로 길이 보전하세 우리나라만세 무궁화 삼천리 화려 // 입력 100글자 제한
