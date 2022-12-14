import musicService from '../../../services/musicService';
import { IMusics } from '../../../types/musicType';
import useAsync from '../../useAsync';

export default function useMusicCreate() {
  const {
    data, error, loading, setError, act,
  } = useAsync<IMusics>(musicService.insert, false);

  return {
    insertedMusic: data,
    createMusicInsertError: error,
    createMusicInsertLoading: loading,
    setCreateMusicError: setError,
    createMusic: act,
  };
}
