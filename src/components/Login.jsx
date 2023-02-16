import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
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
              <h1 class="fw-bold mb-0 fs-2 text-center"><i className="fa fa-sign-in me-1"></i>Login</h1>
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
                  Login
                </button>
                <small class="text-muted">
                  Or you don't have an account yet ? <NavLink to="/sign-up">Sign up</NavLink>
                </small>
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
