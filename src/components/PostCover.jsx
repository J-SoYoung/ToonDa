import React, { useState } from 'react';
import { SubNavBar } from './navBar/SubNavBar';
import { useInput } from '../hooks/useInput';
import { addPostCoverApi, useAddPostCover } from '../service/api';
import { useMutation, useQueryClient } from 'react-query';
import styles from '../styles/postPageStyle.module.scss';
import { ReactComponent as Icon_ImageAdd } from '../assets/gray_image_add.svg';

export const PostCover = () => {
  const [title, onChangeDiaryTitle] = useInput();

  const [isOpen, setIsOpen] = useState(true);
  const [imgContain, setImgContain] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState('');

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setImgContain(true);
      const files = e.currentTarget.files[0];
      setImage(files);
    }
  };

  const handleImgEdit = () => {
    if (window.confirm('사진을 바꾸시겠습니까?')) {
      setImageUrl('');
      setImgContain(false);
    }
  };

  const { mutate: addPostCover } = useAddPostCover();
  const handlePostCoverAdd = () => {
    // console.log('일기커버 추가', { isOpen, image, title });
    const newPostCover = {
      open: isOpen,
      image,
      title,
      category: 'category',
    };
    console.log(newPostCover);
    addPostCover(newPostCover);
  };

  return (
    <>
      <SubNavBar children="새 툰 다이어리 만들기" checkbox={true} handleFunc={handlePostCoverAdd} />

      <div className={styles.postBox}>
        <div className={styles.coverBox}>
          <textarea
            className={styles.coverTextBox}
            type="text"
            maxLength="20"
            placeholder={`제목을 입력해주세요`}
            onChange={onChangeDiaryTitle}
          />
        </div>

        <div className={styles.togglebox}>
          <input
            type="checkbox"
            id="toggle"
            hidden
            onChange={(e) => {
              console.log(e);
              setIsOpen(!isOpen);
            }}
          />
          <label htmlFor="toggle" className={styles.toggleSwitch}>
            <span className={styles.toggleButton}></span>
            <span className={isOpen ? styles.basic : styles.secret}>
              {isOpen ? '공개' : '비공개'}
            </span>
          </label>
        </div>
        <div className={styles.categories}>#카테고리 #카테고리</div>
        <div className={styles.imgBox}>
          {imgContain ? (
            <div>
              <img src={imageUrl} onClick={handleImgEdit} />
            </div>
          ) : (
            <>
              <div className={styles.fileLoad}>
                <label htmlFor="file">
                  <p>
                    <Icon_ImageAdd />
                  </p>
                  <p>오늘의 툰을 올려주세요</p>
                </label>
              </div>
              <input type="file" id="file" accept="image/*" required onChange={handleChangeImage} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
