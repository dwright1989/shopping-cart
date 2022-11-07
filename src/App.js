import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
import Cart from "./Components/Cart.js";
import './App.css';

function App() {
  return (
    <div id="mainContent">
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
