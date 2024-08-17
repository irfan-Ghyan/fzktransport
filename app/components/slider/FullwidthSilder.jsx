'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import slide from '../../../public/assets/images/slide1.png';
import slide1 from '../../../public/assets/images/slide1.png';
import slide2 from '../../../public/assets/images/slide1.png';
import slide3 from '../../../public/assets/images/slide1.png';

const FullWidthSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '20%', 
    appendDots: dots => (
      <div
        style={{
          bottom: '-50px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '10%', 
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '5%', 
        }
      }
    ]
  };

  return (
    <div className="slider-wrapper h-auto py-[40px] lg:py-[80px]">
      <h1 className="text-[32px] md:text-[54px] mb-4 text-white font-black text-center font-orbitron">WHAT TO EXPECT</h1>
      <div className="slider-container py-4">
        <Slider {...settings}>
          <div className="slide">
            <Image src={slide} alt="Slide1" width={1200} height={569} />
          </div>
          <div className="slide">
            <Image src={slide1} alt="Slide2" width={1200} height={569} />
          </div>
          <div className="slide">
            <Image src={slide2} alt="Slide3" width={1200} height={569} />
          </div>
          <div className="slide">
            <Image src={slide3} alt="Slide4" width={1200} height={569} />
          </div>
        </Slider>
      </div>
    
      <style jsx>{`
        .slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-bottom: 50px;
        }
        .slider-heading {
          text-align: center;
          color: white;
          font-size: 36px;
          margin-top: 20px;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
        }
        .slider-container {
          position: relative;
          width: 100%;
        }
        .slide {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 20px;
        }
        :global(.slick-dots) {
          position: absolute;
          bottom: -30px;
          width: 100%;
          display: flex !important;
          justify-content: center;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        :global(.slick-dots li) {
          margin: 0 5px;
        }
        :global(.custom-dot) {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          border: 1px solid #ccc;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        :global(.slick-dots li.slick-active .custom-dot) {
          width: 14px;
          height: 14px;
          opacity: 1;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default FullWidthSlider;
