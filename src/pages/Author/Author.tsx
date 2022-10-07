import { useNavigate, useParams } from 'react-router-dom';
import Components from '../../components';
import hooks from '../../hooks';
import AuthorWrapper from './AuthorStyle';

export default function Author() {
  const { author, category } = useParams();
  const { musicByAuthor } = hooks.useMusicAuthor(author!);
  const navigate = useNavigate();

  return (
    <AuthorWrapper.Container>
      <Components.BreadCrumbs currentPage={author} pageOne={category} />
      <div className="author">
        <img src={musicByAuthor?.author.imageUrl} alt="author" />
        <h2>{musicByAuthor?.author.name}</h2>
      </div>
      <div>
        <h1>Músicas</h1>
        {musicByAuthor?.musics.map((music) => (
          <h3 onClick={() => navigate(`/${category}/${author}/${music.name}`)}>{music.name}</h3>
        ))}
      </div>
    </AuthorWrapper.Container>
  );
}
