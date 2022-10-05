import musicSnippetService from '../../../services/musicSnippetService';
import useAsync from '../../useAsync';

export default function useMusicSnippetCreate() {
  const {
    loading, error, setError, act,
  } = useAsync(musicSnippetService.insertMusicSnippet, false);

  return {
    createMusicSnippetError: error,
    createMusicSnippetLoading: loading,
    setMusicSnippetError: setError,
    createMusicSnippet: act,
  };
}
