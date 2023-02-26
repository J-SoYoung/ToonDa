import axios from 'axios';
import { loadItem, saveItem } from './storage';

const baseURL = axios.create({
  baseURL: 'http://3.38.98.211:8080/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const loginBaseURL = axios.create({
  baseURL: 'http://3.38.98.211:8080/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

baseURL.interceptors.request.use((config) => {
  console.log('req', config);
  // 서버에 요청할 때, 로컬 스토리지에 있는 토큰 헤더에 넣어 요청
  if (config.headers === undefined) return;
  const token = loadItem('isLogin');
  config.headers['Authorization'] = `${token}`;
  return config;
});

export const postLogin = async ({ email, password }) => {
  console.log(email, password);
  await loginBaseURL
    .post('api/users/login', { email, password })
    .then((res) => {
      console.log(res);
      console.log(res.headers['Authorization']);
      saveItem('tabKeyword', 'new');
      saveItem('username', res.data.data.username);
      saveItem('userId', res.data.data.userId);
      saveItem('profileImg', res.data.data.img);
      window.replace('/home/new');
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
export const emailCheckApi = async (email) => {
  console.log(email);
  const res = await loginBaseURL.get(`/api/users/email-check/${email}`);
  return res;
  // await loginBaseURL
  //   .get(`/api/users/email-check/${email}`)
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
  await loginBaseURL
    .get(`/api/users/username-check/${username}`)
    .then((res) => {
      console.log(res);
      alert('사용가능한 닉네임입니다');
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
