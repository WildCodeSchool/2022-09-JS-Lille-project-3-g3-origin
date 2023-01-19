import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./buttonLike.scss";

function ButtonLike({ usersId, videosId }) {
  const [liked, setLiked] = useState(false);
  const [button, setButton] = useState({
    user_id: { usersId },
    videos_id: { videosId },
  });

  function handleClick() {
    setLiked(!liked);
    setButton();
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/favoris`, button);
  }

  return (
    <button type="submit" onClick={handleClick} className="buttonLike">
      <FaHeart className={liked ? "is_it_liked" : "is_not_liked"} />
    </button>
  );
}

export default ButtonLike;

ButtonLike.propTypes = {
  usersId: PropTypes.string.isRequired,
  videosId: PropTypes.string.isRequired,
};
