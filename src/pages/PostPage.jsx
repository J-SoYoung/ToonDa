import React from 'react';

import { useParams } from 'react-router-dom';
import { PostAddList } from '../components/PostAddList';
import { PostAddCover } from '../components/PostAddCover';

export const PostPage = () => {
  const { keyword } = useParams();
  console.log(keyword);

  return <>{keyword === 'cover' ? <PostAddCover /> : <PostAddList />}</>;
};
