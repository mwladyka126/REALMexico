import React from 'react';
import { shallow } from 'enzyme';
import { RegionComponent } from './Region';

describe('Component Region', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegionComponent />);
    expect(component).toBeTruthy();
  });
});
