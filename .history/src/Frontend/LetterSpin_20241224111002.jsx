import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./pageloader.css";





  return (
    <h1 id="animated-text">
      {text.split("").map((letter, index) => (
        <span className="letter" key={index}>
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default LetterSpin;
