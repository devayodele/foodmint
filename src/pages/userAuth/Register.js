import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");

    if (!email) alert("Please enter email");

    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard", { replace: true });
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
      <p id="header">Create a FoodMint account</p>
      <p id="instruction">Sign up with your email and a password.</p>

      <div className="textBox">
        <span className="envelope">
          <i className="fa fa-envelope" style={{ fontSize: "20px" }}></i>
        </span>
        <input
          type="text"
          id="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>
      <div className="textBox">
        <span className="envelope">
          <i className="fa fa-lock" style={{ fontSize: "20px" }}></i>
        </span>
        <input
          type="password"
          id="password__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div className="btnDiv">
        <button id="register__btn" onClick={register}>
          Register
        </button>

        <button id="register__google" onClick={signInWithGoogle}>
          Register with Google
        </button>
      </div>

      <div className="linkDiv">
        Already have an account?{" "}
        <Link className="link" to="/Login">
          Log in
        </Link>{" "}
      </div>
    </div>
  );
}
