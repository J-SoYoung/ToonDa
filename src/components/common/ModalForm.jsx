import React, { useRef } from 'react';
import useCloseModal from '../../hooks/useCloseModal';
import styles from '../../styles/modalStyle.module.scss';

export const ModalConfirmForm = ({ onClose, message, handleFunc }) => {
  const modalRef = useRef(null);
  useCloseModal(modalRef, onClose);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox} ref={modalRef}>
        <p>{message}</p>
        <div className={styles.modalConfirmButtonBox}>
          <button onClick={handleFunc}>예</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export const ModalMessageForm = ({ onClose, title, text1, text2, handleFunc1, handleFunc2 }) => {
  const modalRef = useRef(null);
  useCloseModal(modalRef, onClose);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox} ref={modalRef}>
        {title ? <p>{title}</p> : null}
        <div className={styles.modalMessageButtonBox}>
          <button onClick={handleFunc1}>{text1}</button>
          <button onClick={handleFunc2}>{text2}</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export const ModalDiarySelectForm = ({ onClose }) => {
  const modalRef = useRef(null);
  useCloseModal(modalRef, onClose);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox} ref={modalRef}>
        <div className={styles.modalMessageButtonBox}>
          <button>내 일기장 선택</button>
          <button>내 일기장 선택</button>
          <button>내 일기장 선택</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

