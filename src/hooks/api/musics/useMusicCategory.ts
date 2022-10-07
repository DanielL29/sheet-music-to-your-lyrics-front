import musicService from '../../../services/musicService';
import { IMusicCategory } from '../../../types/musicType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useMusicCategory(categoryName: string) {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IMusicCategory[]>(
    () => musicService.getByCategory(categoryName, currentUser!.token),
  );

  return {
    musicByCategory: data,
    createLoadingMusicCategory: loading,
    createErrorMusicCategory: error,
    setMusicCategoryError: setError,
    getMusicByCategory: act,
  };
}
