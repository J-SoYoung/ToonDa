import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';

import { localLoadItem, localSaveItem } from '../../service/storage.js';
import { ModalConfirmForm, ModalMessageForm } from '../common/ModalForm';
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

export const MiddleNavBarList = ({ isCover, diaryId }) => {
  // console.log(diaryId);
  const navigate = useNavigate();
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const [isLike, setIsLike] = useState(false);

  const handleDiaryEdit = (diaryId) => {
    console.log('다이어리 수정', diaryId);
  };

  const { mutate: deleteDiary } = useDeleteDiary();
  const handleDiaryDelete = () => {
    // deleteDiary(id);
  };

  const handleDeleteConfirm = (diaryId) => {
    console.log('다이어리 삭제confirm', diaryId);
    setConfirmModal(true);
    setShowModal(false);
    deleteDiary(diaryId);
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
            navigate(`/post/list/add/${id}`);
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
            handleFunc2={() => {
              handleDeleteConfirm(id);
            }}
          />,
          document.body,
        )}
      {confirmModal &&
        createPortal(
          <ModalConfirmForm
            onClose={() => {
              setConfirmModal(false);
            }}
            message="정말 삭제하시겠습니까?"
            handleFunc={handleDiaryDelete}
          />,
          document.body,
        )}
    </div>
  );
};
