import React, { useState } from "react";
import { useInput } from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

import styles from "../styles/searchPageStyle.module.scss";
import { ReactComponent as Icon_ChevronLeft } from "../assets/white_chevron_left.svg";
import { ReactComponent as Icon_Search } from "../assets/white_search.svg";


export const SearchPage = () => {
  const navigate = useNavigate();
  const [searchText, onChangeSearch] = useInput();
  // api결과가 없으면 보여줄 문구 state로 임시 대체
  const [searchList, setSearchList] = useState(true);

  const handleClickSearch = () => {
    console.log(searchText);
  };

  return (
    <>
      <div className={styles.searchBar}>
        <p
          onClick={() => {
            navigate(-1);
          }}
        >
          <Icon_ChevronLeft />
        </p>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText || ""}
          onChange={onChangeSearch}
          placeholder="검색어를 입력해주세요"
        />
        <p
          onClick={() => {
            handleClickSearch();
          }}
        >
          <Icon_Search />
        </p>
      </div>
      <div className={styles.searchContent}>
        {!searchList ? (
          <p>검색 결과가 없습니다</p>
        ) : (
          <>
            <div className={styles.searchList}>
              <img src="/img/2.jpg" />
              <div>
                <p>정소영 툰일기</p>
                <div>
                  <p>*명 구독중</p>
                  <p>총 페이지수</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
