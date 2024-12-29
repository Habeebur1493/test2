import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./loaderstyle.css";





const App = () => {
  const [showScreen, setShowScreen] = useState(true);

  // Helper function to split text into individual letters
  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="letter">
        {char}
      </span>
    ));

  // Part 1: Animation for spinning letters
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");

    const animation = gsap.fromTo(
      letters, 
      { rotationY: 0 },
      {
        rotationY: 360,
        duration: 1,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.1,
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  // Part 2: Screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showScreen ? (
        <div className="screen">
          <div className="text-container">
            <div className="text">{splitText("Mary")}</div>
            <div className="loader"></div>
            <div className="text">{splitText("London")}</div>
          </div>
        </div>
      ) : (
        <div>
         
        </div>
      )}
    </div>
  );
};

export default App;
