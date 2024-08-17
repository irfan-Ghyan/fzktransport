// Profile.js
import React from 'react';
import Image from 'next/image';

const Profile = ({ imageUrl, name, rating, description }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927a.833.833 0 011.902 0l1.738 4.923a.833.833 0 00.793.578h5.197a.833.833 0 01.518 1.49l-4.197 3.06a.833.833 0 00-.293.92l1.738 4.923a.833.833 0 01-1.28.928l-4.197-3.06a.833.833 0 00-.976 0l-4.197 3.06a.833.833 0 01-1.28-.928l1.738-4.923a.833.833 0 00-.293-.92L.307 9.918a.833.833 0 01.518-1.49h5.197a.833.833 0 00.793-.578l1.738-4.923z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative max-w-sm overflow-hidden mb-6 w-[320px] md:w-[355px] lg:w-[355px] xl:w-[355px] h-[322px] ml-[18px] md:ml-[0px] lg:ml-[0px] lg:grid-cols-4 gap-x-4">
      <div className="mb-6 flex border-[1px] border-[#0c0c0c] border-opacity-30 w-[320px] md:w-[355px] lg:w-[355px] h-[322px] flex-col p-[20px] md:p-[32px] ">
        <div className='flex '>
          <div>
            <Image
              src={imageUrl}
              alt={name}
              width={50}
              height={50}
              className="w-[50px] h-[50px] rounded-full mb-4"
            />
          </div>
          <div className='flex flex-col pl-[13px]'>
            <h3 className="text-[#0c0c0c] font-jura text-[18px] font-semibold mb-2">{name}</h3>
            <div className="flex mb-4">
              {renderStars(rating)} 
              <span className='text-[#0c0c0c]font-jura font-bold text-[18px] pl-2'>{rating}</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#0c0c0c] font-jura font-bold text-[18px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
