import "./PremiumPage.scss";
import ButtonLogOut from "@components/ButtonLogOut/ButtonLogOut";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import YouTube from "react-youtube";
import Modal from "../../components/Modal/Modal";
import useModal from "../../components/useModal/useModal";
import logo from "../../assets/logo.png";
import chart from "../../assets/chart.jpg";
import UserContext from "../../contexts/UserContext";

export default function PremiumPage() {
  const { currentUser, videos } = useContext(UserContext);
  const { isShowing: isPremiumSelectedShowed, toggle: togglePremiumSelected } =
    useModal();
  const [video, setVideo] = useState();

  useEffect(() => {
    setVideo([videos]); // TO DO : randomize video
  }, [videos]);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.premium) navigate("/home");
  }, [currentUser]);

  return (
    video && (
      <div className="premiumPage">
        <div className="header">
          <img className="logo" src={logo} alt="logo" />
          <h1 key={currentUser.id}>Bonjour {currentUser.username} </h1>
          <ButtonLogOut />
        </div>
        {videos
          .filter((videoFiltered) => videoFiltered.id > 67)
          .map((videoFiltered) => (
            <YouTube
              className="video"
              key={videoFiltered.id}
              videoId={videoFiltered.url}
            />
          ))}
        <div className="presentation">
          <p>
            Bienvenue sur notre site Origin's Digital ! Nous sommes ravis de
            vous accueillir sur notre plateforme de diffusion en ligne.
            <br />
            <br />
            Notre site Origin's Digital vous offre un accés limité, à une
            selection d'une vidéo ( films, séries, documentaire ...) et est
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
            avantages que nous vous réservons. Nous espérons que vous
            apprécierez votre expérience sur notre site Origin's Digital !
          </p>
        </div>
        <div className="chart">
          <img className="chart" src={chart} alt="chart" />
        </div>
        <div className="goPremium">
          <button
            type="button"
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
            title="Champ d'inscription :"
          >
            <form>
              <div className="formGroup">
                <input type="text" placeholder="Prénom" />
              </div>
              <div className="formGroup">
                <input type="text" placeholder="Nom" />
              </div>
              <div className="formGroup">
                <input type="text" placeholder="Adresse" />
              </div>
              <div className="formGroup">
                <input type="text" placeholder="Ville" />
              </div>
              <div className="formGroup">
                <input type="text" placeholder="Carte de crédit" />
              </div>
              <div className="formGroup">
                <input type="text" placeholder="CVV" />
              </div>
              <div className="formGroup">
                <input
                  type="text"
                  placeholder="Date d'Expiration (Mois/Année)"
                />
              </div>
              <div className="formGroup">
                <input
                  className="formGroup1"
                  type="submit"
                  value="Confirmer"
                  onClick={(evt) => {
                    evt.preventDefault();
                    navigate("/home");
                  }}
                />
              </div>
            </form>
          </Modal>
          <img className="logo1" src={logo} alt="logo" />
        </div>
      </div>
    )
  );
}
