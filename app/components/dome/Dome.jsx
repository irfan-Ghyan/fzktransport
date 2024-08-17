// 'use client';

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// // import useDomeData from '../../components/useDomeData';

// const Dome = () => {
//   // const { domes, loading } = useDomeData();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const domes = [
//     { title: 'GALLERY', description: 'Experience the ultimate comfort and convenience with our special bus services, designed to make your journey unforgettable', imageUrl: '/assets/images/dome/b-1.png' },
//     { title: 'GALLERY', description: 'Our special bus services offer a blend of luxury and efficiency, ensuring you travel in style wherever you go.', imageUrl: '/assets/images/dome/S1.png' },
//     { title: 'GALLERY', description: 'Discover the difference with our special bus services, where punctuality, safety, and customer satisfaction are our top priorities.', imageUrl: '/assets/images/dome/S1.png' },
//     { title: 'GALLERY', description: 'Travel smarter with our special bus services, featuring state-of-the-art amenities and personalized care.', imageUrl: '/assets/images/dome/S1.png' },
//     { title: 'GALLERY', description: 'Travel smarter with our special bus services, featuring state-of-the-art amenities and personalized care.', imageUrl: '/assets/images/dome/S1.png' },
//     { title: 'GALLERY', description: 'Travel smarter with our special bus services, featuring state-of-the-art amenities and personalized care.', imageUrl: '/assets/images/dome/S1.png' },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === (domes?.length ?? 0) - 1 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [domes]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === (domes?.length ?? 0) - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? (domes?.length ?? 0) - 1 : prev - 1));
//   };

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (!domes || domes.length === 0) {
//   //   return <div>No data available</div>;
//   // }



//   return (
//     <div className="relative w-full h-[700px] overflow-hidden flex justify-center items-center">
//       {domes.map((dome, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{
//             backgroundImage: `url(${dome.imageUrl})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="flex flex-col items-start justify-center h-full bg-opacity-50 p-9 max-w-7xl mx-auto ">
//             <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black font-orbitron ">{dome.title}</h2>
//             <p className="text-[18px] mb-4 text-white font-jura ">{dome.description}</p>
//           </div>
//           <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
//             {domes.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`p-[1px] w-[45px] md:w-[100px] lg:w-[145px] xl:w-[190px] ${
//                   index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-100'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dome;


'use client';

import React, { useState, useEffect } from 'react';

const Dome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const domes = [
    { imageUrl: '/assets/images/dome/b-1.png' },
    { imageUrl: '/assets/images/dome/S1.png' },
    { imageUrl: '/assets/images/dome/S1.png' },
    { imageUrl: '/assets/images/dome/S1.png' },
    { imageUrl: '/assets/images/dome/S1.png' },
    { imageUrl: '/assets/images/dome/S1.png' },
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
        <div className='py-[40px] text-center'>
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
