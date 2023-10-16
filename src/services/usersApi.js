import axios from 'axios';
import { token } from 'utilits/token';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function registerUser(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
}
export async function loginUser(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
}
export async function logoutUser() {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
}

export const fetchCurrentUser = async token => {
  try {
    token.set(persistedToken);
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
