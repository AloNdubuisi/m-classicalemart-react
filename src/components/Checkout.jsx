import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  // Initializing the total price of items:
  var total = 0;

  // Payment successful message:
  const message = () => {
    return alert("Payment made sucessfully");
  };
  const cartList = (products) => {
    total = total + products.price;
    return (
      <i className="list-group-item d-flex justify-content-between 1h-sm">
        <div>
          <img src={products.image} alt="products.title" style={{width:"80px",height:"80px"}}/>
        </div>
        <div>
          <p className="my-0 fw-bold">{products.title}</p>
        </div>
        <span className="fs-5 fw-bold">${products.price}</span>
      </i>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div class="row">
          <div class="col-md-5 col-lg-6 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="fs-3 fw-bold" style={{ color: "#1F3E55" }}>
                Your Total Cart
              </span>
              <span
                class="badge rounded-pill"
                style={{ backgroundColor: "#1F3E55" }}
              >
                {state.length}
              </span>
            </h4>
            <ul class="list-group mb-3">
              {state.map(cartList)}
              <li class="list-group-item d-flex justify-content-between">
                <span>Grand Total Price (USD)</span>
                <strong className="fs-3">{total}</strong>
              </li>
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <div class="input-group-append">
                  <button type="submit" class="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-7 col-lg-6 order-md-1">
            <h4 class="mb-3 fs-1" style={{ color: "#1F3E55" }}>
              Billing Address
            </h4>
            <form class="needs-validation">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder
                    required
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="username">Username</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="alo@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="No. 35 Akure South"
                  required
                />
              </div>

              <div class="row fs-5">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="country">Choose...</option>
                    <option>USA</option>
                    <option>Nigeria</option>
                    <option>California</option>
                  </select>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>Abia</option>
                    <option>Anambra</option>
                    <option>Ebonyi</option>
                    <option>Ondo</option>
                  </select>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input me-1"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input me-1"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr class="mb-4" />

              <h4 class="mb-3">Your Payment</h4>

              <div class="d-block my-3 fs-5">
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input me-1"
                    required
                  />
                  <label class="custom-control-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input me-1"
                    required
                  />
                  <label class="custom-control-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input me-1"
                    required=""
                  />
                  <label class="custom-control-label" for="paypal">
                    PayPal
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    required
                  />
                  <small class="text-muted">
                    Full name as Written on Your card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-cvv">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr class="mb-4" />
              <button
                class="btn btn-outline btn-lg btn-block text-white f-3 fw-bold"
                type="submit"
                style={{ backgroundColor: "#1F3E55" }}
                onClick={() => message()}
              >
                Continue to Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
