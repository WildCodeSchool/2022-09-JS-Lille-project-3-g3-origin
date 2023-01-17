/* eslint-disable react/button-has-type */
import "./PremiumPage.scss";
import Registration from "@components/Registration/Registration";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useModal from "@components/useModal/useModal";
import YouTube from "react-youtube";
import Modal from "@components/Modal/Modal";
import logo from "../../assets/logo.png";
import chart from "../../assets/chart.jpg";

export default function PremiumPage() {
  const { isShowing: isPremiumSelectedShowed, toggle: togglePremiumSelected } =
    useModal();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/videos").then(({ data }) => {
      setVideos(
        data.filter((movie, id) => {
          return id < 1;
        })
      );
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="premiumPage">
      <div className="header">
        {" "}
        <img className="logo" src={logo} alt="logo" />
        <Registration className="header" />{" "}
      </div>

      {videos.map((video) => {
        return <YouTube className="video" videoId={video.url} />;
      })}

      <div className="presentation">
        <h2> Presentation</h2>
        <p>
          Bienvenue sur notre site <span>Origin's Digital</span> ! Nous sommes
          ravis de vous accueillir sur notre plateforme de diffusion en ligne.
          <br />
          <br />
          Notre site <span>Origin's Digital</span> vous offre un accés limité, à
          une selection de 3 vidéos ( films, séries, documentaire ...) et est
          accessible sur de nombreux appareils et plateformes : ordinateurs,
          téléviseurs, smartphones, tablettes. Vous pouvez profiter de nos
          contenus où que vous soyez.
          <br />
          <br />
          Nous vous proposons également un abonnement. Vous pouvez choisir de
          regarder vos contenus en illimité.
          <br />
          <br />
          Rejoignez notre communauté et découvrez toutes les nouveautés et les
          avantages que nous vous réservons. Nous espérons que vous apprécierez
          votre expérience sur notre site <span>Origin's Digital</span> !
        </p>
      </div>
      <div className="chart">
        <img className="chart" src={chart} alt="chart" />
      </div>
      <div className="goPremium">
        <button
          value="Go Premium"
          className="goPremium1"
          onClick={togglePremiumSelected}
        >
          DEVENIR PREMIUM
        </button>
      </div>
      <div className="Ok">
        <Modal
          isShowing={isPremiumSelectedShowed}
          hide={togglePremiumSelected}
          title="Registration field :"
        >
          <form>
            <div className="formGroup">
              <input type="text" placeholder="Firstname" />
            </div>
            <div className="formGroup">
              <input type="text" placeholder="Lastname" />
            </div>
            <div className="formGroup">
              <input type="text" placeholder="Adress" />
            </div>
            <div className="formGroup">
              <input type="text" placeholder="City" />
            </div>
            <div className="formGroup">
              <input type="text" placeholder="Credit Card Numbers" />
            </div>
            <div className="formGroup">
              <input type="text" placeholder="CVV" />
            </div>
            <div className="formGroup">
              <input
                type="text"
                placeholder="Expiration Date (Day/Month/Year)"
              />
            </div>
            <div className="formGroup">
              <input
                type="submit"
                value="Confirm"
                onClick={(evt) => {
                  evt.preventDefault();
                  navigate("/home");
                }}
              />
            </div>
          </form>
        </Modal>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
