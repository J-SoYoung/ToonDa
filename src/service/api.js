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
  // console.log('req', config);
  // 서버에 요청할 때, 로컬 스토리지에 있는 토큰 헤더에 넣어 요청
  if (config.headers === undefined) return;
  const token = localLoadItem('isLogin');
  config.headers['Authorization'] = `${token}`;
  return config;
});

export const postLogin = async (data) => {
  await loginbaseURL
    .post('/users/login', data)
    .then((res) => {
      localSaveItem('isLogin', res.headers.authorization);
      localSaveItem('tabKeyword', 'new');
      localSaveItem('username', res.data.data.username);
      localSaveItem('userId', res.data.data.userId);
      localSaveItem('profileImg', res.data.data.img);
      window.location.replace('/home/new');
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
export const checkEmailApi = async (email) => {
  const res = await loginbaseURL.get(`/users/email-check/${email.email}`);
  return res;
};

export const checkUsernameApi = async (username) => {
  const res = await loginbaseURL.get(`/users/username-check/${username.username}`);
  return res;
};

export const signupApi = async (payload) => {
  const res = await loginbaseURL.post(`/users/signup`, payload).then((res) => {
    console.log(res);
    window.location.replace('/');
  });
};

export const useAddPostCover = () => {
  const QueryClient = useQueryClient();
  return useMutation(addPostCoverApi, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['postCover']);
    },
  });
};

export const addPostCoverApi = async (payload) => {
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
    });

  return response;
};

export const getDetailDiaryApi = async (id) => {
  const res = await baseURL.get(`/folders/${id}`);
  return res;
};

const useCreatePostApi = async ({ id, newPost }) => {
  const { img, content, subTitle, date } = newPost;
  const formData = new FormData();

  formData.append('img', img);
  formData.append('content', content);
  formData.append('subTitle', subTitle);
  formData.append('date', date);

  const res = await baseURL.post(`folders/${id}/diaries`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res);
  // return res;
};
export const useCreatePost = () => {
  const QueryClient = useQueryClient();
  return useMutation(useCreatePostApi, {
    onSuccess: () => {
      QueryClient.invalidateQueries(['detail']);
    },
  });
};
const delelteDiaryApi = async (id) => {
  const res = await baseURL.delete(`/folders/${id}`);
  console.log(res);
  window.location('/home/mydiary');
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
