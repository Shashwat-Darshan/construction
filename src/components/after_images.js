
import './after_images.css'; // Make sure to include your CSS file
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from './images_for_upload_process_output/1.png';
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const boxes = container.querySelectorAll('.box');
    const texts = container.querySelectorAll('.fade-text');

    boxes.forEach((box, index) => {
      // Box animation
      gsap.to(box, {
        x: 300,
        scrollTrigger: {
          trigger: box,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top'
        }
      });

      // Text fade animation
      gsap.to(texts[index], {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: box,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play reverse play reverse'
        }
      });
    });
  }, []);

  return (
    <div ref={containerRef}>
      <h2>Scroll down</h2>
      <div className="box"></div>
      <div className="fade-text">Uploading the images to detect construction site</div>
      <img src={img1} alt="this 1" />
      <div className="box"></div>
      <div className="fade-text">Model is analyzing images for which phase does the image</div>
      <div className="box"></div>
      <div className="fade-text">Output base on the multiple levels</div>
    </div>
  );
};

export default App;