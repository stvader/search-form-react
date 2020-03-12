import React from 'react';
import { string, func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { servisesList } from '../../../search.servicesList';

const ServicesPicker = ({ selectService, handleServiceChange }) => (
  <Autocomplete
    options={servisesList}
    groupBy={option => option.category}
    getOptionLabel={option => option.title}
    onChange={(e, val) => handleServiceChange(val && val.title)}
    value={servisesList.find(({ title }) => title === selectService)}
    renderInput={params => (
      <TextField {...params} label="Pleace select service" variant="outlined" fullWidth />
    )}
  />
);

ServicesPicker.propTypes = {
  selectService: string,
  handleServiceChange: func,
};

export default ServicesPicker;
