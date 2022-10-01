import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const [start, setStart] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [openError, setOpenError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('start') === null) {
      setStart(true);
    }
  }, []);

  function firstAppear() {
    setStart(false);
    localStorage.setItem('start', 'false');
    navigate('/sign-up');
  }

  function toggleVisibility() {
    setShowPassword(!showPassword);
  }

  return {
    start,
    showPassword,
    openError,
    toggleVisibility,
    setOpenError,
    navigate,
    firstAppear,
  };
}
