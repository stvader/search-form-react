import React from 'react';
import { instanceOf, func } from 'prop-types';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { DATE_FORMAT, MIN_DATE } from '../../../search.dateTimeConstants';

import s from '../search-panel.module.scss';

const DatePicker = ({ selectDate, handleDateChange }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      disableToolbar
      format={DATE_FORMAT}
      minDate={MIN_DATE}
      className={s.input}
      variant="inline"
      inputVariant="outlined"
      id="date-picker-inline"
      label="Please select date"
      value={selectDate}
      onChange={handleDateChange}
      autoOk
      KeyboardButtonProps={{ 'aria-label': 'change date' }}
      InputAdornmentProps={{ position: 'start' }}
    />
  </MuiPickersUtilsProvider>
);

DatePicker.propTypes = {
  selectDate: instanceOf(Date),
  handleDateChange: func,
};

export default DatePicker;
