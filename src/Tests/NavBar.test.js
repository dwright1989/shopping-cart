import { render, screen } from '@testing-library/react';
import NavBar from '../Components/NavBar';


describe('nav bar testing', ()=>
{
      test('renders heading', ()=>{
        render(<NavBar />);
        const brandHeading = screen.getByRole('heading');
        expect(brandHeading).toBeInTheDocument();
      });

      test('renders links', ()=>{
        render(<NavBar />);
        const link = screen.getByRole('link', {name: /home/i});
        expect(link).toBeInTheDocument();
        const link2 = screen.getByRole('link', {name: /products/i});
        expect(link2).toBeInTheDocument();
        const link3 = screen.getByRole('link', {name: /about/i});
        expect(link3).toBeInTheDocument();
        const link4 = screen.getByRole('link', {name: /cart/i});
        expect(link4).toBeInTheDocument();
      });
}
)

