import React from 'react';

import SearchPanel from '../../components/SearchPanel';
import ResultsBlock from '../../components/ResultsBlock';

import s from './results-page.module.scss';

const ResultsPage = () => (
  <div className={s.wrapper}>
    <SearchPanel />
    <ResultsBlock />
  </div>
);

export default ResultsPage;
