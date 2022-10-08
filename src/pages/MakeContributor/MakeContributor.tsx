import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Components from '../../components';
import hooks from '../../hooks';
import MakeContributorWrapper from './MakeContributorStyle';

export default function MakeContributor() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const {
    contributor, makeContributor, createContributorError, setContributorError,
  } = hooks.useContributor();
  const { setCurrentUser } = hooks.useUser();

  useEffect(() => {
    if (!contributor) {
      makeContributor(search.split('?email=')[1]);
    } else {
      localStorage.setItem('start', 'true');
      localStorage.setItem('userLocal', JSON.stringify(contributor));
      setCurrentUser(contributor);
    }
  }, [contributor]);

  return (
    <MakeContributorWrapper.Container>
      <Components.SnackbarAlert
        error={createContributorError}
        openAlert={!!createContributorError}
        closeAlert={() => setContributorError(null)}
      />
      <h1>Parabéns! se tornou um contribuidor e agora pode auxíliar nas músicas.</h1>
      <Button variant="contained" style={{ backgroundColor: '#15c7f7' }} onClick={() => navigate('/')} disabled={!contributor}>Voltar ao site</Button>
    </MakeContributorWrapper.Container>
  );
}
