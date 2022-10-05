import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import AuthWrapper from './AuthStyle';
import NavLink from '../../assets/styles/GlobalLink';
import hooks from '../../hooks';
import Components from '../../components/index';
import images from '../../assets/images';

export default function SignIn() {
  const {
    start, showPassword, toggleVisibility, firstAppear,
  } = hooks.useAuth();

  const {
    loginData, loadingLogin, createLoginError, login, setCreateLoginError,
  } = hooks.useSignIn();

  const [user, setUser] = useState({ email: '', password: '' });

  const { setCurrentUser } = hooks.useUser();

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
    <Components.Start firstAppear={firstAppear} />
  ) : (
    <>
      <Components.SnackbarAlert
        error={createLoginError}
        openAlert={!!createLoginError}
        closeAlert={() => setCreateLoginError(null)}
      />
      <AuthWrapper.Container>
        <img src={images.studentImg} alt="student" />
        <AuthWrapper.Form onSubmit={(e) => submitLogin(e)}>
          <img src={images.logoAuth} alt="logo-to-auth" />
          <div>
            <h1>Login</h1>
            <Components.AuthInput
              text="email"
              label="Email"
              type="email"
              value={user.email}
              changeInput={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              disabled={loadingLogin}
            />
            <Components.AuthInput
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
