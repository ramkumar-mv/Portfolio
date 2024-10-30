import React from "react";
import { FaTrophy, FaAward } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';

const FunFactCard = ({ icon, des }) => {
  return (
    <div className="w-full bg-zinc-800 border-r border-b border-zinc-700">
      <div className="flex flex-col items-center justify-center py-8 px-4 h-full">
        <span className="text-3xl text-yellow-400 mb-4">{icon}</span>
        <p className="text-sm text-center text-gray-300 hover:text-white duration-200">
          {des}
        </p>
      </div>
    </div>
  );
};

const FunFact = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        <FunFactCard icon={<FaTrophy />} des="9.58/10 CGPA" />
        <FunFactCard icon={<FaAward />} des="Performance Based Scholarship Recipient" />
        <FunFactCard 
          icon={<IoNewspaper />} 
          des="2 Research Paper - published, 1 Research paper -submitted, 1 Research paper on process" 
        />
      </div>
    </div>
  );
};

export default FunFact;
