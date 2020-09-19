import React from 'react';
import { mount } from 'enzyme';

import Footer from 'components/Footer';

describe('Footer contains a the Vercel Logo', () => {
  it('renders', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.contains(
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />,
    )).toBe(true);
  });
});
