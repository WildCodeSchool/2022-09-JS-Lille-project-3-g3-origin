import { useEffect, useState } from "react";
import "./search.scss";
import NavBar from "../../components/NavBar/NavBar";

export default function Search() {
  const [movies, setMovies] = useState([{ name: "default" }]);

  useEffect(() => {
    fetch("http://localhost:5000/videos")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div className="search">
      <h1>{movies[0].name}</h1>
      <NavBar />
    </div>
  );
}

// function youtube() {
//   const { videos, setVideos } = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:5000/videos").then(({ data }) => {
//       setVideos(data);
//     });
//   }, []);
//   return (
//     <div className="Toto">
//       <h1>Project fullstack</h1>
//       <ul>
//         {videos.map((video) => {
//           return (
//             <li>
//               <YouTube videoId={video.source} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
