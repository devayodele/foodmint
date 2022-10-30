import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./mobileNav.css";

export default function MobileNav() {
  const [value, setValue] = useState();
  const counter = useSelector((state) => state.items.cart);

  const userIcon_ = "userIcon_ fas fa-user-alt";
  const searchIcon = "searchIcon  fa fa-search";
  const cartIcon_ = "cartIcon_  fas fa-shopping-cart";

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

  return (
    <>
      <div id="mobileNav">
        <Link to="/">
          <div id="LogoDivMobile">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/19/12/fork-spoon-and-knife-sign-orange-icon-on-black-vector-13391912.jpg"
              alt="logo"
            />
            <div id="foodMintM">
              <span id="foodM">FOOD</span>
              <span id="mintM">MINT</span>
            </div>
          </div>
        </Link>

        <div id="headerBtnDiv_">
          <div className="headerBtn">
            <NavLink to="/Login" className="navLink">
              <i className={userIcon_}></i>
            </NavLink>
          </div>
          <div className="cartBox__">
            <NavLink to="/cart" className="navLink">
              <div className="counter">
                <span>{counter.length}</span>
              </div>
              <div>
                <i className={cartIcon_}></i>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div id="search_BarM">
        <form id="search_BoxM" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Category Here e.g 'pizza"
            id={value}
            name={value}
            onChange={handleOnchange}
          />
        </form>
        <div id="flex_DivM" onClick={handleNavigate}>
          <Link to="/menu" className="navLink">
            <i className={searchIcon}></i>
          </Link>
        </div>
      </div>
    </>
  );
}
