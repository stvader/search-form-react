import { handleActions } from 'redux-actions';

import * as actions from './search.actions';
import { initState } from './search.initState';

const reducer = handleActions(
  new Map([
    [
      actions.setRequestData,
      (state, action) => ({
        ...state,
        profReq: action.payload,
      }),
    ],
    [
      actions.fetchProf.request,
      state => ({
        ...state,
        loading: true,
      }),
    ],
    [
      actions.fetchProf.success,
      (state, action) => ({
        ...state,
        loading: false,
        profCollection: [...state.profCollection, ...action.payload],
      }),
    ],
    [
      actions.fetchProf.error,
      (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }),
    ],
  ]),
  initState,
);

export default reducer;
