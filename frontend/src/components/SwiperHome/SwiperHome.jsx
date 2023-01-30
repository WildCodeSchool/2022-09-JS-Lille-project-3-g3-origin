import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import ButtonLike from "@components/ButtonLike/ButtonLike";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import "./swiperHome.scss";

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
                <LiteYouTubeEmbed
                  activatedClass="yt-lite full-home-video"
                  id={video.url}
                  title={video.title}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <h2 className="home-title">Séries</h2>

      <Swiper
        slidesPerView={3}
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
              <SwiperSlide
                className="yt-lite home-series-youtube"
                key={serie.id}
              >
                <LiteYouTubeEmbed
                  className="yt-lite home-serie"
                  id={serie.url}
                />
                <ButtonLike userId={11} videoId={serie.id} />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <h1 className="home-title">Films</h1>

      <Swiper
        slidesPerView={3}
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
                <LiteYouTubeEmbed className="yt-lite home-film" id={film.url} />
                <ButtonLike userId={11} videoId={film.id} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
