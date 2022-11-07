export default function NavBar(){
    return (
        <div id="navBar">
           <h1 className="brand">Clothes<span className="tertiary">4</span>You</h1>
           <div id="links">
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">About</a>
                <a href=""><span class="material-symbols-outlined">
                    shopping_cart
                </span></a>
           </div>
        </div>
    );
}