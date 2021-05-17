import React from 'react';
import { shallow } from 'enzyme';
import { RegionsOverviewComponent } from './RegionsOverview';

describe('Component RegionsOverview', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegionsOverviewComponent />);
    expect(component).toBeTruthy();
  });
});
