import { MusicSnippetInsertData } from '../types/musicSnippetType';
import api from './api';

async function getMusicSnippets(musicName: string, token: string) {
  const response = await api.get(`/musicSnippets/${musicName}/snippets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function insertMusicSnippet(
  musicName: string,
  snippet: MusicSnippetInsertData,
  token: string,
) {
  const formData = new FormData();

  if (typeof snippet.snippetAid !== 'string') {
    formData.append('snippetAid', snippet.snippetAid);
    formData.append('snippetAid', snippet.snippetAid.name);
    formData.append('musicSnippet', snippet.musicSnippet);
  } else {
    formData.append('snippetAid', snippet.snippetAid);
    formData.append('musicSnippet', snippet.musicSnippet);
  }

  await api.post(`/musicSnippets/${musicName}/create`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  });
}

async function update(musicSnippetId: number, snippetAid: any, token: string) {
  const formData = new FormData();

  if (typeof snippetAid !== 'string') {
    formData.append('snippetAid', snippetAid);
    formData.append('snippetAid', snippetAid.name);
  } else {
    formData.append('snippetAid', snippetAid);
  }

  await api.patch(`/musicSnippets/${musicSnippetId}/update`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'multipart/form-data',
    },
  });
}

async function remove(musicSnippetId: number, token: string) {
  await api.delete(`/musicSnippets/${musicSnippetId}/remove`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

const musicSnippetService = {
  getMusicSnippets,
  insertMusicSnippet,
  update,
  remove,
};

export default musicSnippetService;
