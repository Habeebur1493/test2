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

  const text = "Loading...";

  


  
  return (
    <div>
      {showScreen ? (
        <div className="screen">
           <h1 id="animated-text">
            {text.split("").map((letter, index) => (<span className="letter" key={index}>{letter}</span>))}
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
