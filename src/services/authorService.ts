import api from './api';

async function getByCategory(category: string, token: string) {
  const response = await api.get(`/authors/${category}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function getAll(token: string) {
  const response = await api.get('/authors', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const authorService = {
  getByCategory,
  getAll,
};

export default authorService;
