import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./SearchBarDetails.scss";

export default function SearchBarDetails() {
  const [filterVideos, setFilterVideos] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");

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
      name: "all",
      id: 0,
      genre_id: 5,
      category_id: 0,
    },
  ];

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/videos?category_id=${selectedRadio}&needle=${filterVideos}`
      )
      .then(({ data }) => {
        setVideos(
          data.filter((video, id) => {
            return id < 10;
          })
        );
      });
  }, [selectedRadio, filterVideos]);

  return (
    <>

      <div className="Background">
        <h2>Recherche vidéos</h2>
        <div className="search">
          <form>
            <label>

      <h2>Recherche vidéos</h2>
      <div className="search">
        <form onSubmit={resultSearch}>
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
          <figure>
            <label htmlFor={radio.id}>

              <input
                key={radio.id}
                type="checkbox"
                id={radio.id}
                name={radio.name}
                checked={radios === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.value)}
                value={radio.category_id}
              />
            </label>

            <figcaption>{radio.name}</figcaption>
          </figure>
        ))}
      </div>

      {videos.map((video) => {
        return (
          <div className="YoutubeHome" key={video.id}>
            <YouTube videoId={video.url} />
          </div>
        );
      })}
    </>
  );
}
