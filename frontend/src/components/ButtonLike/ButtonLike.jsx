import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import "./buttonLike.scss";

function ButtonLike() {
  const [like, setLike] = useState(false);
  const isfavoris = false;

  useEffect(() => {
    axios.put("http://localhost:5000/favoris").then(({ data }) => {
      setLike(data);
    });
  }, []);

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        setLike(!like);
      }}
    >
      <FaHeart className={isfavoris ? "is_it_like" : "is_not_like"} />
    </button>
  );
}

export default ButtonLike;
