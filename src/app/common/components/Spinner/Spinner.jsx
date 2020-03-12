import React from 'react';
import { CircularProgress } from '@material-ui/core';

import s from './spinner.module.scss';

const Spinner = () => (
  <div className={s.wrapper}>
    <CircularProgress />
  </div>
);

export default Spinner;
