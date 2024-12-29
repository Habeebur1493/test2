import React, { useState, useEffect } from "react";
import "./pageloader.css";
import "./page1.gsap.js";
import gsap from "gsap";


const App = () => {
  const [showScreen, setShowScreen] = useState(true);
  

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
          <h1 id="animated-text"></h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
