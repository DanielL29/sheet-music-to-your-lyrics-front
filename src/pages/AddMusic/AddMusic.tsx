import {
  Button,
  FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Components from '../../components';
import hooks from '../../hooks';
import AddMusicWrapper from './AddMusicStyle';

export default function AddMusic() {
  const [music, setMusic] = useState({
    name: '',
    author: '',
    musicVideoUrl: '',
    musicHelpVideoUrl: '',
    sheetMusicFile: '',
    categoryId: '',
  });
  const navigate = useNavigate();

  const { currentUser } = hooks.useUser();
  const { categories } = hooks.useCategories();
  const {
    insertedMusic, createMusic, createMusicInsertError, setCreateMusicError,
  } = hooks.useMusicCreate();

  useEffect(() => {
    if (insertedMusic) {
      navigate(`/${insertedMusic?.categories.name}/${insertedMusic?.authors.name}/${insertedMusic?.name}`);
    }
  }, [insertedMusic]);

  return (
    <AddMusicWrapper.Container>
      <Components.BreadCrumbs currentPage="Adicionar música" />
      <Components.PageTitle title="Adiciona nova letra de música" />
      <form onSubmit={(e) => {
        e.preventDefault();
        createMusic(music, currentUser!.token);
      }}
      >
        <TextField
          id="name"
          name="name"
          label="Nome da música"
          variant="standard"
          margin="normal"
          required
          value={music.name}
          onChange={(e) => setMusic({ ...music, [e.target.name]: e.target.value })}
        />
        <TextField
          id="author"
          name="author"
          label="Nome do artista da música"
          variant="standard"
          margin="normal"
          required
          value={music.author}
          onChange={(e) => setMusic({ ...music, [e.target.name]: e.target.value })}
        />
        <TextField
          id="musicVideoUrl"
          name="musicVideoUrl"
          label="Vídeo da música"
          type="url"
          variant="standard"
          margin="normal"
          value={music.musicVideoUrl}
          onChange={(e) => setMusic({ ...music, [e.target.name]: e.target.value })}
        />
        <TextField
          id="musicHelpVideoUrl"
          name="musicHelpVideoUrl"
          label="Vídeo aula da música"
          variant="standard"
          margin="normal"
          type="url"
          value={music.musicHelpVideoUrl}
          onChange={(e) => setMusic({ ...music, [e.target.name]: e.target.value })}
        />
        <TextField
          id="sheetMusicFile"
          name="sheetMusicFile"
          type="file"
          variant="standard"
          margin="normal"
          inputProps={{ accept: 'image/png, image/jpeg, application/pdf' }}
          onChange={(e: any) => setMusic({ ...music, [e.target.name]: e.target.files[0] })}
        />
        <FormControl margin="normal" required fullWidth>
          <InputLabel id="categoryId">Categoria/Gênero</InputLabel>
          <Select
            labelId="categoryId"
            id="categoryId"
            name="categoryId"
            value={music.categoryId}
            label="Categoria/Gênero"
            onChange={(e) => setMusic({ ...music, [e.target.name]: e.target.value })}
          >
            {categories?.map((category) => (
              <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="outlined" style={{ color: '#15c7cf', borderColor: '#15c7cf' }}>Inserir Música</Button>
      </form>
      <Components.SnackbarAlert
        openAlert={!!createMusicInsertError}
        error={createMusicInsertError}
        closeAlert={() => setCreateMusicError(null)}
      />
    </AddMusicWrapper.Container>
  );
}
