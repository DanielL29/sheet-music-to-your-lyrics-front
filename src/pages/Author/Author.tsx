import { useNavigate, useParams } from 'react-router-dom';
import hooks from '../../hooks';
import AuthorWrapper from './AuthorStyle';

export default function Author() {
  const { author, categoryName } = useParams();
  const { musicByAuthor } = hooks.useMusicAuthor(author!);
  const navigate = useNavigate();

  return (
    <AuthorWrapper.Container>
      <h1>{`Página do artista: ${author}`}</h1>
      <div className="author">
        <img src={musicByAuthor?.author.imageUrl} alt="author" />
        <h2>{musicByAuthor?.author.name}</h2>
      </div>
      <div>
        <h1>Músicas</h1>
        {musicByAuthor?.musics.map((music) => (
          <h3 onClick={() => navigate(`/${categoryName}/${author}/${music.name}`)}>{music.name}</h3>
        ))}
      </div>
    </AuthorWrapper.Container>
  );
}
