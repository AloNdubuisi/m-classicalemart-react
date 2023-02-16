import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sign-up" element={<Register/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
} 

export default App;
