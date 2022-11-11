
import Products from "./Products/ProductItems";

export default function Cart(props){
    let items = props.basket.products;

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
                        console.log(JSON.stringify(itemToDisplay));
                        return (<div className="cart-item"><p>{itemToDisplay.name}</p></div>)
                    })}
                </div>
            </div>
        </div>
    );
}

