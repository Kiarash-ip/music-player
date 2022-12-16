import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  const [isInvisable, setIsInvisable] = useState(true);
  return (
    <div className="register">
      <div className="register--container">
        <div className="register__hero__form--container">
          <div className="register__hero__image--container">
            <img src="/images/women-headphone.png" />
          </div>
          <div className="register__form--container">
            <div className="register__username--container">
              <FontAwesomeIcon
                icon={faUser}
                className="register__username--icon"
              />
              <input
                placeholder="Username"
                className="register__username--input"
              />
            </div>
            <div className="register__email--container">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="register__email--icon"
              />
              <input placeholder="Email" className="register__email--input" />
            </div>
            <div className="register__password--container">
              <FontAwesomeIcon
                icon={faLock}
                className="register__password--icon"
              />
              <input
                placeholder="Password"
                type={isInvisable ? "password" : "text"}
                className="register__password--input"
              />
              <FontAwesomeIcon
                onClick={() => setIsInvisable((prevState) => !prevState)}
                icon={isInvisable ? faEyeSlash : faEye}
                className="register__password--eye-icon"
              />
            </div>
          </div>
        </div>
        <div className="register__submit--container">
          <button className="register__submit">Sign Up</button>
        </div>
        <div className="register__login--container">
          <span className="register__login--info">Already have Account?</span>
          <Link className="register__login--btn" to="/login">
            Log In
          </Link>
        </div>
        <div className="register__line--container">
          <div className="line-left"></div>
          <span className="register__line__text">Or continue with</span>
          <div className="line-right"></div>
        </div>
        <div className="register__authIcons--container">
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
