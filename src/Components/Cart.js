export default function Cart(props){
    return (
        <div id="cart" className="page">
            <div id="cartContainer">
                <p>{JSON.stringify(props)}</p>
            </div>
        </div>
    );
}