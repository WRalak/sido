import React from 'react';
import Gap from './gap';
import Sol from './sol';
import Cars from './peace';
import Tuks from './Tuks';

const CaseStudies = () => {
  return (
    <div className="w-full bg-[rgba(249,250,251,1)] py-6">
      <div className="px-1 mx-auto max-w-screen-2xl">
        <div className="w-full md:px-8 lg:px-16 xl:px-20 2xl:px-0">
<h2 className="text-[18px] text-gray-900 font-extrabold px-5 xl:px-44 2xl:px-70 mb-0 leading-none">
            Case Studies
          </h2>
          {/* Tightly packed horizontal scroller with no gaps */}
          <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap custom-scroll mb-4 h-[120px] gap-0">
            {/* Items with no spacing */}
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] h-full">
              <Gap />
            </div>
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[365px] h-full">
              <Sol />
            </div>
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] h-full">
              <Cars />
            </div>
            <div className="inline-flex flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[370px] h-full">
              <Tuks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;