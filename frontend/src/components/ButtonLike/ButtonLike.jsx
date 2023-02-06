import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import UserContext from "../../contexts/UserContext";
import Query from "../../services/Query";
import "./buttonLike.scss";

function ButtonLike(props) {
  const { currentUser, updateFav, setUpdateFav } = useContext(UserContext);
  const { videoId, liked } = props;

  const handleClick = () => {
    setUpdateFav(!updateFav);
    Query.handleFav(currentUser.id, videoId);
  };

  return (
    <button type="submit" onClick={handleClick} className="button-like">
      <FaHeart className={liked ? "is_it_liked" : "is_not_liked"} />
    </button>
  );
}

export default ButtonLike;

ButtonLike.propTypes = {
  videoId: PropTypes.number,
  liked: PropTypes.bool,
};

ButtonLike.defaultProps = {
  liked: false,
  videoId: 0,
};
