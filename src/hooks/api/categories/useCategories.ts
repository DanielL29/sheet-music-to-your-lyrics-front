import categoryService from '../../../services/categoryService';
import { ICategory } from '../../../types/categoryType';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useCategories() {
  const { currentUser } = useUser();

  const {
    data, error, loading, setError, act,
  } = useAsync<ICategory[]>(() => categoryService.getAll(currentUser!.token));

  return {
    createCategoriesError: error,
    createCategoriesLoading: loading,
    categories: data,
    setCategoriesError: setError,
    listCategories: act,
  };
}
