import React, { useState, useEffect } from "react";
import "./login.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
  loginWithEmailAndPassword,
  googleProvider,
} from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard", { replace: true });
  }, [loading, user]);

  return (
    <div className="container">
      <div className="logoDiv">
        <img
          className="logo"
          src="https://cdn3.vectorstock.com/i/1000x1000/19/12/fork-spoon-and-knife-sign-orange-icon-on-black-vector-13391912.jpg"
          alt="logo"
        />
      </div>
      <h3 id="header">Log in to FoodMint</h3>
      <p id="instruction">Enter your email address and password.</p>
      <div id="inputContainer">
        <div className="textBox_login_">
          <span className="envelope">
            <i className="fa fa-envelope" style={{ fontSize: "20px" }}></i>
          </span>
          <input
            type="text"
            id="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="textBox_login_">
          <span className="envelope">
            <i className="fa fa-lock" style={{ fontSize: "20px" }}></i>
          </span>
          <input
            type="password"
            id="password__textBox_"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="forgotLink">
          <Link to="/reset" className="link">
            Forgot your password?
          </Link>
        </div>
        <div className="btnDiv_login">
          <button
            className="login__btn"
            onClick={() => loginWithEmailAndPassword(email, password)}
          >
            Log in
          </button>
          <button
            className="login__google"
            onClick={() => {
              signInWithGoogle(auth, googleProvider);
            }}
          >
            Login with Google
          </button>
        </div>
        <div className="linkDiv">
          <span>Don't have an account?</span>
          <Link className="link" to="/register">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
