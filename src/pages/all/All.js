import React from "react";
import Header from "../../components/header/Header";
import MobileNav from "../../components/mobileNav/MobileNav";
import PopularBar from "../../components/popularBar/PopularBar";
import AllFood from "../../components/allFood/AllFood";
import MenuDisplayb from "../../components/menuDisplayb/MenuDisplayb";
import Footer from "../../components/footer/Footer";

export default function All() {
  return (
    <div>
      <Header />
      <MobileNav />
      <MenuDisplayb />
      <PopularBar />
      <AllFood />
      <Footer />
    </div>
  );
}
