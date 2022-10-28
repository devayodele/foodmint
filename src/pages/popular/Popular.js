import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MobileNav from "../../components/mobileNav/MobileNav";
import PopularAll from "../../components/popularAll/PopularAll";
import PopularFood from "../../components/popularFood/PopularFood";
import Header from "../../components/header/Header";
import MenuDisplayb from "../../components/menuDisplayb/MenuDisplayb";
import Footer from "../../components/footer/Footer";

export default function Popular() {
  const [loading, setLoading] = useState(true);
  const { mealCat } = useParams();
  const loadingHandler = (val) => {
    setLoading(val);
  };

  useEffect(() => {
    let timeoutId;
    if (loading === true) {
      timeoutId = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <div>
      <Header />
      <MobileNav />
      <MenuDisplayb loading={loadingHandler} />
      <PopularAll />
      {loading ? <div className="loader"></div> : <PopularFood />}
      <Footer />
    </div>
  );
}
