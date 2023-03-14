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

export const MiddleNavBarCover = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [isLike, setIsLike] = useState(false);

  const handleDiaryEdit = () => {
    console.log('다이어리 수정');
    navigate(`/post/cover/edit/${id}`);
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
            setConfirmModal(true);
          }}
        >
          <img src={Icon_G_Memu} />
        </p>
      </div>
      {confirmModal &&
        createPortal(
          <ModalMessageForm
            onClose={() => {
              setConfirmModal(false);
            }}
            text1="일기장 수정"
            text2="일기장 삭제"
            handleFunc1={handleDiaryEdit}
            handleFunc2={() => {
              setConfirmModal(false);
              setDeleteModal(true);
            }}
          />,
          document.body,
        )}
      {deleteModal &&
        createPortal(
          <ModalConfirmForm
            onClose={() => {
              setDeleteModal(false);
            }}
            message="정말 삭제하시겠습니까?"
            handleFunc={handleDiaryDelete}
          />,
          document.body,
        )}
    </div>
  );
};
