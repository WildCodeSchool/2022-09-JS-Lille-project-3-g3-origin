import SearchBar from "@components/SearchBar/SearchBar";
import YouTube from "react-youtube";
import "./favoris.scss";
import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";
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
  const { currentUser, isAuthenticated } = useContext(UserContext);

  // console.log(currentUser);
  // console.log(isAuthenticated);

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

      <NavBar />
    </div>
  );
}
