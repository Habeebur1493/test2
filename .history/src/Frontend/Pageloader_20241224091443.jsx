import React, { useState, useEffect } from "react";
import "./Pageloader.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP,Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);

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
