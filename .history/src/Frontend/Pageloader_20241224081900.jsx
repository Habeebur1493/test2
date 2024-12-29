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
         <div class="canva-embed">
  <iframe 
    loading="lazy" 
    class="canva-iframe"
    src="https://www.canva.com/design/DAGaKnQtz_Y/_aSdZvIzXd8K7McyX1-bGQ/watch?embed" 
    allowfullscreen="allowfullscreen" 
    allow="fullscreen">
  </iframe>
</div>
<a 
  href="https://www.canva.com/design/DAGaKnQtz_Y/_aSdZvIzXd8K7McyX1-bGQ/watch?utm_content=DAGaKnQtz_Y&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
  target="_blank" 
  rel="noopener">
</a>

        </div>
      ) : (
        <div>
        
        </div>

      )}

    </div>
  );
};

export default App;
