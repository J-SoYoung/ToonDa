import React, { useState } from "react";
import { loadItem } from "../common/storage";

export const PostPage = () => {
  const keyowrd = loadItem("postKeyword");
  const [postKeyword, setPostKeyword] = useState(keyowrd);
  return (
    <>
      {keyowrd === "ToonDiary" ? (
        <div>새 툰 다이어리 만들기 컴포넌트</div>
      ) : (
        <div>새 툰 만들기 컴포넌트</div>
      )}
    </>
  );
};
