import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const [isInvisable, setIsInvisable] = useState(true);
  return (
    <div className="login">
      <div className="login--container">
        <div className="login__hero__form--container">
          <div className="login__hero__image--container">
            <img src="/images/women-headphone.png" />
          </div>
          <div className="login__form--container">
            <div className="login__username--container">
              <FontAwesomeIcon
                icon={faUser}
                className="login__username--icon"
              />
              <input
                placeholder="Username"
                className="login__username--input"
              />
            </div>
            <div className="login__password--container">
              <FontAwesomeIcon
                icon={faLock}
                className="login__password--icon"
              />
              <input
                placeholder="Password"
                type={isInvisable ? "password" : "text"}
                className="login__password--input"
              />
              <FontAwesomeIcon
                onClick={() => setIsInvisable((prevState) => !prevState)}
                icon={isInvisable ? faEyeSlash : faEye}
                className="login__password--eye-icon"
              />
            </div>
          </div>
        </div>
        <div className="login__forgot-password">
          <Link to="/forgot-password">Forgot Your Password?</Link>
        </div>
        <div className="login__submit--container">
          <button className="login__submit">Log In</button>
        </div>
        <div className="login__register--container">
          <span className="login__register--info">Don't have an Account?</span>
          <Link className="login__register--btn" to="/">
            Sign Up
          </Link>
        </div>
        <div className="login__line--container">
          <div className="line-left"></div>
          <span className="login__line__text">Or continue with</span>
          <div className="line-right"></div>
        </div>
        <div className="login__authIcons--container">
          <div className="icon--box--container">
            <img src="/images/google-icon.png" />
          </div>
          <div className="icon--box--container">
            <img src="/images/apple-icon.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
