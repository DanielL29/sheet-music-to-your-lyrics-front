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

const userService = {
  create,
  login,
};

export default userService;
