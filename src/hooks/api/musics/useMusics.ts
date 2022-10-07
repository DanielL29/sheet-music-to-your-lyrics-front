import musicService from '../../../services/musicService';
import { IMusics } from '../../../types/musicType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useMusics() {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IMusics[]>(() => musicService.getAll(currentUser!.token));

  return {
    musics: data,
    createLoadingMusics: loading,
    createErrorMusics: error,
    setMusicsError: setError,
    getMusics: act,
  };
}
