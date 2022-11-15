import {Link} from "react-router-dom";


export default function Home(){
    return (
        <div id="home" className="page">
            <h1 className="brand">Clothes<span className="tertiary">4</span>You</h1>
            <p>A fake portfolio store</p>
            <Link to="../shop" id="shopButton">Shop Now</Link>
        </div>
    );
}