import React from "react";
import "./footer.css";

export default function Footer() {
  const date = new Date();

  return (
    <>
      <div className="footer">
        <div className="footerDiv">
          <div className="foodLogoDiv">
            <div className="foodLogo_">
              <span className="food_">FOOD</span>
              <span className="mint_">MINT</span>
            </div>
            <div className="underlineLeftfl"></div>
            <div className="underlineRightfl"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
              Lorem ip consectetur sit amet .
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed
              eiusmod.
            </p>
          </div>
          <div className="quickLinks">
            <h5>Quick Links</h5>
            <div className="underlineLeftqL"></div>
            <div className="underlineRightql"></div>
            <ul>
              <li>Get Stared </li> <li>Our Team </li> <li>About Us</li>
              <li> Need Helps</li>
              <li> Contact Us</li>
            </ul>
          </div>
          <div className="supportLinks">
            <h5>Support Links</h5>
            <div className="underlineLeftsl"></div>
            <div className="underlineRightsl"></div>
            <ul>
              <li>Our Faq</li>
              <li> Our Service </li>
              <li>Protfolio </li>
              <li>Apps Download</li>
              <li>Our News</li>
            </ul>
          </div>
          <div className="latestNews">
            <h5>Latest News</h5>
            <div className="underlineLeftln"></div>
            <div className="underlineRightln"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed
              eiusmod.
            </p>
            <div className="ltnewsCalDiv">
              <i
                className="fa fa-calendar-check-o"
                style={{ marginTop: "5px" }}
              ></i>
              <span className="ltnewsCalDate">
                {`${date.getDate()} ${date.toLocaleString("default", {
                  month: "short",
                })}, ${date.getFullYear()}`}
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed
              eiusmod.
            </p>
            <div className="ltnewsCalDiv">
              <i
                className="fa fa-calendar-check-o"
                style={{ marginTop: "5px" }}
              ></i>
              <span className="ltnewsCalDate">
                {`${date.getDate()} ${date.toLocaleString("default", {
                  month: "short",
                })}, ${date.getFullYear()}`}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrightDiv">
        <p>&copy;Copyright - All Right Reserved. Designed by Theme Family</p>
      </div>
    </>
  );
}
