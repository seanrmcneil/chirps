import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chirps header', () => {
  render(<App />);
  const header = screen.getByText('Chirps');
  expect(header).toBeInTheDocument();
});
