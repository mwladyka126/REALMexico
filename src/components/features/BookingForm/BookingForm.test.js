import React from 'react';
import { shallow } from 'enzyme';
import { BookingFormComponent } from './BookingForm';

describe('Component BookingForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<BookingFormComponent />);
    expect(component).toBeTruthy();
  });
});
