import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser';

export default function useAsync<T>(handler: any, immediate: boolean = true) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { setCurrentUser } = useUser();

  const act = async (...args: any) => {
    setLoading(true);
    setError(null);

    try {
      const dbData = await handler(...args);
      setData(dbData);
      setLoading(false);
      return dbData;
    } catch (err: any) {
      console.log(err);

      if (err.response.data === 'jwt expired') {
        localStorage.removeItem('userLocal');
        setCurrentUser(null);
        navigate('/');
      }

      setError(err.response.data);
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  return {
    data,
    loading,
    error,
    act,
    setError,
  };
}
