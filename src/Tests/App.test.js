import { render, renderWithContext, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Shop from '../Components/Shop';

describe('app testing', ()=>
{

    test('check renders', ()=>{
        const appComponent = renderer.create(<App/>);
        const tree = appComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('handle add to basket function', async()=>{
        render(<App />);
        const shopLink = screen.getByRole('link', {name: /Products/i});
        await userEvent.click(shopLink);
        const addToBasketButton = screen.getByRole('button', {name: /Add To Basket/i});
        //userEvent.click(addToBasketButton);
        //const basketTotalP = screen.getByTestId("basket-quantity");
        //expect(basketTotalP.textContent).toBe("0");*/
      });

}
)

