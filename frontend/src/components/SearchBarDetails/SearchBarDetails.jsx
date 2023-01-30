import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { useContext, useEffect, useState } from "react";
import Query from "../../services/Query";
import "./SearchBarDetails.scss";
import UserContext from "../../contexts/UserContext";
import ButtonLike from "../ButtonLike/ButtonLike";
import useModal from "../useModal/useModal";
import Modal from "../Modal/Modal";

export default function SearchBarDetails() {
  const { videos, mapFav, favVideos, updateFav } = useContext(UserContext);
  const { isShowing: isVideoZoomed, toggle: toggleVideoZoom } = useModal();
  const [filterVideos, setFilterVideos] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [videoSelected, setVideoSelected] = useState({});
  const [selectedRadio, setSelectedRadio] = useState(0);

  const radios = [
    {
      name: "Comédie",
      id: 1,
      genre_id: 5,
      category_id: 14,
    },
    {
      name: "Science Fiction",
      id: 2,
      genre_id: 5,
      category_id: 16,
    },
    {
      name: "Aventure",
      id: 3,
      genre_id: 6,
      category_id: 18,
    },
    {
      name: "Western",
      id: 4,
      genre_id: 6,
      category_id: 22,
    },
    {
      name: "Histoire",
      id: 5,
      genre_id: 6,
      category_id: 24,
    },
    {
      name: "Animation",
      id: 6,
      genre_id: 5,
      category_id: 25,
    },
    {
      name: "Espion",
      id: 7,
      genre_id: 5,
      category_id: 26,
    },

    {
      name: "Tous",
      id: 0,
      genre_id: 5,
      category_id: 0,
    },
  ];

  useEffect(() => {
    Query.getFilteredVideos(selectedRadio, filterVideos)
      .then((vid) => setFilteredVideos(mapFav(vid)))
      .catch((err) => console.error(err));
  }, [selectedRadio, filterVideos, favVideos]);

  const hVideoShow = (evt, video) => {
    evt.preventDefault();
    setVideoSelected(video);
    toggleVideoZoom();
  };

  useEffect(() => {
    setVideoSelected({ ...videoSelected, isFav: !videoSelected.isFav });
  }, [updateFav]);

  return (
    <>
      <h2 className="titleSearchBar">Recherche vidéos</h2>
      <div className="search">
        <form>
          <label>
            <input
              type="search"
              name="Recherche"
              placeholder="Titre, genre ..."
              id="idVideo"
              value={filterVideos}
              onChange={(evt) => {
                setFilterVideos(evt.target.value);
              }}
            />
          </label>
        </form>
      </div>
      <div className="containerForm">
        {radios.map((radio) => (
          <figure key={radio.id}>
            <label htmlFor={radio.id}>
              <input
                type="checkbox"
                id={radio.id}
                name={radio.name}
                checked={radio.category_id === selectedRadio}
                onChange={(evt) => setSelectedRadio(evt.target.value)}
                value={radio.category_id}
              />
            </label>

            <figcaption>{radio.name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="YoutubeHome" key={videos.id}>
        {filteredVideos.map((video) => {
          return (
            <div className="YoutubeVideo" key={video.id}>
              <div
                className="over-vids"
                onClick={(evt) => hVideoShow(evt, video)}
                role="presentation"
              />
              <LiteYouTubeEmbed id={video.url} />;
            </div>
          );
        })}
        <Modal
          hide={toggleVideoZoom}
          isShowing={isVideoZoomed}
          title={videoSelected.title}
        >
          <div>
            Do you wanna watch {videoSelected.title}
            <LiteYouTubeEmbed id={videoSelected.url} />
          </div>
          <ButtonLike videoId={videoSelected.id} liked={videoSelected.isFav} />
        </Modal>
      </div>
    </>
  );
}
