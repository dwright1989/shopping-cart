import { render, screen } from '@testing-library/react';
import Shop from '../Components/Shop';

test('renders shop', () => {
  render(<Shop />);
  const shopContent = screen.getByText(/i am the shop/i);
  expect(shopContent).toBeInTheDocument();
});
