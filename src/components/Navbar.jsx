import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary text-white shadow-sm page-nav">
        <div className="container">
          <NavLink
            className="navbar-brand fw-bold"
            to="/"
            style={{ color: "ghostwhite" }}
          >
            M-CLASSICAL <br /> COLLECTIONS
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto my-nav fw-bold mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-4"
                  aria-current="page"
                  to="/"
                  style={{ color: "ghostwhite", letterSpacing: "1px" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4 btn-danger:hover"
                  to="/about"
                  style={{ color: "ghostwhite", letterSpacing: "1px" }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4"
                  to="/products"
                  style={{ color: "ghostwhite", letterSpacing: "1px" }}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4"
                  to="/contact"
                  style={{ color: "ghostwhite", letterSpacing: "1px" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink
                to="/login"
                className="btn btn-outline-dark fs-5"
                style={{ color: "ghostwhite" }}
              >
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink
                to="/sign-up"
                className="btn btn-outline-dark fs-5 ms-2"
                style={{ color: "ghostwhite" }}
              >
                <i className="fa fa-user-plus"></i>Register
              </NavLink>
              <NavLink
                to="/cart"
                className="btn btn-outline-dark fs-5 ms-2"
                style={{ color: "ghostwhite" }}
              >
                <i className ="fa fa-shopping-cart"></i>Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
