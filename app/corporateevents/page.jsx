
import React from 'react';
import CorporateEvent from '../components/corporateevent/CorporateEvent';
import CorporateBuilding from '../components/corporatebuilding/CorporateBuilding';
import Venues from '../components/venues/Venues';
// import Partners from '../components/partners/Partners';
import Celebrations from '../components/celebrations/Celebrations';
import GetTouchForm from '../components/getintouchform/GetTocuhForm';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="xl:px-40 lg:px-20 sm:px-4">
        <div className="text-center p-6 text-white lg:py-[80px] lg:pb-[100px] lg:pt-[50px]">
          <h1 className="font-orbitron text-[34px] lg:text-[54px] text-white font-black mb-4">CORPORATE EVENST &<br/> CELEBRATIONS</h1>
        </div>
      </div>
      <div className="w-full ">
        <CorporateEvent />
      </div>
      <div className="w-full ">
        <CorporateBuilding />
      </div>
      <div className="w-full">
        <Venues />
      </div>
      {/* <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <Partners />
      </div> */}
      <div className="w-full mt-10">
        <Celebrations />
      </div>
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <GetTouchForm />
      </div>
    </div>
  );
};

export default Page;

