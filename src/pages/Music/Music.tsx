import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Components from '../../components';
import hooks from '../../hooks';
import MusicWrapper from './MusicStyle';

export default function Music() {
  const { musicName, category, author } = useParams();
  const [showSheetMusic, setShowSheetMusic] = useState<string | undefined>('');
  const [showTranslate, setShowTranslate] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(true);
  const navigate = useNavigate();

  const { currentUser } = hooks.useUser();

  const { musicData, getMusic } = hooks.useMusic(musicName!);
  const { musicSnippetData, getMusicSnippets } = hooks.useMusicSnippets(musicName!);
  const { contributors, getMusicContributor } = hooks.useMusicContributors(musicName!);

  const {
    addChords, updateField, video, resetToUpdateLyric, setUpdateField, setVideo, setAddChords,
  } = hooks.useMusicPage(musicData);

  const {
    addMusicSnippet, updateCurrentSnippet, snippet, setSnippet,
    selectMusicSnippet, setAddMusicSnippet, setUpdateCurrentSnippet,
  } = hooks.useSnippet(musicData);

  function callMusic() {
    getMusic(musicName, currentUser!.token);
    getMusicSnippets(musicName, currentUser!.token);
    getMusicContributor(musicName, currentUser!.token);
  }

  return (
    <MusicWrapper.Container>
      <Components.BreadCrumbs currentPage={musicName} pageOne={category} pageTwo={author} />
      <div className="music">
        <Components.MusicBar
          authorImg={musicData?.authors.imageUrl}
          translatedLyric={musicData?.translatedLyric}
          editMusic={() => { resetToUpdateLyric(); setAddMusicSnippet(''); }}
          snippetsLength={musicSnippetData?.length}
          compareTranslate={() => (
            musicData?.translatedLyric ? setShowTranslate(!showTranslate) : setShowTranslate(false)
          )}
          contributors={contributors?.contributors}
        />
        <div className="lyric-area">
          <h1>{musicData?.name}</h1>
          <h2 onClick={() => navigate(`/${category}/${musicData?.authors.name}`)}>
            {musicData?.authors.name}
          </h2>
          <div className="buttons">
            <Components.MusicButton
              name="Video"
              setButton={setVideo}
              state={musicData?.musicVideoUrl}
              setUpdateField={setUpdateField}
            />
            <Components.MusicButton
              name="Video aula"
              setButton={setVideo}
              state={musicData?.musicHelpVideoUrl}
              setUpdateField={setUpdateField}
            />
            <Components.MusicButton
              name="Partitura"
              setButton={setShowSheetMusic}
              state={musicData?.sheetMusicFile}
              imgUrl={showSheetMusic}
              setUpdateField={setUpdateField}
              showImg
            />
          </div>
          <Components.Lyric
            musicData={musicData}
            musicSnippetData={musicSnippetData}
            snippet={snippet}
            setSnippet={setSnippet}
            addChords={addChords!}
            setAddChords={setAddChords}
            selectMusicSnippet={() => selectMusicSnippet()}
            setUpdateCurrentSnippet={setUpdateCurrentSnippet}
            callMusic={callMusic}
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
                height={snippet ? '220' : '320'}
                src={video}
                frameBorder="0"
                style={{ borderRadius: '5px', transition: 'all 300ms ease-in-out' }}
                allowFullScreen
              />
            ) : updateField !== '' ? (
              <MusicWrapper.Snippet>
                <Components.UpdateField
                  musicData={musicData}
                  updateField={updateField}
                  setUpdateField={setUpdateField}
                  setVideo={setVideo}
                  callMusic={callMusic}
                />
              </MusicWrapper.Snippet>
            ) : ''}
            {addMusicSnippet !== '' ? (
              currentUser?.teacher ? (
                <MusicWrapper.Snippet>
                  <Components.SnippetAid
                    musicData={musicData}
                    musicSnippet={addMusicSnippet}
                    setMusicSnippet={setAddMusicSnippet}
                    callMusic={callMusic}
                  />
                </MusicWrapper.Snippet>
              ) : ''
            ) : snippet ? (
              <MusicWrapper.Snippet>
                <div className="contribute">
                  <h1>
                    {'Contribuidor que fez o auxílio: '}
                    <span>{snippet.users.name}</span>
                  </h1>
                  <Components.ManageSnippet
                    snippet={snippet}
                    setSnippet={setSnippet}
                    setUpdateCurrentSnippet={setUpdateCurrentSnippet}
                    callMusic={callMusic}
                  />
                </div>
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
            ) : updateCurrentSnippet ? (
              <MusicWrapper.Snippet>
                <Components.SnippetAid
                  musicData={musicData}
                  musicSnippet={updateCurrentSnippet}
                  update
                  setMusicSnippet={setUpdateCurrentSnippet}
                  callMusic={callMusic}
                />
              </MusicWrapper.Snippet>
            ) : ''}
          </div>
        </div>
      </div>
      {currentUser!.teacher ? (
        <Components.SnackbarAlert
          openAlert={showInfo}
          error="Para inserir um auxílio a música selecione o texto dela!"
          closeAlert={() => setShowInfo(false)}
          success
        />
      ) : ''}
    </MusicWrapper.Container>
  );
}
