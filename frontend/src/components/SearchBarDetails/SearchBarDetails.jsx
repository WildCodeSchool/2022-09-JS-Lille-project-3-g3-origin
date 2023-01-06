import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./SearchBarDetails.scss";

export default function SearchBarDetails() {
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
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/videos?category_id=${selectedRadio}`)
      .then(({ data }) => {
        setVideos(
          data.filter((video, id) => {
            return id < 10;
          })
        );
      });
  }, [selectedRadio]);

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
        {videos.map((video) => {
          return (
            <div className="YoutubeHome" key={video.id}>
              <YouTube videoId={video.url} />
            </div>
          );
        })}
      </div>
    </>
  );
}
