
import Products from "./Products/ProductItems";

export default function Cart(props){
    console.log(JSON.stringify(props));
    const {basket, totals, handleAddToBasket} = props;
    let items = basket.products;
    function getProductFromId(theId){
        let productMatch = Products.find(({id})=> id===theId);
        return productMatch;
    }

    return (
        <div id="cart" className="page">
            <div id="cartContainer">
                <h1>Cart</h1>
                <div id="cartItems">
                    {items.map(item=>{
                        let itemToDisplay = getProductFromId(item.id);
                        return (<div className="cart-item">
                                        <p>{itemToDisplay.name}</p>
                                        <img src={itemToDisplay.url} alt="product"/>
                                        <p>£{itemToDisplay.price}</p>

                                        <div className="quantityEditor">
                                                <button onClick={handleAddToBasket.bind(this, item.id)}>+</button>
                                                <p>{item.quantity}</p>
                                        </div>
                            </div>)
                    })}
                </div>
                <p>Total: £{totals.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

