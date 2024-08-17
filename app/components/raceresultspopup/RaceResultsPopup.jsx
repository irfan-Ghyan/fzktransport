import React, { useState } from 'react';
import Image from 'next/image';
import closeIcon from '../../../public/assets/icons/navbarclose.png';

const RaceResultsPopup = ({ onClose }) => {
  const [selectedSeason, setSelectedSeason] = useState('2024');
  const [raceResults, setRaceResults] = useState([
    { position: '1', name: 'Karim Zuhour', fastestLap: '+1 point', points: '58' },
    { position: '2', name: 'Jan Skyvara', fastestLap: '', points: '48' },
    { position: '3', name: 'Nathan Pope', fastestLap: '', points: '41' },
    { position: '4', name: 'Jack Johns', fastestLap: '', points: '34' },
    { position: '7', name: 'Ibay Amor', fastestLap: '', points: '19' },
    { position: '5', name: 'Mohamed Abouhadb', fastestLap: '', points: '28' },
    { position: '6', name: 'Joel Nikanor Vuorinen', fastestLap: '', points: '23' },
  ]);

  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
    // Optionally fetch new data based on the selected season
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#11072C] p-8 relative w-[960px] h-[705px]">
        <h2 className="font-bold text-[20px] lg:text-[34px] text-white font-orbitron text-center">Race Results</h2>
        <button onClick={onClose} className="absolute top-2 right-2">
          <Image src={closeIcon} alt="Close" width={24} height={24} />
        </button>
        <div className='text-center mt-[26px] mb-[12px]'>
          <select
            value={selectedSeason}
            onChange={handleSeasonChange}
            className="w-full text-black border border-white-[0.5px] border-opacity-20 bg-transparentfont-orbitron py-2 px-2 "
          >
            <option value="2024" className='hover:bg-[#7E51F8]'>R1 Bahrian GP</option>
            <option value="2023" className='hover:bg-[#7E51F8]'>R1 Saudi GP</option> 
            <option value="2022" className='hover:bg-[#7E51F8]'>R1 UAE GP</option>
          </select>
        </div>
        <table className="w-full text-left text-[14px] lg:text-[18px] my-4 text-white font-jura mt-[12px]">
          <thead className='bg-[#7d7082]'>
            <tr>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Fastest Lap</th>
              <th className="px-4 py-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {raceResults.map((result, index) => (
              <tr key={index}>
                <td className="border border-[#11072C] px-4 py-2 bg-[#A72AEB]">{result.position}</td>
                <td className="border border-[#11072C] px-4 py-2 bg-[#23124F]">{result.name}</td>
                <td className="border border-[#11072C] px-4 py-2 bg-[#23124F]">{result.fastestLap}</td>
                <td className="border border-[#11072C] px-4 py-2 bg-[#23124F]">{result.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RaceResultsPopup;
