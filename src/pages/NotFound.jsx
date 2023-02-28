//Lottie style
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import badpage from '../assets/lottie/badpage.json';
import { saveItem } from '../service/storage';
import styles from '../styles/global.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFoundPage}>
      <div>
        <p>잘못된 페이지입니다.</p>
        <span
          onClick={() => {
            navigate('/home/new');
            saveItem('tabKeyword', 'new');
          }}
        >
          홈으로 가기
        </span>
      </div>
      <Lottie animationData={badpage} />
    </div>
  );
};
