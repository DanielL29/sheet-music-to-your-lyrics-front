import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import hooks from '../../hooks';
import { IMusic } from '../../types/musicType';
import SnackbarAlert from '../SnackbarAlert/SnackbarAlert';

interface IUpdateField {
  musicData: IMusic | null
  updateField: string
  callMusic: any
  setUpdateField: (value: '' | 'Partitura' | 'Video' | 'Video aula') => void
  setVideo: (value: string) => void
}

export default function UpdateField({
  musicData, updateField, callMusic, setUpdateField, setVideo,
}: IUpdateField) {
  const { currentUser } = hooks.useUser();

  const { update, setUpdate } = hooks.useMusicPage(musicData);
  const { updateMusic, createMusicUpdateError, setMusicUpdateError } = hooks.useMusicUpdate();

  const { musicName } = useParams();

  async function updateMusicField() {
    await updateMusic(
      musicName,
      updateField === 'Video'
        ? { musicVideoUrl: update }
        : updateField === 'Video aula'
          ? { musicHelpVideoUrl: update }
          : updateField === 'Partitura'
            ? { sheetMusicFile: update } : '',
      currentUser?.token,
    );

    callMusic();
  }

  return (
    <>
      <h1>{`Atualizar ${updateField}: `}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateMusicField();
          setUpdateField('');
          setVideo('');
        }}
        encType="multipart/form-data"
      >
        <TextField
          id={updateField}
          type={updateField === 'Partitura' ? 'file' : 'url'}
          label={updateField === 'Video' ? 'Video' : updateField === 'Video aula' ? 'Video aula' : 'Partitura'}
          variant="standard"
          style={{ color: '#15c7cf' }}
          onChange={(e: any) => (updateField === 'Partitura' ? setUpdate(e.target.files[0]) : setUpdate(e.target.value))}
          inputProps={{ accept: 'image/jpeg, image/png, application/pdf' }}
          required
        />
        <Button
          variant="outlined"
          type="submit"
          style={{
            width: '200px', color: '#d5d5d5', borderColor: '#d5d5d5', marginTop: '20px',
          }}
        >
          {`Atualizar ${updateField}`}
        </Button>
      </form>
      {/* <SnackbarAlert
        openAlert={!!createMusicUpdateError}
        error={createMusicUpdateError}
        closeAlert={() => setMusicUpdateError(null)}
      /> */}
    </>
  );
}
