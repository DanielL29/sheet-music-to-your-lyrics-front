import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import hooks from '../../hooks';

export default function CheckUser() {
  const { teacher, setTeacher } = hooks.useTeacher();

  return (
    <FormControl margin="normal">
      <FormLabel id="check-user">Começar como:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="check-user"
        name="check-user"
        value={teacher}
      >
        <FormControlLabel value={false} control={<Radio />} onClick={() => setTeacher(false)} label="Usuário" />
        <FormControlLabel value control={<Radio />} onClick={() => setTeacher(true)} label="Contribuidor" />
      </RadioGroup>
    </FormControl>
  );
}
