
import React from 'react';
import Image from 'next/image';


const CardComponent = ({ imageUrl, title, description }) => {
  return (
    <div className="overflow-hidden bg-gray-500 mb-5 items-center flex flex-col h-full hover:bg-[#ff0a01] ">
      <div className="relative w-full h-[200px]"> 
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
      </div>
      <div className='mx-[20px] pt-4 flex-1 flex flex-col justify-between'>
        <div>
          <h1 className="text-white text-[18px] font-orbitron font-bold">{title}</h1>
          <p className="text-white text-[14px] font-jura font-bold py-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
