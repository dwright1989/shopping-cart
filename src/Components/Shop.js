import Products from "../Components/Products/ProductItems";
import Card from "../Components/Card";

export default function Shop(){
    return (
        <div id="shop" className="page">
            <div id="products">
                {console.log(JSON.stringify(Products))}
                {Products.map( (product) =>{
                    return <Card product={product}/>
                })}
            </div>
        </div>
    );
}