import React from 'react';

import { Provider } from 'react-redux';

import store from '../../search.store';

import Router from '../Router';

const Search = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default Search;
