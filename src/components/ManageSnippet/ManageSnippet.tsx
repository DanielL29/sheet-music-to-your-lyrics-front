import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IMusicSnippet } from '../../types/musicSnippetType';
import hooks from '../../hooks';

interface IManageSnippet {
  snippet: IMusicSnippet
  setSnippet: any
  setUpdateCurrentSnippet: any
  callMusic: any
}

export default function ManageSnippet({
  snippet, setSnippet, setUpdateCurrentSnippet, callMusic,
}: IManageSnippet) {
  const { currentUser } = hooks.useUser();
  const { removeMusicSnippet } = hooks.useMusicSnippetRemove();

  async function removeSnippet() {
    if (confirm('Deseja deletar esse trecho de auxílio?')) {
      await removeMusicSnippet(snippet.id, currentUser!.token);

      callMusic();
      setSnippet(null);
    }
  }

  return (
    <div>
      <EditIcon
        cursor="pointer"
        onClick={() => {
          setSnippet(null);
          setUpdateCurrentSnippet(snippet);
        }}
      />
      <DeleteIcon
        cursor="pointer"
        onClick={() => removeSnippet()}
      />
    </div>
  );
}
