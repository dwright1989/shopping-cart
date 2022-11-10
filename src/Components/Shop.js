import Products from "../Components/Products/ProductItems";
import Card from "../Components/Card";

export default function Shop(props){
    const {handleAddToBasket} = props;
    return (
        <div id="shop" className="page">
            <h1>ABC</h1>
            <div id="products">
                {Products.map( (product) =>{
                    return <Card product={product} handleAddToBasket={handleAddToBasket}/>
                })}
            </div>
        </div>
    );
}