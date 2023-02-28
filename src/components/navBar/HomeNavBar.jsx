import React from 'react';
import { ReactComponent as Icon_Search } from '../../assets/search.svg';
import { ReactComponent as Icon_Pencil } from '../../assets/pencil.svg';

import styles from '../../styles/homePageStyle.module.scss';
import { useNavigate } from 'react-router-dom';
import { saveItem } from '../../service/storage';

export const HomeNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeNav}>
      <p
        onClick={() => {
          navigate('/home/new');
          saveItem('tabKeyword', 'new');
        }}
      >
        ToonDa
      </p>
      <div>
        <p
          onClick={() => {
            navigate('/search');
          }}
        >
          <Icon_Search />
        </p>
        <p
          onClick={() => {
            navigate('/post/list');
          }}
        >
          <Icon_Pencil />
        </p>
      </div>
    </div>
  );
};
