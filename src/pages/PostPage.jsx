import React, { useState } from "react";
import { loadItem } from "../common/storage";
import { SubNavBar } from "../components/navBar/SubNavBar";

import styles from "../style/postPageStyle.module.scss";
// import styles from "../style/navFooterStyle.module.scss";
import { ReactComponent as Icon_ImageAdd } from "../assets/gray_image_add.svg";
import { ReactComponent as Icon_ChevronLeft } from "../assets/white_chevron_left.svg";
import { ReactComponent as Icon_CheckSqure } from "../assets/white_check_squre.svg";
import { useParams } from "react-router-dom";
import { PostList } from "../components/PostList";
import { PostCover } from "../components/PostCover";

export const PostPage = () => {
  const { keyword } = useParams();
  console.log(keyword);
  // const keyowrd = loadItem("postKeyword");
  // const [postKeyword, setPostKeyword] = useState(keyowrd);

  return (
    <>
      {keyword === "cover" ? <PostCover /> : <PostList />}
    </>
  );
};
