import React, { useState, useEffect } from 'react';
import './intro.css'; // CSS for the fade effect

const FadeText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade effect after the component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust delay as needed
  }, []);

  return (
    <div className={`fade-text ${isVisible ? 'visible' : ''}`}>
      This is a fade-in text effect!
    </div>
  );
};

export default FadeText;
