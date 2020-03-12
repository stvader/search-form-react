import React from 'react';
import { arrayOf, exact, string, shape, instanceOf } from 'prop-types';
import uuid from 'uuid/v4';

import ResultCard from './ResultCard';

import s from './results-block.module.scss';

const ResultsBlock = ({ profList }) => (
  <div className={s.wrapper}>
    {profList.map(prof => (
      <ResultCard key={uuid()} data={prof} />
    ))}
  </div>
);

ResultsBlock.propTypes = {
  profList: arrayOf(
    exact({
      fullName: string,
      imageLink: string,
      businessName: string,
      businessAddress: string,
      bookingUrl: string,
      matchedServiceName: string,
      matchedServicePrice: string,
      allServicedList: arrayOf(string),
      availabilities: shape({
        user_guid: string,
        times: arrayOf(instanceOf(Date)),
      }),
    }),
  ),
};

export default ResultsBlock;
