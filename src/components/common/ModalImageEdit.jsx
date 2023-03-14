import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useCloseModal from '../../hooks/useCloseModal';
import { localSaveItem } from '../../service/storage';
import styles from '../../styles/modalStyle.module.scss';

export const ModalImageEdit = ({ onClose }) => {
  const modalRef = useRef(null);
  useCloseModal(modalRef, onClose);
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState('');
  const [img, setImg] = useState('');

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      const files = e.currentTarget.files[0];
      setImg(files);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox} ref={modalRef}>
        <div className={styles.imgBox}>
          <p>이미지 변경</p>
          <img src={imageUrl} />
          <input type="file" id="file" accept="image/*" required onChange={handleChangeImage} />
        </div>
        <div className={styles.modalConfirmButtonBox}>
          <button
            onClick={() => {
              localSaveItem('imgUrl', imageUrl);
              onClose();
            }}
          >
            예
          </button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};
