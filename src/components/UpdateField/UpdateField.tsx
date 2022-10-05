import { Button, TextField } from '@mui/material';
import hooks from '../../hooks';
import { IMusic } from '../../types/musicType';

interface IUpdateField {
  musicData: IMusic | null
  updateField: string
  setUpdateField: (value: '' | 'Partitura' | 'Video' | 'Video aula') => void
  setVideo: (value: string) => void
}

export default function UpdateField({
  musicData, updateField, setUpdateField, setVideo,
}: IUpdateField) {
  const { update, setUpdate, updateMusicField } = hooks.useMusicPage(musicData);

  return (
    <>
      <h1>{`Atualizar ${updateField}: `}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateMusicField(update, updateField);
          setUpdateField('');
          setVideo('');
        }}
        encType="multipart/form-data"
      >
        <TextField
          id={updateField}
          type={updateField === 'Partitura' ? 'file' : 'text'}
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
    </>
  );
}
