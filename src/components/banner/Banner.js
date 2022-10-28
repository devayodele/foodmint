import React from "react";
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
        <button id="menuBtn">OUR MENU</button>
        <button id="orderBtn">ORDER NOW</button>
      </div>
    </>
  );
}
