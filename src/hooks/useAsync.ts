import { useState, useEffect } from 'react';

export default function useAsync(handler: any, immediate: boolean = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const act = (...args: any) => {
    setLoading(true);
    setError(null);
    return handler(...args).then((promiseData: any) => {
      setData(promiseData);
      setLoading(false);
    }).catch((promiseError: any) => {
      console.log(promiseError);
      setError(promiseError.response.data);
      setLoading(false);
    });
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
