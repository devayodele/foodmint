import React from "react";
import { Link } from "react-router-dom";
import "./dropdownMenu.css";

export default function DropDownMenu() {
  return (
    <>
      <div id="foodLogoHome">
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/19/12/fork-spoon-and-knife-sign-orange-icon-on-black-vector-13391912.jpg"
          alt="logo"
        />
        <div id="foodMintHome">
          <span id="foodHome">FOOD</span>
          <span id="mintHome">MINT</span>
        </div>
      </div>
      <nav role="navigation" id="navbarDropdown">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <Link to="/">
              <li>Home</li>
            </Link>
            <a href="#aboutDiv">
              <li>About</li>
            </a>
            <a href="#experts">
              <li>Team</li>
            </a>
            <a href="#contact_div">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
