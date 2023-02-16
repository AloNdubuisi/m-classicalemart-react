import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import {NavLink} from 'react-router-dom';
import Navbar from "./Navbar";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  // let componentMounted = true;
  // console.log(data);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      // console.log(response);
      const jsonData = await response.json();
      // console.log(jsonData);
      // if (componentMounted) {
        setData(jsonData);
        setFilter(jsonData);
        setLoading(false);
      // }
      return () => {
      //   componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
      </>
    );
  };

  const filterProduct = (cat)=>{
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All Products</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
            Lady's Products
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>
            Jewlries
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>
        {filter.map((products) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card text-center h-80 p-4" key={products.id}>
                  <img
                    src={products.image}
                    classNameName="card-img-top"
                    alt={products.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {products.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">
                      {" "}
                      Price: ${products.price}
                    </p>
                    <NavLink
                      to={`/products/${products.id}`}
                      className="btn fw-bold" style={{backgroundColor: '#1F3E55', color:'ghostwhite'}}
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
     <Navbar />
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
