import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { localLoadItem, localSaveItem } from './storage';

const loginbaseURL = axios.create({
  baseURL: 'https://jm.rgngr.shop/api',
  // baseURL: 'http://3.38.98.211:8080/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const baseURL = axios.create({
  baseURL: 'https://jm.rgngr.shop/api',
  // baseURL: 'http://3.38.98.211:8080/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

baseURL.interceptors.request.use((config) => {
  // 서버에 요청할 때, 로컬 스토리지에 있는 토큰 헤더에 넣어 요청
  if (config.headers === undefined) return;
  const token = localLoadItem('isLogin');
  config.headers['Authorization'] = `${token}`;
  return config;
});
// 로그인
export const postLogin = async (data) => {
  await loginbaseURL
    .post('/users/login', data)
    .then((res) => {
      localSaveItem('isLogin', res.headers.authorization);
      localSaveItem('tabKeyword', 'new');
      localSaveItem('username', res.data.data.username);
      localSaveItem('userId', res.data.data.userId);
      localSaveItem('profileImg', res.data.data.img);
      // 페이지 기록을 스택에 남기지 않는다.
      window.location.replace('/home/new');
    })
    .catch((err) => {
      alert(err.response.data.statusMsg);
    });
};
// 이메일 중복체크
export const checkEmailApi = async (email) => {
  const res = await loginbaseURL.get(`/users/email-check/${email.email}`);
  return res;
};
// 닉네임 중복체크
export const checkUsernameApi = async (username) => {
  const res = await loginbaseURL.get(`/users/username-check/${username.username}`);
  return res;
};
// 회원가입
export const signupApi = async (payload) => {
  const res = await loginbaseURL.post(`/users/signup`, payload).then((res) => {
    alert('회원가입을 축하합니다. 로그인 페이지로 이동합니다');
    window.location.replace('/');
  });
};

// 다이어리 folder + list = get
export const getDetailDiaryApi = async (id) => {
  const res = await baseURL.get(`/folders/${id}`);
  return res;
};

// 다이어리 folder 생성
const createPostCoverApi = async (payload) => {
  const { img, open, title, hashtags } = payload;
  const formData = new FormData();
  formData.append('img', img);
  formData.append('open', open);
  formData.append('title', title);
  formData.append('hashtags', hashtags);

  const response = await baseURL
    .post('/folders', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res);
      window.location.replace('/home/mydiary');
    })
    .catch((res) => {
      console.log(res);
    });
};

export const useAddPostCover = () => {
  const QueryClient = useQueryClient();
  return useMutation(createPostCoverApi, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['postCover']);
    },
  });
};

// 다이어리 folder 삭제
const delelteDiaryApi = async (id) => {
  const res = await baseURL.delete(`/folders/${id}`);
  console.log(res);
  window.location.replace('/home/mydiary');
};
export const useDeleteDiary = () => {
  const QueryClient = useQueryClient();
  return useMutation(delelteDiaryApi, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['detail']);
    },
    onError: (data) => {
      alert(data?.response.data.statusMsg);
    },
  });
};

// 다이어리 list 생성
const createPostListApi = async ({ id, newPost }) => {
  console.log(newPost);
  const { img, content, title, date } = newPost;
  const formData = new FormData();
  formData.append('img', img);
  formData.append('content', content);
  formData.append('title', title);
  formData.append('date', date);

  const res = await baseURL
    .post(`folders/${id}/diaries`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res);
      window.location.replace(`/detail/${id}`);
    })
    .catch((res) => {
      console.log(res);
    });
};
export const useCreatePost = () => {
  const QueryClient = useQueryClient();
  return useMutation(createPostListApi, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['detail']);
    },
  });
};

// 다이어리 커버 수정 데이터 받기
export const diaryCover_EditDataApi = async (id) => {
  const res = await baseURL.get(`/folders/${id}/update-page`);
  return res;
};

// 다이어리 커버 수정
const editCoverApi = async ({ newPostCover, id }) => {
  console.log(newPostCover, id);
  const formData = new FormData();
  formData.append('img', newPostCover.img);
  formData.append('open', newPostCover.open);
  formData.append('title', newPostCover.title);
  formData.append('hashtags', newPostCover.hashtags);

  const response = await baseURL
    .patch(`folders/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res);
      window.location.replace(`/detail/${id}`);
    })
    .catch((res) => {
      console.log(res);
    });
};
export const useEditPostCover = () => {
  const QueryClient = useQueryClient();
  return useMutation(editCoverApi, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['detail']);
    },
  });
};
