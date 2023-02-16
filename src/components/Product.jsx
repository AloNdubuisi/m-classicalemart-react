import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Skeleton from "react-loading-skeleton";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const jsonData = await response.json();
      setProduct(jsonData);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-uppercase text-balck-50 fw-bolder">
            {product.category}
          </h3>
          <h1 className="fw-bold">{product.title}</h1>
          <p className="lead">
            Rating{product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <p className="lead">{product.description}</p>
          <h2 className="display-6 fw-bold my-4">$ {product.price}</h2>
          <button
            className="btn fs-3 px-4 py-2"
            style={{ border: "1px solid #1F3E55", color: "#1F3E55" }}
            onClick={() => addProduct(product)}
          >
            Add To Cart
          </button>
          <NavLink
            to="/cart"
            className="btn fs-3 ms-2 px-3 py-2"
            style={{ backgroundColor: "#1F3E55", color: "ghostwhite" }}
          >
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
    <div>
          <Navbar />
        </div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
