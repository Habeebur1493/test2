import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loader = gsap.timeline();

    loader.to(".loader", {
      scale: 1.5,
      duration: 1,
      ease: "fade.inOut",
    })
    .to(".loader", {
      scale: 0,
      duration: 0.8,
      ease: "fade.inOut",
    })
    .to(".screen", {
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
      onComplete: () => setLoading(false),
    });

    return () => loader.kill();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="screen">
          <h1>MariLondon</h1>
          <div className="loader"></div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Welcome to MariLondon!</h1>
        </div>
      )}
    </div>
  );
};

export default App;
