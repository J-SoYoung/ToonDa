import React from 'react';
import { HomeMiniDiary } from './HomeMiniDiary';

export const DiarySubscribe = () => {
  // 각자 페이지에 맞는 get요청하기
  return (
    <>
      <div>DiarySubscribe</div>
      <HomeMiniDiary />
      <HomeMiniDiary />
    </>
  );
};
