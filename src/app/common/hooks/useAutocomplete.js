import { useContext, useState } from 'react';

export const useAutomplete = context => {
  const { selectService, handleServiceChange: handleSelect } = useContext(context);
  const [value] = useState(selectService);
  // for Material UI autoComplete,
  // without that lib thinks that component is uncontrolled

  return { value, handleSelect };
};
