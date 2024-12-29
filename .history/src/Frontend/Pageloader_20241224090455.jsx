import React, { useState, useEffect } from "react";
import "./Pageloader.css";
import { gsap } from "gsap";

useGSAP(() => {

  gsap.from(".h1", {
    
    duration: 2,
    rotate: 360,
  });
}

);

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
          <h1> Mary London</h1><br />
          <p>SINCE 2025</p>
        </div>
      ) : (
        <div>
        
        </div>

      )}

    </div>
  );
};

export default App;
