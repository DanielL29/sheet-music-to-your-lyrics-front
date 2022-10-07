import { useNavigate, useParams } from 'react-router-dom';
import Components from '../../components';
import hooks from '../../hooks';
import CategoryWrapper from './CategoryStyle';

export default function Category() {
  const { category } = useParams();
  const { musicByCategory } = hooks.useMusicCategory(category!);
  const { authorsByCategory } = hooks.useAuthorCategory(category!);
  const navigate = useNavigate();

  return (
    <CategoryWrapper.Container>
      <Components.BreadCrumbs currentPage={category} />
      <div className="authors">
        <Components.PageTitle title="Artistas" />
        <div>
          {authorsByCategory?.map((author) => (
            <div className="card" onClick={() => navigate(`/${category}/${author.name}`)}>
              <img src={author.imageUrl} alt="author" />
              <h2>{author.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="musics">
        <Components.PageTitle title={`Categoria/Gênero ${category}`} />
        {musicByCategory?.map((music) => (
          <div key={music.id}>
            <h2 onClick={() => navigate(`/${category}/${music.authors.name}/${music.name}`)}>{music.name}</h2>
            <h3>{music.authors.name}</h3>
          </div>
        ))}
      </div>
    </CategoryWrapper.Container>
  );
}
