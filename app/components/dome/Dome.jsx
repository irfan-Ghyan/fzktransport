
'use client';

import React, { useState, useEffect } from 'react';

const Dome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const domes = [
    { imageUrl: '/assets/images/dome/bus1.jpeg' },
    { imageUrl: '/assets/images/dome/bus2.jpeg' },
    { imageUrl: '/assets/images/dome/bus3.jpeg' },
    { imageUrl: '/assets/images/dome/bus4.jpeg' },
    { imageUrl: '/assets/images/dome/bus6.jpeg' },
    { imageUrl: '/assets/images/dome/bus7.jpeg' },
  ];

  const cardsToShow = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust the timing as needed

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % domes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + domes.length) % domes.length);
  };

  // To create the infinite effect, we need to handle wrapping of the slides
  const getSlidesToShow = () => {
    let slides = [];
    for (let i = 0; i < cardsToShow; i++) {
      slides.push(domes[(currentSlide + i) % domes.length]);
    }
    return slides;
  };

  const visibleDomes = getSlidesToShow();

  return (
    <div className="flex justify-center items-center">
      <div className='w-full max-w-7xl px-4 md:px-8'>
        <div className='pt-[40px] text-center'>
          <h1 className='text-[32px] md:text-[54px] text-[#ff0a01] font-normal font-orbitron'>
            GALLERY
          </h1>
        </div>
        <div className="relative w-full overflow-hidden flex items-center py-[40px]">
          <button onClick={prevSlide} className="p-4 bg-gray-600 text-white absolute left-0 z-10 hover:bg-[#ff0a01]">&lt;</button>
          <div className="flex w-full overflow-hidden justify-center">
            {visibleDomes.map((dome, index) => (
              <div
                key={index}
                className="w-[400px] gap-x-4 shadow-lg transition-transform transform hover:scale-105 mx-2"
              >
                <img
                  src={dome.imageUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="p-4 bg-gray-600 text-white absolute right-0 z-10 hover:bg-[#ff0a01]">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Dome;
