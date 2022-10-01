import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';

interface IAuthInput {
  text: string
  label: string
  value: string
  disabled: boolean
  type?: string
  showPassword?: boolean
  changeInput: (e: any) => void
  toggleVisibility?: () => void
}

export default function AuthInput({
  text, value, label, type, showPassword, toggleVisibility, disabled, changeInput,
}: IAuthInput) {
  return (
    <TextField
      id={text}
      label={label}
      variant="standard"
      value={value}
      disabled={disabled}
      type={type ? type === 'email' ? 'email' : showPassword ? 'text' : 'password' : 'text'}
      name={text}
      onChange={changeInput}
      margin="normal"
      required
      fullWidth
      InputProps={{
        endAdornment: type === 'password' ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleVisibility}
              onMouseDown={(e) => e.preventDefault()}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : '',
      }}
    />
  );
}
