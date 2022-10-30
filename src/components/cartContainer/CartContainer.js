import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../pages/userAuth/firebase";
import "./cartContainer.css";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  remove,
  addTotalAmount,
} from "../../store/cartSlice";

export default function CartContainer() {
  const [user, loading, error] = useAuthState(auth);
  const cart = useSelector((state) => state.items.cart);

  const dispatch = useDispatch();
  const randomOrderNo = Math.floor(Math.random() * 100000);
  const ref = useRef(randomOrderNo);

  const subTotalArr = cart.map((item) => item.subTotal);
  const subTotal = subTotalArr.reduce(
    (prevVal, currentVal) => prevVal + currentVal,
    0
  );

  const discount = 500;
  const deliveryCharge = 2600;

  const grandTotal = subTotal + deliveryCharge - discount;

  return (
    <div className="cartContainer">
      <div className="itemCon">
        <div className="cartHeader">
          <div>{"Added Items"}</div>

          <div className="verticalDash"></div>

          {cart.length === 0
            ? "Order Number: N/A"
            : `Order Number: ${ref.current}`}
        </div>
        <div className="itemList">
          {cart.length === 0 ? (
            <>
              <p className="emptyCart">Your cart is empty!</p>
              <p className="addToCart">Try adding to your cart</p>
            </>
          ) : (
            cart.map((item, index) => (
              <>
                <div className="itemDiv" key={item.id}>
                  <div className="firstDiv">
                    <img
                      className="itemImage"
                      src={item.image}
                      alt="itemImage"
                    />
                    <div className="itemDetails">
                      <span>{item.title}</span>
                      <span>{item.label}</span>
                      <span
                        style={{ color: "#a9a9a9" }}
                      >{`NGN${item.price}`}</span>
                    </div>
                  </div>
                  <div className="secondDiv">
                    <div className="quantityDiv">
                      <div
                        className="decrement"
                        onClick={(e) => dispatch(decrement(item))}
                      >
                        <i className="fa fa-minus"></i>
                      </div>

                      <div className="quantityDigit">{item.quantity}</div>
                      <div
                        className="increment"
                        onClick={(e) => dispatch(increment(item))}
                      >
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>
                    <p className="quantityText">Quantity</p>
                  </div>
                  <div className="subTotal">
                    <div>NGN{item.subTotal}</div>
                    <div>Subtotal</div>
                  </div>
                  <div>
                    <i
                      className="fa fa-times"
                      aria-hidden="true"
                      style={{
                        fontSize: "20px",
                        marginBottom: "30px",
                        color: "#B2BEB5",
                      }}
                      onClick={(e) => dispatch(remove(item))}
                    ></i>
                  </div>
                </div>
                <hr></hr>
              </>
            ))
          )}
        </div>
      </div>

      <div className="cartInfo">
        <div className="address">
          <div className="locationIcon">
            <i
              className="fas fa-map-marker-alt"
              style={{ color: "black", size: "40px" }}
            ></i>
          </div>
          <div className="addressBox">
            <h5>Delivery Address</h5>
            <input
              type="text"
              placeholder="Enter your delivery address here"
              autoFocus
              className="input"
            />
          </div>
          <div className="icon">
            <i class="fas fa-pen" style={{ color: "black", size: "40px" }}></i>
          </div>
        </div>
        <div className="paymentBox">
          <div className="payment">
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                height: "40px",
              }}
            >
              {"Payment Information"}
            </h5>
            <div className="icon_pen_">
              <i
                class="fas fa-pen"
                style={{ color: "black", size: "40px" }}
              ></i>
            </div>
          </div>
          <div>
            <form>
              <div className="inputDiv">
                <input
                  type="radio"
                  name="payment"
                  style={{ marginLeft: "47px" }}
                />
                <i
                  className="fab fa-cc-paypal fa-2x"
                  style={{
                    marginLeft: "20px",
                    fontSize: "25px",
                    color: "#ffbf00",
                    fontWeight: "500",
                  }}
                ></i>

                <label
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    marginLeft: "15px",
                  }}
                >
                  {"PayPal"}
                </label>
              </div>
              <br />
              <div className="inputDiv">
                <input
                  type="radio"
                  name="payment"
                  style={{ marginLeft: "47px" }}
                />
                <i
                  className="fab fa-cc-mastercard fa-2x"
                  style={{
                    marginLeft: "20px",
                    fontSize: "25px",
                    color: "#ffbf00",
                    fontWeight: "600",
                  }}
                ></i>
                <label
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    marginLeft: "15px",
                  }}
                >
                  MasterCard
                </label>
              </div>
              <br />
              <div className="inputDiv">
                <input
                  type="radio"
                  name="payment"
                  style={{ marginLeft: "47px" }}
                />
                <i
                  className="fa fa-credit-card"
                  style={{
                    marginLeft: "20px",
                    fontSize: "25px",
                    color: "#ffbf00",
                    fontWeight: "600",
                  }}
                ></i>
                <label
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    marginLeft: "15px",
                  }}
                >
                  Credit Card
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="riderBox">
          <div className="riderHeader">
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                height: "40px",
              }}
            >
              {"Rider Infomation"}
            </h5>
            <div className="icon">
              <i
                className="fas fa-phone-alt "
                style={{ color: "black", size: "40px" }}
              ></i>
            </div>
          </div>
          <div className="riderDetails">
            <div style={{ height: "40px", width: "40px" }}>
              <img
                src={
                  "https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-boy-1487986-1261047.png"
                }
                alt="delivery_boy"
                style={{ height: "40px", width: "40px" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>John Doe</span>
              <span>Age: 25</span>
            </div>
          </div>
        </div>

        <div className="payableAmount">
          <h5>Payable Amount</h5>
          <div className="charges">
            <ul style={{ listStyleType: "circle" }}>
              <li>Subtotal</li>
            </ul>
            <span>{`NGN${subTotal}`}</span>
          </div>
          <div className="charges">
            <ul style={{ listStyleType: "circle" }}>
              <li>Discount</li>
            </ul>
            <span>{`NGN${discount}`}</span>
          </div>
          <div className="charges">
            <ul style={{ listStyleType: "circle" }}>
              <li>Delivery Charge</li>
            </ul>
            <span>{`NGN${deliveryCharge}`}</span>
          </div>
        </div>
        <div className="grandTotal">
          <h5>Grand Total</h5>
          <span className="cost">{`NGN${grandTotal}`}</span>
        </div>
        <Link className="link" to={user ? "/checkout" : "/login"}>
          <div
            id="checkProcede"
            onClick={(event) => dispatch(addTotalAmount(grandTotal))}
          >
            <p>Proceed to checkout</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
