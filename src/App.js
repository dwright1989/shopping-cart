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

  const [basket, setBasket] = React.useState({
      products: []
  });

  /*React.useEffect(() => {
    console.log(JSON.stringify(basket));
  },[basket]);*/

 function handleAddToBasket(idToBeAdded) {
      let updateQuantity = basketContains(idToBeAdded);
      if(updateQuantity){
        let newBasket = [...basket.products];
        for(let i=0; i<newBasket.length; i++){
          if(newBasket[i].id===idToBeAdded){
              newBasket[i].quantity++;
          }
        }
        setBasket({
          products: newBasket
        })
      }else{
        if(basket.products.length===0){
          setBasket({
            products: [{id: idToBeAdded, quantity: 1}]
          })
        }else{
          setBasket(prevBasket =>({
            products: [...prevBasket.products, {id: idToBeAdded, quantity: 1}]
          }))
        }
      }
  }

  function basketContains(idToSearch){
    let obj = basket.products.find(o=>o.id===idToSearch);
    if(obj!=null && obj!==undefined){
      return true;
    }else{
      return false
    }
  }



  

  return (
    <div id="mainContent">
      <NavBar basketQuantity={1}/>
      <div id="pageDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop  handleAddToBasket={handleAddToBasket}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart basket={basket}/>}/>
        </Routes>
      </BrowserRouter>
      </div>    
      <Footer/>
    </div>
  );
}

export default App;
