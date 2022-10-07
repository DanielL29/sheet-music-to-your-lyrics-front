import useAsync from './useAsync';
import useAuth from './useAuth';
import useSignIn from './api/users/useSignIn';
import useSignUp from './api/users/useSignUp';
import useUser from './useUser';
import useTeacher from './useTeacher';
import useMusic from './api/musics/useMusic';
import useMusicUpdate from './api/musics/useMusicUpdate';
import useMusicSnippets from './api/musicSnippets/useMusicSnippets';
import useMusicSnippetCreate from './api/musicSnippets/useMusicSnippetCreate';
import useMusicPage from './useMusicPage';
import useSnippet from './useSnippet';
import useCategories from './api/categories/useCategories';
import useMusicCategory from './api/musics/useMusicCategory';
import useAuthorCategory from './api/authors/useAuthorCategory';
import useMusicAuthor from './api/musics/useMusicAuthor';
import useMusics from './api/musics/useMusics';

const hooks = {
  useAsync,
  useAuth,
  useSignIn,
  useSignUp,
  useUser,
  useTeacher,
  useMusic,
  useMusicUpdate,
  useMusicSnippets,
  useMusicSnippetCreate,
  useMusicPage,
  useSnippet,
  useCategories,
  useMusicCategory,
  useAuthorCategory,
  useMusicAuthor,
  useMusics,
};

export default hooks;
