import React from 'react';
import { exact, string, arrayOf, shape, instanceOf } from 'prop-types';

import ResultCard from './ResultCard';

const ResultCardContainer = ({ data }) => <ResultCard data={data} />;

ResultCardContainer.propTypes = {
  data: exact({
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
};

export default ResultCardContainer;
