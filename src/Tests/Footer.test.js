import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';



describe('footer testing', ()=>
{
      test('renders heading', ()=>{
        render(<Footer />);
        const divFooter = screen.getByText(/Created by Debbie Wright 2022/i);
        expect(divFooter).toBeInTheDocument();
      });

}
)

