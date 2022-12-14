import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const [value, setValue] = useState();
  const counter = useSelector((state) => state.items.cart);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/menu/${value}/popular`);
  };

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    navigate(`/menu/${value}/popular`);
  };

  const userIcon = "userIcon  fas fa-user-alt";
  const searchIcon = "searchIcon  fa fa-search";
  const cartIcon = "cartIcon   fas fa-shopping-cart";

  return (
    <div className="header">
      <Link to="/">
        <div id="logoDiv">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/19/12/fork-spoon-and-knife-sign-orange-icon-on-black-vector-13391912.jpg"
            alt="logo"
          />
          <div id="foodMint">
            <span className="foodH_">FOOD</span>
            <span className="mintH_">MINT</span>
          </div>
        </div>
      </Link>

      <div className="headerBtn">
        <Link to="/" className="navLink">
          Home
        </Link>
      </div>

      <div className="headerBtn">
        <a href="#aboutDiv" className="navLink">
          About
        </a>
      </div>
      <div className="headerBtn">
        <a href="#service_sect" className="navLink">
          Service
        </a>
      </div>
      <div className="headerBtn">
        <a href="#experts__" className="navLink">
          Team
        </a>
      </div>
      <div className="headerBtn">
        <a href="#testimonial_Div" className="navLink">
          Review
        </a>
      </div>
      <div className="headerBtn">
        <a href="#contact_div" className="navLink">
          Contact
        </a>
      </div>

      <form className="searchBoxContainer" onSubmit={handleSubmit}>
        <input
          className="searchBox"
          type="text"
          placeholder="Search Category Here e.g 'pizza"
          id={value}
          name={value}
          onChange={handleOnchange}
        />

        <div className="flexDiv" onClick={handleNavigate}>
          <Link to="/menu" className="navLink_">
            <i className={searchIcon}></i>
          </Link>
        </div>
      </form>

      <div className="headerBtn">
        <NavLink to="/Login" className="navLink_">
          <i className={userIcon}></i>
        </NavLink>
      </div>
      <div className="cartBox">
        <div>
          <NavLink to="/cart" className="navLink_">
            <div className="counter">
              <span>{counter.length}</span>
            </div>
            <div>
              <i className={cartIcon}></i>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
