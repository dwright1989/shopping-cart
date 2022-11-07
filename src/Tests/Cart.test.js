import { render, screen } from '@testing-library/react';
import Cart from '../Components/Cart';

test('renders footer', () => {
  render(<Cart />);
  const cartContent = screen.getByText(/i am the cart/i);
  expect(cartContent).toBeInTheDocument();
});
