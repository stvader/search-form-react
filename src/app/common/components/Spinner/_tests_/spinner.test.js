import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CircularProgress } from '@material-ui/core';

import Spinner from '../Spinner';

configure({ adapter: new Adapter() });

describe('Spinner', () => {
  it('Spinner render', () => {
    const component = shallow(<Spinner />);

    const spinner = component.find(CircularProgress);

    expect(component).toMatchSnapshot();
    expect(spinner).toBeDefined();
  });
});
