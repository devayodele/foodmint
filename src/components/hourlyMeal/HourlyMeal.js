import React from "react";
import "./hourlyMeal.css";

export default function HourlyMeal() {
  return (
    <div className="hourly">
      <button>HOUR</button>
      <h2 id="hourlyHeader">OUR HOURLY MEAL</h2>

      <p className="hourlyPara">
        Lorem elementum Sed congue nisl dolorSed congue nisl dolor Lorem
        elementum Sed congue nisl dolorSed.
      </p>
      <div className="hourlyItemBox">
        <div className="hourlyItem">
          <h2 className="hourlyItemHeader">BREAKFAST</h2>
          <img
            className="hourlyItemImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1RuW19Kq5ynSW3C_d_8wreOSGqq2w9MjuA&usqp=CAU"
            alt="breakfastPic"
          />
          <div className="mealDotDiv">
            <div className="mealDot"></div>
            <div className="mealDot"></div>
            <div className="mealDot"></div>
          </div>
          <p>
            <span className="hourlyItemPrice">$ 20.9 </span>/month
          </p>
          <div className="mealDotDiv">
            <div className="mealDot"></div>
            <div className="mealDot"></div>
            <div className="mealDot"></div>
          </div>
          <p>
            <span className="hourlyOpenings">Mon - Thu </span>: 6am - 12am
          </p>
          <p>
            <span className="hourlyOpenings">Fri </span>: 8am - 1pm
          </p>
          <p>
            <span className="hourlyOpenings">Sat </span>: 7am - 3pm
          </p>
          <p> Sun : All Day </p>
          <p>
            <span className="hourlySupport">Basic</span>: Support On
          </p>
          <div className="hourlyBookingDiv">
            <button className="hourlyBooking">BOOKING NOW</button>
          </div>
        </div>
        <div className="hourlyItem">
          <h2 className="hourlyItemHeader">LUNCH</h2>

          <img
            className="hourlyItemImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1RuW19Kq5ynSW3C_d_8wreOSGqq2w9MjuA&usqp=CAU"
            alt="breakfastPic"
          />
          <div className="mealDotDiv">
            <div className="mealDot"></div>
            <div className="mealDot"></div>
            <div className="mealDot"></div>
          </div>
          <p>
            <span className="hourlyItemPrice">$ 20.9 </span>/month
          </p>
          <div className="mealDotDiv">
            <div className="mealDot"></div>
            <div className="mealDot"></div>
            <div className="mealDot"></div>
          </div>
          <p>
            <span className="hourlyOpenings">Mon - Thu </span>: 6am - 12am
          </p>
          <p>
            <span className="hourlyOpenings">Fri </span>: 8am - 1pm
          </p>
          <p>
            <span className="hourlyOpenings">Sat </span>: 7am - 3pm
          </p>
          <p> Sun : All Day </p>
          <p>
            <span className="hourlySupport">Basic</span>: Support On
          </p>
          <div className="hourlyBookingDiv">
            <button className="hourlyBooking">BOOKING NOW</button>
          </div>
        </div>
        <div className="hourlyItem">
          <h2 className="hourlyItemHeader">DINNER</h2>

          <img
            className="hourlyItemImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF1RuW19Kq5ynSW3C_d_8wreOSGqq2w9MjuA&usqp=CAU"
            alt="breakfastPic"
          />
          <div className="mealDotDiv">
            <div className="mealDot"></div>
            <div className="mealDot"></div>
            <div className="mealDot"></div>
          </div>
          <p>
            <span className="hourlyItemPrice">$ 20.9 </span>/month
          </p>
          <div className="mealDotDiv">
            <div className="mealDot"></div>
            <div className="mealDot"></div>
            <div className="mealDot"></div>
          </div>
          <p>
            <span className="hourlyOpenings">Mon - Thu </span>: 6am - 12am
          </p>
          <p>
            <span className="hourlyOpenings">Fri </span>: 8am - 1pm
          </p>
          <p>
            <span className="hourlyOpenings">Sat </span>: 7am - 3pm
          </p>
          <p> Sun : All Day </p>
          <p>
            <span className="hourlySupport">Basic</span>: Support On
          </p>
          <div className="hourlyBookingDiv">
            <button className="hourlyBooking">BOOKING NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
