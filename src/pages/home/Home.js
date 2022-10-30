import React from "react";
import Header from "../../components/header/Header";
import DropDownMenu from "../../components/dropdownMenu/DropdownMenu";
import Banner from "../../components/banner/Banner";
import MenuDisplay from "../../components/menuDisplay/MenuDisplay";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Testimonial from "../../components/testimonial/Testimonial";
import OfferUpdate from "../../components/offerUpdate/OfferUpdate";
import Experts from "../../components/experts/Experts";
import HourlyMeal from "../../components/hourlyMeal/HourlyMeal";
import News from "../../components/news/News";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <DropDownMenu />
      <Banner />
      <MenuDisplay />
      <About />
      <Service />
      <Testimonial />
      <Experts />
      <OfferUpdate />
      <HourlyMeal />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
