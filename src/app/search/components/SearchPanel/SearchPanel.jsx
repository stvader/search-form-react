import React from 'react';
import { func, string } from 'prop-types';
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import ServicesPicker from './ServicesPicker';
import LocationInput from './LocationInput';
import DatePicker from './DatePicker';

import s from './search-panel.module.scss';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const SearchPanel = ({ onFormSubmit, openSnackbar, handleCloseSnackbar, messageSnackbar }) => (
  <div className={s.wrapper}>
    <form onSubmit={onFormSubmit}>
      <div className={s.form_elem_wrapper}>
        <div className={s.element_wrapper}>
          <ServicesPicker />
        </div>
        <div className={s.element_wrapper}>
          <LocationInput />
        </div>
        <div className={s.element_wrapper}>
          <DatePicker />
        </div>

        <div className={s.element_wrapper}>
          <Button type="submit" className={s.btn} variant="contained" color="primary" size="large">
            Search
          </Button>
        </div>
      </div>
    </form>
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

SearchPanel.propTypes = {
  onFormSubmit: func,
  openSnackbar: func,
  handleCloseSnackbar: func,
  messageSnackbar: string,
};

export default SearchPanel;
