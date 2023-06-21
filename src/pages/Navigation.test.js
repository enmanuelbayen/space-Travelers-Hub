import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render Navbar component', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Navigation>
          <div>Test</div>
        </Navigation>
      </BrowserRouter>,
    );

    expect(getByRole('navigation')).toBeInTheDocument();
  });

  it('should render children', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navigation>
          <div>Test</div>
        </Navigation>
      </BrowserRouter>,
    );

    expect(getByText('Test')).toBeInTheDocument();
  });
});
