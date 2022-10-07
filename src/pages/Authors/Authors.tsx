import Components from '../../components';
import AuthorsWrapper from './AuthorsStyle';

export default function Authors() {
  return (
    <AuthorsWrapper.Container>
      <Components.BreadCrumbs currentPage="Todos os Artistas" />
      <Components.PageTitle title="Todos os Artistas" />
      <div>
        <div className="author">
          asda
        </div>
      </div>
    </AuthorsWrapper.Container>
  );
}
