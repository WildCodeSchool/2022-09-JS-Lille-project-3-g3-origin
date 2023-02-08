import "./footer.scss";
import Logo from "../../assets/whiteLogo.png";
import Wild from "../../assets/wildLogo.png";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerLogoContainer">
        <img className="footerLogo" src={Logo} alt="logo" />
        <img className="footerLogo" src={Wild} alt="wildLogo" />
      </div>
      <div className="footerTermsPrivacy">
        <a
          className="footerText"
          href="https://www.digital-origin.co.uk/terms-and-policies/"
          target="_blank"
          rel="noreferrer"
        >
          Conditions générales d'utilisation -
        </a>
        <a
          className="footerText"
          href="https://www.digital-origin.co.uk/terms-and-policies/"
          target="_blank"
          rel="noreferrer"
        >
          Politique de confidentialité
        </a>
      </div>
      <div className="footerTextLegal">
        © 2013 - 2023 Origins. Tous droits réservés
      </div>
    </div>
  );
}
