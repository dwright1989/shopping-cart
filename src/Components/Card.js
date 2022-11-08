
export default function Cart(props){
    return (
        <div id="card">
            <img src={props.product.url} alt="Product"/>
            <p>{props.product.name}</p>
            <p>£{props.product.price}</p>
            <button>Add To Basket</button>
        </div>
    );
}