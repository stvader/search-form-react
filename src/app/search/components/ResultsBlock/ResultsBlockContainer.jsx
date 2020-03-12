import React from 'react';
import { connect } from 'react-redux';
import { bool, arrayOf, exact, string, shape, instanceOf } from 'prop-types';
import { Typography } from '@material-ui/core';

import ResultsBlock from './ResultsBlock';
import Spinner from '../../../common/components/Spinner';
import Error from '../Error';

import { selectLoading, selectError, selectProfCollection } from '../../search.selectors';

import { MESSAGE_ERROR_REQUEST } from '../../utils/getSnackbarMessage';

const ResultsBlockContainer = ({ loading, error, profCollection }) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error message={MESSAGE_ERROR_REQUEST} />;
  }

  if (!profCollection || !profCollection.length) {
    return (
      <Typography variant="overline" display="block" gutterBottom>
        Please fill search form.
      </Typography>
    );
  }

  return <ResultsBlock profList={profCollection} />;
};

ResultsBlockContainer.propTypes = {
  loading: bool,
  error: bool,
  profCollection: arrayOf(
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

const mapStateToProps = state => ({
  loading: selectLoading(state),
  error: selectError(state),
  profCollection: selectProfCollection(state),
});

export default connect(mapStateToProps)(ResultsBlockContainer);
