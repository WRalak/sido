'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function IMSGlobalExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const exp = {
    images: [
      '/IMS1.png', // Example image paths, replace with your actual images
      '/ims2.png',
      '/ims3.png',
    ],
  };

  const nextImage = (totalImages: number) => {
    setCurrentSlide((prev) => (prev + 1) % totalImages); // Loop through images
  };

  return (
    <div className="flex flex-col gap-5 p-6 md:p-12  w-[660px] md:px-12 lg:ml-54">
      {/* Logo, Company Name, and Year in a single line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/image 17.png" // Your IMS Global Ventures logo file
            alt="IMS Global Ventures Logo"
            width={70}
            height={70}
            className="object-contain bg-gray-100"
          />
          <h2 className="text-gray-800 text-[14px] font-extrabold flex gap-1.5">IMS Global Ventures          
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </h2>
        </div>
        <p className="text-gray-800  font-bold text-[14px] leading-[16px] tracking-normal">Oct 2020 - Jun 2021</p>
      </div>

      {/* Image Slider with ">" icon only for navigation */}
      <div className="w-full max-w-3xl mx-auto mb-1 relative">
        {/* Image Display with Green Background */}
        <div className="relative mt-2 w-full bg-blue-900 p-4 rounded-lg">
          <Image
            src={exp.images[currentSlide]} // Display current image based on state
            alt="Experience Image"
            layout="responsive" // Ensures image takes full width of the container
            width={800} // Adjusted width
            height={675} // Adjusted height based on aspect ratio
            className="rounded-lg object-cover w-full h-auto"
          />

          {/* Next Button */}
          <button
            onClick={() => nextImage(exp.images.length)} // Go to next image
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <span className="text-3xl"><MdKeyboardArrowRight /></span> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>

      {/* Text Content Below the Image Carousel */}
      <div className="space-y-4">
        <p className="text-gray-500 font-medium text-[13px]">Role: <span className="font-medium text-gray-800">Senior Product Designer</span></p>
        <p className='text-gray-800 font-medium text-[13px] '>As a Senior Product Designer contracted through <strong>Andela,</strong> I was tasked with designing a <br /> <strong>mobile wallet</strong> aimed at streamlining fare payments and digitizing South Africa’s public <br /> transport system.</p>
        <div className="space-y-2">
          <p className="text-gray-800 text-[13px] font-semibold">Project Overview</p>
          <p className="text-gray-800 font-medium text-[13px]">
            The goal was to create a <strong>seamless payment experience</strong> for commuters while improving transparency and efficiency for taxi operators. Key features included:
          </p>

          <ul className="list-disc list-inside font-medium text-gray-800 text-[13px] space-y-1">
          <ul className="list-disc list-outside pl-5 space-y-1 text-gray-800 text-sm">
  <li><strong>Mobile Wallet</strong> - Enabling users to easily pay for fares and other bills.</li>
  <li><strong>Taxi Tracking System</strong> - Digitizing public transport by monitoring taxis, their saccos, owners, and conductors.</li>
  <li><strong>Tap-to-Pay System</strong> - Using an installed device in taxis, allowing commuters to tap their phones at the start and end of a journey for automatic fare deduction based on distance traveled.</li>
</ul>


          </ul>
        </div>

        <div>
          <div className="space-y-2">
            <p className="text-gray-800 text-[14px] font-semibold">My Approach:</p>
            <ul className="list-disc font-medium list-inside text-gray-800 text-[13px] space-y-1">
              <li>Conducted <strong>desk research</strong> and <strong>user interviews</strong> to understand pain points and behavior.</li>
              <li>Created <strong>User Stories</strong> and structured the <strong>Information Architecture</strong> for an intuitive experience.</li>
              <li>Designed a seamless interface for both commuters and transport operators.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-800 font-semibold text-[14px]">Deliverables:</p>
          <p className='text-gray-800 font-medium text-[13px]'>The final solution included:</p>
          <ul className="list-disc list-inside font-medium text-gray-800 text-sm space-y-1">
            <li><strong>Mobile App </strong>- Enabling easy fare payments and tracking.</li>
            <li><strong>Admin Dashboard</strong> - Providing taxi operators and regulators with real-time insights.</li>
            <li><strong>Website</strong> - Designed for both desktop and responsive mobile experiences.</li>
          </ul>

          <p className="text-gray-800 font-medium text-[13px]">
            This project not only improved convenience for commuters but also introduced transparency and efficiency to South Africa’s public transport system.
          </p>
        </div>
      </div>
    </div>
  );
}
