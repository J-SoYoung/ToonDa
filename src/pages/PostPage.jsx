import React, { useState } from "react";
import { loadItem } from "../common/storage";
import { SubNavBar } from "../components/navBar/SubNavBar";
import styles from "../style/postPageStyle.module.scss";
import { ReactComponent as Icon_ImageAdd } from "../assets/gray_image_add.svg";

export const PostPage = () => {
  const keyowrd = loadItem("postKeyword");
  const [imageUrl, setImageUrl] = useState("");
  const [postKeyword, setPostKeyword] = useState(keyowrd);

  const today = new Date();
  const day = today.toISOString().split("T")[0].split("-");

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
    const target = e.currentTarget;
    const files = target.files[0];
    console.log(target);
    console.log(files);
  };

  return (
    <>
      {/* {keyowrd === "ToonDiary" ? (
        <div>새 툰 다이어리 만들기 컴포넌트</div>
      ) : (
        <div>새 툰 만들기 컴포넌트</div>
      )} */}
      {/* 어떤 경로로 들어오느냐에 따라서 리스트를 작성 / 다이어리 생성할건지 */}
      <SubNavBar children="( 일기장 제목 ) 툰 일기" />

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
              maxlength="20"
              placeholder={`부제목을 입력해주세요`}
            />
          </div>
        </div>
        <div className={styles.textareaBox}>
          <textarea
            className={styles.textarea}
            maxLength="100"
            placeholder="오늘의 툰을 설명해주세요"
          />
          <p className={styles.textNumbering}>81/100</p>
        </div>
        <div className={styles.imgBox}>
          <div>
            <img src={imageUrl} />
          </div>
          {/* 이미지클릭했을 때 다시 바꿀 수 있게 여튼 다시해봐 */}
          <p className="fileLoad">
            <label htmlFor="file">오늘의 툰을 올려주세요</label>
          </p>
          <input
            type="file"
            id="file"
            accept="image/*"
            required
            onChange={handleChangeImage}
          />
        </div>
      </div>
    </>
  );
};

// 우리는 매일 생각하며 살아간다 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라만세 무궁화 삼천리 화려강산 대한사람  대한으로 길이 보전하세 우리나라만세 무궁화 삼천리 화려 // 입력 100글자 제한
