import { render, screen } from '@testing-library/react';
import Cart from '../Components/Cart';

let basketEmpty = {
  products: []
};

let totalsEmpty = {
  quantity: 0,
  price: 0
}

let basketWithItems = {
  products: [{id: 0, 
    url: require("../Images/blackAndWhiteLongSleeved.png"), 
    name: "Long Sleeved Top", 
    price: 15.99}]
};

let totalsWithItems = {
  quantity: 2,
  price: 31.98
}

const incrementMock = jest.fn();
const decrementMock = jest.fn();

describe('cart testing renders empty basket', ()=>
{
  test('renders cart', () => {
    render(<Cart basket={basketEmpty} totals={totalsEmpty} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const cartContent = screen.getByRole("heading", {name:/cart/i});
    expect(cartContent).toBeInTheDocument();
  });

  test('renders paragraph', () => {
    render(<Cart basket={basketEmpty} totals={totalsEmpty} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const para = screen.getByText(/No items currently in your cart./i);
    expect(para).toBeInTheDocument();
  });

  test('renders click here', () => {
    render(<Cart basket={basketEmpty} totals={totalsEmpty} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const link = screen.getByText(/Click here/i);
    expect(link).toBeInTheDocument();
  });

});


describe('cart testing renders basket with items', ()=>
{
  test('renders cart', () => {
    render(<Cart basket={basketWithItems} totals={totalsWithItems} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const cartContent = screen.getByRole("heading", {name:/cart/i});
    expect(cartContent).toBeInTheDocument();
  });

  test('renders image', () => {
    render(<Cart basket={basketWithItems} totals={totalsWithItems} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test('renders checkout button', () => {
    render(<Cart basket={basketWithItems} totals={totalsWithItems} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const button = screen.getByRole("button", {name:/checkout/i});
    expect(button).toBeInTheDocument();
  });

  test('renders totals', () => {
    render(<Cart basket={basketWithItems} totals={totalsWithItems} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const totals = screen.getByText(/Total: £31.98/i);
    expect(totals).toBeInTheDocument();
  });

  test('renders quantity', () => {
    render(<Cart basket={basketWithItems} totals={totalsWithItems} handleAddToBasket={incrementMock} handleRemoveFromBasket={decrementMock}/>);
    const addButton = screen.getByRole("button", {name:'+'});
    expect(addButton).toBeInTheDocument();
    const removeButton = screen.getByRole("button", {name:'-'});
    expect(removeButton).toBeInTheDocument();
  });

});
