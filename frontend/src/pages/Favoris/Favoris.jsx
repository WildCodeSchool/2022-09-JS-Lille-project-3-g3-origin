import "./favoris.scss";
import SearchBar from "@components/SearchBar/SearchBar";
import { Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import NavBar from "../../components/NavBar/NavBar";

export default function Favoris() {
  return (
    <div className="favoris">
      <h1>Favoris</h1>
      <SearchBar />
      <h2>Films</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="swiperFavoris"
      >
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://cassiopee1.e-monsite.com/medias/album/avatar.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://cassiopee1.e-monsite.com/medias/album/avatar.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
      </Swiper>
      <h3>Séries</h3>
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        className="swiperFavoris"
      >
        <SwiperSlide>
          <img
            src="http://le-souffle-creatif.com/wp-content/uploads/2015/04/The-100-TV-Series-HD-Poster-Download.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.etsystatic.com/15963200/r/il/c0624b/3244002369/il_1588xN.3244002369_6p8l.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://le-souffle-creatif.com/wp-content/uploads/2015/04/The-100-TV-Series-HD-Poster-Download.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.etsystatic.com/15963200/r/il/c0624b/3244002369/il_1588xN.3244002369_6p8l.jpg"
            alt=""
            className="img"
          />
        </SwiperSlide>
      </Swiper>

      <NavBar />
    </div>
  );
}
