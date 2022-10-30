import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./reset.css";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="container">
      <div className="logoDiv">
        <img
          className="logo"
          src="https://cdn3.vectorstock.com/i/1000x1000/19/12/fork-spoon-and-knife-sign-orange-icon-on-black-vector-13391912.jpg"
          alt="logo"
        />
      </div>
      <h3 id="header">Reset your password</h3>
      <p id="instruction">
        To reset your password, enter the email address you use to sign in.
      </p>
      <div id="inputContainer">
        <div className="textBox-reset_">
          <span className="envelope">
            <i className="fa fa-envelope" style={{ fontSize: "20px" }}></i>
          </span>
          <input
            type="text"
            id="reset__textBox_"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div id="btnDiv">
          <button onClick={() => sendPasswordReset(auth, email)}>
            Get reset link
          </button>
        </div>
        <div id="linkResetDiv">
          <span>Never mind!</span>
          <Link to="/login" id="linkReset">
            Take me back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
