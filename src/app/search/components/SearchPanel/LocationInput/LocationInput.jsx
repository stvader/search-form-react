import React from 'react';
import { func, array, string } from 'prop-types';
import { TextField, Grid, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import parse from 'autosuggest-highlight/parse';

const LocationInput = ({ handleChange, handleSelectChange, options, defaultLocation }) => (
  <Autocomplete
    getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
    filterOptions={x => x}
    options={options}
    autoComplete
    includeInputInList
    freeSolo
    defaultValue={defaultLocation}
    disableOpenOnFocus
    onChange={(e, value) => handleSelectChange(e, value)}
    renderInput={params => (
      <TextField
        {...params}
        label="Please add a location"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    )}
    renderOption={option => {
      const matches = option.structured_formatting.main_text_matched_substrings;
      const parts = parse(
        option.structured_formatting.main_text,
        matches.map(match => [match.offset, match.offset + match.length]),
      );

      return (
        <Grid container alignItems="center">
          <Grid item>
            <LocationOnIcon />
          </Grid>
          <Grid item xs>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}

            <Typography variant="body2" color="textSecondary">
              {option.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>
      );
    }}
  />
);

LocationInput.propTypes = {
  handleChange: func,
  handleSelectChange: func,
  options: array,
  defaultLocation: string,
};

export default LocationInput;
