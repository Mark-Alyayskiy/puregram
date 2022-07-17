import axios from 'axios';
import {BASE_URL} from '.';

export const addComment = async (commentText: string, id: string) => {
  const res = await axios.post(`${BASE_URL}/comments/${id}`, {commentText});
  return res.data;
};
