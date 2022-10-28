import React from "react";
import "./about.css";

export default function About() {
  return (
    <div id="aboutDiv">
      <div className="aboutQuotes">
        <button>ABOUT US</button>
        <h1 id="aboutHeader">WELCOME TO OUR FOOD MINT</h1>
        <p>
          Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod
          tempor sit amet elit dolor sit amet elit.Lorem ipsum dolor sit amet
          elit , consectetur adipiscing , sed eiusmod tempor sit amet elit sit
          amet elit.Lorem ipsum dolor sit amet elit , consectetur adipiscing ,
          sed eiusmod tempor sit amet elit.
        </p>
        <div className="aboutCards">
          <div className="aboutCard">
            <img
              src="https://emojigraph.org/media/facebook/pizza_1f355.png"
              alt="pizza"
            />
            <p>
              Professional
              <br />
              Food Rate
            </p>
          </div>
          <div className="aboutCardMid">
            <img
              src="https://img.icons8.com/emoji/2x/hamburger-emoji.png"
              alt="hamburger"
            />
            <p>Best Quality</p>
          </div>
          <div className="aboutCard">
            <img
              style={{ color: "orange" }}
              src="data:image/png;base64,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"
              alt="support"
            />
            <p>Online Support</p>
          </div>
        </div>
      </div>
      <div className="deliveryDriver">
        <img
          src="https://themesfamily.com/tm/gatherer/assets/img/about/about.jpg"
          alt="delivery_driver"
        />
      </div>
    </div>
  );
}
