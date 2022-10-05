import { Button, Stack } from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import startImg from '../../assets/images/start.png';
import StartWrapper from './StartStyle';
import hooks from '../../hooks';

interface IStart {
  firstAppear: () => void;
}

export default function Start({ firstAppear }: IStart) {
  const { setTeacher } = hooks.useTeacher();

  return (
    <StartWrapper>
      <img src={startImg} alt="start" />
      <Stack direction="column" spacing={2}>
        <h1>Bem vindo ao</h1>
        <h1>SHEET MUSIC TO YOUR LYRICS!</h1>
        <Button
          variant="contained"
          size="large"
          startIcon={<AccountCircleIcon style={{ fontSize: '30px' }} />}
          style={{
            width: '400px', height: '60px', backgroundColor: '#15c7cf', fontSize: '18px',
          }}
          fullWidth
          onClick={() => { firstAppear(); setTeacher(false); }}
        >
          Comece como usuário
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<LibraryMusicIcon style={{ fontSize: '30px' }} />}
          style={{
            width: '400px', height: '60px', backgroundColor: '#15c7cf', fontSize: '18px',
          }}
          fullWidth
          onClick={() => { firstAppear(); setTeacher(true); }}
        >
          Comece como contribuidor
        </Button>
      </Stack>
    </StartWrapper>
  );
}
