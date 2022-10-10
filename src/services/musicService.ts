import { MusicInsertData } from '../types/musicType';
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

async function getByCategory(categoryName: string, token: string) {
  const response = await api.get(`/musics/category/${categoryName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function getByAuthor(authorName: string, token: string) {
  const response = await api.get(`/musics/author/${authorName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function getAll(token: string) {
  const response = await api.get('/musics', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function insert(music: MusicInsertData, token: string) {
  const formData = new FormData();

  for (let i = 0; i < Object.keys(music).length; i++) {
    const element = Object.keys(music)[i];
    if (music[element] !== '') {
      formData.append(element, music[element]);
    }

    if (element === 'sheetMusicFile' && music[element] !== '') {
      formData.append(element, music[element].name);
    }
  }

  const response = await api.post('/musics/create', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const musicService = {
  getByName,
  update,
  getByCategory,
  getByAuthor,
  getAll,
  insert,
};

export default musicService;
