import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import hooks from '../../hooks';
import { IMusicSnippet } from '../../types/musicSnippetType';
import { IMusic } from '../../types/musicType';

interface IAddChords {
  musicData: IMusic | null
  musicSnippetData: IMusicSnippet[] | null
  snippet: IMusicSnippet | null
  addChords: string
  setUpdateCurrentSnippet: any
  setSnippet: (musicSnippet: IMusicSnippet | null) => void
  selectMusicSnippet: () => void
  setAddChords: (e: any) => void
  callMusic: any
}

export default function Lyric({
  musicData, musicSnippetData, snippet, addChords, callMusic,
  setSnippet, selectMusicSnippet, setAddChords, setUpdateCurrentSnippet,
}: IAddChords) {
  const { currentUser } = hooks.useUser();
  const { updateMusic } = hooks.useMusicUpdate();

  const { musicName } = useParams();

  async function updateMusicLyric() {
    await updateMusic(musicName, { lyric: addChords }, currentUser!.token);

    callMusic();
  }

  return addChords !== '' ? (
    <>
      <TextField
        id="comment"
        label="Comentário de auxílio"
        multiline
        rows={20}
        variant="standard"
        style={{ color: '#15c7cf' }}
        onChange={(e) => setAddChords(e.target.value)}
        value={addChords}
        required
      />
      <Button
        variant="outlined"
        onClick={() => { updateMusicLyric(); setAddChords(''); }}
        style={{
          width: '180px', color: '#15c7cf', borderColor: '#15c7cf', marginTop: '20px',
        }}
      >
        Adicionar acordes
      </Button>
    </>
  ) : (
    <>
      <h3>Lyrics</h3>
      <p onMouseUp={() => selectMusicSnippet()}>
        {musicData?.lyric.map((phrase, i) => {
          const isMusicSnippet = musicSnippetData?.find(
            (snippetData) => snippetData.musicSnippet === phrase,
          );

          if (isMusicSnippet) {
            return (
              <p
                key={i}
                className="snippet"
                onClick={() => {
                  if (snippet?.musicSnippet === isMusicSnippet.musicSnippet) {
                    setSnippet(null);
                    setUpdateCurrentSnippet(null);
                  } else {
                    setSnippet(isMusicSnippet);
                  }
                }}
              >
                {phrase}
              </p>
            );
          }

          return <p key={i}>{phrase}</p>;
        })}
      </p>
    </>
  );
}
