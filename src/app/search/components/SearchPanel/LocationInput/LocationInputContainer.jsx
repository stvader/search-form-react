import React, { memo, useState, useRef, useMemo, useEffect, useContext, useCallback } from 'react';
import throttle from 'lodash/throttle';

import { SearchPanelContext } from '../SearchPanelContext';
import LocationInput from './LocationInput';

import { geocodeByAddress } from '../../../utils/geoCoding';
import { GOOGLE_MAP_LINK } from '../../../search.endpoints';

const loadScript = (src, position, id) => {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
};

const autocompleteService = { current: null };

const LocationInputContainer = () => {
  const { selectLocation, handleLocationChange } = useContext(SearchPanelContext);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const loaded = useRef(false);

  const defaultLocation = selectLocation && selectLocation.formatted_address;

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(GOOGLE_MAP_LINK, document.querySelector('head'), 'google-maps');
    }

    loaded.current = true;
  }

  const handleChange = useCallback(
    e => {
      setInputValue(e.target.value);
    },
    [setInputValue],
  );

  const handleSelectChange = useCallback(
    async (e, value) => {
      if (!value) {
        handleLocationChange(null);
        return;
      }

      const address = value && value.description;
      const geocode = await geocodeByAddress({ address });
      const geocodeResult = geocode[0];

      handleLocationChange(geocodeResult);
    },
    [handleLocationChange],
  );

  const fetch = useMemo(
    () =>
      throttle((input, callback) => {
        autocompleteService.current.getPlacePredictions(input, callback);
      }, 200),
    [],
  );

  useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }

    fetch({ input: inputValue }, results => {
      if (active) {
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, fetch]);

  return (
    <LocationInput
      options={options}
      handleChange={handleChange}
      handleSelectChange={handleSelectChange}
      defaultLocation={defaultLocation}
    />
  );
};

export default memo(LocationInputContainer);
