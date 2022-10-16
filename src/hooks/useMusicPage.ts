import { useState } from 'react';
import { IMusic } from '../types/musicType';
import useSnippet from './useSnippet';

export default function useMusicPage(musicData?: IMusic | null) {
  const [addChords, setAddChords] = useState<string | undefined>('');
  const [video, setVideo] = useState<string | undefined>('');
  const [updateField, setUpdateField] = useState<'Partitura' | 'Video' | 'Video aula' | ''>('');
  const [update, setUpdate] = useState<string | number | readonly string[] | undefined>('');

  const { setSnippet, setSnippetAid } = useSnippet();

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

  return {
    addChords,
    video,
    updateField,
    update,
    setAddChords,
    resetToUpdateLyric,
    setUpdateField,
    setVideo,
    setUpdate,
  };
}
