import axios from 'axios';

const BASE_URL = 'https://puregram-api.herokuapp.com/api';

export const signIn = async (email: string, password: string) => {
  console.log(email, password);
  const res = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password,
  });
  return res.data;
};

export const signUp = async (
  email: string,
  password: string,
  username: string,
) => {
  const res = await axios.post(`${BASE_URL}/auth/register`, {
    email,
    password,
    username,
  });
  return res.data;
};
