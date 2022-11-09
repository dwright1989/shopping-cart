import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Components/Card';

describe('card testing renders', ()=>
{

    const item = {
        id: 0, 
        url: "../../Images/blackAndWhiteLongSleeved.png", 
        name: "Long Sleeved Top", 
        price: 15.99
    };

    test('renders image', () => {
        const onChangeMock = jest.fn();
        render(<Card product={item} handleAddToBasket={onChangeMock}/>);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });

    test('renders name', () => {
        const onChangeMock = jest.fn();
        render(<Card product={item} handleAddToBasket={onChangeMock}/>);
        const namePara = screen.getByText(item.name);
        expect(namePara).toBeInTheDocument();
    });

    test('renders price', () => {
        const onChangeMock = jest.fn();
        render(<Card product={item} handleAddToBasket={onChangeMock}/>);
        const pricePara = screen.getByText(/15.99/i);
        expect(pricePara).toBeInTheDocument();
    });

    test('renders add to basket button', () => {
        const onChangeMock = jest.fn();
        render(<Card product={item} handleAddToBasket={onChangeMock}/>);
        const addToBasketButton = screen.getByRole('button', {name: /Add To Basket/i});
        expect(addToBasketButton).toBeInTheDocument();
    });


    test('button handler called', () =>{
        const onChangeMock = jest.fn();
        render(<Card product={item} handleAddToBasket={onChangeMock}/>);
        const addToBasketButton = screen.getByRole('button', {name: /Add To Basket/i});
        userEvent.click(addToBasketButton);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

});