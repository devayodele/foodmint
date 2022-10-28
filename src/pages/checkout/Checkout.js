import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PaystackButton } from "react-paystack";
import "./checkout.css";

export default function Checkout() {
  const totalAmount = useSelector((state) => state.items.totalAmount);

  const publicKey = "pk_test_e919155d17067bbd4eed1003603bf64ce50e7ec3";
  const amount = totalAmount[0] * 100;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZip_Code] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div id="checkoutContainer">
      <div id="checkoutHeaderDiv">
        <div id="checkoutLogoDiv">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/19/12/fork-spoon-and-knife-sign-orange-icon-on-black-vector-13391912.jpg"
            alt="logo"
          />
          <div id="foodMint">
            <span className="food">FOOD</span>
            <span className="mint">MINT</span>
            <span id="checkoutSpan">Checkout</span>
          </div>
        </div>

        <Link to="/cart" id="cartLinkCh">
          <p> Return to cart</p>
        </Link>
      </div>
      <p className="checkoutHeader">Getting Your Order</p>
      <div className="checkout">
        <p>Shipping Information</p>
        <div className="checkout_form">
          <form>
            <div className="checkout_field">
              <label className="label">Name</label>
              <input
                type="text"
                id="name"
                onClick={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="checkout_field">
              <label className="label">Address</label>
              <input
                type="text"
                id="address"
                onClick={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
              />
            </div>

            <div className="checkout_field">
              <label className="label">City</label>
              <input
                type="text"
                id="city"
                onClick={(e) => setCity(e.target.value)}
                placeholder="city"
              />
            </div>
            <div className="location">
              <div className="checkout_field">
                <label className="label">State of Origin</label>
                <select name="state" id="state">
                  <option value="" selected="selected">
                    - Select -
                  </option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="AkwaIbom">AkwaIbom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="FCT">FCT</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamafara</option>
                </select>
              </div>
              <div className="checkout_field zipField">
                <label className="label zip">Zip Code</label>
                <input
                  type="text"
                  id="zip_code"
                  onClick={(e) => setZip_Code(e.target.value)}
                  placeholder="Enter your zip code"
                />
              </div>
            </div>

            <h6 id="contactHeader">Contact Information</h6>
            <div className="checkout_field">
              <label className="label">Email</label>
              <input
                type="text"
                id="email"
                onClick={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="checkout_field">
              <label className="label">Phone</label>
              <input
                type="text"
                id="phone"
                onClick={(e) => setPhone(e.target.value)}
              />
            </div>
          </form>
          <PaystackButton className="paystack_button" {...componentProps} />
        </div>
      </div>
    </div>
  );
}
