import './after_images.css';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from './images_for_upload_process_output/1.png';
import img2 from './images_for_upload_process_output/2.png';
import img3 from './images_for_upload_process_output/3.png';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = container.querySelectorAll('.fade-text');

    texts.forEach((text, index) => {
      gsap.to(text, {
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play reverse play reverse'
        }
      });

      
    });
  }, []);

  return (
    <div ref={containerRef} className="container">
      <h2>Scroll down</h2>
      <div className="content-wrapper">
        <div className="fade-text">Uploading the images to detect construction site</div>
        <img src={img1} alt="Upload process" className="process-image" />
      </div>
      <div className="content-wrapper">
        <div className="fade-text">Model is analyzing images for which phase does the image</div>
        <img src={img2} alt="Analysis process" className="process-image" />
      </div>
      <div className="content-wrapper">
        <div className="fade-text">Output based on the multiple levels</div>
        <img src={img3} alt="Output process" className="process-image" />
      </div>
    </div>
  );
};

export default App;