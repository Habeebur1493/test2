import React, { useState, useEffect } from "react";

const App = () => {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScreen(false);
    }, 3000); // Matches animation duration (2s delay + 1s animation)

    return () => clearTimeout(timer); // Cleanup the timer
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
        <div className="home">
          <h1>Welcome to the Homepage</h1>
          <p>This is the main content of your application.</p>
        </div>
      )}
    </div>
  );
};

export default App;
