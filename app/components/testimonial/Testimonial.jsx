

'use client';

import React, { useRef, useState } from 'react';
import Profile from './profile/Profile';
import Image from 'next/image';
import leftArrow from '../../../public/assets/icons/left.png';
import rightArrow from '../../../public/assets/icons/right.png';


export default function Testimonial() {
  const scrollContainerRef = useRef(null);

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const testimonials = [
    { title: 'Annette Black', description: 'I finally opened the package and used the system today. It is gorgeous, and I can tell you took great pride in building it. I really appreciate it.', imageUrl: '/assets/images/profile.png' },
    { title: 'Marvin McKinney', description: 'Sturdy enclosure, but the game lacks a reset button, which means you have to turn it off and on again to play another game.', imageUrl: '/assets/images/profile.png' },
    { title: 'Robert Fox', description: 'Love the racing games on this cabinet. It is tall enough for a 6-foot person and easy to use. The cabinet also looks great.', imageUrl: '/assets/images/profile.png' },
    { title: 'Annette Black', description: 'I finally opened the package and used the system today. It is gorgeous, and I can tell you took great pride in building it. I really appreciate it.', imageUrl: '/assets/images/profile.png' },
    { title: 'Marvin McKinney', description: 'Sturdy enclosure, but the game lacks a reset button, which means you have to turn it off and on again to play another game.', imageUrl: '/assets/images/profile.png' },
    { title: 'Robert Fox', description: 'Love the racing games on this cabinet. It is tall enough for a 6-foot person and easy to use. The cabinet also looks great.', imageUrl: '/assets/images/profile.png' },
    { title: 'Annette Black', description: 'I finally opened the package and used the system today. It is gorgeous, and I can tell you took great pride in building it. I really appreciate it.', imageUrl: '/assets/images/profile.png' },
  ];

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300 + 16, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -(300 + 16), behavior: 'smooth' });
    }
  };


  const goToEvent = (index) => {
    setCurrentEventIndex(index);
    const scrollX = index * 300;
    scrollContainerRef.current.scrollLeft = scrollX;
  };

  return (
    <div className="w-full overflow-hidden relative flex justify-center items-center py-[40px]">
      <div className="max-w-7xl w-full px-4 md:px-8">
        <div className="mx-auto py-8">
          <div className="text-end"></div>
          <div className="md:flex md:justify-between items-cente mt-[36px] lg:mb-[41px]">
            <div>
              <h1 className="text-[32px] md:text-[54px] text-white font-normal font-orbitron">
                TESTIMONIAL
              </h1>
              <p className="text-[14px] md:text-[24px] text-white font-NORMAL font-JURA">
                  THE MAIN REASON FOR YOUR CHOICE IS OUR BUS
                </p>
            </div>
            <div className="top-buttons flex items-center">
              <div className="mt-[20px] md:mt-[0px] w-65 h-45">
                <button
                  onClick={scrollPrev}
                  className="cursor-pointer flex items-center justify-center px-6 py-4 ml-2 font-jura font-bold text-white border-2 border-opacity-50 rounde-full hover:bg-gray-800 hover:border-[0px] "
                >
                  <Image src={leftArrow} alt="arrow" width={12} height={11} />
                </button>
              </div>
              <div className="mt-[20px] md:mt-[0px] w-65 h-45">
                <button
                  onClick={scrollNext}
                  className="cursor-pointer flex items-center justify-center px-6 py-4 ml-2 font-jura font-bold text-white border-2 border-opacity-50 rounde-full hover:bg-gray-800 hover:border-[0px] "
                >
                  <Image src={rightArrow} alt="arrow" width={12} height={11} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="scroll-container flex justify-between overflow-hidden my-6" ref={scrollContainerRef}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-wrapper2">
                <Profile
                  title={testimonial.title}
                  description={testimonial.description}
                  imageUrl={testimonial.imageUrl}
                />
                {index === 0 && (
                  <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 flex mb-4">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToEvent(idx)}
                        className={`bg-[#ffffff] opacity-${currentEventIndex === idx ? 100 : 30} hover:opacity-100 w-2 h-2 rounded-full flex justify-center items-center mx-1`}
                        style={{ transition: 'opacity 0.3s' }}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
