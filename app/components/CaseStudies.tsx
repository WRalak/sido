import React from 'react';
import Gap from './gap';
import Sol from './sol';
import Cars from './peace';
import Tuks from './Tuks';

const CaseStudies = () => {
  return (
    <div className="px-3 py-6 mx-auto max-w-screen-2xl">
      <div className="w-full md:px-8 lg:px-16 xl:px-20 2xl:px-0">
        <h2 className="text-[18px] text-gray-900 font-extrabold mb-4 xl:px-44 2xl:px-70 ">
          Case Studies
        </h2>
        <div className="flex overflow-x-auto whitespace-nowrap custom-scroll pb-2">
          <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] px-2">
            <Gap />
          </div>
          <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] px-2">
            <Sol />
          </div>
          <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] px-2">
            <Cars />
          </div>
          <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] px-2">
            <Tuks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;