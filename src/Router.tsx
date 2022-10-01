import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/Home/Home';
import UserContext from './contexts/UserContext';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

export default function Router() {
  const { currentUser } = useContext(UserContext);
  const isLogged = currentUser?.token !== undefined;

  return (
    <Routes>
      <Route path="/" element={isLogged ? <Navigate to="/home" replace /> : <SignIn />} />
      <Route path="/sign-up" element={isLogged ? <Navigate to="/home" replace /> : <SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
