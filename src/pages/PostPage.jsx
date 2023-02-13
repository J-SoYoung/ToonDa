import React from "react";

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
