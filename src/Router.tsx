import { Routes, Route, Navigate } from 'react-router-dom';
import hooks from './hooks';
import Pages from './pages';

export default function Router() {
  const { currentUser } = hooks.useUser();
  const isLogged = currentUser?.token !== undefined;

  return (
    <Routes>
      <Route path="/" element={isLogged ? <Navigate to="/home" replace /> : <Pages.SignIn />} />
      <Route path="/sign-up" element={isLogged ? <Navigate to="/home" replace /> : <Pages.SignUp />} />
      <Route path={isLogged ? '/home' : '*'} element={isLogged ? <Pages.Home /> : <Navigate to="/" replace />} />
      <Route path={isLogged ? '/:category' : '*'} element={isLogged ? <Pages.Category /> : <Navigate to="/" replace />} />
      <Route path={isLogged ? '/:category/:author' : '*'} element={isLogged ? <Pages.Author /> : <Navigate to="/" replace />} />
      <Route path={isLogged ? '/:category/:author/:musicName' : '*'} element={isLogged ? <Pages.Music /> : <Navigate to="/" replace />} />
    </Routes>
  );
}
