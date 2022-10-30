import React, { useRef, useEffect } from "react";
import CartContainer from "../../components/cartContainer/CartContainer";
import "./cart.css";
import Header from "../../components/header/Header";
import MobileNav from "../../components/mobileNav/MobileNav";
import Footer from "../../components/footer/Footer";

export default function Cart() {
  const randomOrderNo = Math.floor(Math.random() * 100000);
  const ref = useRef(randomOrderNo);

  useEffect(() => {
    ref.current = randomOrderNo;
  }, []);

  return (
    <div className="cartPageDiv">
      <Header />
      <MobileNav />
      <CartContainer />
      <Footer />
    </div>
  );
}
