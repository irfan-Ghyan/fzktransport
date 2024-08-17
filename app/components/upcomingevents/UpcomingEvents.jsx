'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// import useUpcomingEventsData from '../useUpcomingEventsData';
import CalendarPopup from '../calendarpopup/CalendarPopup';
import StaningsPopup from '../standingspopup/StandingsPopup';
import RaceResultsPopup from '../raceresultspopup/RaceResultsPopup';
import whatsapp from '../../../public/assets/images/whatsapp.png';
import Image from 'next/image';



const UpcomingEvents = () => {
  // const { domes, loading } = useUpcomingEventsData();
  const [isCalendarPopupOpen, setIsCalendarPopupOpen] = useState(false);
  const [isStandingsPopupOpen, setIsStandingsPopupOpen] = useState(false);
  const [isRaceResultsPopupOpen, setIsRaceResultsPopupOpen] = useState(false);


  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const openCalendarPopup = () => setIsCalendarPopupOpen(true);
  const closeCalendarPopup = () => setIsCalendarPopupOpen(false);

  const openStandingsPopup = () => setIsStandingsPopupOpen(true);
  const closeStandingsPopup = () => setIsStandingsPopupOpen(false);

  const openRaceResultsPopup = () => setIsRaceResultsPopupOpen(true);
  const closeRaceResultsPopup = () => setIsRaceResultsPopupOpen(false);

  return (
    <div className="relative w-full h-[750px] max-w-full overflow-hidden flex justify-center items-center">
      {domes.map((dome, index) => (
        <div
          key={index}
          className="absolute flex justify-center items-center w-full h-full bg-black bg-opacity-30 lg:p-10 xl:p-20 sm:p-4"
          style={{
            backgroundImage: `url(${dome.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col items-center md:items-center justify-between xl:justify-end h-full max-w-7xl mx-auto pt-10 md:py-8">
            <div className='flex flex-col items-center md:items-start justify-between pb-20 md:px-8 md:py-4'>
              <div className='w-[340px] md:w-full xl:w-full text-center md:text-left'>
                <h2 className="text-[24px] lg:text-[54px] mb-4 text-white font-black font-orbitron">{dome.title}</h2>
                <p className="text-[14px] lg:text-[18px] mb-4 text-white font-jura">{dome.description}</p>
              </div>
              <div className="button-slanted py-4">
                <Link
                  href="/"
                  className="w-[300px] h-[44px] lg:w-[475px] px-8 py-3 bg-opacity-50 button border-[1px] border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D00746] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
                >
                  <span className="button-slanted-content">LEARN MORE ABOUT VIRTUAL GP</span>
                </Link>
              </div>
              <div className="w-full flex justify-center flex-wrap md:justify-start xl:justify-start py-8 gap-x-4 ">
                <div className="button-slanted">
                  <button
                    href="/"
                    className="w-[160px] lg:w-[233px] h-[48px] xl:h-[48px] px-4 py-3 button font-jura font-bold text-white bg-gradient-to-r from-[#D00746] to-[#7E51F8] rounded-tl-lg rounded-br-lg"
                  >
                    <span className="button-slanted-content">BOOK ONLINE</span>
                  </button>
                </div>
                <div className="mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                  <Link href="/explore" className="button-slanted w-[233px] h-[44px] px-4 py-6 button text-white font-jura font-bold bg-[#1DB054] flex items-center justify-center rounded-tl-lg rounded-br-lg">
                    <span className="button-slanted-content md:text-[13px] lg:text-[18px] text-white font-bold font-jura">BOOK THROUGH</span>
                    <Image src={whatsapp} alt={whatsapp} width={24} height={24} className="w-[24px] h-[24px] ml-2" />
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-wrap justify-center md:justify-center xl:justify-center mt-6 mb-20 xl:mt-20 px-8 gap-x-2">
                <div className="">
                  <button
                    onClick={openRaceResultsPopup}
                    className="button-slanted w-full md:w-[200px]lg:w-[233px] h-[50px] xl:h-[50px] px-4 lg:px-8 py-3 button border-[1px] border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D00746] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
                  >
                    <span className="button-slanted-content text-[14px] lg:text-[18px] text-white font-bold font-jura">RACE RESULTS</span>
                  </button>
                </div>
                <div className="">
                  <button
                    onClick={openCalendarPopup}
                    className=" button-slanted w-full md:w-[200px] lg:w-[233px] h-[50px] px-4 lg:px-[40px] py-3 bg-opacity-50 button border-[1px] border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D00746] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
                  >
                    <span className="button-slanted-content md:text-[14px] lg:text-[18px] xl:text-[18px] text-white font-bold font-jura">CALENDAR</span>
                  </button>
                </div>
                <div className=" mt-[40px] md:mt-[0px] lg:mt-[0px] xl:mt-[0px]">
                  <button
                    onClick={openStandingsPopup}
                    className="button-slanted w-full md:w-[200px] lg:w-[233px] h-[50px] px-[40px] lg:px-8 py-1 bg-opacity-50 button border-[1px] border-white font-jura font-bold text-white hover:bg-gradient-to-r ml-2 hover:from-[#D00746] hover:to-[#7E51F8] transition duration-300 rounded-tl-lg rounded-br-lg hover:border-0"
                  >
                    <span className="button-slanted-content text-[14px] lg:text-[18px] text-white font-bold font-jura">STANDINGS</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isCalendarPopupOpen && <CalendarPopup onClose={closeCalendarPopup} />}
      {isStandingsPopupOpen && <StaningsPopup onClose={closeStandingsPopup} />}
      {isRaceResultsPopupOpen && <RaceResultsPopup onClose={closeRaceResultsPopup} />}
    </div>
  );
};

export default UpcomingEvents;


