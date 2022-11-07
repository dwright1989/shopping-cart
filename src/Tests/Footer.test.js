import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

test('renders footer', () => {
  render(<Footer />);
  const footerContent = screen.getByText(/i am the footer/i);
  expect(footerContent).toBeInTheDocument();
});
