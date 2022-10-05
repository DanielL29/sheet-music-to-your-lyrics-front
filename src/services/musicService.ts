import api from './api';

async function getByName(musicName: string, token: string) {
  const response = await api.get(`/musics/find/${musicName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function update(musicName: string, musicUpdate: any, token: string) {
  const formData = new FormData();
  const updateValue: any = Object.values(musicUpdate)[0];

  if (musicUpdate.sheetMusicFile) {
    formData.append('sheetMusicFile', musicUpdate.sheetMusicFile.name);
  }
  formData.append(Object.keys(musicUpdate)[0], updateValue);

  await api.patch(`/musics/update/${musicName}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  });
}

const musicService = {
  getByName,
  update,
};

export default musicService;
