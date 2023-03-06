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
      localSaveItem('email', res.data.data.email);
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
  // console.log(image, isOpen, title);
  console.log(payload);
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
