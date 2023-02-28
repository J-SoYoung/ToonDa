import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { loadItem, saveItem } from './storage';

const loginbaseURL = axios.create({
  baseURL: 'http://3.38.98.211:8080/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const baseURL = axios.create({
  baseURL: 'http://3.38.98.211:8080/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

baseURL.interceptors.request.use((config) => {
  // console.log('req', config);
  // 서버에 요청할 때, 로컬 스토리지에 있는 토큰 헤더에 넣어 요청
  if (config.headers === undefined) return;
  const token = loadItem('isLogin');
  config.headers['Authorization'] = `${token}`;
  return config;
});

export const postLogin = async (data) => {
  await loginbaseURL
    .post('/users/login', data)
    .then((res) => {
      saveItem('isLogin', res.headers.authorization);
      saveItem('tabKeyword', 'new');
      saveItem('email', res.data.data.email);
      saveItem('userId', res.data.data.userId);
      saveItem('profileImg', res.data.data.img);
      window.location.replace('/home/new');
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
export const emailCheckApi = async (email) => {
  console.log('email', email);
  const res = await loginbaseURL.get(`/users/email-check/${email.email}`);
  console.log(res);
  return res;
  // await loginbaseURL
  //   .get(`/api/users/email-check/${email.email}`)
  //   .then((res) => {
  //     console.log(res);
  //     alert('사용가능한 이메일입니다');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     alert(err);
  //   });
};
export const nicknameCheckApi = async (username) => {
  console.log(username);
  await loginbaseURL
    .get(`/users/username-check/${username}`)
    .then((res) => {
      console.log(res);
      alert('사용가능한 닉네임입니다');
    })
    .catch((err) => {
      console.log(err);
      alert(err);
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
  const { image, open, title } = payload;
  // console.log(image, isOpen, title);
  console.log(payload);
  const formData = new FormData();
  formData.append('image', image);
  formData.append('open', open);
  formData.append('title', title);

  // 객체로 받아와서 img안에 있는 데이터를 보내려면 배열로 만든 후 보내야햇?
  // Object.entries(payload).forEach((ele) => {
  //   console.log(ele);
  // });

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
