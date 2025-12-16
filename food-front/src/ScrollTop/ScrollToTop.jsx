import { useState, useEffect } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollTop} className="scrollBtn">
          ⬆ Top
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
