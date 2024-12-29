import React, { useState, useEffect } from "react";
import "./pageloader.css";
import { gsap } from "gsap";


const App = () => {
  const [showScreen, setShowScreen] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);


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
  };
  
    // The text to animate
    const text = "Mary London!";
  


  return (
    <div>
      {showScreen ? (
        <div className="screen">
          <h1 id="animated-text">
            {text.split("").map((letter, index) => (
              <span className="letter" key={index}>
                {letter}
            </span>
               ))}
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};


export default App; 

