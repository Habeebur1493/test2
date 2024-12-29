import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./LetterSpin.css"; // External CSS file

const LetterSpin = () => {
  useEffect(() => {
    // Animate each letter using GSAP
    gsap.to(".letter", {
      rotationY: 360, // Spin effect
      duration: 1,
      stagger: 0.1, // Delay between each letter
      repeat: -1, // Infinite loop
      ease: "power1.inOut",
    });
  }, []);

  // The text to animate
  const text = "Spin Me!";

  return (
    <h1 id="animated-text">
      {text.split("").map((letter, index) => (
        <span className="letter" key={index}>
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default LetterSpin;
