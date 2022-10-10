import { Button, TextField } from '@mui/material';
import hooks from '../../hooks';
import { IMusicSnippet } from '../../types/musicSnippetType';
import { IMusic } from '../../types/musicType';

interface ISnippetAid {
  musicData: IMusic | null
  musicSnippet: any
  update?: boolean
  setMusicSnippet: any
}

export default function SnippetAid(
  {
    musicData, musicSnippet, update, setMusicSnippet,
  }: ISnippetAid,
) {
  const {
    musicSnippetType, snippetAid, setSnippetAid, setMusicSnippetType, newSnippet, updateSnippet,
  } = hooks.useSnippet(musicData);

  return (
    <>
      <h1>{update ? 'Atualizando trecho de auxílio para:' : 'Adicionando trecho de auxílio para:'}</h1>
      <p>{update ? musicSnippet.musicSnippet : musicSnippet}</p>
      <div>
        <h1>
          {
            musicSnippetType === ''
              ? `${update ? 'atualizar como' : 'inserir'} comentário ou video ?`
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
            e.preventDefault();
            if (update) {
              updateSnippet(musicSnippet.id, snippetAid);
            } else {
              newSnippet(musicSnippet);
            }
            setMusicSnippet('');
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
              {update ? 'Atualizar Trecho de Auxílio' : 'Criar Trecho de Auxílio'}
            </Button>
          ) : ''}
        </form>
      </div>
    </>
  );
}
