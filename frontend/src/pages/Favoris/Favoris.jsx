import YouTube from "react-youtube";
import "./favoris.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
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

  const navigate = useNavigate();

  // TO DO : handle routes with router
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
    if (!currentUser.premium) navigate("/premium");
  }, [isAuthenticated, currentUser]);

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

        <h1>Vos favoris</h1>
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
                <YouTube className="favoris-video" videoId={video.url} />
                <ul>
                  <li className="details-video">
                    <ButtonLike
                      userId={currentUser.id}
                      videoId={video.id}
                      liked={video.isFav}
                    />
                    {video.title}
                  </li>
                  <li className="details-video">Résumé : {video.synopsis}</li>
                  <li className="details-video">
                    Producteur(s): {video.producer}
                  </li>
                  <li className="details-video">Acteur(s) : {video.actor}</li>
                  <li className="details-video">
                    Durée : {video.duration} min
                  </li>
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
    )
  );
}
