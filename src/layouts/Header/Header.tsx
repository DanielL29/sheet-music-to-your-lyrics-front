import { TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import HeaderWrapper from './HeaderStyle';
import NavLink from '../../assets/styles/GlobalLink';
import useRoute from '../../hooks/useRoute';
import images from '../../assets/images';
import useUser from '../../hooks/useUser';

export default function Header() {
  const { showHeader } = useRoute();
  const { setCurrentUser } = useUser();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userLocal');
    setCurrentUser(null);
    navigate('/');
  }

  return showHeader === 'show' ? (
    <HeaderWrapper.Container>
      <div>
        <div className="logo-search">
          <HeaderWrapper.LogoHeader onClick={() => navigate('/home')}>
            <img src={images.logoHeader} alt="logo-to-header" />
          </HeaderWrapper.LogoHeader>
          <TextField id="outlined-basic" label="Pesquisar música..." variant="outlined" size="small" fullWidth />
        </div>
        <div className="nav">
          <p>
            <NavLink to="/musics" className="link">
              Todas as Músicas
            </NavLink>
          </p>
          <p>
            <NavLink to="/authors" className="link">
              Artistas
            </NavLink>
          </p>
          <p>
            <NavLink to="/home" className="link">
              <LogoutIcon onClick={() => logout()} />
            </NavLink>
          </p>
        </div>
      </div>
    </HeaderWrapper.Container>
  ) : showHeader === '' ? (
    <div />
  ) : <h1>Página não encontrada</h1>;
}
