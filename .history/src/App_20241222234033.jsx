import React, { useEffect, useState } from "react";

const FadeInComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={isLoaded ? "fade-in" : ""}>
      <h1>Welcome to the Page!</h1>
      <p>This content fades in when the page loads.</p>
    </div>
  );
};

export default FadeInComponent;