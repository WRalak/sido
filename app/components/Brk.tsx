'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function BRCKExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const expImages = [
    "/IMS1.png",
    "/ims2.png",
    "/ims3.png",
  ];

  const nextImage = (totalImages: number) => {
    setCurrentSlide((prev) => (prev + 1) % totalImages); // Loop through images
  };

  return (
    <div className="flex flex-col gap-6 p-6 md:p-10 w-[660px] md:px-12 lg:ml-40">
      {/* Logo, Company Name, and Year */}
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/brk.png" // BRCK Logo
            alt="BRCK Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h2 className="text-[13px] font-bold text-gray-800 flex items-center gap-2">
            BRCK
            <img
              src="/dot.png"
              alt="dot"
              className="w-3 h-3 rounded-full object-cover"
            />
          </h2>
        </div>
        <p className="text-gray-800 font-bold text-[13px]">Mar 2018 - Oct 2020</p>
      </div>

      {/* Dates and Role */}
      <div className="space-y-2">
        <p className="text-gray-600 text-[13px]"> 
          Role: <span className="font-normal text-sm">UI/UX Designer</span>
        </p>

        <p className="text-gray-800 text-sm">
         <span className='text-gray-500 text-[13px]'>Task:</span> Designing Digital Experiences Across Mobile, Web, and Internal Systems.
        </p>
      </div>

      {/* Image Slider with BLUE background */}
      <div 
        className="w-full max-w-3xl mx-auto mb-6 p-4 rounded-lg shadow"
        style={{ backgroundColor: 'rgba(101, 156, 246, 1)' }}
      >
        <div className="relative mt-6 w-full">
          <Image
            src={expImages[currentSlide]} // Display current image based on state
            alt="Experience Image"
            layout="responsive"
            width={1200} // Adjusted width for full-width image
            height={675} // Adjusted height based on aspect ratio
            className="rounded-lg object-cover w-full h-auto"
          />

          {/* Next Button */}
          <button
            onClick={() => nextImage(expImages.length)} // Go to next image
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <span className="text-3xl"><MdKeyboardArrowRight /></span> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>

      {/* Paragraph under images */}
      <div className="w-full mx-auto">
        <p className="text-gray-800 text-[13px]">
          I collaborated with researchers, designers, and front-end developers, reporting to the Creative <br /> Director, to design mobile apps, internal systems, websites, and brand collateral. Beyond <br /> design, I tested implementations and worked closely with developers to ensure a polished final <br /> product.
        </p>
      </div>
    </div>
  );
}
