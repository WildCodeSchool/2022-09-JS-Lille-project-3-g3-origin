import { FaHeart } from "react-icons/fa";
import { useState, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import UserContext from "../../contexts/UserContext";
import "./buttonLike.scss";

function ButtonLike(props) {
  const { currentUser } = useContext(UserContext);
  const { videoId } = props;
  const [liked, setLiked] = useState(false);
  const [button] = useState({
    video_id: videoId,
    user_id: currentUser.id,
  });

  function handleClick() {
    setLiked(!liked);
    axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/favoris/${currentUser.id}`,
      button
    );
  }

  return (
    <button type="submit" onClick={handleClick} className="buttonLike">
      <FaHeart className={liked ? "is_it_liked" : "is_not_liked"} />
    </button>
  );
}

export default ButtonLike;

ButtonLike.propTypes = {
  videoId: PropTypes.number.isRequired,
};
