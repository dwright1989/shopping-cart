import Products from "./Products/ProductItems";
import {Link} from "react-router-dom";


export default function Cart(props) {
  const { basket, totals, handleAddToBasket, handleRemoveFromBasket } = props;
  let items = basket.products;
  function getProductFromId(theId) {
    let productMatch = Products.find(({ id }) => id === theId);
    return productMatch;
  }

  return (
    <div id="cart" className="page">
      <div id="cartContainer">
        <h1>Cart</h1>
        {items.length > 0 && (
          <div>
            <div id="cartItems">
              {items.map((item) => {
                let itemToDisplay = getProductFromId(item.id);
                return (
                  <div className="cart-item">
                    <p>{itemToDisplay.name}</p>
                    <img src={itemToDisplay.url} alt="product" />
                    <p>£{itemToDisplay.price}</p>

                    <div className="quantity-editor">
                      <button onClick={handleAddToBasket.bind(this, item.id)}>
                        +
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={handleRemoveFromBasket.bind(this, item.id)}
                      >
                        -
                      </button>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
            <p>Total: £{totals.price.toFixed(2)}</p>
            <button id="checkout">Checkout</button>
          </div>
        )}
        {items.length === 0 && (
          <div>
            <p>No items currently in your cart.</p>
            <p>
            <Link to="../shop" id="cartLink">Click here</Link> to shop.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
