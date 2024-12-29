import React, { useState, useEffect } from "react";
import "./pageloader.css";

import gsap from "gsap";


const App = () => {
  const [showScreen, setShowScreen] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 3000);


    const text = "Spin Me!";
        const h1 = document.getElementById("animated-text");
        h1.innerHTML = text
            .split("")
            .map((h1) => `<span class="h1">${h1}</span>`)
            .join("");

    gsap.to(".h1", {
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
          
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
