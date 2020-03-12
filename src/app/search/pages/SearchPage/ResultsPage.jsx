import React from 'react';

import SearchPanel from '../../components/SearchPanel';

import s from './search-page.module.scss';

const SearchPage = () => (
  <div className={s.wrapper}>
    <SearchPanel />
  </div>
);

export default SearchPage;
