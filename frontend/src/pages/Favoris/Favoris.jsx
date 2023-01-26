import YouTube from "react-youtube";
import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ButtonLike from "@components/ButtonLike/ButtonLike";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";
import "./favoris.scss";

export default function Favoris() {
  const { currentUser } = useContext(UserContext);
  const [user, setuser] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${currentUser.id}`)
      .then(({ data }) => {
        setuser(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/favoris/${currentUser.id}`)
      .then(({ data }) => {
        setVideos(data);
      });
  }, []);
  return (
    <div className="favoris">
      <ul className="favoris-account" key={user.id}>
        <li className="favoris-user">Bonjour {user.username}</li>
        <li className="favoris-user">
          Accès : {user.premium === 1 ? "premium" : "freemium"}
        </li>
      </ul>

      <h1 className="favoris-title">Vos favoris</h1>
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
                <li className="favoris-details-video">
                  <ButtonLike userId={user.id} videoId={video.id} />
                  {video.title}
                </li>
                <li className="favoris-details-video">
                  Résumé : {video.synopsis}
                </li>
                <li className="favoris-details-video">
                  Producteur(s): {video.producer}
                </li>
                <li className="favoris-details-video">
                  Acteur(s) : {video.actor}
                </li>
                <li className="favoris-details-video">
                  Durée : {video.duration} min
                </li>
                <li className="favoris-details-video">
                  Genre : {video.label_genre}
                </li>
                <li className="favoris-details-video">
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
