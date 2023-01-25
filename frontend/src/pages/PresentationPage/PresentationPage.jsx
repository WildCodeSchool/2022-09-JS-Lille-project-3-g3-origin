import "./presentationPage.scss";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import UserContext from "../../contexts/UserContext";
import Registration from "../../components/Registration/Registration";
import chart from "../../assets/chart.jpg";
import outsideMovie from "../../assets/outsideMovie.png";
import Logo from "../../assets/logo.png";
import popcorn from "../../assets/popcorn.svg";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";

export default function PresentationPage() {
  const { isAuthenticated, currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  // TO DO : handle routes with router
  useEffect(() => {
    if (isAuthenticated && currentUser.premium) navigate("/home");
    if (isAuthenticated) navigate("/premium");
  }, [isAuthenticated, currentUser]);

  return (
    <div className="LoginPage">
      <div className="presentationPage">
        <div className="textPresentationPage">
          <h2>Bienvenue sur Origins Digital ! </h2>

          <br />
          <h3>
            Origins Digital est une nouvelle plateforme où vous pourrez regarder
            vos programmes favoris !
          </h3>
          <br />
          <h3>
            Dévouvrez ou alors re-découvrez une selection variées de Films,
            Séries et bien plus encore !
          </h3>
          <br />
          <h2>Vous souhaitez passer en Premium ? </h2>
          <br />
          <h3>
            Souscrivez à notre offre premium et bénéficiez d'un accès illimité à
            notre catalogue !
          </h3>
          <br />
          <Registration />
        </div>
        <div className="imagePresentationPage">
          <img className="logoPresentationPage" src={Logo} alt="logo" />
          <div className="typeWriterPresentation">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: [
                  "Qu'avez-vous envie de regarder en ce moment ?",
                  "Un film ?",
                  "Ou alors une série ?",
                ],
              }}
            />
          </div>
          <img className="popcorn" src={popcorn} alt="popcorn" />
        </div>
      </div>
      <div className="presentationOfPremium">
        <div className="textOfPremium">
          <h2>Pourquoi souscrire à notre offre premium ?</h2>
          <br />
          <h3>Accès illimité à notre catalogue.</h3>
          <br />
          <h3>Accès à vos favoris.</h3>
          <br />
          <h3>Créer un compte personnalisé.</h3>
          <br />
          <h3>Voici un exemple &#10132;</h3>
          <br />
        </div>
        <img className="backgroundSampleHome" src={chart} alt="Background" />
      </div>
      <div className="presentationOfProfile">
        <div className="textOfProfile">
          <h2>Toujours pas convaincu pour l'offre premium ?</h2>
          <br />
          <h3>
            Profitez de notre offre gratuite et commencez à personnaliser votre
            profil avec vos films et séries !
          </h3>
          <br />
          <h3>
            Avec votre compte personnalisé, vous pourrez sauvegarder vos films
            et séries et les retrouver dans votre propre liste de lecture !
          </h3>
          <br />
        </div>
        <img className="outsideMovie" src={outsideMovie} alt="OutsideMovie" />
      </div>
      <ScrollTopButton />
    </div>
  );
}
