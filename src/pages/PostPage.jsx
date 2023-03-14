import React from 'react';

import { useParams } from 'react-router-dom';
import { PostAddList } from '../components/PostAddList';
import { PostEditList } from '../components/PostEditList';
import { PostAddCover } from '../components/PostAddCover';
import { PostEditCover } from '../components/PostEditCover';

export const PostPage = () => {
  const { keyword } = useParams();
  return <>{keyword === 'cover' ? <PostCover /> : <PostList />}</>;
};

export const PostCover = () => {
  const { detailkey } = useParams();
  return <>{detailkey === 'edit' ? <PostEditCover /> : <PostAddCover />}</>;
};

export const PostList = () => {
  const { detailkey } = useParams();
  return <>{detailkey === 'edit' ? <PostEditList /> : <PostAddList />}</>;
};
