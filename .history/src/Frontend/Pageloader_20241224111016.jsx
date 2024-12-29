import React, { useState, useEffect } from "react";
import "./pageloader.css";

const App = () => {
  const [showScreen, setShowScreen] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);



  //Part2

  const LetterSpin = () => {
    useEffect(() => {
      
      gsap.to(".letter", {
        rotationY: 360, 
        duration: 1,
        stagger: 0.1, 
        repeat: -1, 
        ease: "power1.inOut",
      });
    }, []);
  
    
    const text = "Spin Me!";


  
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
