import { Button, CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import studentImg from '../../assets/images/student.png';
import logoToAuth from '../../assets/images/logo-to-auth.png';
import AuthWrapper from './AuthStyle';
import Start from '../../components/Start/Start';
import useAuth from '../../hooks/useAuth';
import NavLink from '../../assets/styles/GlobalLink';
import AuthInput from '../../components/AuthInput/AuthInput';
import useSignIn from '../../hooks/api/users/useSignIn';
import SnackbarAlert from '../../components/SnackbarAlert/SnackbarAlert';
import UserContext from '../../contexts/UserContext';

export default function SignIn() {
  const {
    start, showPassword, toggleVisibility, firstAppear,
  } = useAuth();

  const {
    loginData, loadingLogin, createLoginError, login, setCreateLoginError,
  } = useSignIn();

  const [user, setUser] = useState({ email: '', password: '' });

  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    if (loginData && localStorage.getItem('userLocal') === null) {
      setCurrentUser(loginData);
      localStorage.setItem('userLocal', JSON.stringify(loginData));
    }
  }, [loginData]);

  async function submitLogin(e: any) {
    e.preventDefault();

    await login({ email: user.email, password: user.password });
  }

  return start ? (
    <Start firstAppear={firstAppear} />
  ) : (
    <>
      <SnackbarAlert
        error={createLoginError}
        openAlert={!!createLoginError}
        closeAlert={() => setCreateLoginError(null)}
      />
      <AuthWrapper.Container>
        <img src={studentImg} alt="student" />
        <AuthWrapper.Form onSubmit={(e) => submitLogin(e)}>
          <img src={logoToAuth} alt="logo-to-auth" />
          <div>
            <h1>Login</h1>
            <AuthInput
              text="email"
              label="Email"
              type="email"
              value={user.email}
              changeInput={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              disabled={loadingLogin}
            />
            <AuthInput
              text="password"
              label="Senha"
              type="password"
              value={user.password}
              showPassword={showPassword}
              changeInput={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              toggleVisibility={toggleVisibility}
              disabled={loadingLogin}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              style={{
                height: '60px', backgroundColor: '#15c7cf', fontSize: '18px', marginTop: '20px',
              }}
              fullWidth
            >
              {loadingLogin ? <CircularProgress /> : 'Entrar'}
            </Button>
            <NavLink to="/sign-up">Ainda não tem uma conta? Clique para se cadastrar!</NavLink>
          </div>
        </AuthWrapper.Form>
      </AuthWrapper.Container>
    </>
  );
}
