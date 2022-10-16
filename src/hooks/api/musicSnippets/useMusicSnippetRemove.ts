import musicSnippetService from '../../../services/musicSnippetService';
import useAsync from '../../useAsync';

export default function useMusicSnippetRemove() {
  const {
    loading, error, setError, act,
  } = useAsync(musicSnippetService.remove, false);

  return {
    createMusicSnippetRemoveError: error,
    createMusicSnippetRemoveLoading: loading,
    setMusicSnippetRemoveError: setError,
    removeMusicSnippet: act,
  };
}
