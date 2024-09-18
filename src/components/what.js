import React, { useEffect, useState } from 'react';
import './App.css';  // Import the CSS file for styles

function WelcomeMessage() {
  const [fadeProp, setFadeProp] = useState('fade-in');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {  // Adjust this value based on your needs
        setFadeProp('fade-out');
      } else {
        setFadeProp('fade-in');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`welcome-text ${fadeProp}`}>
      Welcome to our page
    </div>
  );
}

export default WelcomeMessage;
