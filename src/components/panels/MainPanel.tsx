import React, { useState } from "react";
import "./mainPanel.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Player from "../musicPlayerComps/Player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function MainPanel() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function navigateHandler(path: string): void {
    navigate(path);
  }

  function toggleMenuHandler(state: boolean) {
    setOpen(state);
  }

  return (
    <div className="mainPanel">
      <div className="mainPanel--container">
        <div className="mainPanel__routes--container">
          <Outlet />
        </div>
        <div
          className="musicPanel__open__btn--container"
          onClick={() => {
            toggleMenuHandler(true);
            console.log("click");
          }}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="musicPanel__open__btn"
          />
        </div>
        <Player
          open={open}
          toggleMenuHandler={toggleMenuHandler}
          trackList={[
            {
              url: "http://dl.musicparsia.com/00/04/Reza%20Pishro%20-%20Divoone%202.mp3",
            },
          ]}
        />
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
