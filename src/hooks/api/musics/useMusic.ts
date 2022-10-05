import musicService from '../../../services/musicService';
import { IMusic } from '../../../types/musicType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useMusic(musicName: string) {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IMusic>(() => musicService.getByName(musicName, currentUser!.token));

  return {
    musicData: data,
    createMusicLoading: loading,
    createMusicError: error,
    setMusicError: setError,
    getMusic: act,
  };
}
