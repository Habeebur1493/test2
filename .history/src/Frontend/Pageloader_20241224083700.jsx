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
          <div class="canva-container">
        <iframe 
            src="https://www.canva.com/design/DAGaKnQtz_Y/_aSdZvIzXd8K7McyX1-bGQ/watch?embed" 
            allowfullscreen
            autoplay  
            class="canva-iframe">
        </iframe>
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
