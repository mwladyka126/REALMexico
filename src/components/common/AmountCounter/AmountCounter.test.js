import React from 'react';
import { shallow } from 'enzyme';
import { AmountCounterComponent } from './AmountCounter';

describe('Component AmountCounter', () => {
  it('should render without crashing', () => {
    const component = shallow(<AmountCounterComponent />);
    expect(component).toBeTruthy();
  });
});
