import axios from 'axios';
import {BASE_URL} from '.';

export const getPosts = async (cursor: number, accessToken?: string) => {
  if (accessToken) {
    const res = await axios.post(
      `${BASE_URL}/posts`,
      {cursor},
      {headers: {Authorization: `Bearer ${accessToken}`}},
    );
    return res.data;
  }
  const res = await axios.post(`${BASE_URL}/posts`, {cursor});
  return res.data;
};

export const getUserPostsById = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/posts/user/${id}`);
  return res.data;
};

export const like = async (id: string) => {
  const res = await axios.post(`${BASE_URL}/likes/${id}`);
  return res.data;
};

export const getSinglePost = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}`);

  return res.data;
};

export const getComments = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/posts/comments/${id}`);

  return res.data;
};

export const addPost = async (
  label: string,
  imageUrl: string,
  token: string,
) => {
  const newImageUri = 'file:///' + imageUrl.split('file:/').join('');
  const formData = new FormData();
  formData.append('label', label);
  formData.append('image', {
    type: 'image/jpg',
    name: newImageUri.split('/').pop(),
    uri: 'file://' + imageUrl,
  });

  return await fetch(`${BASE_URL}/posts/create`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      Authorization: ` Bearer ${token}`,
    },
    body: formData,
  });
};

export const deletePost = async (id: string) => {
  return await axios.delete(`${BASE_URL}/posts/${id}`);
};
