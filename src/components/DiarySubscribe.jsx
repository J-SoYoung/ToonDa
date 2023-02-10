import React from "react";
import { DiaryItem } from "./DiaryItem";

export const DiarySubscribe = () => {
  // 각자 페이지에 맞는 get요청하기
  return (
    <>
      <div>DiarySubscribe</div>
      <DiaryItem />
      <DiaryItem />
    </>
  );
};
