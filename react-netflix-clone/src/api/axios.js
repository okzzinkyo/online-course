import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a265076a78d9f4b6adef8b080a4e7520',
    language: 'ko-KR',
  },
});

export default instance;
