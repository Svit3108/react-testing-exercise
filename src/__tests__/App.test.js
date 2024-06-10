import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';  // Hier wird @testing-library/jest-dom/extend-expect importiert
import fetch from 'node-fetch';
global.fetch = fetch;

test('renders the app', () => {
  render(<App />);
  expect(screen.getByText('Todo App')).toBeInTheDocument();
});
