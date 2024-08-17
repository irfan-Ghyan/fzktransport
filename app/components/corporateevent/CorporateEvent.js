import React from 'react';
import Image from 'next/image';
import corporateevents from '../../../public/assets/images/corporateevents.png';

const CorporateEvent= () => {
  return (
    <div className="flex justify-end items-center text-white bg-[#1E123D] ">

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <div className="flex flex-col justify-center lg:w-3/5 text-left lg:mb-0 px-8 py-[40px]">
          <h1 className="font-orbitron text-[36px] lg:text-[54px] font-black text">CORPORATE EVENTS</h1>
          <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
            The Teleios Dome is a unique corporate event venue combining luxurious surroundings with state-of-the-art technology.
          </p>
          <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
          Our stunning open-plan Reception and Lounge area is complemented by a Cafeteria and Private Conference Room.
          </p>
          <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
            You and your guests can then step into our spacious Gaming Room and experience exhilarating simulator racing. For the select few, enjoy the exclusivity of our VIP room.
          </p>
          <p className="text-white font-jura font-bold text-[14px] lg:text-[18px] py-4">
            A blend of advanced technology with refined surroundings, book The Teleios Dome for your next Corporate Event.
          </p>
        </div>
        <div className="lg:w-2/5 h-auto ">
          <Image src={corporateevents} alt="Corporate Events Image" className="w-full" />
        </div>
      </div>

    </div>
  );
};

export default CorporateEvent;

