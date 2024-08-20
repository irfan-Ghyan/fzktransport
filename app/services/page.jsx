import React from 'react';
import ServiceCard from '../components/servicecard/ServiceCard';

const Page = () => {

  const services = [
    {
      title: 'Office Staff Transport',
      description: 'Reliable and comfortable transportation for office employees, ensuring they reach work on time, every day.',
      imageSrc: '/assets/images/dome/bus3.jpeg', 
    },
    {
      title: 'School Transport',
      description: 'Safe and dependable transport for students to and from school with the highest safety standards.',
      imageSrc: '/assets/images/dome/bus3.jpeg',
    },
    {
      title: 'Crew Transfer',
      description: 'Efficient transportation solutions for crew members working on projects across various locations.',
      imageSrc: '/assets/images/dome/bus3.jpeg', 
    },
    {
      title: 'Dubai City Tour',
      description: 'Explore the vibrant city of Dubai with our comfortable and convenient city tour service.',
      imageSrc: '/assets/images/dome/bus3.jpeg', 
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center xl:px-40 lg:px-20 sm:px-4">
        <div className="text-center p-6 text-white lg:py-[80px] lg:pb-[100px] lg:pt-[50px]">
          <h1 className="font-orbitron text-[34px] lg:text-[54px] text-gray-900 font-black mb-4">SERVICES</h1>
          <div className="container mx-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Page;
