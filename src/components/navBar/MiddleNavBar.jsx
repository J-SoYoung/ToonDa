import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';

import { localSaveItem } from '../../service/storage.js';
import { ModalEditDeleteForm, ModalMessageForm } from '../common/ModalForm';
import styles from '../../styles/navFooterStyle.module.scss';

import {
  Icon_G_ChevronLeft,
  Icon_G_Memu,
  Icon_G_Pencil,
  Icon_G_Share,
  Icon_G_Comment,
  Icon_G_StarStroke,
  Icon_G_StarFull,
  Icon_G_Substribe,
} from '../../assets/index';
import { useDeleteDiary } from '../../service/api.js';

export const MiddleNavBar = ({ diaryTitle, isCover }) => {
  console.log(diaryTitle);
  console.log(isCover);
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const [isLike, setIsLike] = useState(false);

  const handleDiaryEdit = () => {
    console.log('다이어리 수정');
  };

  const { mutate: deleteDiary } = useDeleteDiary();
  const handleDiaryDelete = () => {
    console.log('다이어리 삭제');
    deleteDiary(id);
  };

  return (
    <div className={styles.middleNavBar}>
      <div className={styles.middleLeftBar}>
        <div className={styles.mainPage}>
          <p
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={Icon_G_ChevronLeft} />
          </p>

          {isCover ? (
            <div
              className={styles.iconMargin}
              onClick={() => {
                navigate('/subscribe');
              }}
            >
              <p>
                <img src={Icon_G_Substribe} />
              </p>
              <span>1명 구독중</span>
            </div>
          ) : (
            <div className={styles.iconMargin}>
              <p
                onClick={() => {
                  navigate('/comment');
                }}
              >
                <img src={Icon_G_Comment} />
              </p>
              <p onClick={() => alert('스타')}>
                {isLike ? <img src={Icon_G_StarFull} /> : <img src={Icon_G_StarStroke} />}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.middleRightBar}>
        <p>
          <img src={Icon_G_Share} />
        </p>
        <p
          onClick={() => {
            navigate(`/post/list/${id}`);
            localSaveItem('diaryTitle', diaryTitle.diaryTitle);
          }}
        >
          <img src={Icon_G_Pencil} />
        </p>
        <p
          onClick={() => {
            setShowModal(true);
          }}
        >
          <img src={Icon_G_Memu} />
        </p>
      </div>
      {showModal &&
        createPortal(
          <ModalMessageForm
            onClose={() => {
              setShowModal(false);
            }}
            text1="일기장 수정"
            text2="일기장 삭제"
            handleFunc1={handleDiaryEdit}
            handleFunc2={handleDiaryDelete}
          />,
          document.body,
        )}
    </div>
  );
};
