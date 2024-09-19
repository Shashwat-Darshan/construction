import './image.css';
import img1 from './images_for_vert_slideshow/1.jpg'
import img2 from './images_for_vert_slideshow/2.jpg'
import img3 from './images_for_vert_slideshow/3.jpg'
import img4 from './images_for_vert_slideshow/4.jpg'
import img5 from './images_for_vert_slideshow/5.jpg'
import img6 from './images_for_vert_slideshow/6.jpg'
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.min.js';

const LogoBack = () => {
  const splitSlideshowRef = useRef(null);

  useEffect(() => {
    const initializeSlick = () => {
      const $splitSlideshow = $(splitSlideshowRef.current);
      const $slider = $('.slideshow .slider', $splitSlideshow);
      const maxItems = $('.item', $slider).length;

      let dragging = false;
      let tracking, rightTracking;

      // Clone and create right slideshow
      const $sliderRight = $('.slideshow', $splitSlideshow).clone().addClass('slideshow-right').appendTo($splitSlideshow);
      const rightItems = $('.item', $sliderRight).toArray();
      const reverseItems = rightItems.reverse();
      $('.slider', $sliderRight).html('');
      for (let i = 0; i < maxItems; i++) {
        $(reverseItems[i]).appendTo($('.slider', $sliderRight));
      }

      $slider.addClass('slideshow-left');

      $('.slideshow-left', $splitSlideshow).slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        infinite: true,
        dots: true,
        speed: 1000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
      }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if (currentSlide > nextSlide && nextSlide === 0 && currentSlide === maxItems - 1) {
          $('.slideshow-right .slider', $splitSlideshow).slick('slickGoTo', -1);
          $('.slideshow-text', $splitSlideshow).slick('slickGoTo', maxItems);
        } else if (currentSlide < nextSlide && currentSlide === 0 && nextSlide === maxItems - 1) {
          $('.slideshow-right .slider', $splitSlideshow).slick('slickGoTo', maxItems);
          $('.slideshow-text', $splitSlideshow).slick('slickGoTo', -1);
        } else {
          $('.slideshow-right .slider', $splitSlideshow).slick('slickGoTo', maxItems - 1 - nextSlide);
          $('.slideshow-text', $splitSlideshow).slick('slickGoTo', nextSlide);
        }
      });

      $('.slideshow-right .slider', $splitSlideshow).slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 950,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        initialSlide: maxItems - 1
      });

      $('.slideshow-text', $splitSlideshow).slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 900,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
      });

      // Auto-click function for slick dots
      const startAutoClick = () => {
        const $dots = $('.slick-dots li', $splitSlideshow);
        const clickDot = () => {
          const $currentDot = $dots.filter('.slick-active');
          const currentIndex = $dots.index($currentDot);
          const nextIndex = (currentIndex + 1) % $dots.length;
          $dots.eq(nextIndex).find('button').click();
        };

        // Start clicking every 3 seconds
        const intervalId = setInterval(clickDot, 3000);

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
      };

      startAutoClick();

      // Cleanup function to destroy slick instances
      return () => {
        $('.slideshow-left', $splitSlideshow).slick('unslick');
        $('.slideshow-right .slider', $splitSlideshow).slick('unslick');
        $('.slideshow-text', $splitSlideshow).slick('unslick');
      };
    };

    // Add a delay to ensure DOM elements are available
    const timer = setTimeout(initializeSlick, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='black'>
      <div className="logo-back-container">
      <div className="split-slideshow" ref={splitSlideshowRef}>
        <div className="slideshow">
          <div className="slider">
            <div className="item">
              <img src={img1} alt="Image 1" />
            </div>
            <div className="item">
              <img src={img2} alt="Image 2" />
            </div>
            <div className="item">
              <img src={img3} alt="Image 3" />
            </div>
            <div className="item">
              <img src={img4} alt="Image 4" />
            </div>
            <div className="item">
              <img src={img5} alt="Image 5" />
            </div>
            <div className="item">
              <img src={img6} alt="Image 6" />
            </div>
          </div>
        </div>
        <div className="slideshow-text">
          <div className="item">Foundation</div>
          <div className="item">Super structure</div>
          <div className="item">Facade structure</div>
          <div className="item">Interior</div>
          <div className="item">Finishing</div>
          <div className="item">Completion</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LogoBack;