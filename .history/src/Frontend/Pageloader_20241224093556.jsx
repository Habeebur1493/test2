import React, { useState, useEffect } from "react";
import "./pageloader.css";
import "./pageloader.js"
import { useGSAP } from "@gsap/react";


useGSAP(() => {
  gsap.to("h1", {
    duration: 1,
    top: "0%",
    ease: "power2.inOut",
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
          <h1> Mary London</h1>
          <br />
          <p>SINCE 2025</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
