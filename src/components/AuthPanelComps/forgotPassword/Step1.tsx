import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Step1({ setStepHandler }) {
  return (
    <>
      <h6 className="step1--title">
        Enter your email to recieve an email to reset your password
      </h6>
      <div className="step1__form--container">
        <div className="step1__input--container">
          <FontAwesomeIcon icon={faEnvelope} className="step1__email--icon" />
          <input placeholder="Email" className="step1__email--input" />
        </div>
        <div className="step1__submit--container">
          <button className="step1__submit" onClick={() => setStepHandler(1)}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
