import api from './api';

async function getAll(token: string) {
  const response = await api.get('/categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const categoryService = {
  getAll,
};

export default categoryService;
