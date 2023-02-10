import React from "react";
import { DiaryItem } from "./DiaryItem";

export const DiaryNew = () => {
  // 각자 페이지에 맞는 get요청하기
  return (
    <>
      <div>DiaryNew</div>
      <DiaryItem />
      <DiaryItem />
    </>
  );
};
