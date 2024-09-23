// 'use client';

// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image';
// import slide from '../../../public/assets/images/dome/Birthday.png';
// import slide1 from '../../../public/assets/images/dome/Birthday.png';
// import slide2 from '../../../public/assets/images/dome/Birthday.png';
// import slide3 from '../../../public/assets/images/dome/Birthday.png';

// const Celebrations= () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     centerMode: true,
//     centerPadding: '15%', 
//     appendDots: dots => (
//       <div
//         style={{
//           bottom: '-40px',
//         }}
//       >
//         <ul style={{ margin: '-10px' }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: i => (
//       <div
//         className="custom-dot"
//       ></div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           centerPadding: '0%',
//         }
//       }
//     ]
//   };

//   return (
//     <div className="slider-wrapper h-auto">
//       <h1 className="text-[32px] md:text-[54px] mb-4 text-white font-black text-center font-orbitron">CELEBRATIONS</h1>
//       <p className="text-[14px] md:text-[18px] mb-4 text-center text-white font-black font-jura px-[40px]">
//       Celebrate in style at Teleios Dome. Our high-tech yet cozy atmosphere top-notch amenities and state-of-the-art racing simulators<br/>
//       create an unforgettable backdrop for any occasion. From birthdays and stag dos to graduations and beyond we will <br/>
//       tailor an experience your guests will never forget.
//       </p>
//       <div className="slider-container lg:pt-[40px]">
//         <Slider {...settings}>
//           <div className="slide">
//             <Image src={slide} alt="Slide1" width={1500} height={703}  />
//           </div>
//           <div className="slide">
//             <Image src={slide1} alt="Slide2" width={1500} height={703}  />
//           </div>
//           <div className="slide">
//             <Image src={slide2} alt="Slide3" width={1500} height={703}  />
//           </div>
//           <div className="slide">
//             <Image src={slide3} alt="Slide4" width={1500} height={703} />
//           </div>
//         </Slider>
//       </div>

//       <style jsx>{`
//         .slider-wrapper {
//           position: relative;
//           width: 100%;
//           overflow: hidden;
//           padding-bottom: 50px;
//         }
//         .slider-heading {
//           text-align: center;
//           color: white;
//           font-size: 36px;
//           margin-top: 20px;
//           text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
//         }
//         .slider-container {
//           position: relative;
//           width: 100%;
//         }
//         .slide {
//           position: relative;
//           width: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         :global(.slick-dots) {
//           position: absolute;
//           bottom: -30px;
//           width: 100%;
//           display: flex !important;
//           justify-content: center;
//           padding: 0;
//           margin: 0;
//           list-style: none;
//         }
//         :global(.slick-dots li) {
//           margin: 0 5px;
//         }
//         :global(.custom-dot) {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background: white;
//           border: 1px solid #ccc;
//           opacity: 0.5;
//           transition: all 0.3s ease;
//         }
//         :global(.slick-dots li.slick-active .custom-dot) {
//           width: 14px;
//           height: 14px;
//           opacity: 1;
//           background: white;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Celebrations;




// // 'use client';

// // import React from 'react';
// // import Slider from 'react-slick';
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import Image from 'next/image';
// // import slide from '../../../public/assets/images/celebrations.png';
// // import slide1 from '../../../public/assets/images/celebrations.png';
// // import slide2 from '../../../public/assets/images/celebrations.png';
// // import slide3 from '../../../public/assets/images/celebrations.png';

// // const Celebrations = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     arrows: false,
// //     centerMode: true,
// //     centerPadding: '20%%', 
// //     appendDots: dots => (
// //       <div
// //         style={{
// //           bottom: '-30px',
// //         }}
// //       >
// //         <ul style={{ margin: '0px' }}> {dots} </ul>
// //       </div>
// //     ),
// //     customPaging: i => (
// //       <div
// //         className="custom-dot"
// //       ></div>
// //     ),
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           centerPadding: '0%',
// //         }
// //       }
// //     ]
// //   };

