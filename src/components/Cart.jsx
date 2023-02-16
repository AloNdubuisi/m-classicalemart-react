import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteCart } from "../redux/action";
import Navbar from "./Navbar";
// import Checkout from "./Checkout";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleDelete = (cartItems) => {
    dispatch(deleteCart(cartItems));
  };

  const cartItems = (products) => {
    return (
      <div className ="px-4 my-5 bg-light rounded-3" key={products.id}>
        <div className ="container py-4">
          <button
            className="btn float-end"
            onClick={() => handleDelete(products)}
          >
            <i className="fa fa-trash fs-3" aria-hidden="true"></i>
          </button>
          <div className ="row justify-content-center">
            <div className ="col-md-4">
              <img
                src={products.image}
                alt={products.title}
                style={{height:"100px",
                width:"100px"}}
              />
            </div>
            <div className ="col-md-4">
              <h3>{products.title}</h3>
              <h2 className ="lead fw-bold py-4">${products.price}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = ()=>{
    return(
      <>
        <div className ="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className ="row fw-bolder fs-2 text-danger">oops!, You have an Empty Cart Already !</div>
          <NavLink to="/products" className ="btn btn-outline-dark fs-3 fw-bold mt-5">Continue Shopping</NavLink>
        </div>
        </div>
      </>
    );
  }

  const checkoutButton = ()=>{
    return(
      <div className ="container pb-5">
        <div className ="row">
          <NavLink to="/checkout" className="btn btn-primary w-50 fs-3 fw-bold mx-auto" style={{color:'ghostwhite'}}>Proceed To Checkout</NavLink>
        </div>
      </div>
    );
  }

  return <>
  <Navbar/>
  {state.length === 0 && emptyCart()}
  {state.length !== 0 && state.map(cartItems)}
  {state.length !== 0 && checkoutButton()}
  </>;
};

export default Cart;
