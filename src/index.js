import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Products from "./components/Products";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "products",
    element: <Products/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "products/:id",
    element: <Product/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/sign-up",
    element: <Register/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    );

// If you want to start measuring perhtmlFormance in your app, pass a function
// to log results (htmlFor example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import * as React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import Products from "./components/Products";
// import Product from "./components/Product";
// import Contact from "./components/Contact";
// import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";
// import {
// BrowserRouter as Router,
// Route,
// // Switch,
// } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// const Root = () => {
// return (
// <Provider store={store}>
// <Router>
// {/* <Switch> */}
// <Route exact path="/" component={App} />
// <Route exact path="/products" component={Products} />
// <Route exact path="/contact" component={Contact} />
// <Route exact path="/products/:id" component={Product} />
// {/* // </Switch> */}
// </Router>
// </Provider>
// );
// };

// ReactDOM.render(<Root />, document.getElementById("root"));

// // If you want to start measuring perhtmlFormance in your app, pass a function
// // to log results (htmlFor example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();