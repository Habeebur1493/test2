import React, { useState, useEffect } from "react";
import "./pageloader.css";

import gsap from "gsap";


const App = () => {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 3000);

    gsap.to(".letter", {
      rotationY: 360, 
      duration: 1,
      stagger: 0.1, 
      repeat: -1, 
      ease: "power1.inOut",
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showScreen ? (
        <div className="screen">
          <h1> Mary London</h1>
          <br />
          <p>SINCE 2025</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
