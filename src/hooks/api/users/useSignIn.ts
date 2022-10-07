import userService from '../../../services/userService';
import { IUserLocal } from '../../../types/userType';
import useAsync from '../../useAsync';

export default function useSignIn() {
  const {
    data, loading, error, act, setError,
  } = useAsync<IUserLocal>(userService.login, false);

  return {
    loadingLogin: loading,
    createLoginError: error,
    loginData: data,
    login: act,
    setCreateLoginError: setError,
  };
}
