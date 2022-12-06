import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper";
import NavBar from "../../components/NavBar/NavBar";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-enable import/no-unresolved */

export default function Home() {
  return (
    <header className="home">
      <Swiper
        cssMode
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="my-swiper"
      >
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
            alt=""
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/09/23/15/11/2942764.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <div className="img-home">
        <img
          src="https://images.affiches-et-posters.com//albums/3/4661/4661-poster-film-drive.jpg"
          alt=""
        />
      </div>
      <NavBar className="nav-bar-home" />
    </header>
  );
}
