import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import images from '../../assets/images';
import hooks from '../../hooks';
import MusicBarWrapper from './MusicBarStyle';

interface IMusicBar {
  authorImg: string | undefined
  translatedLyric: string[] | undefined
  contributors: number | undefined
  snippetsLength: number | undefined
  editMusic: () => void
  compareTranslate: () => void
}

export default function MusicBar({
  authorImg, translatedLyric, contributors, snippetsLength = 0, editMusic, compareTranslate,
}: IMusicBar) {
  const { currentUser } = hooks.useUser();

  return (
    <MusicBarWrapper.Container>
      <img src={authorImg} alt="author" />
      <div className="translate">
        {currentUser?.teacher && snippetsLength === 0 ? (
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
        <div className="contributors">
          <GroupIcon cursor="pointer" />
          <span>{contributors}</span>
        </div>
      </div>
    </MusicBarWrapper.Container>
  );
}
