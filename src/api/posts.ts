import axios from 'axios';
import {BASE_URL} from '.';

export const getPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};
