import { useState } from 'react';
import { useParams } from 'react-router-dom';
import musicService from '../services/musicService';
import musicSnippetService from '../services/musicSnippetService';
import { IMusic } from '../types/musicType';
import useMusicUpdate from './api/musics/useMusicUpdate';
import useAsync from './useAsync';
import useSnippet from './useSnippet';
import useUser from './useUser';

export default function useMusicPage(musicData?: IMusic | null) {
  const [addChords, setAddChords] = useState<string | undefined>('');
  const [video, setVideo] = useState<string | undefined>('');
  const [updateField, setUpdateField] = useState<'Partitura' | 'Video' | 'Video aula' | ''>('');
  const [update, setUpdate] = useState<string | number | readonly string[] | undefined>('');

  const { updateMusic } = useMusicUpdate();
  const { currentUser } = useUser();
  const { act: getMusic } = useAsync(musicService.getByName, false);
  const { act: getMusicSnippets } = useAsync(musicSnippetService.getMusicSnippets, false);
  const { setSnippet, setSnippetAid } = useSnippet();
  const { musicName } = useParams();

  function updateLyricChords(lyric: string) {
    updateMusic(musicName, { lyric }, currentUser!.token);
    getMusic(musicName, currentUser!.token);
    getMusicSnippets(musicName, currentUser!.token);
  }

  function resetToUpdateLyric() {
    if (addChords === '') {
      setAddChords(musicData?.lyricToUpdate);
      setVideo('');
      setUpdateField('');
      setSnippet(null);
      setSnippetAid('');
    } else {
      setAddChords('');
    }
  }

  function updateMusicField(field: any, currentUpdate: string) {
    updateMusic(
      musicName,
      currentUpdate === 'Video'
        ? { musicVideoUrl: field }
        : currentUpdate === 'Video aula'
          ? { musicHelpVideoUrl: field }
          : currentUpdate === 'Partitura'
            ? { sheetMusicFile: field } : '',
      currentUser?.token,
    );
    getMusic(musicName, currentUser?.token);
    getMusicSnippets(musicName, currentUser?.token);
  }

  return {
    addChords,
    video,
    updateField,
    update,
    setAddChords,
    updateLyricChords,
    resetToUpdateLyric,
    setUpdateField,
    setVideo,
    setUpdate,
    updateMusicField,
  };
}
