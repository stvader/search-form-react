import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import LocationInput from '../LocationInput';

configure({ adapter: new Adapter() });

const mockHandleChange = jest.fn();
const mockHandleSelectChange = jest.fn();
const mockOptions = jest.fn();

describe('LocationInput', () => {
  it('LocationInput render', () => {
    const component = shallow(
      <LocationInput
        handleChange={mockHandleChange}
        handleSelectChange={mockHandleSelectChange}
        options={mockOptions}
        currentLocation="Location"
      />,
    );

    const input = component.find(Autocomplete);
    const textField = component.find(TextField);

    expect(component).toMatchSnapshot();
    expect(input).toBeDefined();
    expect(input.prop('defaultValue')).toBe('Location');
    expect(textField).toBeDefined();
  });
});
