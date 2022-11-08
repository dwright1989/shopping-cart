export default function NavBar(props){
    return (
        <div id="navBar">
           <h1 className="brand">Clothes<span className="tertiary">4</span>You</h1>
           <div id="links">
                <a href="/">Home</a>
                <a href="shop">Products</a>
                <a href="about">About</a>
                <a href="cart"><span className="material-symbols-outlined">
                    shopping_cart
                </span></a>
                <p id="basketQuantity">{props.basketQuantity.total}</p>
           </div>
        </div>
    );
}