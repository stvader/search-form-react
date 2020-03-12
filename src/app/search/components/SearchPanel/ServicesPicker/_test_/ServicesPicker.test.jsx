import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Autocomplete from '@material-ui/lab/Autocomplete';

import ServicesPicker from '../ServicesPicker';

configure({ adapter: new Adapter() });

const mockHandleChange = jest.fn();

describe('ServicesPicker', () => {
  it('ServicesPicker render', () => {
    const component = shallow(
      <ServicesPicker selectService="Some service" onChange={mockHandleChange} />,
    );

    const input = component.find(Autocomplete);

    expect(component).toMatchSnapshot();
    expect(input).toBeDefined();
  });
});
