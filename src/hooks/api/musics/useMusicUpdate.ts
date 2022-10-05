import musicService from '../../../services/musicService';
import useAsync from '../../useAsync';

export default function useMusicUpdate() {
  const {
    loading, error, setError, act,
  } = useAsync(musicService.update, false);

  return {
    createMusicUpdateLoading: loading,
    createMusicUpdateError: error,
    setMusicUpdateError: setError,
    updateMusic: act,
  };
}
