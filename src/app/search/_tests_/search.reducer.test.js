import reducer from '../search.reducer';
import * as actions from '../search.actions';
import { initState } from '../search.initState';
import { moskRequest, mockProfCollection } from '../search.mocks';

const actionRequest = {
  type: actions.FETCH_PROF_REQUEST,
};

describe('Search reducer', () => {
  it('should init state be correct', () => {
    const store = reducer(undefined, { type: undefined });

    expect(store).toEqual(initState);
  });

  it('should be correct for set request data', () => {
    const action = {
      type: actions.SET_REQUEST_DATA,
      payload: moskRequest,
    };
    const store = reducer(initState, action);

    expect(store.profReq).toEqual(moskRequest);
  });

  it('should be correct for success request', () => {
    const actionSuccess = {
      type: actions.FETCH_PROF_SUCCESS,
      payload: mockProfCollection,
    };

    let store = reducer(initState, actionRequest);

    expect(store.loading).toEqual(true);
    expect(store.error).toEqual(false);

    store = reducer(store, actionSuccess);

    expect(store.loading).toEqual(false);
    expect(store.error).toEqual(false);
    expect(store.profCollection).toEqual(mockProfCollection);
  });

  it('should be correct for error request', () => {
    const error = new Error('some error');
    const actionError = {
      type: actions.FETCH_PROF_ERROR,
      payload: error,
    };

    let store = reducer(initState, actionRequest);

    expect(store.loading).toEqual(true);
    expect(store.error).toEqual(false);

    store = reducer(store, actionError);

    expect(store.loading).toEqual(false);
    expect(store.error).toEqual(error);
  });
});
