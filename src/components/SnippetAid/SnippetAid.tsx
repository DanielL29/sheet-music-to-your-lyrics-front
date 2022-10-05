import { Button, TextField } from '@mui/material';
import hooks from '../../hooks';
import { IMusic } from '../../types/musicType';

interface ISnippetAid {
  musicData: IMusic | null
  addMusicSnippet: string
  setAddMusicSnippet: (value: string) => void
}

export default function SnippetAid(
  { musicData, addMusicSnippet, setAddMusicSnippet }: ISnippetAid,
) {
  const {
    musicSnippetType, snippetAid, setSnippetAid, setMusicSnippetType, newSnippet,
  } = hooks.useSnippet(musicData);

  return (
    <>
      <h1>Adicionando trecho de auxílio para:</h1>
      <p>{addMusicSnippet}</p>
      <div>
        <h1>
          {
            musicSnippetType === ''
              ? 'inserir comentário ou video ?'
              : musicSnippetType === 'comment'
                ? 'Digite o comentário de auxílio: '
                : 'Faça o upload do vídeo de até 2MB: '
          }
        </h1>
        <div>
          <Button
            variant="outlined"
            onClick={() => { setMusicSnippetType('comment'); setSnippetAid(''); }}
            style={{
              width: '110px', color: '#d5d5d5', marginRight: '5px', borderColor: '#d5d5d5',
            }}
          >
            Comentario
          </Button>
          <Button
            variant="outlined"
            onClick={() => { setMusicSnippetType('video'); setSnippetAid(''); }}
            style={{
              width: '50px', color: '#d5d5d5', borderColor: '#d5d5d5',
            }}
          >
            Video
          </Button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault(); newSnippet(addMusicSnippet); setAddMusicSnippet('');
          }}
          encType="multipart/form-data"
        >
          {musicSnippetType === '' ? (
            ''
          ) : (
            musicSnippetType === 'comment' ? (
              <TextField
                id="comment"
                label="Comentário de auxílio"
                multiline
                rows={4}
                variant="standard"
                style={{ color: '#15c7cf' }}
                value={snippetAid}
                onChange={(e) => setSnippetAid(e.target.value)}
                required
              />
            ) : (
              <TextField
                id="video"
                type="file"
                variant="standard"
                inputProps={{ accept: 'video/mp4' }}
                onChange={(e: any) => setSnippetAid(e.target.files[0])}
                required
              />
            )
          )}
          {musicSnippetType !== '' ? (
            <Button
              variant="outlined"
              type="submit"
              style={{
                width: '220px', color: '#d5d5d5', borderColor: '#d5d5d5', marginTop: '15px',
              }}
            >
              Criar Trecho de Auxílio
            </Button>
          ) : ''}
        </form>
      </div>
    </>
  );
}
