import React from "react";
import "./myMusicPanel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const categoriesData = [
  {
    title: "PlayLists",
    iconSrc: "playList",
  },
  {
    title: "Songs",
    iconSrc: "songs",
  },
  {
    title: "Liked",
    iconSrc: "heart",
  },
  {
    title: "My Files",
    iconSrc: "folder",
  },
  {
    title: "Artists",
    iconSrc: "mic",
  },
  {
    title: "Albums",
    iconSrc: "album",
  },
  {
    title: "Videos",
    iconSrc: "video",
  },
];

export default function MyMusicsPanel() {
  return (
    <div className="myMusicPanel">
      <div className="myMusicPanel--container">
        <header className="myMusicPanel__header">
          <h4 className="myMusicPanel__header--title">My Music</h4>
        </header>
        <div className="myMusicPanel__search--container">
          <img
            src="/images/search-icon.svg"
            className="myMusicPanel__search__icon"
          />
          <input
            placeholder="Artists, Songs, and More"
            className="myMusicPanel__search__input"
          />
        </div>
        <div className="myMusicPanel__folders--category">
          {categoriesData.map((cat) => {
            return (
              <div className="myMusicPanel__category__item--container">
                <img
                  src={`/images/${cat.iconSrc}-icon.svg`}
                  className="myMusicPanel__category__item--icon"
                />
                <h5 className="myMusicPanel__category__item--title">
                  {cat.title}
                </h5>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="myMusicPanel__category__item--angle"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
