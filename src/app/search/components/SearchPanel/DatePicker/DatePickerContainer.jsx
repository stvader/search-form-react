import React, { memo, useContext } from 'react';

import { SearchPanelContext } from '../SearchPanelContext';
import DatePicker from './DatePicker';

const DatePickerContainer = () => {
  const { selectDate, handleDateChange } = useContext(SearchPanelContext);

  return <DatePicker selectDate={selectDate} handleDateChange={handleDateChange} />;
};

export default memo(DatePickerContainer);
