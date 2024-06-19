import React from 'react';
import { render } from '@testing-library/react';
import About from '../../src/components/About';

test('renders "about." text', () => {
  const { getByText } = render(<About />);
  const aboutText = getByText(/about\./i); // Case-insensitive search for "about."
  expect(aboutText).toBeInTheDocument();
});
