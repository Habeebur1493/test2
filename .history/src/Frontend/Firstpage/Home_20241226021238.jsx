import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./page1.css";

const Home = ({ banners = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(autoSlide);
  }, []); // Removed currentIndex to optimize

  const animation = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
  });

  if (!banners.length) return <div>No banners available</div>;

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <animated.div
          className="slider-content"
          style={{ ...animation, display: "flex" }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </animated.div>
      </div>
      <button
        className="prev-button"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        className="next-button"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#8594;
      </button>
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${index + 1}`}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            onKeyDown={(e) => e.key === "Enter" && setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Home;
