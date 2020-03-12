export const MESSAGE_ERROR_REQUEST = 'Please try again.';
export const MESSAGE_ERROR_REQUEST_SNACKBAR = 'Something wrong.';

export const getSnackbarMessage = message => {
  switch (message) {
    case MESSAGE_ERROR_REQUEST:
      return MESSAGE_ERROR_REQUEST_SNACKBAR;
    default:
      return '';
  }
};
