import React from 'react';
import Gap from './gap';
import Sol from './sol';
import Cars from './peace';
import Tuks from './Tuks';

const CaseStudies = () => {
  return (
    <div className="px-3 py-6 mx-auto max-w-screen-2xl">
      <div className="w-full md:px-8 lg:px-16 xl:px-10 2xl:px-0">
        <h2 className="text-[18px] text-gray-900 font-extrabold mb-4 xl:px-44 2xl:px-70">
          Case Studies
        </h2>
        <div className="flex gap-x-[1px] overflow-x-auto whitespace-nowrap custom-scroll pb-2">
          {[<Gap />, <Sol />, <Cars />, <Tuks />].map((Component, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px]" // same width across all screens
            >
              {Component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
