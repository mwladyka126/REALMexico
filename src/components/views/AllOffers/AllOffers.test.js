import React from 'react';
import { shallow } from 'enzyme';
import { AllOffersComponent } from './AllOffers';

describe('Component AllOffers', () => {
  it('should render without crashing', () => {
    const component = shallow(<AllOffersComponent />);
    expect(component).toBeTruthy();
  });
});
