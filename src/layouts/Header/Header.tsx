import { TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HeaderWrapper from './HeaderStyle';
import NavLink from '../../assets/styles/GlobalLink';
import images from '../../assets/images';
import Components from '../../components';
import hooks from '../../hooks';

export default function Header() {
  const { showHeader } = hooks.useRoute();
  const { currentUser, setCurrentUser } = hooks.useUser();
  const { sendEmail } = hooks.useSendEmail();

  const [becomeContributor, setBecomeContributor] = useState<string | undefined>('');
  const [text, setText] = useState('');
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userLocal');
    setCurrentUser(null);
    navigate('/');
  }

  return showHeader === 'show' ? (
    <HeaderWrapper.Container>
      <Components.SnackbarAlert
        error={becomeContributor}
        openAlert={becomeContributor !== ''}
        closeAlert={() => setBecomeContributor('')}
        success
      />
      <div>
        <div className="logo-search">
          <HeaderWrapper.LogoHeader onClick={() => navigate('/home')}>
            <img src={images.logoHeader} alt="logo-to-header" />
          </HeaderWrapper.LogoHeader>
          <TextField
            id="search"
            label="Pesquisar música..."
            value={text}
            type="search"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? navigate('/musics', { state: text }) : '')}
          />
        </div>
        <div className="nav">
          {currentUser?.teacher ? (
            <p>
              <NavLink to="/add-music" className="link">
                Adicionar Música
              </NavLink>
            </p>
          ) : ''}
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
          {!currentUser?.teacher ? (
            <p>
              <Components.MusicButton
                name="Tornar-se contribuidor"
                state={becomeContributor}
                setButton={setBecomeContributor}
                setUpdateField={() => {
                  setBecomeContributor('Email para se tornar contribuidor enviado! cheque seu email e confirme.');
                  sendEmail(currentUser!.token);
                }}
                header
              />
            </p>
          ) : ''}
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
