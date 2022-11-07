import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';



describe('home page testing', ()=>
{
      test('renders heading', ()=>{
        render(<Home />);
        const brandHeading = screen.getByRole('heading');
        expect(brandHeading).toBeInTheDocument();
      });

      test('renders paragraph', ()=>{
        render(<Home />);
        const para = screen.getByText(/a fake portfolio store/i);
        expect(para).toBeInTheDocument();
      });

      test('renders button', ()=>{
        render(<Home />);
        const button = screen.getByRole('button', {name: /shop now/i});
        expect(button).toBeInTheDocument();
      });

}
)

