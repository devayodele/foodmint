import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contactDiv" id="contact_div">
        <button>CONTACT</button>
        <h2>GET IN TOUCH</h2>

        <div className="contact">
          <div className="contactOptions">
            <div className="iconWrapper">
              <i className="far fa-clock"></i>
            </div>
            <div className="contactOption">
              <p>Opening Hour</p>
              <p>08am-5.00pm</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contactOptions">
            <div className="iconWrapper">
              <i className="fa fa-phone"></i>
            </div>
            <div className="contactOption">
              <p>Mobile Number</p>
              <p>+234 813 429 8170</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contactOptions">
            <div className="iconWrapper">
              <i className="fa fa-envelope"></i>
            </div>
            <div className="contactOption">
              <p>Email Address</p>
              <p>demo@food.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <h2>STAY CNNECTED WITH US</h2>
        <input
          type="text"
          name="name"
          className="contactName"
          placeholder="Your Name"
        ></input>
        <input
          type="text"
          name="email"
          className="contactEmail"
          placeholder="Your Email*"
        ></input>
        <input
          type="text"
          name="name"
          className="contactSubject"
          placeholder="Your Subject*"
        ></input>
        <div>
          <textarea
            type="text"
            name="name"
            className="textArea"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="contactFormBtn">SEND MESSAGE</button>
      </div>
    </>
  );
}
