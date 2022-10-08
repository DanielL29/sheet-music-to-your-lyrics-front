import userService from '../../../services/userService';
import { IUserLocal } from '../../../types/userType';
import useAsync from '../../useAsync';

export default function useContributor() {
  const {
    data, loading, error, act, setError,
  } = useAsync<IUserLocal>(userService.makeContributor, false);

  return {
    createContributorLoading: loading,
    createContributorError: error,
    contributor: data,
    makeContributor: act,
    setContributorError: setError,
  };
}
