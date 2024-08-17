'use client'

// import Event from '../components/event/Event';
import React from 'react';
import Newsletter from '../components/newsletter/Newsletter';
import RaceExperience from '../components/raceexperience/RaceExperince'

import Coaching from '../components/coaching/Coaching'


const Page = () => {

  // const infiniteExperiences = [...experiences, ...experiences, ...experiences]; 
  // const uniqueExperiences = experiences.slice(0, 6);
  const uniqueExperiences = [
    { title: '15 Minutes', description: 'Get to know our racing simulator with a 15-minute introductory session. As a beginner you will  learn the basics and prepare for more challenging experiences.', imageUrl: '/assets/images/experience/mintue1.png' },
    { title: '30 Minutes', description: 'Choose your track, and your car and enjoy 30 minutes of adrenaline. A package ideal for practicing racing and experiencing a full race from start to end', imageUrl: '/assets/images/experience/30mn.png' },
    { title: '60 Minutes', description: 'Are you a hardcore racer? Never enough adrenaline? Searching for a record-breaking lap time? This package will challenge your stamina and abilities!  ', imageUrl: '/assets/images/experience/60mn.png' },
    { title: '90 Minutes', description: 'and all inclusive access to the Dome’s cafe for 90 minutes ', imageUrl: '/assets/images/experience/90min.png' },
    { title: 'Private Venue', description: 'Your comfort and your privacy with up to 19 guests in our Dome, exclusively for you. Access to the VIP room is included and you can book slots of 60 minutes.', imageUrl: '/assets/images/mintue4.png' },
    { title: 'VIP experience', description: 'Get together with up to four other guests in our private area where you have two dedicated racing simulators and all inclusive access to the Dome’s cafe for 90 minutes', imageUrl: '/assets/images/experience/vip.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center overflow-x-hidden lg:py-[80px] lg:pb-[100px] lg:pt-[50px]">
        <div className="flex items-center justify-center xl:px-40 lg:px-20 sm:px-4">
        <div className="text-center text-white ">
          <h1 className="font-orbitron text-[34px] lg:text-[54px] text-white font-black mb-4">EXPERIENCES</h1>
        </div>
      </div>
      <div className="w-full max-w-7xl ">
      <div className="flex flex-wrap justify-center my-6 lg:pb-[100px]" >
        {uniqueExperiences.map((experience, index) => (
          <div key={index} className="card-wrapper5 mx-[30px] md:mx-[10px] lg:mx-[20px] xl:ml-[30px]" style={{ minWidth: '360px'}}>
            <RaceExperience
              title={experience.title}
              description={experience.description}
              imageUrl={experience.imageUrl}
              // date={experience.date} 
            />
          </div>
        ))}
      </div>
      </div>
      {/* <div className="w-full max-w-7xl md:px-8">
        <Event />
      </div> */}
      <div className="w-full ">
        <Coaching/>
      </div>
      <div className="w-full max-w-7xl md:px-8">
        <Newsletter />
      </div>
      
    </div>
  );
}

export default Page;