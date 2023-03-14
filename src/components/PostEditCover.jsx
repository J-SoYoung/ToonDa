import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createPortal } from 'react-dom';

import styles from '../styles/postPageStyle.module.scss';

import { LoadingPage } from '../components/common/LoadingPage';
import { SubNavBar } from './navBar/SubNavBar';
import { useInput } from '../hooks/useInput';
import { diaryCover_EditDataApi, useAddPostCover, useEditPostCover } from '../service/api';
import { Icon_Gray_ImageAdd, Icon_Gray_X } from '../assets/index';
import { ModalConfirmForm } from './common/ModalForm';
import { ModalImageEdit } from './common/ModalImageEdit';
import { useSelector } from 'react-redux';
import { localLoadItem } from '../service/storage';

export const PostEditCover = () => {
  const { id } = useParams();
  const {
    data: editData,
    isLoading: editLoading,
    isError: editError,
  } = useQuery(['postEdit'], () => {
    return diaryCover_EditDataApi(id);
  });
  const editCoverdata = editData?.data.data;

  const [title, onChangeDiaryTitle] = useInput();
  const [hashtag, setHashtag] = useState('');
  const [hashtagArr, setHashtagArr] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const [imgEditInput, setImgEditInput] = useState(false);
  const [editImgModal, setEditImgModal] = useState(false);

  const [imgUrl, setImgUrl] = useState('');
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

  const { mutate: editPostCover } = useEditPostCover();
  const handlePostCoverEdit = () => {
    const newPostCover = {
      open: isOpen ? isOpen : editCoverdata?.open,
      img: img,
      title: title ? title : editCoverdata?.title,
      hashtags: hashtagArr,
    };
    console.log({ newPostCover, id });
    editPostCover({ newPostCover, id });
  };

  // aws. s3
  const handleEditImage = (e) => {
    if (e.target.files[0]) {
      setImgUrl(URL.createObjectURL(e.target.files[0]));
      const files = e.currentTarget.files[0];
      setImg(files);
    }
  };

  if (editLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <SubNavBar children="툰 다이어리 수정하기" checkbox={true} handleFunc={handlePostCoverEdit} />

      <div className={styles.postBox}>
        <div className={styles.coverBox}>
          <textarea
            className={styles.coverTextBox}
            type="text"
            maxLength="20"
            defaultValue={editCoverdata.title}
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
            {/* {editCoverdata
              ? null 
              :  */}
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
          <div>
            {imgEditInput ? (
              <>
                <div className={styles.fileLoad}>
                  <label htmlFor="file">
                    <img src={Icon_Gray_ImageAdd} />
                    <p>다이어리 cover를 올려주세요</p>
                  </label>
                </div>
                <input type="file" id="file" accept="image/*" required onChange={handleEditImage} />
              </>
            ) : (
              <img
                src={editCoverdata.folderImg}
                onClick={() => {
                  setEditImgModal(true);
                }}
              />
            )}
            {imgUrl ? (
              <img
                src={imgUrl}
                onClick={() => {
                  setEditImgModal(true);
                }}
                className={styles.newImg}
              />
            ) : null}
          </div>
          {editImgModal &&
            createPortal(
              <ModalConfirmForm
                onClose={() => {
                  setEditImgModal(false);
                }}
                message="이미지를 수정하시겠습니까?"
                handleFunc={() => {
                  setImgEditInput(true);
                  setImgUrl(false);
                  setEditImgModal(false);
                }}
              />,
              document.body,
            )}
        </div>
      </div>
    </>
  );
};
