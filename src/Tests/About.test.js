import { render, screen } from '@testing-library/react';
import About from '../Components/About';


describe('about testing', ()=>
{
      test('renders about', ()=>{
        render(<About />);
        const heading = screen.getByRole("heading", {name:/clothes 4 you/i});
        expect(heading).toBeInTheDocument();
      });

}
)

