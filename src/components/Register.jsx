import React from "react";
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div
        class="modal modal-signin position-static d-block bg-secondary py-5"
        tabindex="-1"
        role="dialog"
        id="modalSignin"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-4 shadow">
            <div class="modal-header p-5 pb-4 border-bottom-0">
              <h1 class="fw-bold mb-0 fs-2"><i className="fa fa-user-plus"></i>Sign up for free</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body p-5 pt-0">
              <form class="">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control rounded-3"
                    id="floatingInput"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control rounded-3"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <button
                  class="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                  type="submit"
                >
                  Sign up
                </button>
                <small class="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
                <hr class="my-4" />
                <h2 class="fs-5 fw-bold mb-3 text-center">OR</h2>
                <button
                  class="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                  type="submit"
                >
                  <svg class="bi me-1" width="16" height="16"></svg>
                  Sign up with Twitter
                </button>
                <button
                  class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                  type="submit"
                >
                  <svg class="bi me-1" width="16" height="16"></svg>
                  Sign up with Facebook
                </button>
                <button
                  class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3"
                  type="submit"
                >
                  <svg class="bi me-1" width="16" height="16"></svg>
                  Sign up with GitHub
                </button>
                <small class="text-muted">
                  Or you Already have an account? <NavLink to="/login">Login</NavLink>
                </small>
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
