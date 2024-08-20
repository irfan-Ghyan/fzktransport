
import React from 'react';
import Image from 'next/image';


const Page = () => {
  const name = "Feroz Khan (CEO)";

  return (
    <div className=" flex flex-col min-h-screen items-center overflow-x-hidden lg:py-[80px] lg:pb-[100px] lg:pt-[50px]">
        <div className="max-w-7xl px-4">
          <div className="  text-gray-900 ">
            <h1 className="font-orbitron text-[34px] lg:text-[54px] text-gray-900 font-black mb-4">ABOUT US</h1>
            <p className="font-jura text-[14px] lg:text-[18px] text-gray-900 font-bold txt-balance">Feroz khan transport is a key part of the FPT group of companies. We are committed to our motto of providing excellent service. We began in 2007 with a fleet of 40 buses. Our high standards and dependable service for all clients, big or small, have earned us a strong reputation. Because we value customer satisfaction, many of our customers see us as friends rather than just service providers. Today, we have grown to a fleet of around 215 buses, transporting over 8,000 happy passengers daily across all the emirates of the U.A.E. Experience our top Passenger Transport Services and Bus Rental services in Dubai. We have an advantage over other transport companies because we can provide replacements anytime, anywhere in the emirates. Our ongoing passion for innovation has brought the same efficiency and professionalism into our new local passenger transport service. We are committed to constantly improving and refining our services for you.</p>
          </div>
          <div className='flex w-full py-20'>
          <div className='w-1/4'>
            <Image
              src="/assets/images/dome/man1.png"
              alt={name}
              width={200}
              height={300}
              className="w-[300px] h-[300px]"
            />
          </div>
          <div className='w-3/4'>
          <h1 className='font-orbitron text-[24px] lg:text-[34px] text-gray-900 font-black'>{name}</h1>
          <p className="font-jura text-[14px] text-gray-900 font-bold txt-balance">Feroz Khan is the visionary CEO of Feroz Khan Transport LLC a leading passenger transport company in the United Arab Emirates. With over a decade of experience in the transportation industry, Feroz Khan has built a reputation for excellence, innovation, and unwavering dedication to customer satisfaction. Under his leadership Feroz Khan Transport LLC has grown from a small fleet of 40 buses in 2007 to a vast network of approximately 215 buses, serving over 8,000 passengers daily across all emirates of the UAE. <br/><br/>His commitment to high standards and reliability has been the cornerstone of the company is success. Feroz Khan is approach to business is deeply rooted in his belief in the importance of customer relationships. He has always prioritized the needs of his clients, ensuring that every journey is safe comfortable and on time. This focus on service has transformed the company into a trusted partner for businesses, schools, and individuals alike. Beyond his operational achievements Feroz Khan is also passionate about continuous improvement and innovation. He has led the company through various upgrades and expansions always looking for new ways to enhance efficiency and provide even better service to customers. His forward thinking mindset has kept Feroz Khan Transport LLC at the forefront of the passenger transport industry in the region. <br/><br/>As a leader Feroz Khan is known for his hands-on management style his ability to inspire his team and his dedication to upholding the company is core values. His leadership continues to drive the company is growth and success setting new benchmarks in the transport sector.Feroz Khan is journey from humble beginnings to becoming the CEO of a thriving transport company is a testament to his hard work determination and entrepreneurial spirit. He remains committed to expanding the company is reach and further enhancing its reputation as one of the most reliable and customer-focused transport providers in the UAE.
            </p>
          </div>

          </div>
        </div>
    </div>
  );
}

export default Page;