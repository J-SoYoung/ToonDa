import React, { useState } from 'react';
import { SubNavBar } from './navBar/SubNavBar';
import { useInput } from '../hooks/useInput';
import { addPostCoverApi, useAddPostCover } from '../service/api';
import { useMutation, useQueryClient } from 'react-query';
import styles from '../styles/postPageStyle.module.scss';
import { Icon_Gray_ImageAdd, Icon_Gray_X } from '../assets/index';

export const PostAddCover = () => {
  const [title, onChangeDiaryTitle] = useInput();

  const [hashtag, setHashtag] = useState('');
  const [hashtagArr, setHashtagArr] = useState([]);

  const [isOpen, setIsOpen] = useState(true);
  const [imgContain, setImgContain] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [img, setImg] = useState('');

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && hashtag !== '') {
      setHashtagArr([...hashtagArr, hashtag.trim()]);
      setHashtag('');
    }
  };

  const handleHashTagDelete = (idx) => {
    const newHashTags = [...hashtagArr];
    newHashTags.splice(idx, 1);
    setHashtagArr(newHashTags);
  };

  const handleChangeImage = (e) => {
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

  const { mutate: addPostCover } = useAddPostCover();
  const handlePostCoverAdd = () => {
    const newPostCover = {
      open: isOpen,
      img,
      title,
      hashtags: hashtagArr,
    };
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
            placeholder={`툰 다이어리 제목을 입력해주세요`}
            onChange={onChangeDiaryTitle}
          />
        </div>

        <div className={styles.hashBox}>
          <input
            className={styles.hashInput}
            type="text"
            value={hashtag || ''}
            placeholder={
              hashtagArr.length < 3 ? '#태그입력' : '해시태그는 3개까지만 설정 가능합니다'
            }
            disabled={hashtagArr.length < 3 ? false : true}
            onKeyUp={handleKeyUp}
            onChange={(e) => setHashtag(e.target.value)}
          />
          <ul className={styles.hashList}>
            {hashtagArr?.map((h, idx) => {
              return (
                <li key={idx} className={styles.hashItem}>
                  {`#${h}`}
                  <button onClick={() => handleHashTagDelete(idx)}>
                    <img src={Icon_Gray_X} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.togglebox}>
          <input
            type="checkbox"
            id="toggle"
            hidden
            onChange={(e) => {
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

        <div className={styles.imgBox}>
          {imgContain ? (
            <div>
              <img src={imageUrl} onClick={handleImgEdit} />
            </div>
          ) : (
            <>
              <div className={styles.fileLoad}>
                <label htmlFor="file">
                  <img src={Icon_Gray_ImageAdd} />
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
