'use client'

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Globe, Users, BarChart3, ClipboardCheck } from 'lucide-react';

export default function PeachCarsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/peach0.jpg",
      alt: "Peach Cars Homepage"
    },
    {
      src: "/peach2.jpg",
      alt: "Car Listing Page"
    },
    {
      src: "/peach3.jpg",
      alt: "Seller Dashboard"
    },
    {
      src: "/peach4.jpg",
      alt: "Seller Dashboard"
    },
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-[735px]  mx-auto p-6 bg-white font-sans">
      {/* Header with Logo */}
      <header className="flex flex-wrap items-start gap-4 mb-6">
  {/* Logo */}
  <div className="flex-shrink-0">
    <div className="bg-red-50 rounded-md flex items-center justify-center p-1 w-[75px] h-[75px]">
      <img src="Group.png" alt="Peach Cars Logo" height={75} width={75} />
    </div>
  </div>

  {/* Text Content */}
  <div className="flex-1 min-w-[250px]">
    <h1 className="text-[20px] font-bold text-gray-800">
      <span style={{ color: 'rgba(237, 57, 119, 1)' }} className="mr-1">
        Peach Cars
      </span>
      is a rising startup aiming to transform the <br />
      used car buying experience in Kenya by providing a <br />
      transparent, user-friendly online marketplace.
    </h1>

    <p className="text-blue-600 text-[13px] mt-1 underline cursor-pointer">
      www.peachcars.co.ke
    </p>

    <div className="flex flex-wrap space-x-6 text-[13px] mt-2">
      <div className="flex items-center text-gray-600">
        <img src="search.png" alt="UX Research" className="mr-1" />
        <span className="font-medium">UX Research</span>
      </div>
      <div className="flex items-center text-gray-600">
        <img src="compass.png" alt="Design" className="mr-1" />
        <span className="font-medium">Design</span>
      </div>
      <div className="flex items-center text-gray-600">
        <img src="check.png" alt="Testing" className="mr-1" />
        <span className="font-medium">Testing</span>
      </div>
    </div>
  </div>
</header>


      {/* Services */}
    

      {/* Image Carousel */}
      <div className="flex justify-center">
      <div className="relative" style={{ width: '510px', height: '280px' }}>
        {/* Image container that extends below the red frame */}
        <div className="absolute" style={{ top: '26px', left: '31px', width: '448px', height: '258px' }}>
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        
        {/* Red frame - only top, left and right */}
        <div 
          className="absolute top-0 left-0 w-full bg-[rgba(38,110,165,1)] rounded-md"
          style={{ height: '26px' }}
        />
        <div 
          className="absolute top-0 left-0 h-full bg-[rgba(38,110,165,1)]"
          style={{ width: '31px' }}
        />
        <div 
          className="absolute top-0 right-0 h-full bg-[rgba(38,110,165,1)]"
          style={{ width: '31px' }}
        />
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-32 bg-white/80 rounded-full p-2 hover:bg-white z-10"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-32 bg-white/80 rounded-full p-2 hover:bg-white z-10"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Pagination dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-pink-600' : 'bg-red-100'}`}
            />
          ))}
        </div>
      </div>
    </div>

      {/* Content */}
      <div className="prose max-w-none mt-8 px-4 ">
      
        <p className="list-disc text-[13px] font-medium pl-5 mb-6 space-y-1">
          <>   <span className="font-bold text-[14px] mb-4">TL;DR:</span>I led the design and testing for Peach Cars, creating a user-friendly marketplace that <br /> simplifies buying and selling used cars in Kenya.</>
          <>By focusing on trust, intuitive search, and a <br /> seamless listing process, we improved user engagement, increased listings, and boosted business <br /> growth.</>
        </p>

        <h2 className="font-bold text-[20px] text-gray-700 mt-8 mb-4">Peach Cars Website – UX Case Study</h2>
        
        <h3 className="font-bold text-gray-700 text-[14px] mb-2">Introduction</h3>
        <p className="mb-4 font-medium text-[13px] text-gray-700">
          Peach Cars is a Kenyan online marketplace that simplifies buying and selling used cars. My role as the UX/UI Designer involved leading research, design, and testing to create a user-friendly and trustworthy platform.
        </p>
        
        <h3 className="font-bold text-[13px] text-gray-700 mt-2 mb-2">My Role & Process</h3>
        <p className="mb-2 text-[13px] text-gray-700 font-medium ">
          I handled user research, wireframing, prototyping, usability testing, and visual design using Figma. <br /> The goal was to improve trust, simplify search, and streamline the listing process for sellers.
        </p>

        <h3 className="font-bold text-[13px] text-gray-700 mt-3 mb-3">Research & Key Insights</h3>
        <p className="mb-2 text-[13px] text-gray-700 font-medium">
          Through interviews, surveys, and competitor analysis, I identified major pain points:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-[13px] text-gray-700 font-medium">
          <li>Buyers lacked trust in listings and had difficulty finding the right cars.</li>
          <li>Sellers found existing platforms confusing and inefficient.</li>
        </ul>
        <p className="mb-4 text-[13px] text-gray-700 font-medium">
          This led to user personas guiding design decisions, ensuring the platform addressed these <br /> concerns.
        </p>

        <h3 className="font-bold text-[13px] text-gray-700 mb-2">Design & Usability Testing</h3>
        <p className="mb-2 text-[13px] text-gray-700 font-medium">
          I created wireframes, prototypes, and high-fidelity UI with a clean, modern look and easy <br /> navigation.
        </p>
        <p className="mb-2 font-bold text-[13px] text-gray-700">
          Key features included:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-[13px] text-gray-700 font-medium">
          <li>Robust filters for precise car searches</li>
          <li>Verified seller badges and inspection reports</li>
          <li>A guided selling process for first-time sellers</li>
        </ul>
        <p className="mb-4 text-[13px] text-gray-700 font-medium">
          Usability testing helped refine the experience, leading to simpler filters, clearer CTA labels, and <br /> mobile optimizations.
        </p>

        <h3 className="font-bold text-[13px] text-gray-700 mb-2">Challenges & Solutions</h3>
        <ul className="list-disc pl-5 mb-4 text-[13px] text-gray-700 font-medium space-y-1">
          <li><strong>Establishing Trust:</strong> Added verification badges and inspection reports.</li>
          <li><strong>Balancing Buyer & Seller Needs:</strong> Designed separate, intuitive pathways for both.</li>
          <li><strong>Optimizing for Mobile & Low Bandwidth:</strong> Used a mobile-first approach with lightweight images.</li>
        </ul>

        <h3 className="font-bold text-[13px] text-gray-700 mb-2">Results & Impact</h3>
        <ul className="list-disc pl-5 text-[13px] text-gray-700 font-medium mb-4 space-y-1">
          <li>User engagement improved (4+ min session duration, lower bounce rates).</li>
          <li>Listings and inquiries increased, exceeding initial targets.</li>
          <li>Positive feedback from users on ease of use and transparency.</li>
          <li>Business growth, contributing to increased funding and market traction.</li>
        </ul>

        <h3 className="font-bold text-[13px] text-gray-700 mb-2">Conclusion</h3>
        <p className="mb-4 text-[13px] text-gray-700 font-medium">
          This project reinforced the power of user-centered design and iterative <br /> testing in solving real-world pain points. By focusing on trust and simplicity, <br /> Peach Cars became a more accessible and effective car marketplace.
        </p>
      </div>
    </div>
  );
}