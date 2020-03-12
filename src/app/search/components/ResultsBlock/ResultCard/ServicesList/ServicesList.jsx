import React from 'react';
import { arrayOf, string } from 'prop-types';
import uuid from 'uuid/v4';
import { Select, MenuItem } from '@material-ui/core';

import s from '../result-card.module.scss';

const ServicesList = ({ allServicedList }) => (
  <Select className={s.all_services_select_element} labelId="prof-card-all-services-select-label">
    {allServicedList.map(service => (
      <MenuItem key={uuid()}>{service}</MenuItem>
    ))}
  </Select>
);

ServicesList.propTypes = {
  allServicedList: arrayOf(string),
};

export default ServicesList;
