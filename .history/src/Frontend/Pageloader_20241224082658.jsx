import React, { useState, useEffect } from "react";
import "./Pageloader.css";



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
          
        </div>
      ) : (
        <div>
        <video src="https://www.canva.com/design/DAGaKnQtz_Y/bmW3SaFO2gzyc1FAOYgAQQ/edit?ui=eyJFIjp7IkE_IjoiRSIsIkEiOiIifX0"
        autoPlay loop muted></video>
        </div>

      )}

    </div>
  );
};

export default App;
