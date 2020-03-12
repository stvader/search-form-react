import { fetchProf } from '../search.actions';

import { serviceProf, serviceAvailabilities } from '../search.api';

import { transformDataForResultsView } from '../transformers/transformDataForResultsView';

export const fetchProfData = request => async dispatch => {
  dispatch(fetchProf.request());

  try {
    const response = await serviceProf(request);
    const responseWithAvailabilities = await serviceAvailabilities(response);
    const dataTransformedForUI = transformDataForResultsView(responseWithAvailabilities);
    dispatch(fetchProf.success(dataTransformedForUI));
  } catch (error) {
    dispatch(fetchProf.error(error));
  }
};
