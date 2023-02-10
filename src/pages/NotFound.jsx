//Lottie style
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import badpage from "../assets/lottie/badpage.json";
import styles from "../style/global.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <div>
        <p>잘못된 페이지입니다.</p>
        <span>
          <Link to="/home/new">홈으로 가기</Link>
        </span>
      </div>
      <Lottie animationData={badpage} />
    </div>
  );
};
