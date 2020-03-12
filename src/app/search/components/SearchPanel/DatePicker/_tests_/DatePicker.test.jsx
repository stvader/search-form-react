import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { KeyboardDatePicker } from '@material-ui/pickers';

import DatePicker from '../DatePicker';

configure({ adapter: new Adapter() });

const mockHandleDateChange = jest.fn();

describe('DatePicker', () => {
  it('DatePicker render', () => {
    const component = shallow(
      <DatePicker selectDate="Some date" onChange={mockHandleDateChange} />,
    );

    const input = component.find(KeyboardDatePicker);

    expect(component).toMatchSnapshot();
    expect(input).toBeDefined();
    expect(input.prop('value')).toBe('Some date');
  });
});
