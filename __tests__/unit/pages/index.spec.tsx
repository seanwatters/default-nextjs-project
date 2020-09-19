import React from 'react';
import { mount } from 'enzyme';

import Home from 'pages/index';

describe('Home page contains a "Welcome" message', () => {
  it('renders', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.contains(
      <h1 className="title">
        Welcome to
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>,
    )).toBe(true);
  });
});
