'use client';

import React, { useRef, useState, useEffect } from 'react';
import CardComponent from './cardcomponent/CardComponent';
import Link from 'next/link';
import Image from 'next/image';
import leftArrow from '../../../../public/assets/icons/left.png';
import rightArrow from '../../../../public/assets/icons/right.png';

const Experience = () => {
  const scrollContainerRef = useRef(null);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const sliderWidth = 273 + 16;
  useEffect(() => {
    const fetchExperiences = async () => {
      const data = [
        { title: 'Urban/City Buses', description: 'Operate within cities, serving commuters with frequent stops at designated bus stops. These buses often run on fixed schedules and routes connecting various neighborhoods business districts and major landmarks.', imageUrl: '/assets/images/dome/bus1.jpeg' },
        { title: 'Intercity/Long-Distance Buses', description: 'Provide transportation between cities or regions often covering longer distances with fewer stops. These buses typically offer more comfortable seating and amenities catering to travelers making longer trips.', imageUrl: '/assets/images/dome/bus2.jpeg' },
        { title: 'Shuttle Service', description: 'These are specialized bus services that operate on specific routes, such as between airports and city centers or between large venues and parking lots. They are often used for short, frequent trips.', imageUrl: '/assets/images/dome/bus3.jpeg' },
        { title: 'Charter Buses', description: 'Rented buses used for specific events or group travel. These buses are not part of a regular schedule but are hired for particular trips such as school trips corporate outings or tourist excursions. ', imageUrl: '/assets/images/dome/bus4.jpeg' },
        { title: 'Express Buses', description: 'Operate on routes with limited stops designed to move passengers quickly between key locations such as from a suburb to a downtown area.', imageUrl: '/assets/images/dome/bus6.jpeg' },
        { title: 'Long-Distance Buses', description: 'Provide transportation between cities or regions often covering longer distances with fewer stops. These buses typically offer more comfortable seating and amenities catering to travelers making longer trips.', imageUrl: '/assets/images/dome/bus7.jpeg' },
      ];
      setExperiences(data);
      setLoading(false);
    };

    fetchExperiences();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const handleScroll = () => {
        if (!isScrolling) {
          const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

          if (scrollContainer.scrollLeft >= maxScrollLeft) {
            scrollContainer.scrollLeft = 0;
          } else if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = maxScrollLeft - sliderWidth;
          }
        }
      };

      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isScrolling, sliderWidth]);

  const scrollNext = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      setIsScrolling(true);
      scrollContainer.scrollBy({
        left: sliderWidth,
        behavior: 'smooth',
      });
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  const scrollPrev = () => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      setIsScrolling(true);
      scrollContainer.scrollBy({
        left: -sliderWidth,
        behavior: 'smooth',
      });
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full md:pr-6 relative py-[40px] md:py-[10px] lg:py-[40px]">

      <div className='md:flex justify-between mt-[36px] md:mb-[41px]'>
        <div>
          <h1 className='text-[14px] md:text-[24px] text-[#ff0a01] font-black font-jura'>
            SERVICES <br />
            <span className='text-[32px] md:text-[54px] text-gray-900 font-black font-orbitro'>OUR EXPERTISE</span>
          </h1>
        </div>
        <div className="flex top-buttons items-center">
          <div className='mt-8 md:mt-0 hidden xl:flex w-65 h-45'>
            <button
              onClick={scrollPrev}
              className="cursor-pointer flex items-center justify-center px-6 py-4 ml-2 font-jura font-bold text-white bg-gray-500 hover:bg-[#ff0a01] rounde-full "
            >
              <Image src={leftArrow} alt="arrow" width={24.15} height={24.29} className='w-[24.15px] h-[24.29px]' />
            </button>
          </div>
          <div className='mt-8 md:mt-0 hidden xl:flex w-65 h-45 '>
            <button
              onClick={scrollNext}
              className="cursor-pointer flex items-center justify-center px-6 py-4 ml-2 font-jura font-bold text-white bg-[#ff0a01] hover:bg-gray-500 rounde-full"
            >
              <Image src={rightArrow} alt="arrow" width={24.15} height={24.29} className='w-[24.15px] h-[24.29px]' />
            </button>
          </div>
        </div>
      </div>
      <div className="scroll-container flex justify-between overflow-hidden my-6" ref={scrollContainerRef}>
        {[...experiences, ...experiences, ...experiences].map((experience, index) => (
          <div key={index} className="card-wrapper w-[330px] md:w-[286px] lg:w-[286px]" style={{ minWidth: '286px', marginRight: '16px' }}>
            <CardComponent
              title={experience.title}
              description={experience.description}
              imageUrl={experience.imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="xl:hidden flex justify-center mt-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <button
            key={idx}
            onClick={idx === 0 ? scrollPrev : scrollNext} 
            className={`w-4 h-4 rounded-full mx-1 ${idx === 0 ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div className='py-8'>
          <Link href="/explore" className="w-[200px] cursor-pointer px-2 py-[7px] lg:py-[13px] md:py-[13px] font-jura font-normal md:font-bold bg-gradient-to-r from-[#F56545] to-[#ff0a01] text-white ml-2 transition duration-300 flex items-center justify-center relative overflow-hidden rounded-full">
            <span className=''>SEE MORE</span>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .scroll-container {
          scroll-snap-type: x mandatory;
        }
        .card-wrapper {
          scroll-snap-align: start;
        }
        @media (max-width: 1024px) {
          .top-buttons {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
