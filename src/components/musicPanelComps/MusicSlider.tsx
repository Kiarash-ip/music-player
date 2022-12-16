import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./musicSlider.scss";
import MusicPic from "./MusicPic";

export default function MusicSlider({ title, data }) {
  return (
    <div className="musicSlider--container">
      <span className="musicSlider__title">{title}</span>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((m) => {
          return (
            <SwiperSlide>
              <MusicPic src={m.src} title={m.title} name={m.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
