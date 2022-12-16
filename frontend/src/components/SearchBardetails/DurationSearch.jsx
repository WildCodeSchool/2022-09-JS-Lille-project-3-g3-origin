import "./DurationSearch.scss";

export default function durationSearch() {
  return (
    <>
      <div className="search">
        <input type="search" placeholder="Titre, genre ..." />
      </div>
      <div className="range">
        <label>
          Durée
          <input type="range" id="duration" min="00:30:00" max="03:00:00" />
        </label>
      </div>
      <div className="radio">
        <label>
          Films <input type="radio" id="duration" name="Films" />
        </label>

        <label>
          Séries <input type="radio" id="duration" name="Serie" />
        </label>

        <label>
          Documentaires <input type="radio" id="duration" name="Documentaire" />
        </label>
      </div>

      <div className="categories">
        <li className="scrolling">
          Catégories
          <ul className="underScrolling">
            <li>
              <label>
                <input type="radio" className="categogie" />
                Drame
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Comédie
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Horreur
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Science fiction
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Fantastique
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="categogie" />
                Aventure
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Action
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Guerre
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Policier
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Western
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" /> Nature
              </label>
            </li>
            <li>
              <label>
                <input type="radio" className="categogie" />
                Histoire
              </label>
            </li>
          </ul>
        </li>
      </div>
      <div>
        <h2>Films</h2>
        <span className="affiche">
          <img
            src="https://fr.web.img5.acsta.net/pictures/16/06/16/12/01/072037.jpg"
            alt=""
          />
          <img
            src="https://www.kideaz.com/wp-content/uploads/2020/04/kideaz-famille-addams-affiche-films-cultes.jpg"
            alt=""
          />

          <img
            src="https://www.francetvinfo.fr/pictures/HfbCNtBbyAJFRQ3e5oICK_wyyi8/fit-in/720x/2018/11/28/php14pT6E.jpg"
            alt=""
          />
          <img
            src="https://fr.web.img4.acsta.net/pictures/22/01/20/09/55/4582630.jpg"
            alt=""
          />

          <img
            src="https://lecranpop.com/wp-content/uploads/2020/01/img-affiche-film-bohemian-rhapsody.jpg"
            alt=""
          />
        </span>
      </div>
    </>
  );
}
