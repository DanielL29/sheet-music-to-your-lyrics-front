import musicSnippetService from '../../../services/musicSnippetService';
import useAsync from '../../useAsync';

export default function useMusicSnippetUpdate() {
  const {
    loading, error, setError, act,
  } = useAsync(musicSnippetService.update, false);

  return {
    createMusicSnippetUpdateError: error,
    createMusicSnippetUpdateLoading: loading,
    setMusicSnippetUpdateError: setError,
    updateCurrentSnippet: act,
  };
}
