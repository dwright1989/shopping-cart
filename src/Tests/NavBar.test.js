import { render, screen } from '@testing-library/react';
import NavBar from '../Components/NavBar';

test('renders nav bar', () => {
  render(<NavBar />);
  const navContent = screen.getByText(/i am the nav bar/i);
  expect(navContent).toBeInTheDocument();
});
