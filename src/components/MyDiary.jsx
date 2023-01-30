import React from "react";
import { DiaryList } from "./DiaryList";
import { HomeTab } from "./navBar/HomeTab";

export const MyDiary = () => {
  return (
    <>
      <div>MyDiary</div>
      <HomeTab />
      <DiaryList />
    </>
  );
};
