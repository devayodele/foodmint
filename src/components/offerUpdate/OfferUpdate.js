import React from "react";
import "./offerUpdate.css";

export default function OfferUpdate() {
  return (
    <div className="offerUpdateDiv">
      <div className="offerUpdate">
        <label htmlFor="offerUpdate">Great Offer And Recent Updates</label>
        <input type="text" placeholder="Your Email" id="offerUpdate" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
