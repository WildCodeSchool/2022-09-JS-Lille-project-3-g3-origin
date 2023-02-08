import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "./favoris.scss";
import { useContext } from "react";
import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonLike from "../../components/ButtonLike/ButtonLike";
import NavBar from "../../components/NavBar/NavBar";
import UserContext from "../../contexts/UserContext";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */

export default function Favoris() {
  const { currentUser, isAuthenticated, favVideos } = useContext(UserContext);

  return (
    isAuthenticated &&
    favVideos &&
    currentUser && (
      <div className="favoris">
        <ul className="account-favoris">
          <li className="element-account-favoris">
            Bonjour {currentUser.username}
          </li>
          <li className="element-account-favoris">
            Accès : {currentUser.premium === 1 ? "premium" : "freemium"}
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
          {favVideos.map((video) => {
            return (
              <SwiperSlide className="favoris-films" key={video.id}>
                <div className="heart-in-video">
                  <LiteYouTubeEmbed
                    activatedClass="yt-lite favoris-video"
                    id={video.url}
                  />

                  <ButtonLike
                    userId={currentUser.id}
                    videoId={video.id}
                    liked={video.isFav}
                  />
                </div>

                <ul className="video-details-container">
                  <li className="details-video">
                    <span className="text-bold">{video.title}</span>
                  </li>
                  <li className="details-video">
                    <span className="text-bold">Résumé :</span> {video.synopsis}
                  </li>
                  <li className="details-video">
                    <span className="text-bold">Producteur(s):</span>
                  </li>
                  <li className="details-video">
                    <span className="text-bold">Acteur(s) :</span> {video.actor}
                  </li>
                  <li className="details-video">
                    <span className="text-bold">Durée :</span> {video.duration}{" "}
                    min
                  </li>
                  <li className="details-video">
                    <span className="text-bold">Genre : </span>
                    {video.label_genre}
                  </li>
                  <li className="details-video">
                    <span className="text-bold">Catégorie : </span>
                    {video.label_category}
                  </li>
                </ul>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavBar />
      </div>
    )
  );
}
