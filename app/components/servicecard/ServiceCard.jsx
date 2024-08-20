
import Image from 'next/image';

const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="max-w-7xl overflow-hidden shadow-lg">
      <Image 
        className="w-full" 
        src={imageSrc} 
        alt={title} 
        width={400} 
        height={550} 
        objectFit="cover" 
      />
      <div className="px-6 py-4">
        <div className="font-orbitron text-[16px] lg:text-[24px] text-gray-900 font-black">{title}</div>
        <p className="font-jura text-[14px]  text-gray-900 font-bold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
