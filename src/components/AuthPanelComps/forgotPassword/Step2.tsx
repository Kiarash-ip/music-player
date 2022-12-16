import React from "react";

export default function Step2() {
  return (
    <>
      <h6 className="step2--title">Enter New Password</h6>
      <div className="step2__form--container">
        <div className="step2__input--container">
          <input placeholder="Password" className="step2__input" />
        </div>
        <div className="step2__input--container">
          <input placeholder="Re-Password" className="step2__input" />
        </div>
      </div>
      <div className="step2__submit--container">
        <button className="step2__submit">Change Password</button>
      </div>
    </>
  );
}
