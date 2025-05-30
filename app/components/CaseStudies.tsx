import React from 'react';
import Gap from './gap';
import Sol from './sol';
import Cars from './peace';
import Tuks from './Tuks';

const CaseStudies = () => {
  return (
    <div className="w-full bg-[rgba(249,250,251,1)] h-[181px] py-7 flex flex-col">
      <div className="px-1 mx-auto max-w-screen-2xl w-full h-full">
        <div className="w-full h-full md:px-8 lg:px-16 xl:px-20 2xl:px-0 flex flex-col">
          <h2 className="text-[18px] text-gray-900 font-extrabold px-5 xl:px-48 2xl:px-72 mb-2 leading-none">
            Case Studies
          </h2>
          {/* Scroller takes remaining space */}
          <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap custom-scroll flex-grow items-center gap-0">
            {/* Items with no spacing */}
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]">
              <Gap />
            </div>
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[365px]">
              <Sol />
            </div>
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]">
              <Cars />
            </div>
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[370px]">
              <Tuks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;