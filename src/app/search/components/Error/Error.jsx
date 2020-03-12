import React from 'react';
import { string, func } from 'prop-types';
import { Typography, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import s from './error.module.scss';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const ErrorView = ({ message, messageSnackbar, openSnackbar, handleCloseSnackbar }) => (
  <div className={s.wrapper}>
    <Typography variant="overline" display="block" gutterBottom>
      {message}
    </Typography>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
    >
      <Alert onClose={handleCloseSnackbar} severity="error">
        {messageSnackbar}
      </Alert>
    </Snackbar>
  </div>
);

ErrorView.propTypes = {
  message: string,
  messageSnackbar: string,
  openSnackbar: func,
  handleCloseSnackbar: func,
};

export default ErrorView;
