import React, { memo, useMemo, useState, useCallback } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { instanceOf, object, string, func } from 'prop-types';

import { SearchPanelContextProvider } from './SearchPanelContext';
import SearchPanel from './SearchPanel';

import { selectReqQuery, selectReqDate, selectReqAddress } from '../../search.selectors';

import { setRequestData } from '../../search.actions';

import { fetchProfData } from '../../thunks/fetchData';

import { onSubmitSearchService } from '../../services/onSubmitSearchService';

import { DATE_DEFAULT } from '../../search.dateTimeConstants';

const MESSAGE_SNACKBAR_PARSE = 'Please fill all fields';

const SearchPanelContainer = ({
  history,
  location,
  query,
  savedDate,
  savedAddress,
  setRequestData,
  fetchProfData,
}) => {
  const [selectService, setSelectService] = useState(query);
  const [selectLocation, setSelectLocation] = useState(savedAddress);
  const [selectDate, setSelectDate] = useState(savedDate || DATE_DEFAULT);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const contextValue = useMemo(
    () => ({
      selectService,
      handleServiceChange: setSelectService,
      selectLocation,
      handleLocationChange: setSelectLocation,
      selectDate,
      handleDateChange: setSelectDate,
    }),
    [selectService, setSelectService, selectLocation, setSelectLocation, selectDate, setSelectDate],
  );

  const handleCloseSnackbar = useCallback((event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  }, []);

  const onFormSubmit = useCallback(
    e => {
      e.preventDefault();

      onSubmitSearchService({
        history,
        location,
        selectService,
        selectLocation,
        setSelectLocation,
        selectDate,
        setRequestData,
        setOpenSnackbar,
        fetchProfData,
      });
    },
    [
      history,
      location,
      selectService,
      selectLocation,
      setSelectLocation,
      selectDate,
      setRequestData,
      setOpenSnackbar,
      fetchProfData,
    ],
  );

  return (
    <SearchPanelContextProvider value={contextValue}>
      <SearchPanel
        onFormSubmit={onFormSubmit}
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        messageSnackbar={MESSAGE_SNACKBAR_PARSE}
      />
    </SearchPanelContextProvider>
  );
};

const mapStateToProps = state => ({
  query: selectReqQuery(state),
  savedDate: selectReqDate(state),
  savedAddress: selectReqAddress(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setRequestData,
      fetchProfData,
    },
    dispatch,
  );

SearchPanelContainer.propTypes = {
  history: object,
  location: object,
  query: string,
  savedDate: instanceOf(Date),
  savedAddress: object,
  setRequestData: func,
  fetchProfData: func,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(memo(SearchPanelContainer));
