import React, { useEffect, useState } from "react";
import styles from "../style/homePageStyle.module.scss";
import Icon_subscribe from "../assets/subscribe.svg";
import { loadItem } from "../common/storage";
import { HomeNav } from "../components/navBar/HomeNav";
import { HomeTab } from "../components/navBar/HomeTab";
import { DiaryList } from "../components/DiaryList";
import { MyDiary } from "../components/MyDiary";

export const HomePage = () => {
  const key = loadItem("keyword");
  const [keyword, setKeyword] = useState("new");

  useEffect(() => {
    setKeyword(key);
  });

  console.log(keyword);

  return (
    <>
      <HomeNav />
      {/* <MyDiary /> */}

      <HomeTab />
      <DiaryList />
    </>
  );
};
