import React from 'react';
import Gap from './gap';
import Sol from './sol';
import Cars from './peace';
import Tuks from './Tuks';

const CaseStudies = () => {
  return (
    <div className="px-3 py-6 ">
      <h2 className="text-[18px] text-gray-900 font-extrabold md:px-8 lg:px-16 xl:px-68 2xl:px-72   mb-4">Case Studies</h2>
      <div className="flex overflow-x-auto  whitespace-nowrap custom-scroll">
        <div className="inline-block min-w-[360px]"><Gap /></div>
        <div className="inline-block min-w-[360px]"><Sol /></div>
        <div className="inline-block min-w-[360px]"><Cars /></div>
        <div className="inline-block min-w-[360px]"><Tuks /></div>
      </div>
    </div>
  );
};

export default CaseStudies;
