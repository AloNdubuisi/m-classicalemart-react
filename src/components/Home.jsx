import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import About from "./About";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div
          id="myCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="100"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 4"
              class=""
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./assets/bg3.png"
                alt="hero-bg"
                className="bd-placeholder-img"
                width="100%"
                height="80%"
              />
              {/* <rect width="100%" height="80%" fill="#777"></rect> */}
              <div className="container">
                <div className="carousel-caption">
                  <NavLink to="/products" aria-current="page">
                    <button
                      type="button"
                      class="btn btn-lg bg-primary text-white">
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./assets/bg4.png"
                alt="hero-bg"
                className="bd-placeholder-img"
                width="100%"
                height="80%"
              />
              {/* <rect width="100%" height="100%" fill="#777"></rect> */}
              <div className="container">
                <div className="carousel-caption">
                  <NavLink to="/products" aria-current="page">
                    <button
                      type="button"
                      class="btn btn-lg text-white"
                      style={{ backgroundColor: "#1F3E55" }}
                    >
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./assets/bg1.jpg"
                alt="hero-bg"
                className="bd-placeholder-img"
                width="100%"
                height="80%"
              />
              {/* <rect width="100%" height="100%" fill="#777"></rect> */}
              <div className="container">
                <div className="carousel-caption">
                  <NavLink to="/products" aria-current="page">
                    <button
                      type="button"
                      class="btn btn-lg bg-primary text-white">
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./assets/bg6.png"
                alt="hero-bg"
                className="bd-placeholder-img"
                width="100%"
                height="80%"
              />
              {/* <rect width="100%" height="100%" fill="#777"></rect> */}
              <div className="container">
                <div className="carousel-caption">
                  <NavLink to="/products" aria-current="page">
                    <button
                      type="button"
                      class="btn btn-lg bg-primary  text-white">
                      Shop Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* === About Section */}
      <About className="mt-5"/>
      {/* === End of About Section */
      /* More activities section */

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="./assets/bg10.png"
              class="card-img-top w-75 h-50"
              alt="bg10"
            />
            <div class="card-body">
              <h5 class="btn btn-primary mx-5 my-2 fw-bolder">Fashion Jeweleries</h5>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="./assets/bg9.png"
              class="card-img-top w-75 h-50"
              alt="bg10"
            />
            <div class="card-body mx-auto">
              <h5 class="btn btn-primary mx-5 my-2 fw-bolder">Fashion Fotoshoot</h5>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="./assets/bg8.png"
              class="card-img-top w-75 h-50"
              alt="bg10"
            />
            <div class="card-body">
              <h5 class="btn btn-primary mx-5 my-2 fw-bolder">WhilListing</h5>
            </div>
          </div>
        </div>
      </div>

       /* ===== Footer section ====== */}
      <div className="container" style={{marginTop:"5rem"}}>
      <hr />
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <NavLink to="/" class="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink to="features" class="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink to="/about" class="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <NavLink to="/products" class="nav-link p-0 text-muted">
                    Product
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink to="/features" class="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink to="/about" class="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <NavLink to="/" class="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink to="/features" class="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink to="/products" class="nav-link p-0 text-muted">
                    Products
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button class="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="text-center">
              © 2023 M-Classical Collections, Inc. All rights reserved,<br/> Designed and developed by Alo, Ndubuisi
            </p>
            <ul className="d-flex">
              <li>
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </li>
              <li>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

/* <div className="card text-bg-dark text-white border-0">
        <img src="./assets/bg4.png" className="card-img" alt="Background"/>
        <div className="card-img-overlay d-flex flex-column justify-content-cente">
            <div className ="container">
                <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                <p className="card-text lead fs-2">
                    CHECKOUT ALL OUR LATEST TRENDS
                </p>
            </div>
        </div>
      </div>
      <Products/> */
