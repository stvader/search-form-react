import React, { useState, useMemo, useCallback } from 'react';
import { string } from 'prop-types';

import Error from './Error';

import { getSnackbarMessage } from '../../utils/getSnackbarMessage';

const ErrorContainer = ({ message }) => {
  const [openSnackbar, setOpenSnackbar] = useState(true);

  const messageSnackbar = useMemo(() => getSnackbarMessage(message), [message]);

  const handleCloseSnackbar = useCallback((event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  }, []);

  return (
    <Error
      message={message}
      messageSnackbar={messageSnackbar}
      openSnackbar={openSnackbar}
      handleCloseSnackbar={handleCloseSnackbar}
    />
  );
};

ErrorContainer.propTypes = {
  message: string,
};

export default ErrorContainer;
