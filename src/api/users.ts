import axios from 'axios';

import {BASE_URL} from '.';

export const getUser = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/users/${id}`);
  return res.data;
};
