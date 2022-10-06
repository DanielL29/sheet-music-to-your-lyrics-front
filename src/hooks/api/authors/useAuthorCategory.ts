import authorService from '../../../services/authorService';
import { IAuthorByCategory } from '../../../types/authorType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useAuthorCategory(category: string) {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IAuthorByCategory[]>(
    () => authorService.getByCategory(category, currentUser!.token),
  );

  return {
    createAuthorCategoryLoading: loading,
    createAuthorCategoryError: error,
    authorsByCategory: data,
    setAuthorCategoryError: setError,
    getAuthorsByCategory: act,
  };
}
