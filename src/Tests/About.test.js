import { render, screen } from '@testing-library/react';
import About from '../Components/About';

test('renders about', () => {
  render(<About />);
  const aboutContent = screen.getByText(/i am the about/i);
  expect(aboutContent).toBeInTheDocument();
});
