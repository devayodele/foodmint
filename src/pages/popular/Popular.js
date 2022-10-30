import React from "react";
import { useParams } from "react-router-dom";
import "./popular.css";
import MobileNav from "../../components/mobileNav/MobileNav";
import { Link } from "react-router-dom";
import PopularAll from "../../components/popularAll/PopularAll";
import PopularFood from "../../components/popularFood/PopularFood";
import Header from "../../components/header/Header";
import MenuDisplayb from "../../components/menuDisplayb/MenuDisplayb";
import Footer from "../../components/footer/Footer";

export default function Popular() {
  const { mealCat } = useParams();
  const AVAILABLE_LINKS = [
    "salad",
    "drinks",
    "pizza",
    "streak",
    "sandwich",
    "hamburger",
  ];

  const acceptedLink = AVAILABLE_LINKS.find(
    (ev) => ev === mealCat.toLowerCase()
  );

  return (
    <>
      {acceptedLink && (
        <div>
          <Header />
          <MobileNav />
          <MenuDisplayb />
          <PopularAll />
          <div className="loader"></div> : <PopularFood />
          <Footer />
        </div>
      )}

      {!acceptedLink && (
        <p>
          Unrealistic query detected, Don't worry just go back
          <Link to="/" id="pageErrorlnk">
            Home
          </Link>
        </p>
      )}
    </>
  );
}
