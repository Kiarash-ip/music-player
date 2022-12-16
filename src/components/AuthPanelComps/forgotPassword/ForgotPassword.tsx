import React, { useState } from "react";
import { Link } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import "./forgotPassword.scss";

export default function ForgotPassword() {
  const [step, setStep] = useState(0);

  function setStepHandler(s: number): void {
    setStep(s);
  }

  return (
    <div className="forgot-password">
      <div className="forgot-password--container">
        <h4 className="forgot-password__title">Forgot Password</h4>
        {step === 0 ? (
          <Step1 setStepHandler={setStepHandler} />
        ) : step === 1 ? (
          <Step2 />
        ) : (
          <></>
        )}
        <div className="forgot__login--container">
          <span className="forgot__login--info">Already have Account?</span>
          <Link to="/login" className="forgot__login--btn">
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
