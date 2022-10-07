import musicService from '../../../services/musicService';
import { IMusicAuthor } from '../../../types/musicType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useMusicAuthor(authorName: string) {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IMusicAuthor>(
    () => musicService.getByAuthor(authorName, currentUser!.token),
  );

  return {
    musicByAuthor: data,
    createLoadingMusicAuthor: loading,
    createErrorMusicAuthor: error,
    setMusicAuthorError: setError,
    getMusicByAuthor: act,
  };
}
