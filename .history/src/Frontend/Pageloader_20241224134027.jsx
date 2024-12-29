import React, { useState, useEffect } from "react";
import "./pageloader.css";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [showScreen, setShowScreen] = useState(true);


  useGSAP(() => {
    gsap.to(".h1",{

    }

    )
  })

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
            <div class="text-container">
              <span class="text">Hello</span>
              <span class="text">World</span>
               <span class="text">GSAP</span>
            </div>

        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
