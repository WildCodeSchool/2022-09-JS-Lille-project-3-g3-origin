import "./favoris.scss";
import SearchBar from "@components/SearchBar/SearchBar";
import YouTube from "react-youtube";
import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";

export default function Favoris() {
  const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/1").then(({ data }) => {
      setUsers([data]);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/favoris/1").then(({ data }) => {
      setVideos(data);
    });
  }, []);

  return (
    <div className="favoris">
      {users.map((user) => {
        return (
          <ul className="account_favoris" key={user.user_id}>
            <li className="element_account_favoris">Bonjour {user.username}</li>
            <li className="element_account_favoris">
              Accès : {user.premium === 1 ? "premium" : "freemium"}
            </li>
          </ul>
        );
      })}
      <h1>Vos favoris</h1>
      <SearchBar />
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="swiperFavoris"
      >
        {videos.map((video) => {
          return (
            <SwiperSlide className="favorisFilms" key={video.id}>
              <YouTube videoId={video.url} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <NavBar />
    </div>
  );
}
