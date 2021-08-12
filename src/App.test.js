import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const h1Element = screen.getByText(/Profile/i);
  expect(h1Element).toBeInTheDocument();
});
