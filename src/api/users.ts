import axios from 'axios';

import {BASE_URL} from '.';

export const getUser = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/users/${id}`);
  return res.data;
};

export const updateUserAvatar = async (imageUrl: string, token: string) => {
  const newImageUri = imageUrl.split('file:/').join('');
  const formData = new FormData();
  formData.append('image', {
    type: 'image/jpg',
    name: newImageUri.split('/').pop(),
    uri: imageUrl,
  });

  return await fetch(`${BASE_URL}/users/avatar`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      Authorization: ` Bearer ${token}`,
    },
    body: formData,
  });
};
