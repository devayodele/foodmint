import React from "react";
import "./service.css";

export default function Service() {
  const smsIcon = "smsIcon  fas fa-sms";
  const orderCart = "orderCart   fas fa-anchor";
  const storeIcon = "storeIcon  fas fa-route";
  const hotline = "hotline   fas fa-cloud-download-alt ";

  return (
    <div className="serviceSect">
      <button className="serviceBtn">FEATURE</button>
      <h2>WE OFFER THE BEST SERVICE</h2>

      <div id="serviceDiv">
        <div className="serviceOptDiv">
          <div className="serviceOption">
            <div className="smsIconDiv">
              <i className={smsIcon}></i>
            </div>
            <p className="serviceHeaderOpt">Delivery Available</p>
            <p className="servicePara">
              Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.
            </p>
          </div>
          <div className="serviceOption">
            <div className="storeIconDiv">
              <i className={storeIcon}></i>
            </div>
            <p className="serviceHeaderOpt">Our Stores</p>
            <p className="servicePara">
              Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.
            </p>
          </div>
        </div>
        <div id="serviceImg">
          <img
            src="https://themesfamily.com/tm/gatherer/assets/img/service/service.png"
            alt="serviceDelivery"
          />
        </div>
        <div className="serviceOptDiv">
          <div className="serviceOption">
            <div className="orderCartDiv">
              <i className={orderCart}></i>
            </div>
            <p className="serviceHeaderOpt">Order Online</p>
            <p className="servicePara">
              Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.
            </p>
          </div>
          <div className="serviceOption">
            <div className="hotlineDiv">
              <i className={hotline}></i>
            </div>
            <p className="serviceHeaderOpt">Hotline</p>
            <p className="servicePara">
              Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
