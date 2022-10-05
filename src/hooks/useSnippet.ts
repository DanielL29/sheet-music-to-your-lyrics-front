import { useState } from 'react';
import { useParams } from 'react-router-dom';
import musicService from '../services/musicService';
import musicSnippetService from '../services/musicSnippetService';
import { IMusicSnippet } from '../types/musicSnippetType';
import { IMusic } from '../types/musicType';
import useMusicSnippetCreate from './api/musicSnippets/useMusicSnippetCreate';
import useAsync from './useAsync';
import useUser from './useUser';

export default function useSnippet(musicData?: IMusic | null) {
  const [snippet, setSnippet] = useState<IMusicSnippet | null>(null);
  const [addMusicSnippet, setAddMusicSnippet] = useState<string | undefined>('');
  const [snippetAid, setSnippetAid] = useState<string | number | readonly string[] | undefined>('');
  const [musicSnippetType, setMusicSnippetType] = useState<string | undefined>('');
  const { musicName } = useParams();

  const { currentUser } = useUser();
  const { act: getMusic } = useAsync(musicService.getByName, false);
  const { act: getMusicSnippets } = useAsync(musicSnippetService.getMusicSnippets, false);
  const { createMusicSnippet } = useMusicSnippetCreate();

  function selectMusicSnippet() {
    if (musicData?.lyric.join().includes(window.getSelection()!.toString())) {
      setAddMusicSnippet(window.getSelection()!.toString());
    }
  }

  function newSnippet(musicSnippet: string) {
    createMusicSnippet(
      musicName,
      { musicSnippet, snippetAid },
      currentUser?.token,
    );
    getMusic(musicName, currentUser?.token);
    getMusicSnippets(musicName, currentUser?.token);
    setSnippetAid('');
  }

  return {
    snippet,
    addMusicSnippet,
    snippetAid,
    musicSnippetType,
    setSnippetAid,
    setSnippet,
    selectMusicSnippet,
    setMusicSnippetType,
    setAddMusicSnippet,
    newSnippet,
  };
}
