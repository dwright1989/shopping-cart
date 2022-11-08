import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
import About from "./Components/About.js";
import Cart from "./Components/Cart.js";
import './App.css';

function App() {

  const [basketQuantity, setBasketQuantity] = React.useState({
      total: 0
  });

  function handleAddToBasket(id){
      setBasketQuantity
      (prevQuantity => ({
        total: prevQuantity.total+1
    }))
  }

  

  return (
    <div id="mainContent">
      <NavBar basketQuantity={basketQuantity}/>
      <div id="pageDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop  handleAddToBasket={handleAddToBasket}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </div>    
      <Footer/>
    </div>
  );
}

export default App;
