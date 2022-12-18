import React, { useState, useEffect } from "react";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./player.scss";

const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);

export default function Player({ open, trackList, toggleMenuHandler }) {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [shuffled, setShuffled] = useState(false);
  const [looped, setLooped] = useState(false);
  let [curTrack, setCurTrack] = useState(0);
  let playlist = [];

  useEffect(() => {
    const audio = new Audio(trackList[curTrack].url);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);

    const setAudioEnd = () => setHasEnded(!hasEnded);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("volumechange", setAudioVolume);
    audio.addEventListener("ended", setAudioEnd);

    setAudio(audio);
    setTitle(trackList[curTrack].title);

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    if (audio != null) {
      audio.src = trackList[curTrack].url;
      setTitle(trackList[curTrack].title);
      play();
    }
  }, [curTrack]);

  useEffect(() => {
    if (audio != null) {
      if (shuffled) {
        playlist = shufflePlaylist(playlist);
      }
      !looped ? next() : play();
    }
  }, [hasEnded]);

  useEffect(() => {
    if (audio != null) {
      pause();
      const val = Math.round((drag * audio.duration) / 100);
      audio.currentTime = val;
    }
  }, [drag]);

  const loop = () => {
    setLooped(!looped);
  };

  const previous = () => {
    const index = playlist.indexOf(curTrack);
    index !== 0
      ? setCurTrack((curTrack = playlist[index - 1]))
      : setCurTrack((curTrack = playlist[playlist.length - 1]));
  };

  const play = () => {
    setIsPlaying(true);
    audio.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  const next = () => {
    const index = playlist.indexOf(curTrack);
    index !== playlist.length - 1
      ? setCurTrack((curTrack = playlist[index + 1]))
      : setCurTrack((curTrack = playlist[0]));
  };

  const shuffle = () => {
    setShuffled(!shuffled);
  };

  const shufflePlaylist = (arr) => {
    if (arr.length === 1) return arr;
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i !== rand))];
  };

  const tagClickHandler = (e) => {
    const tag = e.currentTarget.innerHTML;
    if (!filter.includes(tag)) {
      setFilter([...filter, tag]);
    } else {
      const filteredArray = filter.filter((item) => item !== tag);
      setFilter([...filteredArray]);
    }
  };

  const playlistItemClickHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute("data-key"));
    const index = playlist.indexOf(num);
    setCurTrack((curTrack = playlist[index]));
    play();
  };

  return (
    <div
      className={`music-player--container ${open ? "open" : ""}`}
      onClick={(e) => {
        if (
          !(e.target as HTMLElement).closest(
            ".music-player__controllers--container"
          )
        ) {
          toggleMenuHandler(true);
        }
      }}
    >
      <div
        className="music-player__close--btn--container"
        onClick={(e) => {
          e.stopPropagation();
          toggleMenuHandler(false);
          console.log("click");
        }}
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          className="music-player__close--btn"
        />
      </div>
      <img src="/images/yegane.png" className="music-player__avatar--image" />
      <div className="music-player--info">
        <h5 className="music-player__name">Mohsen Yegane</h5>
        <span className="line">-</span>
        <h6 className="music-player__title">Behet Ghol Midam</h6>
      </div>
      <Progress
        value={slider}
        open={open}
        onChange={(e) => {
          setSlider(e.target.value);
          setDrag(e.target.value);
        }}
        onMouseUp={play}
        onTouchEnd={play}
      />
      <div className="music-player__time--container">
        <span className="music-player__time--current">{`${
          !time ? "0:00" : fmtMSS(time)
        }`}</span>
        <span className="music-player__time--total">{`${
          !length ? "0:00" : fmtMSS(length)
        }`}</span>
      </div>
      <div className="music-player__controllers--container">
        <img src="/images/arrow-left-icon.svg" className="arrow-icon" />

        <div className="play-icon--container">
          {isPlaying ? (
            <FontAwesomeIcon
              icon={faPause}
              onClick={pause}
              className="play-icon"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              onClick={play}
              className="play-icon"
            />
          )}
        </div>
        <img src="/images/arrow-right-icon.svg" className="arrow-icon" />
      </div>
      <div className="music-player__options"></div>
    </div>
  );
}
