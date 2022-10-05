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

const musicSnippetService = {
  getMusicSnippets,
  insertMusicSnippet,
};

export default musicSnippetService;
