import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from '@material-ui/core';

import SearchPanel from '../SearchPanel';

configure({ adapter: new Adapter() });

describe('SearchPanel', () => {
  it('SearchPanel render', () => {
    const component = shallow(<SearchPanel />);

    const form = component.find('form');
    const wrapper = component.find('.search-panel-form-elem-wrapper');
    const btn = component.find(Button);

    expect(component).toMatchSnapshot();
    expect(form).toBeDefined();
    expect(wrapper.children()).toHaveLength(4);
    expect(btn).toBeDefined();
    expect(btn.prop('type')).toBe('submit');
  });
});
