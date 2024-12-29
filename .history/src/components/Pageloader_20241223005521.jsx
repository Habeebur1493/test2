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
          <h1>MAX</h1>
          <div className="loader"></div>
          <h1>TIBER</h1>
        </div>
      ) : (
       
      )}
    </div>
  );
};

export default App;
