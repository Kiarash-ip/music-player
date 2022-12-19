import React from "react";
import MusicSlider from "../musicPanelComps/MusicSlider";
import "./homePanel.scss";

const playlistData = [
  {
    title: "Party",
    src: "/images/party-image.png",
  },
  {
    title: "Gym",
    src: "/images/woman-gym.png",
  },
  {
    title: "Wedding",
    src: "/images/wedding-image.png",
  },
  {
    title: "Fall",
    src: "/images/fall-image.png",
  },
];

const recentlyPlayedData = [
  {
    title: "Batel",
    name: "Shadmehr Aghili",
    src: "/images/shadmehr.png",
  },
  {
    title: "Batel",
    name: "Shadmehr Aghili",
    src: "/images/shadmehr.png",
  },
  {
    title: "Batel",
    name: "Shadmehr Aghili",
    src: "/images/shadmehr.png",
  },
  {
    title: "Batel",
    name: "Shadmehr Aghili",
    src: "/images/shadmehr.png",
  },
  {
    title: "Batel",
    name: "Shadmehr Aghili",
    src: "/images/shadmehr.png",
  },
];

const newMusicData = [
  {
    title: "Nashod",
    name: "Mohsen Yegane",
    src: "/images/yegane.png",
  },
  {
    title: "Nashod",
    name: "Mohsen Yegane",
    src: "/images/yegane.png",
  },
  {
    title: "Nashod",
    name: "Mohsen Yegane",
    src: "/images/yegane.png",
  },
  {
    title: "Nashod",
    name: "Mohsen Yegane",
    src: "/images/yegane.png",
  },
  {
    title: "Batel",
    name: "Mohsen Yegane",
    src: "/images/shadmehr.png",
  },
];

export default function HomePanel() {
  return (
    <div className="homePanel">
      <div className="homePanel--container">
        {/* <header className="homePanel__header">
          <div className="homePanel__header--title--container">
            <img
              src="/images/radio-javan-icon.svg"
              className="homePanel__header--title--icon"
            />
            <h4 className="homePanel__header--title">radio javan</h4>
          </div>
          <div className="homePanel__header--user--container">
            <img
              src="/images/user-icon.svg"
              className="homePanel__header--user--icon"
            />
          </div>
        </header> */}
        <MusicSlider title="Playlist" data={playlistData} />
        <div className="music-hero__image--container">
          <img
            src="/images/music-hero-image.png"
            className="music-hero__image"
          />
        </div>
        <MusicSlider title="Recently Played" data={recentlyPlayedData} />
        <MusicSlider title="New Music" data={newMusicData} />
      </div>
    </div>
  );
}
