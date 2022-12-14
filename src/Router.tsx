import { Routes, Route, Navigate } from 'react-router-dom';
import hooks from './hooks';
import Pages from './pages';
import MakeContributor from './pages/MakeContributor/MakeContributor';

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
      <Route path={isLogged ? '/musics' : '*'} element={isLogged ? <Pages.Musics /> : <Navigate to="/" replace />} />
      <Route path={isLogged ? '/authors' : '*'} element={isLogged ? <Pages.Authors /> : <Navigate to="/" replace />} />
      <Route path={isLogged && currentUser.teacher ? '/add-music' : '*'} element={isLogged && currentUser.teacher ? <Pages.AddMusic /> : <Navigate to="/home" replace />} />
      <Route path="/become/contributor" element={<MakeContributor />} />
    </Routes>
  );
}