// //   return (
// //     <div className="slider-wrapper h-auto">
// //       <h1 className="text-[32px] md:text-[54px] mb-4 text-white font-black text-center font-orbitron">CELEBRATIONS</h1>
// //       <p className="text-[14px] md:text-[18px] mb-4 text-center text-white font-black font-jura ">
// //       Celebrate in style at Teleios Dome where every occasion is unforgettable. Whether it is a corporate end of year bash or <br/>
// //       a milestone birthday stag do, or graduation party, we cater to all celebrations. Let us create the perfect atmosphere <br/>
// //       with top notch amenities exciting activities and impeccable service tailored to your event.
// //       </p>
// //       <div className="slider-container lg:pt-[40px] w-full">
// //         <Slider {...settings}>
// //           <div className="slide">
// //             <Image src={slide} alt="Slide1" width={1500} height={703} />
// //           </div>
// //           <div className="slide">
// //             <Image src={slide1} alt="Slide2" width={1500} height={703} />
// //           </div>
// //           <div className="slide">
// //             <Image src={slide2} alt="Slide3" width={1500} height={703} />
// //           </div>
// //           <div className="slide">
// //             <Image src={slide3} alt="Slide4" width={1500} height={703} />
// //           </div>
// //         </Slider>
// //       </div>

// //       <style jsx>{`
// //         .slider-wrapper {
// //           position: relative;
// //           width: 100%;
// //           overflow: hidden;
// //           padding-bottom: 50px;
// //         }
// //         .slider-heading {
// //           text-align: center;
// //           color: white;
// //           font-size: 36px;
// //           margin-top: 20px;
// //           text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
// //         }
// //         .slider-container {
// //           position: relative;
// //           width: 100%;
// //         }
// //         .slide {
// //           position: relative;
// //           width: 100%;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //         }
// //         :global(.slick-dots) {
// //           position: absolute;
// //           bottom: -30px;
// //           width: 100%;
// //           display: flex !important;
// //           justify-content: center;
// //           padding: 0;
// //           margin: 0;
// //           list-style: none;
// //         }
// //         :global(.slick-dots li) {
// //           margin: 0 5px;
// //         }
// //         :global(.custom-dot) {
// //           width: 10px;
// //           height: 10px;
// //           border-radius: 50%;
// //           background: white;
// //           border: 1px solid #ccc;
// //           opacity: 0.5;
// //           transition: all 0.3s ease;
// //         }
// //         :global(.slick-dots li.slick-active .custom-dot) {
// //           width: 14px;
// //           height: 14px;
// //           opacity: 1;
// //           background: white;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Celebrations;

'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import slide from '../../../public/assets/images/dome/Birthday.png';
import slide1 from '../../../public/assets/images/dome/Birthday.png';
import slide2 from '../../../public/assets/images/dome/Birthday.png';
import slide3 from '../../../public/assets/images/dome/Birthday.png';

const Celebrations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '15%', 
    appendDots: dots => (
      <div
        style={{
          bottom: '-40px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className="custom-dot"
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '0%',
        }
      }
    ]
  };

  return (
    <div className="slider-wrapper h-auto">
      <h2 className="text-[32px] md:text-[54px] mb-4 text-white font-black text-center font-orbitron">CELEBRATIONS</h2>
      <p className="text-[14px] md:text-[18px] mb-4 text-center text-white font-black text-balance font-jura px-[40px]">
      Celebrate in style at Teleios Dome. Our high-tech yet cozy atmosphere, top-notch amenities, and state-of-the-art racing simulators create an unforgettable backdrop for any occasion. From birthdays and stag dos to graduations and beyond, we will tailor an experience your guests will never forget.
      </p>
      <div className="slider-container lg:pt-[40px]">
        <Slider {...settings}>
          <div className="slide">
            <Image src={slide} alt="Slide1" width={1500} height={703} className='lg:w-[1400px] xl:w-[1800px] lg:px-8' />
          </div>
          <div className="slide">
            <Image src={slide1} alt="Slide2" width={1500} height={703} className='lg:w-[1400px] xl:w-[1800px] lg:px-8'/>
          </div>
          <div className="slide">
            <Image src={slide2} alt="Slide3" width={1500} height={703} className='lg:w-[1400px] xl:w-[1800px] lg:px-8'/>
          </div>
          <div className="slide">
            <Image src={slide3} alt="Slide4" width={1500} height={703} className='lg:w-[1400px] xl:w-[1800px] lg:px-8'/>
          </div>
        </Slider>
      </div>

      <style jsx>{`
        .slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-bottom: 50px;
        }
        .slider-heading {
          text-align: center;
          color: white;
          font-size: 36px;
          margin-top: 20px;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
        }
        .slider-container {
          position: relative;
          width: 100%;
        }
        .slide {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        :global(.slick-dots) {
          position: absolute;
          bottom: -30px;
          width: 100%;
          display: flex !important;
          justify-content: center;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        :global(.slick-dots li) {
          margin: 0 5px;
        }
        :global(.custom-dot) {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          border: 1px solid #ccc;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        :global(.slick-dots li.slick-active .custom-dot) {
          width: 14px;
          height: 14px;
          opacity: 1;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default Celebrations;

