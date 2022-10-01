import { Snackbar, Alert } from '@mui/material';

interface ISnackbarAlert {
  error: any
  openAlert: any
  closeAlert: () => void
}

export default function SnackbarAlert({ error, openAlert, closeAlert }: ISnackbarAlert) {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      open={openAlert}
      autoHideDuration={10000}
      onClose={() => (closeAlert())}
    >
      <Alert
        severity="error"
        sx={{ width: '100%' }}
        onClose={() => (closeAlert())}
      >
        {error}
      </Alert>
    </Snackbar>
  );
}
