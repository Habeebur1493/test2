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
          <video src="Marilondon.mp4" autoPlay loop muted className="video"></video>
        </div>
      ) : (
        <div>
        
        </div>

      )}

    </div>
  );
};

export default App;
