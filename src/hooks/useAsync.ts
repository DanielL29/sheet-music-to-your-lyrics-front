import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser';

export default function useAsync<T>(handler: any, immediate: boolean = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { setCurrentUser } = useUser();

  const act = (...args: any) => {
    setLoading(true);
    setError(null);
    return handler(...args).then((promiseData: any) => {
      setData(promiseData);
      setLoading(false);
    }).catch((promiseError: any) => {
      console.log(promiseError);

      if (promiseError.response.data === 'jwt expired') {
        localStorage.removeItem('userLocal');
        setCurrentUser(null);
        navigate('/');
      }

      setError(promiseError.response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, [data]);

  return {
    data,
    loading,
    error,
    act,
    setError,
  };
}
