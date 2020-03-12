import * as actions from '../search.actions';
import { moskRequest } from '../search.mocks';

describe('Search actions', () => {
  it('should set request be correct', () => {
    const requestAction = actions.setRequestData(moskRequest);

    expect(requestAction).toEqual({
      type: actions.SET_REQUEST_DATA,
      payload: moskRequest,
    });
  });
});
