import { useNavigate } from 'react-router-dom';
import Components from '../../components';
import hooks from '../../hooks';
import MusicsWrapper from './MusicsStyle';

export default function Musics() {
  const { musics } = hooks.useMusics();
  const navigate = useNavigate();

  return (
    <MusicsWrapper.Container>
      <Components.BreadCrumbs currentPage="Todas as músicas" />
      <Components.PageTitle title="Todas as músicas" />
      <div className="musics">
        {musics?.map((music) => (
          <div>
            <h2 onClick={
              () => navigate(`/${music.categories.name}/${music.authors.name}/${music.name}`)
            }
            >
              {music.name}
            </h2>
            <h3>{`Categoria/Gênero: ${music.categories.name}`}</h3>
            <h4>{`Artista: ${music.authors.name}`}</h4>
          </div>
        ))}
      </div>
    </MusicsWrapper.Container>
  );
}
