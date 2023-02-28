import axios from 'axios';
import { loadItem, saveItem } from './storage';

const loginbaseURL = axios.create({
  baseURL: 'http://3.38.98.211:8080/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const baseURL = axios.create({
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

export const postLogin = async (data) => {
  await loginbaseURL
    .post('api/users/login', data)
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
  const res = await loginbaseURL.get(`/api/users/email-check/${email.email}`);
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
