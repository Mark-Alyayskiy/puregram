import axios from 'axios';
import {BASE_URL} from '.';

export const getPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};

export const addPost = async (label: string, image: any, token: string) => {
  console.log('image', image);
  const formData = new FormData();
  formData.append('label', label);
  formData.append('image', {
    type: 'image/jpg',
    name: 'Mark.jpg',

    uri: 'file://' + image.path,
  });

  await fetch(`${BASE_URL}/posts`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      Authorization: ` Bearer ${token}`,
    },
    body: formData,
  });

  // const res = await axios.post(`${BASE_URL}/posts`, formData);
  // return res.data;
};
