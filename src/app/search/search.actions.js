import { createAction } from 'redux-actions';

export const SET_REQUEST_DATA = 'SET_REQUEST_DATA';

export const FETCH_PROF_REQUEST = 'FETCH_PROF_REQUEST';
export const FETCH_PROF_SUCCESS = 'FETCH_PROF_SUCCESS';
export const FETCH_PROF_ERROR = 'FETCH_PROF_ERROR';

export const setRequestData = createAction(SET_REQUEST_DATA);

export const fetchProf = {
  request: createAction(FETCH_PROF_REQUEST),
  success: createAction(FETCH_PROF_SUCCESS),
  error: createAction(FETCH_PROF_ERROR),
};
