import Content from './components/content/Content';
import Dome from './components/dome/Dome';
import ReserveSeat from './components/reserveseat/ReserveSeat';
// import Event from './components/event/Event';
import Corprate from './components/corporate/Corprate';
import Training from './components/training/Training';
import Testimonial from './components/testimonial/Testimonial';



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center overflow-x-hidden">
      <div className="w-full">
        <Training />
      </div>
      <div className="w-full max-w-7xl px-4 md:px-8">
        <Content />
      </div>
      {/* <div className="w-full ">
        <ReserveSeat />
      </div> */}
      <div className="w-full">
        <Dome />
      </div>
      {/* <div className="w-full max-w-7xl md:px-8">
        <Event />
      </div> */}
      <div className="w-full max-w-7xl md:px-8">
        <Corprate />
      </div>
      
      <div className="w-full bg-[#1E123D]">
        <Testimonial />
      </div>

      
    </main>
  );
}

