import "./PremiumPage.scss";
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
          <h1 key={currentUser.id}>Hello {currentUser.username} </h1>
        </div>
        <YouTube className="video" videoId={video.url} />;
        <div className="presentation">
          <h2> Présentation</h2>
          <p>
            Bienvenue sur notre site <span>Origin's Digital</span> ! Nous sommes
            ravis de vous accueillir sur notre plateforme de diffusion en ligne.
            <br />
            <br />
            Notre site <span>Origin's Digital</span> vous offre un accés limité,
            à une selection de 3 vidéos ( films, séries, documentaire ...) et
            est accessible sur de nombreux appareils et plateformes :
            ordinateurs, téléviseurs, smartphones, tablettes. Vous pouvez
            profiter de nos contenus où que vous soyez.
            <br />
            <br />
            Nous vous proposons également un abonnement. Vous pouvez choisir de
            regarder vos contenus en illimité.
            <br />
            <br />
            Rejoignez notre communauté et découvrez toutes les nouveautés et les
            avantages que nous vous réservons. Nous espérons que vous
            apprécierez votre expérience sur notre site{" "}
            <span>Origin's Digital</span> !
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
                  className="formGroup1"
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
          <img className="logo1" src={logo} alt="logo" />
        </div>
      </div>
    )
  );
}
