export default function Home(){
    return (
        <div id="home" className="page">
            <h1 className="brand">Clothes<span className="tertiary">4</span>You</h1>
            <p>A fake portfolio store</p>
            <form action="/Shop">
                <input id="shopButton" type="submit" value="Shop Now"/>
            </form>
        </div>
    );
}