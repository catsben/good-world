import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000',
});

export const setAuthToken = token => {
  if (token) API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete API.defaults.headers.common['Authorization'];
};

export const signup = (email, password) => API.post('/auth/signup', { email, password });
export const login = (email, password) => API.post('/auth/login', { email, password });
export const getVideos = () => API.get('/api/videos');
