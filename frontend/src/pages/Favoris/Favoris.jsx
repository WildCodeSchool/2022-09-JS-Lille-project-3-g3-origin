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
import "./favoris.scss";

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
          <ul className="account-favoris" key={user.id}>
            <li className="element-account-favoris">Bonjour {user.username}</li>
            <li className="element-account-favoris">
              Accès : {user.premium === 1 ? "premium" : "freemium"}
            </li>
          </ul>
        );
      })}
      <NavBar />
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
        className="favoris-swiper"
      >
        {videos.map((video) => {
          return (
            <SwiperSlide className="favoris-films" key={video.id}>
              <YouTube className="favoris-video" videoId={video.url} />
              <ul>
                <li className="details-video">{video.title}</li>
                <li className="details-video">Résumé : {video.synopsis}</li>
                <li className="details-video">
                  Producteur(s): {video.producer}
                </li>
                <li className="details-video">Acteur(s) : {video.actor}</li>
                <li className="details-video">Durée : {video.duration} min</li>
                <li className="details-video">Genre : {video.label_genre}</li>
                <li className="details-video">
                  Catégorie : {video.label_category}
                </li>
              </ul>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
