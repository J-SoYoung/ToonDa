import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styles from '../styles/detailPageStyle.module.scss';

import { LoadingPage } from '../components/common/LoadingPage';
import { localSaveItem } from '../service/storage';
import { getDetailDiaryApi } from '../service/api';
import { DitailListItem, DitailCoverItem } from '../components/element/index';

export const DetailPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(['detail', id], () => {
    return getDetailDiaryApi(id);
  });

  const diaryData = data?.data.data;
  const diaryList = diaryData?.diaryList;
  // console.log(diaryData);

  useEffect(() => {
    localSaveItem('diaryTitle', diaryData?.title);
  }, [diaryData]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className={styles.detail}>
      <div className={styles.detailBox}>
        <DitailCoverItem diaryData={diaryData} />
        <DitailListItem diaryList={diaryList} />
      </div>
    </div>
  );
};
