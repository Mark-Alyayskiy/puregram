import axios from 'axios';

import {BASE_URL} from '.';

export const getUser = async ({myId}: {myId: string}) => {
  const res = await axios.get(`${BASE_URL}/users/${myId}`);
  return res.data;
};
