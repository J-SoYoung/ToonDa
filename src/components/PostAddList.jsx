import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useParams } from 'react-router-dom';

import { localLoadItem } from '../service/storage.js';
import { ModalDiarySelectForm } from './common/ModalForm';
import { SubNavBar } from './navBar/SubNavBar';
import { useInput } from '../hooks/useInput';
import { useCreatePost } from '../service/api.js';

import styles from '../styles/postPageStyle.module.scss';
import { ReactComponent as Icon_ImageAdd } from '../assets/gray_image_add.svg';

export const PostAddList = () => {
  const { id } = useParams();
  const diaryTitle = localLoadItem('diaryTitle');

  const [showModal, setShowModal] = useState(false);
  const [imgContain, setImgContain] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [img, setImg] = useState('');

  const [date, setDate] = useState('');
  const [title, onChangeTitle] = useInput();
  const [textarea, onChangeTextarea] = useInput();

  const handleCreateImage = (e) => {
    if (e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
      setImgContain(true);
      const files = e.currentTarget.files[0];
      setImg(files);
    }
  };

  const handleImgEdit = () => {
    if (window.confirm('사진을 바꾸시겠습니까?')) {
      setImageUrl('');
      setImgContain(false);
    }
  };

  const { mutate: createPost } = useCreatePost();
  const clickCreatePost = () => {
    console.log(imageUrl, title, date, textarea);
    if(img===''){

    }
    const newPost = {
      img,
      title,
      date,
      content: textarea,
    };
    createPost({ id, newPost });
    setDate('');
    setImageUrl('');
    setImgContain(false);
  };

  return (
    <>
      {id && diaryTitle ? (
        <SubNavBar children={diaryTitle} checkbox={true} handleFunc={clickCreatePost} />
      ) : (
        <SubNavBar
          children="( 일기장 제목 ) 툰 일기"
          checkbox={true}
          handleFunc={clickCreatePost}
          selectFunc={() => {
            setShowModal(true);
          }}
        />
      )}
      {showModal &&
        createPortal(
          <ModalDiarySelectForm
            onClose={() => {
              setShowModal(false);
            }}
          />,
          document.body,
        )}

      <div className={styles.postBox}>
        <div className={styles.subContent}>
          <div className={styles.dateBox}>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              value={title || ''}
              type="text"
              maxLength="20"
              placeholder={`툰 제목을 입력해주세요`}
              onChange={onChangeTitle}
            />
          </div>
        </div>

        <div className={styles.textareaBox}>
          <textarea
            value={textarea || ''}
            className={styles.textarea}
            maxLength="100"
            placeholder="오늘의 툰을 설명해주세요"
            onChange={onChangeTextarea}
          />
          <p className={styles.textNumbering}>{textarea.length}/100</p>
        </div>

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
              <input type="file" id="file" accept="image/*" required onChange={handleCreateImage} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
