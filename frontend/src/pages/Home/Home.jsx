import "./home.scss";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import Query from "@services/Query";
import YouTube from "react-youtube";
import Registration from "../../components/Registration/Registration";
import NavBar from "../../components/NavBar/NavBar";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* esLint-enable import/no-unresolved */
import UserContext from "../../contexts/UserContext";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const { currentUser, isAuthenticated } = useContext(UserContext);
  const [test, setTest] = useState([]);

  // console.log(currentUser);
  // console.log(isAuthenticated);

  useEffect(() => {
    axios.get("http://localhost:5000/videos").then(({ data }) => {
      setVideos(
        data.filter((movie, id) => {
          return id < 10;
        })
      );
    });
  }, []);

  const getUsers = async () => setTest(await Query.getUsers());
  useEffect(() => {
    console.log(test);
  }, [test]);
  // console.log(test);

  return (
    <header className="home">
      <input type="button" value="Get users" onClick={getUsers} />
      <Registration />
      <Swiper
        cssMode
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="my-swiper"
      >
        {videos.map((video) => {
          return (
            <SwiperSlide className="YoutubeHome" key={video.id}>
              <YouTube videoId={video.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h2>Films</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="my-free-swiper"
      >
        {videos.map((video) => {
          return (
            <SwiperSlide className="YoutubeHomeFilms" key={video.id}>
              <YouTube videoId={video.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h2>Series</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="my-free-swiper"
      >
        {videos.map((video) => {
          return (
            <SwiperSlide className="YoutubeHomeSeries" key={video.id}>
              <YouTube videoId={video.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <NavBar className="nav-bar-home" />
    </header>
  );
}
