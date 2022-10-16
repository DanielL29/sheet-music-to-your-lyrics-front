import { useState } from 'react';
import { IMusicSnippet } from '../types/musicSnippetType';
import { IMusic } from '../types/musicType';

export default function useSnippet(musicData?: IMusic | null) {
  const [snippet, setSnippet] = useState<IMusicSnippet | null>(null);
  const [addMusicSnippet, setAddMusicSnippet] = useState<string | undefined>('');
  const [updateCurrentSnippet, setUpdateCurrentSnippet] = useState<IMusicSnippet | null>(null);
  const [snippetAid, setSnippetAid] = useState<string | number | readonly string[] | undefined>('');
  const [musicSnippetType, setMusicSnippetType] = useState<string | undefined>('');

  function selectMusicSnippet() {
    if (musicData?.lyric.join().includes(window.getSelection()!.toString())) {
      setAddMusicSnippet(window.getSelection()!.toString());
    }
  }

  return {
    snippet,
    addMusicSnippet,
    updateCurrentSnippet,
    snippetAid,
    musicSnippetType,
    setSnippetAid,
    setSnippet,
    selectMusicSnippet,
    setMusicSnippetType,
    setAddMusicSnippet,
    setUpdateCurrentSnippet,
  };
}
