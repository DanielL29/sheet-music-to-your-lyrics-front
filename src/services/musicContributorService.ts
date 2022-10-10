import api from './api';

async function getContributorsByMusic(musicName: string, token: string) {
  const response = await api.get(`/musicContributors/${musicName}/contributors`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const musicContributorService = {
  getContributorsByMusic,
};

export default musicContributorService;
