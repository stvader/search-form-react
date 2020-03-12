import moment from 'moment';

import { parseDataForRequest } from '../utils/parseDataForRequest';
import { getCurrentPlace } from '../utils/getCurrentPlace';
import { getLatLng } from '../utils/geoCoding';

import { DATE_FORMAT_REQUEST } from '../search.dateTimeConstants';
import { SEARCH_PATH, RESULT_PATH } from '../search.endpoints';

export const onSubmitSearchService = async ({
  history,
  location,
  selectService,
  selectLocation,
  setSelectLocation,
  selectDate,
  setRequestData,
  setOpenSnackbar,
  fetchProfData,
}) => {
  let currentAddress = null;

  if (!selectLocation) {
    const currentAddressGeocoder = await getCurrentPlace();
    currentAddress = currentAddressGeocoder[0];
    setSelectLocation(currentAddress);
  }

  const address = selectLocation || currentAddress;
  const { lat, lng } = await getLatLng(address);

  const searchFormValues = {
    query: selectService,
    latitude: lat,
    longitude: lng,
    address,
    date: moment(selectDate).format(DATE_FORMAT_REQUEST),
  };

  const isParsed = parseDataForRequest(searchFormValues);

  if (!isParsed) {
    setOpenSnackbar(true);
    return;
  }

  setRequestData(searchFormValues);
  fetchProfData(searchFormValues);

  if (location.pathname === SEARCH_PATH) {
    history.push(RESULT_PATH);
  }
};
