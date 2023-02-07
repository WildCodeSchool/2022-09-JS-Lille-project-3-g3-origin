import "./modal.scss";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Modal({ isShowing, hide, title, ...props }) {
  return isShowing
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <h4 className="modal-title">{title}</h4>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">{props.children}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Modal.defaultProps = {
  title: "",
};

export default Modal;
