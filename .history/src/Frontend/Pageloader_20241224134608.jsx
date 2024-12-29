import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "./pageloader.css";

const App = () => {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    const animation = gsap.fromTo(
      ".text",
      { rotation: 0 },
      {
        rotation: 90,
        duration: 1,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.1,
      }
    );

    return () => {
      animation.kill(); // Cleanup animation on component unmount
    };
  }, []);

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
            <span className="text">Hello</span>
            <span className="text">World</span>
            <span className="text">GSAP</span>
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
