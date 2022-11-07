import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';

test('renders Home', () => {
  render(<Home />);
  const homeContent = screen.getByText(/i am the home/i);
  expect(homeContent).toBeInTheDocument();
});
