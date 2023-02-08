import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import ButtonLike from "../ButtonLike/ButtonLike";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import "./swiperHome.scss";
import UserContext from "../../contexts/UserContext";

export default function SwiperHome() {
  const { videos, setVideos, favVideos, currentUser, mapFav } =
    useContext(UserContext);

  useEffect(() => {
    setVideos(mapFav(videos));
  }, [favVideos]);

  return (
    <div className="home-swiper-top">
      <Swiper
        cssMode
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="my-swiper"
      >
        {videos
          .filter((video) => video.id > 60)
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
        slidesPerView={2}
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
                <h3 className="home-title-swiper">{serie.title}</h3>
                <LiteYouTubeEmbed
                  className="yt-lite home-serie"
                  id={serie.url}
                />
                <ButtonLike
                  userId={currentUser.id}
                  videoId={serie.id}
                  liked={serie.isFav}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>

      <h1 className="home-title">Films</h1>

      <Swiper
        slidesPerView={2}
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
                <h3 className="home-title-swiper">{film.title}</h3>
                <LiteYouTubeEmbed className="yt-lite home-film" id={film.url} />

                <ButtonLike
                  userId={currentUser.id}
                  videoId={film.id}
                  liked={film.isFav}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
