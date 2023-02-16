import React from "react";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
      <h1>CONTACT US</h1>
        <div class="row mt-5">
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
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="alo@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="username">Message</label>
          <div class="input-group">
            <textarea
              class="form-control"
              id="message"
              placeholder="Your message here...."
              required
            />
          </div>
        </div>
        <div class="mb-3">
           <button
                class="btn btn-outline bg-primary btn-lg btn-block text-white f-3 fw-bold"
                type="submit"
              >
                SEND
              </button>
        </div>
      </div>
    </div>
  );
}
