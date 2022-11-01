import React from "react";
import "./menuDisplay.css";
import { Link } from "react-router-dom";

export default function MenuDisplay() {
  return (
    <div id="menuHome">
      <button>FAST FOOD MENU</button>
      <h3>ENJOY NEW TASTE WITH OUR QUALITY MEALS</h3>
      <div className="categoryContainer__">
        <div className="categoryItem_">
          <Link to="/menu/drinks/popular" className="_categoryLink">
            <img
              className="_img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTtegtPdzfd_h2wBlW9uML_Ns1YGxm7_LCg&usqp=CAU"
              }
              alt="drink"
            />

            <span className="_span_label">Drinks</span>
          </Link>
        </div>

        <div className="categoryItem_">
          <Link to="/menu/hamburger/popular" className="_categoryLink">
            <img
              className="_img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEFi5j7JfUjq5-emMLyzZSU8HxFY3X8eJmVg&usqp=CAU"
              }
              alt="Hamburger"
            />
            <span className="_span_label">Hamburger</span>
          </Link>
        </div>

        <div className="categoryItem_">
          <Link to="/menu/salad/popular" className="_categoryLink">
            <img
              className="_img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GbZ3yVxrEFO7HDHRsdaqwzIy_tmPsMM3SUA-d216C4M87-fuRo0FBojWiP472kHVRpE&usqp=CAU"
              }
              alt="salad"
            />
            <span className="_span_label">Salad</span>
          </Link>
        </div>

        <div className="categoryItem_">
          <Link to="/menu/sandwich/popular" className="_categoryLink">
            <img
              className="_img"
              src={
                "https://www.kindpng.com/picc/m/75-758951_natural-sandwich-png-transparent-png.png"
              }
              alt="Sandwich"
            />
            <span className="_span_label">Sandwich</span>
          </Link>
        </div>

        <div className="categoryItem_">
          <Link to="/menu/steak/popular" className="_categoryLink">
            <img
              className="_img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4DZbBX7dtQw_IDt4OETUabXcrhvF-GSREA&usqp=CAU"
              }
              alt="steak"
            />
            <span className="_span_label">Steak</span>
          </Link>
        </div>

        <div className="categoryItem_">
          <Link to="/menu/pizza/popular" className="_categoryLink">
            <img
              className="_img"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGBVoLpMu7ZxY8OlkfJMxbTI9fbSM-MBvtA&usqp=CAU"
              }
              alt="pizza"
            />
            <span className="_span_label">Pizza</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
