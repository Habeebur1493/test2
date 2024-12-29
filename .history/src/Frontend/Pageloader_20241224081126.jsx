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
          
          <div style="position: relative; width: 100%; height: 0; padding-top: 100.0000%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGaKnQtz_Y/_aSdZvIzXd8K7McyX1-bGQ/watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGaKnQtz_Y&#x2F;_aSdZvIzXd8K7McyX1-bGQ&#x2F;watch?utm_content=DAGaKnQtz_Y&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Mari London</a> by rahman

        </div>
      ) : (
        <div>
        
        </div>

      )}

    </div>
  );
};

export default App;
