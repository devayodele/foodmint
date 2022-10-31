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
    "steak",
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
          <PopularFood />
          <Footer />
        </div>
      )}

      {!acceptedLink && (
        <p id="err_query_para_">
          Unrealistic query detected, don't worry just go back
          <Link to="/">Home</Link>
        </p>
      )}
    </>
  );
}
