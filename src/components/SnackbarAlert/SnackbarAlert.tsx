import { Snackbar, Alert } from '@mui/material';

interface ISnackbarAlert {
  error: any
  openAlert: any
  success?: boolean
  closeAlert: () => void
}

export default function SnackbarAlert({
  error, openAlert, success, closeAlert,
}: ISnackbarAlert) {
  return (
    <Snackbar
      anchorOrigin={{ horizontal: success ? 'center' : 'left', vertical: 'top' }}
      open={openAlert}
      autoHideDuration={success ? 60000 : 10000}
      onClose={() => (closeAlert())}
    >
      <Alert
        severity={success ? 'success' : 'error'}
        sx={{ width: '100%' }}
        onClose={() => (closeAlert())}
      >
        {error}
      </Alert>
    </Snackbar>
  );
}
