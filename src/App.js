import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar.js";
import Footer from "./Components/Footer.js";
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
import About from "./Components/About.js";
import Cart from "./Components/Cart.js";
import './App.css';

function App() {
  return (
    <div id="mainContent">
      <NavBar/>
      <div id="pageDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </div>    
      <Footer/>
    </div>
  );
}

export default App;
