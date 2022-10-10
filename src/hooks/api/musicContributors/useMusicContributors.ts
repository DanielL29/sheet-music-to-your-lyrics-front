import musicContributorService from '../../../services/musicContributorService';
import useAsync from '../../useAsync';
import useUser from '../../useUser';

export default function useMusicContributors(musicName: string) {
  const { currentUser } = useUser();

  const {
    data, loading, error, setError, act,
  } = useAsync<{ contributors: number }>(
    () => musicContributorService.getContributorsByMusic(musicName, currentUser!.token),
  );

  return {
    contributors: data,
    createMusicContributorError: error,
    createMusicContributorLoading: loading,
    setMusicContributorError: setError,
    getMusicContributor: act,
  };
}
