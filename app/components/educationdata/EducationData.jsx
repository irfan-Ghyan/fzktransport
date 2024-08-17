// 'use client';

// import React from 'react';
// import useEducationData from '../useEducationData';
// import Link from 'next/link';

// const EducationData = () => {
//     const { domes, loading } = useEducationData();

//     if (loading) {
//         return <div>Loading...</div>;
//       }
//   return (
//     <div className="relative w-full lg:h-[399px] h-[700px] max-w-full overflow-hidden flex  mb-[40px] ">
//       {domes.map((dome, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full bg-black bg-opacity-30 lg:p-10 xl:p-20 sm:p-4 duration-1000 ease-in-out $`}
//           style={{
//             backgroundImage: `url(${dome.imageUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="flex flex-col px-4 lg:px-40 padding-px items-start justify-center h-full  pb-10 ">
            
//             <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black font-orbitron">{dome.title}</h2>
//             <p className="text-[18px] mb-4 text-white font-[18px] font-jura">{dome.description}</p>
//             <Link
//               href="/"
//               className="w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button-slanted font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-cent justify-center"
//             >
//               <span className="button-slanted-content">ENQUIRY NOW</span>
//             </Link>
//           </div>
         
//       </div>
//       ))}
    
//     </div>
//   )
// }

// export default EducationData;

'use client';

import React from 'react';

import Link from 'next/link';

const EducationData = () => {
  const domes = [
    { title: 'VIP experience', description: 'Embark on an immersive educational journey at Teleios. Explore our factory with a comprehensive tour, delving into the learning of simulator construction and operation. Then, experience the thrill of racing in a simulator competition at the Teleios Dome. Learn, engage, and have fun with Teleios Dome is educational trips.', imageUrl: '/assets/images/dome/School.png' },
   
  ];

  return (
    <div className="relative w-full lg:h-[399px] h-[700px] max-w-full overflow-hidden flex mb-[40px]">
      {domes.map((dome, index) => (
        <div
          key={index}
          className="absolute w-full h-full bg-black bg-opacity-30 lg:p-10 xl:p-20 sm:p-4 "
          style={{
            backgroundImage: `url(${dome.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col px-4 lg:px-40 padding-px items-start justify-center h-full pb-10">
            <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black font-orbitron">{dome.title}</h2>
            <p className="text-[18px] mb-4 text-white font-[18px] font-jura">{dome.description}</p>
            <div className="w-full flex lg:justify-end justify-center">
              <Link
                href="/"
                className="w-[200px] lg:w-[233px] h-[44px] px-8 py-6 button-slanted font-jura font-bold bg-gradient-to-r from-[#7E51F8] to-[#D007A6] text-white ml-2 transition duration-300 rounded-tl-lg rounded-br-lg flex items-center justify-center"
              >
                <span className="button-slanted-content">ENQUIRY NOW</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationData;
