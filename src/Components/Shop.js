import Products from "../Components/Products/ProductItems";

export default function Shop(){
    return (
        <div id="shop" className="page">
            <div id="products">
                {console.log(JSON.stringify(Products))}
                {Products.map( (product) =>{
                    return <p>This is product {product.id}</p>
                })}
            </div>
        </div>
    );
}