import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import NavBar from '../Components/NavBar';
import Card from '../Components/Card';


let total = {total:0};
describe('nav bar testing renders', ()=>
{
      
      test('renders heading', ()=>{
        render(<NavBar basketQuantity={total}/>);
        const brandHeading = screen.getByRole('heading');
        expect(brandHeading).toBeInTheDocument();
      });

      test('renders links', ()=>{
        render(<NavBar basketQuantity={total}/>);
        const link = screen.getByRole('link', {name: /home/i});
        expect(link).toBeInTheDocument();
        const link2 = screen.getByRole('link', {name: /products/i});
        expect(link2).toBeInTheDocument();
        const link3 = screen.getByRole('link', {name: /about/i});
        expect(link3).toBeInTheDocument();
        const link4 = screen.getByRole('link', {name: /cart/i});
        expect(link4).toBeInTheDocument();
      });

      test('renders cart total', ()=>{
        render(<NavBar basketQuantity={total}/>);
        const basketQuantity = screen.getByText(total.total);
        expect(basketQuantity).toBeInTheDocument();
      });


}
)

describe('nav bar testing user events', ()=>
{

  const item = {
            id: 0, 
            url: "../../Images/blackAndWhiteLongSleeved.png", 
            name: "Long Sleeved Top", 
            price: 15.99
  };

  test('cart update on add to basket', ()=>{
    render(<NavBar basketQuantity={total}/>);
    const onChangeMock = jest.fn();
    render(<Card product={item} handleAddToBasket={onChangeMock}/>);
    userEvent.click(screen.getByText(/Add To Basket/i));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

});

