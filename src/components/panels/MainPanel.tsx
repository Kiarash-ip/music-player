import React from "react";
import "./mainPanel.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function MainPanel() {
  const navigate = useNavigate();

  function navigateHandler(path: string): void {
    navigate(path);
  }

  return (
    <div className="mainPanel">
      <div className="mainPanel--container">
        <div className="mainPanel__routes--container">
          <Outlet />
        </div>
        <div className="music-player--container">
          <img
            src="/images/yegane.png"
            className="music-player__avatar--image"
          />
          <div className="music-player--info">
            <h5 className="music-player__name">Mohsen Yegane</h5>
            <span className="line">-</span>
            <h6 className="music-player__title">Behet Ghol Midam</h6>
          </div>
          <div className="music-player__range"></div>
          <div className="music-player__controllers--container"></div>
          <div className="music-player__options"></div>
        </div>
        <nav className="navigation">
          <div
            className="navigation__item--container"
            onClick={() => navigateHandler("/panel/home")}
          >
            <img src="/images/home-icon.svg" />
          </div>
          <div
            className="navigation__item--container"
            onClick={() => navigateHandler("/panel/my-musics")}
          >
            <img src="/images/headphone-icon.svg" />
          </div>
          <div className="navigation__item--container">
            <img src="/images/music-settings-icon.svg" />
          </div>
          <div
            className="navigation__item--container"
            onClick={() => navigateHandler("/panel/search")}
          >
            <img src="/images/search-icon.svg" />
          </div>
        </nav>
      </div>
    </div>
  );
}
