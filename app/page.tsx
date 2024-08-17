import Content from './components/content/Content';
import Dome from './components/dome/Dome';

import Corprate from './components/corporate/Corprate';
import Training from './components/training/Training';
import Testimonial from './components/testimonial/Testimonial';
import React from 'react';



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center overflow-x-hidden">
        <div className="w-full max-w-7xl px-4 md:px-8">
        <Content />
      </div>
      <div className="w-full">
        <Training />
      </div>
    
      <div className="w-full">
        <Dome />
      </div>

      <div className="w-full bg-[#0c0c0c]">
        <Testimonial />
      </div>

      <div className="w-full max-w-7xl md:px-8">
        <Corprate />
      </div>
      
      
      
    </main>
  );
}

