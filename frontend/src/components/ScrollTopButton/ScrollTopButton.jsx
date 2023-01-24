import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./scrollTopButton.scss";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  const ToggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1200) {
      setVisible(true);
    } else if (scrolled < 1200) {
      setVisible(false);
    }
  };

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", ToggleVisible);

  return (
    <button type="button" className="ButtonScrollTop">
      <FaArrowCircleUp
        onClick={ScrollTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </button>
  );
}

export default ScrollTopButton;
