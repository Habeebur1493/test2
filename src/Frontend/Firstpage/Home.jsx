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
    const autoSlide = setInterval(nextSlide, 5000); 
    return () => clearInterval(autoSlide);
  }, []); 

  const animation = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
  });

  if (!banners.length) return <div></div>;

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
                backgroundRepeat: "no-repeat",
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
       <i class='bx bxs-left-arrow'></i>
      </button>
      <button
        className="next-button"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <i class='bx bxs-right-arrow'></i>
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
