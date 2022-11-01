import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import GlobalState from "./store/GlobalState";
import Home from "./pages/home/Home";
import Popular from "./pages/popular/Popular";
import All from "./pages/all/All";
import Cart from "./pages/cartPage/Cart";
import Login from "./pages/userAuth/Login";
import Register from "./pages/userAuth/Register";
import Reset from "./pages/userAuth/Reset";
import Dashboard from "./pages/userAuth/Dashboard";
import Checkout from "./pages/checkout/Checkout";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

function App() {
  useEffect(() => {}, []);

  return (
    <GlobalState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/:mealCat/popular" element={<Popular />} />
          <Route path="/menu/:mealCat/viewall" element={<All />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </GlobalState>
  );
}

export default App;
