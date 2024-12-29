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

  
  return (
    <div>
      {showScreen ? (
        <div className="screen">
           <h1>Loading...</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;