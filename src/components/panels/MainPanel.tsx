import React, { useState } from "react";
import "./mainPanel.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Player from "../musicPlayerComps/Player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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
        <header className="mainPanel__header--container">
          <img src="/images/radio-javan-icon.svg" className="mainPanel__header__logo"/>
          <div className="mainPanel__header__search--container">
            <img
              src="/images/search-icon.svg"
              className="mainPanel__header__search--icon"
            />
            <input
              placeholder="search here"
              className="mainPanel__header__search--input"
            />
          </div>
          <div className="mainPanel__header__auth__btns--container">
            <button className="mainPanel__header__auth__login--btn">Login</button>
            <button className="mainPanel__header__auth__signUp--btn">Sign up</button>
          </div>
        </header>
      <div className="mainPanel--container">
        <div className={`mainPanel__routes--container ${open ? "open" :""}`}>
          <Outlet />
        </div>
        <div
          className="musicPanel__open__btn--container"
          onClick={() => {
            toggleMenuHandler(true);
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
          <div className="navigation__toggle--btn--container">
          <FontAwesomeIcon
            icon={faAngleRight}
            className="navigation__toggle--btn"
          />
          </div>
        </nav>
      </div>
    </div>
  );
}
