import userService from '../../../services/userService';
import useAsync from '../../useAsync';

export default function useSignIn() {
  const {
    data, loading, error, act, setError,
  } = useAsync(userService.login, false);

  return {
    loadingLogin: loading,
    createLoginError: error,
    loginData: data,
    login: act,
    setCreateLoginError: setError,
  };
}
