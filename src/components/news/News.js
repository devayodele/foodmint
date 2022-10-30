import React from "react";
import "./news.css";

export default function News() {
  const date = new Date();

  return (
    <div className="newsDiv">
      <button>NEWS</button>
      <p className="newsHeader">OUR RECENT MEALS</p>
      <div className="newsItemsDiv">
        <div className="newsItem">
          <div className="newsCalDiv">
            <i
              className="fa fa-calendar-check-o"
              style={{ marginTop: "5px" }}
            ></i>
            <span className="newsCalDate">
              {`${date.getDate()} ${date.toLocaleString("default", {
                month: "short",
              })}, ${date.getFullYear()}`}
            </span>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZwcZrOFJQGVQRxYoDDZE3hrLJkM5hqNJaA&usqp=CAU"
            alt="foodImage"
          />
          <p>
            <i className="fa fa-user" style={{ color: "#ff7d4d" }}></i> Admin{" "}
            <i className="fa fa-thumbs-up" style={{ color: "#ff7d4d" }}></i>{" "}
            1.3k{" "}
            <i className="far fa-comments" style={{ color: "#ff7d4d" }}></i>{" "}
            1.5k
          </p>
          <h4>Best Food of Steak...</h4>
          <p>
            More recently dummy text ever since Lorem Ipsum is simply dummy text
            of the printing and type setting.....
          </p>
          <h3 className="newsItemFooter">FRESH FOOD</h3>
        </div>
        <div className="newsItem">
          <div className="newsCalDiv">
            <i
              className="fa fa-calendar-check-o"
              style={{ marginTop: "5px" }}
            ></i>
            <span className="newsCalDate">
              {`${date.getDate()} ${date.toLocaleString("default", {
                month: "short",
              })}, ${date.getFullYear()}`}
            </span>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeG_Uo_uSIcSiOB69p1RxVezLDNzpTDlwo9w&usqp=CAU"
            alt="foodImage"
          />
          <p>
            <i className="fa fa-user" style={{ color: "#ff7d4d" }}></i> Admin{" "}
            <i className="fa fa-thumbs-up" style={{ color: "#ff7d4d" }}></i>{" "}
            1.3k{" "}
            <i className="far fa-comments" style={{ color: "#ff7d4d" }}></i>{" "}
            1.5k
          </p>
          <h4>Best Food of Salad...</h4>
          <p>
            More recently dummy text ever since Lorem Ipsum is simply dummy text
            of the printing and type setting.....
          </p>
          <h3 className="newsItemFooter">FRESH FOOD</h3>
        </div>
        <div className="newsItem">
          <div className="newsCalDiv">
            <i
              className="fa fa-calendar-check-o"
              style={{ marginTop: "5px" }}
            ></i>
            <span className="newsCalDate">
              {`${date.getDate()} ${date.toLocaleString("default", {
                month: "short",
              })}, ${date.getFullYear()}`}
            </span>
          </div>
          <img
            src="https://static01.nyt.com/images/2022/05/04/dining/04rest-lucia1/merlin_206155809_769a4f6e-d7ac-4e4d-ad58-c4b7a0a60d40-videoSixteenByNine3000.jpg"
            alt="foodImage"
          />
          <p>
            <i className="fa fa-user" style={{ color: "#ff7d4d" }}></i> Admin{" "}
            <i className="fa fa-thumbs-up" style={{ color: "#ff7d4d" }}></i>{" "}
            1.3k{" "}
            <i className="far fa-comments" style={{ color: "#ff7d4d" }}></i>{" "}
            1.5k
          </p>
          <h4>Best Food of Pizza...</h4>
          <p>
            More recently dummy text ever since Lorem Ipsum is simply dummy text
            of the printing and type setting.....
          </p>
          <h3 className="newsItemFooter">FRESH FOOD</h3>
        </div>
      </div>
    </div>
  );
}
