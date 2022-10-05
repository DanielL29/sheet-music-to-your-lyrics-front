import musicSnippetService from '../../../services/musicSnippetService';
import { IMusicSnippet } from '../../../types/musicSnippetType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useMusicSnippets(musicName: string) {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IMusicSnippet[]>(
    () => musicSnippetService.getMusicSnippets(musicName, currentUser!.token),
  );

  return {
    musicSnippetData: data,
    createMusicSnippetLoading: loading,
    createMusicSnippetError: error,
    setMusicSnippetError: setError,
    getMusicSnippets: act,
  };
}
