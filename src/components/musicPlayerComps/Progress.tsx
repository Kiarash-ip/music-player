import React from "react";
import "./progress.scss";

const Progress = ({ value, open, onChange, onMouseUp, onTouchEnd }) => {
  return (
    <div className={`progress--container ${open ? "" : "close"}`}>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={value}
        className="progress__slider"
        id="myRange"
        onChange={onChange}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        style={{
          background: `linear-gradient(90deg, #FA7F02 ${Math.floor(
            value
          )}%, #fff ${Math.floor(value)}%)`,
        }}
      />
    </div>
  );
};

export default Progress;
