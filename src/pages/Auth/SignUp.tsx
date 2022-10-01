import { Button, CircularProgress } from '@mui/material';
import { useContext, useState } from 'react';
import studentImg from '../../assets/images/student.png';
import teacherImg from '../../assets/images/teacher.png';
import logoToAuth from '../../assets/images/logo-to-auth.png';
import AuthWrapper from './AuthStyle';
import useAuth from '../../hooks/useAuth';
import CheckUser from '../../components/CheckUser/CheckUser';
import NavLink from '../../assets/styles/GlobalLink';
import AuthInput from '../../components/AuthInput/AuthInput';
import useSignUp from '../../hooks/api/users/useSignUp';
import SnackbarAlert from '../../components/SnackbarAlert/SnackbarAlert';
import Start from '../../components/Start/Start';
import TeacherContext from '../../contexts/TeacherContext';

export default function SignUp() {
  const {
    start, showPassword, firstAppear, navigate, toggleVisibility,
  } = useAuth();

  const {
    loadingCreatingUser, createUserError, createUser, setCreateUserError,
  } = useSignUp();

  const { teacher } = useContext(TeacherContext);

  const [user, setUser] = useState({
    name: '', email: '', password: '', confirmPassword: '', teacher,
  });

  async function submitUser(e: any) {
    e.preventDefault();

    await createUser(user);

    navigate('/');
  }

  return start ? (
    <Start firstAppear={firstAppear} />
  ) : (
    <>
      <SnackbarAlert
        error={createUserError}
        openAlert={!!createUserError}
        closeAlert={() => setCreateUserError(null)}
      />
      <AuthWrapper.Container>
        <img src={!teacher ? studentImg : teacherImg} alt="student-colaborator" />
        <AuthWrapper.Form onSubmit={(e) => submitUser(e)}>
          <img src={logoToAuth} alt="logo-to-auth" />
          <div>
            <h1>Cadastro</h1>
            <AuthInput
              text="name"
              label="Nome"
              value={user.name}
              changeInput={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              disabled={loadingCreatingUser}
            />
            <AuthInput
              text="email"
              label="Email"
              type="email"
              value={user.email}
              changeInput={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              disabled={loadingCreatingUser}
            />
            <AuthInput
              text="password"
              label="Senha"
              type="password"
              value={user.password}
              showPassword={showPassword}
              changeInput={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              toggleVisibility={toggleVisibility}
              disabled={loadingCreatingUser}
            />
            <AuthInput
              text="confirmPassword"
              label="Confime a senha"
              type="password"
              value={user.confirmPassword}
              showPassword={showPassword}
              changeInput={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
              toggleVisibility={toggleVisibility}
              disabled={loadingCreatingUser}
            />
            <CheckUser />
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
            <NavLink to="/">Já tem uma conta? Clique aqui para se logar.</NavLink>
          </div>
        </AuthWrapper.Form>
      </AuthWrapper.Container>
    </>
  );
}
