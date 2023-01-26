import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./buttonLike.scss";

function ButtonLike(props) {
  const { usersId, videoId } = props;
  const [liked, setLiked] = useState(false);
  const [button] = useState({
    videos_id: videoId,
    user_id: usersId,
  });

  function handleClick() {
    setLiked(!liked);
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/favoris/6`, button);
  }

  return (
    <button type="submit" onClick={handleClick} className="buttonLike">
      <FaHeart className={liked ? "is_it_liked" : "is_not_liked"} />
    </button>
  );
}

export default ButtonLike;

ButtonLike.propTypes = {
  videoId: PropTypes.number,
  userId: PropTypes.number,
};
