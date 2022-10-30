import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="slogan">
          <div className="slogan1">
            <p>
              <span>FRESH </span>
              <span style={{ color: "red" }}>& </span>
              <span>FAST </span>
              <span style={{ color: "red" }}> FOOD</span>
            </p>
          </div>
          <div className="slogan1">
            <p>
              <span style={{ color: "red" }}>STREET</span> <span>FOOD</span>
            </p>
          </div>
          <p className="sloganPara">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>
      </div>

      <div id="bannerBtn">
        <Link to="/menu/drinks/popular">
          <button id="menuBtn">OUR MENU</button>
        </Link>
        <Link to="/cart">
          <button id="orderBtn">ORDER NOW</button>
        </Link>
      </div>
    </>
  );
}
