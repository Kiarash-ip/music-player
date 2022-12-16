import React from "react";
import "./musicPic.scss";

export default function MusicPic({ src, title, name }) {
  return (
    <div className="musicPic">
      <img src={src} className="musicPic__image" />
      <h6 className="musicPic__title">{title}</h6>
      <span className="musicPic__name">{name}</span>
    </div>
  );
}
