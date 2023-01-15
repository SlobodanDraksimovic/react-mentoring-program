import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Footer from '../Footer';

describe('<Footer />', () => {
  afterEach(cleanup);

  it('should render Footer', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
