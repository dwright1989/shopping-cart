import { render, screen } from '@testing-library/react';
import Shop from '../Components/Shop';

describe('shop testing renders', ()=>
{

  test('renders card objects', () => {
    const onChangeMock = jest.fn();
    render(<Shop handleAddToBasket={onChangeMock}/>);
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBe(10);
  });

});