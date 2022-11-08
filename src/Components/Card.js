
export default function Cart(props){

    const {product, handleAddToBasket} = props;
    return (
        <div id="card">
            <img src={product.url} alt="Product"/>
            <p>{product.name}</p>
            <p>£{product.price}</p>
            <button onClick={handleAddToBasket.bind(this, product.id)}>Add to Basket</button>
        </div>
    );
}