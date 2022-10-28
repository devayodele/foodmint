import React from "react";
import "./menuDisplayb.css";
import { Link } from "react-router-dom";

export default function MenuDisplayb({ loading }) {
  return (
    <div className="menuDisplayb">
      <button id="menuBtn_">FAST FOOD MENU</button>
      <h3>ENJOY NEW TASTE WITH OUR QUALITY MEALS</h3>
      <div className="categoryContainer">
        <div className="categoryItem">
          <Link
            to="/menu/drinks/popular"
            className="categoryLink"
            onClick={(e) => loading(true)}
          >
            <img
              className="img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTtegtPdzfd_h2wBlW9uML_Ns1YGxm7_LCg&usqp=CAU"
              }
              alt="drink"
            />

            <span className="span">Drinks</span>
          </Link>
        </div>

        <div className="categoryItem">
          <Link to="/menu/hamburger/popular" className="categoryLink">
            <img
              className="img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFi5j7JfUjq5-emMLyzZSU8HxFY3X8eJmVg&usqp=CAU"
              }
              alt="Hamburger"
            />
            <span className="span">Hamburger</span>
          </Link>
        </div>

        <div className="categoryItem">
          <Link to="/menu/salad/popular" className="categoryLink">
            <img
              className="img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GbZ3yVxrEFO7HDHRsdaqwzIy_tmPsMM3SUA-d216C4M87-fuRo0FBojWiP472kHVRpE&usqp=CAU"
              }
              alt="salad"
            />
            <span className="span">Salad</span>
          </Link>
        </div>

        <div className="categoryItem">
          <Link to="/menu/sandwich/popular" className="categoryLink">
            <img
              className="img"
              src={
                "https://www.kindpng.com/picc/m/75-758951_natural-sandwich-png-transparent-png.png"
              }
              alt="Sandwich"
            />
            <span className="span">Sandwich</span>
          </Link>
        </div>

        <div className="categoryItem">
          <Link to="/menu/steak/popular" className="categoryLink">
            <img
              className="img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4DZbBX7dtQw_IDt4OETUabXcrhvF-GSREA&usqp=CAU"
              }
              alt="steak"
            />
            <span className="span">Steak</span>
          </Link>
        </div>

        <div className="categoryItem">
          <Link to="/menu/pizza/popular" className="categoryLink">
            <img
              className="img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGBVoLpMu7ZxY8OlkfJMxbTI9fbSM-MBvtA&usqp=CAU"
              }
              alt="pizza"
            />
            <span className="span">Pizza</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
