import { Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import AuthWrapper from './AuthStyle';
import NavLink from '../../assets/styles/GlobalLink';
import hooks from '../../hooks';
import Components from '../../components';
import images from '../../assets/images';

export default function SignUp() {
  const {
    start, showPassword, firstAppear, navigate, toggleVisibility,
  } = hooks.useAuth();

  const {
    loadingCreatingUser, createUserError, createUser, setCreateUserError,
  } = hooks.useSignUp();

  const { teacher } = hooks.useTeacher();

  const [user, setUser] = useState({
    name: '', email: '', password: '', confirmPassword: '', teacher,
  });
  const [sendEmail, setSendEmail] = useState('');

  async function submitUser(e: any) {
    e.preventDefault();
    console.log(user);

    await createUser(user);

    navigate('/');
  }

  return start ? (
    <Components.Start firstAppear={firstAppear} />
  ) : (
    <>
      <Components.SnackbarAlert
        error={createUserError}
        openAlert={!!createUserError}
        closeAlert={() => setCreateUserError(null)}
      />
      <Components.SnackbarAlert
        error={sendEmail}
        openAlert={sendEmail !== ''}
        closeAlert={() => setSendEmail('')}
        success
      />
      <AuthWrapper.Container>
        <img src={!teacher ? images.studentImg : images.teacherImg} alt="student-colaborator" />
        <AuthWrapper.Form onSubmit={(e) => submitUser(e)}>
          <img src={images.logoAuth} alt="logo-to-auth" />
          <div>
            <h1>Cadastro</h1>
            <Components.AuthInput
              text="name"
              label="Nome"
              value={user.name}
              changeInput={(e: any) => setUser({ ...user, [e.target.name]: e.target.value })}
              disabled={loadingCreatingUser}
            />
            <Components.AuthInput
              text="email"
              label="Email"
              type="email"
              value={user.email}
              changeInput={(e: any) => setUser({ ...user, [e.target.name]: e.target.value })}
              disabled={loadingCreatingUser}
            />
            <Components.AuthInput
              text="password"
              label="Senha"
              type="password"
              value={user.password}
              showPassword={showPassword}
              changeInput={(e: any) => setUser({ ...user, [e.target.name]: e.target.value })}
              toggleVisibility={toggleVisibility}
              disabled={loadingCreatingUser}
            />
            <Components.AuthInput
              text="confirmPassword"
              label="Confime a senha"
              type="password"
              value={user.confirmPassword}
              showPassword={showPassword}
              changeInput={(e: any) => setUser({ ...user, [e.target.name]: e.target.value })}
              toggleVisibility={toggleVisibility}
              disabled={loadingCreatingUser}
            />
            <Components.CheckUser />
            <Button
              type="submit"
              variant="contained"
              size="large"
              style={{
                height: '60px', backgroundColor: '#15c7cf', fontSize: '18px', marginTop: '20px',
              }}
              fullWidth
            >
              {loadingCreatingUser ? <CircularProgress /> : 'Cadastrar-se'}
            </Button>
            <NavLink to="/" underline>Já tem uma conta? Clique aqui para se logar.</NavLink>
          </div>
        </AuthWrapper.Form>
      </AuthWrapper.Container>
    </>
  );
}
