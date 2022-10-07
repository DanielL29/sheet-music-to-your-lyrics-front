import { useNavigate } from 'react-router-dom';
import Components from '../../components';
import hooks from '../../hooks';
import AuthorsWrapper from './AuthorsStyle';

export default function Authors() {
  const { authors } = hooks.useAuthors();
  const navigate = useNavigate();

  return (
    <AuthorsWrapper.Container>
      <Components.BreadCrumbs currentPage="Todos os Artistas" />
      <Components.PageTitle title="Todos os Artistas" />
      <div>
        {authors?.map((author) => (
          <div className="author">
            <img src={author.imageUrl} alt="author" />
            <div>
              <h2 onClick={
                () => navigate(`/${author.categories.name}/${author.name}`)
              }
              >
                {author.name}
              </h2>
              <h3>{author.categories.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </AuthorsWrapper.Container>
  );
}
