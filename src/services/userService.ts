import { IUserCreate, UserLogin } from '../types/userType';
import api from './api';

async function create(user: IUserCreate) {
  const response = await api.post('/users/sign-up', user);

  return response.data;
}

async function login(user: UserLogin) {
  const response = await api.post('/users/sign-in', user);

  return response.data;
}

async function makeContributor(email: string) {
  const response = await api.post(`/users/make-contributor/${email}`, {});

  return response.data;
}

async function sendEmailToContributor(token: string) {
  await api.post('/users/send-email-contributor', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const userService = {
  create,
  login,
  makeContributor,
  sendEmailToContributor,
};

export default userService;
