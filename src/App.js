import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
import About from "./Components/About.js";
import Cart from "./Components/Cart.js";
import Products from "./Components/Products/ProductItems";
import './App.css';

function App() {

  const [basket, setBasket] = React.useState({
      products: []
  });

  const [totals, setTotal] = React.useState({
      quantity: 0,
      price: 0
  });


  React.useEffect(() => {
    updateTotals();
  },[basket]);

  React.useEffect(() => {
    console.log("totals have changed to: " + JSON.stringify(totals));
  },[totals]);

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

  function updateTotals(){
    let quantity = getTotalQuantity();
    let price = getTotalPrice();
    setTotal({
      quantity: quantity,
      price: price
    })
  }

  function getTotalQuantity(){
    let quantity = 0;
    basket.products.forEach(product=>{
        quantity+=product.quantity;
    })
    return quantity;
  }

  function getTotalPrice(){
    // loop through basket
    // for each product in basket, get from products file
    // times product price by the quantity
    // add to total price
    let totalPrice = 0;
    basket.products.forEach(product=>{
        let productMatch = Products.find(({id})=> id===product.id);
        let price = productMatch.price * product.quantity;
        totalPrice+=price;
    })
    return totalPrice;
  }



  

  return (
    <div id="mainContent">
      

      <BrowserRouter>
      <NavBar basketQuantity={totals.quantity}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop  handleAddToBasket={handleAddToBasket}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart basket={basket}/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
