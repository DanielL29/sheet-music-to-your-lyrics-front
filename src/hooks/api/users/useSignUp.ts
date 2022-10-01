import userService from '../../../services/userService';
import useAsync from '../../useAsync';

export default function useSignUp() {
  const {
    loading, error, act, setError,
  } = useAsync(userService.create, false);

  return {
    loadingCreatingUser: loading,
    createUserError: error,
    createUser: act,
    setCreateUserError: setError,
  };
}
