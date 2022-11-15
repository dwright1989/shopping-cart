import {Link} from "react-router-dom";

export default function NavBar(props){
    return (
        <div id="navBar">
           <h1 className="brand">Clothes<span className="tertiary">4</span>You</h1>
           <div id="links">
                <Link to="/shopping-cart/">Home</Link>
                <Link to="shop">Products</Link>
                <Link to="about">About</Link>
                <Link to="cart"><span className="material-symbols-outlined">
                    shopping_cart
                </span></Link>
                <p id="basketQuantity" data-testid="basket-quantity">{props.basketQuantity}</p>
           </div>
        </div>
    );
}