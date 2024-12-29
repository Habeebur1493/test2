import React, { useState, useEffect } from "react";
import "./pageloader.css";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [showScreen, setShowScreen] = useState(true);


  useGSAP(() => {
    gsap.to
  })

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
           <h1>Mary London</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
