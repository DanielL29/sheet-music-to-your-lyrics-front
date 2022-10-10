import musicService from '../../../services/musicService';
import { IMusics } from '../../../types/musicType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useSearch(text: string) {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IMusics[]>(() => musicService.getSearch(text, currentUser!.token));

  return {
    search: data,
    createLoadingSearch: loading,
    createErrorSearch: error,
    setSearchError: setError,
    getSearch: act,
  };
}
