import "./swiperHome.scss";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SwiperHome() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/videosfilter").then(({ data }) => {
      setVideos(data);
    });
  }, []);

  return (
    <div>
      <Swiper
        cssMode
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="my-swiper"
      >
        {videos
          .filter((video) => video.id > 50)
          .map((video) => {
            return (
              <SwiperSlide className="home-youtube" key={video.id}>
                <YouTube className="home-video" videoId={video.url} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <h2 className="home-title">Séries</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="home-swiper"
      >
        {videos
          .filter((video) => video.genre === "serie")
          .map((serie) => {
            return (
              <SwiperSlide className="home-series-youtube" key={serie.id}>
                <YouTube className="home-video" videoId={serie.url} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <h1 className="home-title">Films</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="home-swiper"
      >
        {videos
          .filter((video) => video.genre === "film")
          .map((film) => {
            return (
              <SwiperSlide className="home-films-youtube" key={film.id}>
                <YouTube className="home-video" videoId={film.url} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
