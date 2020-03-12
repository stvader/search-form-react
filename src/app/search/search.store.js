import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './search.reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
