import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Components from '../../components';
import hooks from '../../hooks';
import MusicsWrapper from './MusicsStyle';

export default function Musics() {
  const { state: text } = useLocation();
  const navigate = useNavigate();

  const { currentUser } = hooks.useUser();

  const { musics } = hooks.useMusics();
  const { search, getSearch } = hooks.useSearch(text);

  useEffect(() => {
    getSearch(text, currentUser!.token);
  }, [text]);

  return (
    <MusicsWrapper.Container>
      <Components.BreadCrumbs currentPage={text ? `Todas as músicas - Pesquisa: ${text}` : 'Todas as músicas'} />
      <Components.PageTitle title={text ? `Pesquisa: ${text}` : 'Todas as músicas'} />
      <div className="musics">
        {text ? (
          search?.map((music) => (
            <div key={music.id}>
              <h2 onClick={
                () => navigate(`/${music.categories.name}/${music.authors.name}/${music.name}`)
              }
              >
                {music.name}
              </h2>
              <h3>{`Categoria/Gênero: ${music.categories.name}`}</h3>
              <h4>{`Artista: ${music.authors.name}`}</h4>
            </div>
          ))
        ) : (
          musics?.map((music) => (
            <div key={music.id}>
              <h2 onClick={
                () => navigate(`/${music.categories.name}/${music.authors.name}/${music.name}`)
              }
              >
                {music.name}
              </h2>
              <h3>{`Categoria/Gênero: ${music.categories.name}`}</h3>
              <h4>{`Artista: ${music.authors.name}`}</h4>
            </div>
          ))
        )}
      </div>
    </MusicsWrapper.Container>
  );
}
