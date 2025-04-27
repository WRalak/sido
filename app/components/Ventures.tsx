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
    <div className="flex flex-col gap-8 p-6 md:p-12">
      {/* Logo, Company Name, and Year in a single line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/image 17.png" // Your IMS Global Ventures logo file
            alt="IMS Global Ventures Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h2 className="text-gray-800 text-sm font-bold flex gap-1.5">IMS Global Ventures          
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </h2>
        </div>
        <p className="text-gray-800 font-bold text-sm">Oct 2020 - Jun 2021</p>
      </div>

      {/* Image Slider with ">" icon only for navigation */}
      <div className="w-full max-w-3xl mx-auto mb-6 relative">
        {/* Image Display with Green Background */}
        <div className="relative mt-6 w-full bg-blue-900 p-4 rounded-lg">
          <Image
            src={exp.images[currentSlide]} // Display current image based on state
            alt="Experience Image"
            layout="responsive" // Ensures image takes full width of the container
            width={1200} // Adjusted width
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
        <p className="text-gray-500 text-xs ">Role: <span className="font-normal text-gray-800">Senior Product Designer</span></p>
        <p>As a Senior Product Designer contracted through Andela, I was tasked with designing a mobile wallet aimed at streamlining fare payments and digitizing South Africa’s public transport system.</p>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold">Project Overview:</p>
          <p className="text-gray-600 text-sm">
            The goal was to create a seamless payment experience for commuters while improving transparency and efficiency for taxi operators. Key features included:
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>Mobile Wallet - Enabling users to easily pay for fares and other bills.</li>
            <li>Taxi Tracking System - Digitizing public transport by monitoring taxis, their saccos, owners, and conductors.</li>
            <li>Tap-to-Pay System - Using an installed device in taxis, allowing commuters to tap their phones at the start and end of a journey for automatic fare deduction based on distance traveled.</li>
          </ul>
        </div>

        <div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold">My Approach:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Conducted desk research and user interviews to understand pain points and behavior.</li>
              <li>Created User Stories and structured the Information Architecture for an intuitive experience.</li>
              <li>Designed a seamless interface for both commuters and transport operators.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-800 font-semibold">Deliverables:</p>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>Mobile App - Enabling easy fare payments and tracking.</li>
            <li>Admin Dashboard - Providing taxi operators and regulators with real-time insights.</li>
            <li>Website - Designed for both desktop and responsive mobile experiences.</li>
          </ul>

          <p className="text-gray-600 text-sm">
            This project not only improved convenience for commuters but also introduced transparency and efficiency to South Africa’s public transport system.
          </p>
        </div>
      </div>
    </div>
  );
}
