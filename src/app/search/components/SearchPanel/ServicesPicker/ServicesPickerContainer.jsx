import React, { memo } from 'react';

import { SearchPanelContext } from '../SearchPanelContext';

import ServicesPicker from './ServicesPicker';

import { useAutomplete } from '../../../../common/hooks/useAutocomplete';

const ServicesPickerContainer = () => {
  const { value, handleSelect } = useAutomplete(SearchPanelContext);

  return <ServicesPicker selectService={value} handleServiceChange={handleSelect} />;
};

export default memo(ServicesPickerContainer);
