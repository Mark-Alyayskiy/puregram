import axios from 'axios';

import {BASE_URL} from '.';

export const subscribeToUser = async (id: string) => {
  const res = await axios.post(`${BASE_URL}/subscriptions/${id}`);
  return res.data;
};

export const getSubscribers = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/subscriptions/user/${id}`);
  return res.data;
};

export const getSubscribed = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/subscriptions/subscription/${id}`);
  return res.data;
};
