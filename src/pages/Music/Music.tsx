import { useState } from 'react';
import { useParams } from 'react-router-dom';
import hooks from '../../hooks';
import MusicWrapper from './MusicStyle';
import MusicButton from '../../components/MusicButton/MusicButton';
import MusicBar from '../../components/MusicBar/MusicBar';
import Lyric from '../../components/Lyric/Lyric';
import UpdateField from '../../components/UpdateField/UpdateField';
import SnippetAid from '../../components/SnippetAid/SnippetAid';

export default function Music() {
  const { musicName } = useParams();
  const [showSheetMusic, setShowSheetMusic] = useState<string | undefined>('');
  const [showTranslate, setShowTranslate] = useState<boolean>(false);

  const { musicData } = hooks.useMusic(musicName!);
  const { musicSnippetData } = hooks.useMusicSnippets(musicName!);
  const {
    addChords, updateField, video, resetToUpdateLyric, setUpdateField, setVideo, setAddChords,
  } = hooks.useMusicPage(musicData);
  const {
    addMusicSnippet, snippet, setSnippet, selectMusicSnippet, setAddMusicSnippet,
  } = hooks.useSnippet(musicData);

  return (
    <MusicWrapper.Container>
      <MusicBar
        authorImg={musicData?.authors.imageUrl}
        translatedLyric={musicData?.translatedLyric}
        editMusic={() => resetToUpdateLyric()}
        compareTranslate={() => (
          musicData?.translatedLyric ? setShowTranslate(!showTranslate) : setShowTranslate(false)
        )}
      />
      <div className="lyric-area">
        <h1>{musicData?.name}</h1>
        <h2>{musicData?.authors.name}</h2>
        <div className="buttons">
          <MusicButton
            name="vídeo"
            setButton={setVideo}
            state={musicData?.musicVideoUrl}
            updateField={() => setUpdateField('Video')}
          />
          <MusicButton
            name="vídeo aula"
            setButton={setVideo}
            state={musicData?.musicHelpVideoUrl}
            updateField={() => setUpdateField('Video aula')}
          />
          <MusicButton
            name="partitura"
            setButton={setShowSheetMusic}
            state={musicData?.sheetMusicFile}
            imgUrl={showSheetMusic}
            updateField={() => setUpdateField('Partitura')}
            showImg
          />
        </div>
        <Lyric
          musicData={musicData}
          musicSnippetData={musicSnippetData}
          snippet={snippet}
          setSnippet={setSnippet}
          addChords={addChords!}
          setAddChords={setAddChords}
          selectMusicSnippet={() => selectMusicSnippet()}
        />
      </div>
      <div className="snippets-area">
        {showTranslate ? (
          <>
            <h2>{musicData?.translatedLyric[0]}</h2>
            <h3>Tradução</h3>
            <h4>Lyrics</h4>
            <h5>{musicData?.translatedLyric[1]}</h5>
          </>
        ) : ''}
        <div>
          {video !== '' && video !== null && updateField === '' ? (
            <iframe
              title="musicVideoUrl"
              width="550"
              height="315"
              src={video}
              frameBorder="0"
              style={{ borderRadius: '5px' }}
              allowFullScreen
            />
          ) : updateField !== '' ? (
            <MusicWrapper.Snippet>
              <UpdateField
                musicData={musicData}
                updateField={updateField}
                setUpdateField={setUpdateField}
                setVideo={setVideo}
              />
            </MusicWrapper.Snippet>
          ) : ''}
          {addMusicSnippet !== '' ? (
            <MusicWrapper.Snippet>
              <SnippetAid
                musicData={musicData}
                addMusicSnippet={addMusicSnippet!}
                setAddMusicSnippet={setAddMusicSnippet}
              />
            </MusicWrapper.Snippet>
          ) : snippet ? (
            <MusicWrapper.Snippet>
              <h1>
                {'Contribuidor que fez o auxílio: '}
                <span>{snippet.users.name}</span>
              </h1>
              <h1>Trecho da musica:</h1>
              <p>{snippet.musicSnippet}</p>
              {snippet.snippetAid.endsWith('.mp4') ? (
                <>
                  <h1>{'Auxílio: '}</h1>
                  <video width="100%" height="200" controls>
                    <source src={snippet.snippetAid} type="video/mp4" />
                  </video>
                </>
              ) : (
                <h1>
                  {'Auxílio: '}
                  <span>{snippet.snippetAid}</span>
                </h1>
              )}
            </MusicWrapper.Snippet>
          ) : ''}
        </div>
      </div>
    </MusicWrapper.Container>
  );
}
