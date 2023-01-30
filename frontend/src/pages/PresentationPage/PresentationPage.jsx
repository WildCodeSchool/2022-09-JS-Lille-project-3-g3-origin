import "./presentationPage.scss";
import Typewriter from "typewriter-effect";
import Registration from "../../components/Registration/Registration";
import chart from "../../assets/chart.jpg";
import outsideMovie from "../../assets/outsideMovie.png";
import Logo from "../../assets/logo.png";
import ScrollTopButton from "../../components/ScrollTopButton/ScrollTopButton";

export default function PresentationPage() {
  return (
    <div className="LoginPage">
      <div className="presentationPage">
        <div className="textPresentationPage">
          <h2 className="titleTextPresentation">
            Bienvenue sur Origins Digital !{" "}
          </h2>

          <br />
          <h3 className="sentenceTextPresentation">
            Origins Digital est une nouvelle plateforme où vous pourrez regarder
            vos programmes favoris !
          </h3>
          <br />
          <h3 className="sentenceTextPresentation">
            Dévouvrez ou alors re-découvrez une selection variées de Films,
            Séries et bien plus encore !
          </h3>
          <br />
          <h2 className="titleTextPresentation">
            Vous souhaitez passer en Premium ?{" "}
          </h2>
          <br />
          <h3 className="sentenceTextPresentation">
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
                  "N'oubliez pas les 🍿👀📽 !",
                ],
              }}
            />
          </div>
        </div>
      </div>
      <div className="presentationOfPremium">
        <div className="textOfPremium">
          <h2 className="titleTextPresentation">
            Pourquoi souscrire à notre offre premium ?
          </h2>
          <br />
          <h3 className="sentenceTextPresentation">
            Accès illimité à notre catalogue.
          </h3>
          <br />
          <h3 className="sentenceTextPresentation">Accès à vos favoris.</h3>
          <br />
          <h3 className="sentenceTextPresentation">
            Créer un compte personnalisé.
          </h3>
          <br />
          <h3 className="sentenceTextPresentation">
            Voici un tableau pour vous aider à faire votre choix &#10132;
          </h3>
          <br />
        </div>
        <img className="backgroundSampleHome" src={chart} alt="Background" />
      </div>
      <div className="presentationOfProfile">
        <div className="textOfProfile">
          <h2 className="titleTextPresentation">
            Toujours pas convaincu pour l'offre premium ?
          </h2>
          <br />
          <h3 className="sentenceTextPresentation">
            Profitez de notre offre gratuite et commencez à personnaliser votre
            profil avec vos films et séries !
          </h3>
          <br />
          <h3 className="sentenceTextPresentation">
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
