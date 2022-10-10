import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
import images from '../../assets/images';
import hooks from '../../hooks';
import MusicBarWrapper from './MusicBarStyle';

interface IMusicBar {
  authorImg: string | undefined
  translatedLyric: string[] | undefined
  editMusic: () => void
  compareTranslate: () => void
}

export default function MusicBar({
  authorImg, translatedLyric, editMusic, compareTranslate,
}: IMusicBar) {
  const { currentUser } = hooks.useUser();

  return (
    <MusicBarWrapper.Container>
      <img src={authorImg} alt="author" />
      <div>
        {currentUser?.teacher ? (
          <Tooltip title="Adicionar/Editar acordes da música" arrow>
            <div className="edit" onClick={editMusic}>
              <EditIcon cursor="pointer" />
            </div>
          </Tooltip>
        ) : ''}
        {translatedLyric ? (
          <Tooltip title="Comparar Tradução" arrow>
            <img src={images.brazilImg} alt="translate" onClick={compareTranslate} />
          </Tooltip>
        ) : ''}
      </div>
    </MusicBarWrapper.Container>
  );
}
