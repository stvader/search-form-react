import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import SearchPage from '../../pages/SearchPage/ResultsPage';
import ResultsPage from '../../pages/ResultsPage/ResultsPage';

import { BASE_PATH, SEARCH_PATH, RESULT_PATH } from '../../search.endpoints';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route path={BASE_PATH} exact>
        <Redirect to={SEARCH_PATH} />
      </Route>
      <Route path={SEARCH_PATH} exact>
        <SearchPage />
      </Route>
      <Route path={RESULT_PATH} exact>
        <ResultsPage />
      </Route>
    </Switch>
  </Router>
);

export default RouterComponent;
