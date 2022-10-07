import authorService from '../../../services/authorService';
import { IAuthors } from '../../../types/authorType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useAuthors() {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<IAuthors[]>(() => authorService.getAll(currentUser!.token));

  return {
    authors: data,
    createLoadingAuthors: loading,
    createErrorAuthors: error,
    setAuthorsError: setError,
    getAuthors: act,
  };
}
