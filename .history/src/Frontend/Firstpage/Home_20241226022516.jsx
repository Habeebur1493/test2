import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./page1.css";

const Home = ({ banners = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Track animation status

  const nextSlide = () => {
    if (isAnimating) return; // Prevent navigation during animation
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(autoSlide);
  }, [currentIndex]); // Ensure it restarts on index change

  const animation = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
    config: { tension: 170, friction: 26 }, // Smooth easing
    onRest: () => setIsAnimating(false), // Reset animation status after completion
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
        disabled={isAnimating} // Disable button during animation
      >
        &#8592;
      </button>
      <button
        className="next-button"
        onClick={nextSlide}
        aria-label="Next slide"
        disabled={isAnimating} // Disable button during animation
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
            onClick={() => !isAnimating && setCurrentIndex(index)} // Navigate if not animating
            onKeyDown={(e) => e.key === "Enter" && !isAnimating && setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Home;
