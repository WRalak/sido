'use client';

import { SetStateAction, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function PeachCarsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetailedSection, setShowDetailedSection] = useState(false);

  const images = [
    { src: "/peach0.jpg", alt: "Peach Cars Homepage" },
    { src: "/peach2.jpg", alt: "Car Listing Page" },
    { src: "/peach3.jpg", alt: "Seller Dashboard" },
    { src: "/peach4.jpg", alt: "Seller Dashboard" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToSlide = (idx: SetStateAction<number>) => setCurrentSlide(idx);

  return (
    <div className="max-w-[735px] mx-auto p-4 md:p-6 bg-white font-sans relative">
      {/* Small Summary Section (Always visible) */}
                     <div 
  className="flex items-center gap-4 mb-6 p-4 cursor-pointer"
  onClick={() => setShowDetailedSection(true)}
>
  <div className="flex-shrink-0">
    <img 
      src="/peacch.png" 
      alt="Gapstack Preview" 
      className="w-[135px] h-[70px] object-cover rounded"
    />
  </div>

  <div className="flex flex-col justify-center overflow-hidden">
    <p className="text-[13px] font-bold text-gray-800 truncate whitespace-nowrap max-w-[180px]">
    Peach Cars is a <br />rising startup aim...
    </p>
        <p className="text-[13px] font-medium mt-2 text-orange-600 flex items-center gap-1">
        Peach Cars
        <HiArrowUpRight className="text-[13px] hover:text-blue-800" />
      </p>
  </div>
</div>

      {/* Modal Backdrop */}
      {showDetailedSection && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setShowDetailedSection(false)}
        />
      )}
      
      {/* Detailed Section Modal */}
      <div className={`
        fixed bottom-0 left-1/2 transform -translate-x-1/2
        w-full max-w-[735px] bg-white z-50 rounded-t-2xl shadow-xl
        transition-all duration-300 ease-in-out
        ${showDetailedSection ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ 
        maxHeight: '90vh',
        overflow: 'hidden'
      }}>
        <div className="p-4 md:p-6 overflow-y-auto" style={{ maxHeight: '90vh' }}>
          {/* Close button removed */}

          {/* Header with Logo */}
          <header className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="bg-red-50 rounded-md flex items-center justify-center p-1 w-16 h-16 sm:w-[75px] sm:h-[75px]">
                <img 
                  src="Group.png" 
                  alt="Peach Cars Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                <span className="text-[#ed3977]">Peach Cars</span> is a rising startup aiming to transform the{' '}
                <span className="hidden sm:inline"><br /></span>
                used car buying experience in Kenya by providing a{' '}
                <span className="hidden sm:inline"><br /></span>
                transparent, user-friendly online marketplace.
              </h1>

              <p className="text-blue-600 text-[13px] sm:text-sm mt-1 underline inline-block cursor-pointer">
                www.peachcars.co.ke
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6 text-xs sm:text-sm mt-2">
                <div className="flex items-center text-gray-600">
                  <img src="search.png" alt="UX Research" className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="font-medium">UX Research</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <img src="compass.png" alt="Design" className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="font-medium">Design</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <img src="check.png" alt="Testing" className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="font-medium">Testing</span>
                </div>
              </div>
            </div>
          </header>

          {/* Image Carousel */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-[510px] aspect-[510/280]">
              {/* Clickable image container */}
              <div 
                className="absolute inset-0"
                style={{ 
                  top: '9%', 
                  left: '6%', 
                  width: '88%', 
                  height: '92%' 
                }}
              >
                <img
                  src={images[currentSlide].src}
                  alt={images[currentSlide].alt}
                  className="w-full h-full object-cover rounded-md"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              
              {/* Responsive red frame */}
              <div className="absolute top-0 left-0 w-full bg-[rgba(38,110,165,1)] rounded-t-md h-[9%]" />
              <div className="absolute top-0 left-0 h-full bg-[rgba(38,110,165,1)] w-[6%]" />
              <div className="absolute top-0 right-0 h-full bg-[rgba(38,110,165,1)] w-[6%]" />
              
              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 hover:bg-white z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 hover:bg-white z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              
              {/* Pagination dots */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
                    className={`block w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-pink-600' : 'bg-red-100'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none mt-6 sm:mt-8 px-2 sm:px-4">
            <p className="text-[13px] sm:text-[13px] font-medium mb-4 sm:mb-6">
              <span className="font-bold text-sm sm:text-[14px]">TL;DR:</span> I led the design and testing for Peach Cars, creating a user-friendly marketplace that <br /> simplifies buying and selling used cars in Kenya. By focusing on trust, intuitive search, and a <br /> seamless listing process, we improved user engagement, increased listings, and boosted business <br /> growth.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-gray-700 mt-6 sm:mt-8 mb-3 sm:mb-4">Peach Cars Website – UX Case Study</h2>
            
            <h3 className="font-bold text-sm sm:text-[14px] text-gray-700 mb-2">Introduction</h3>
            <p className="mb-4 text-[13px] sm:text-[13px] text-gray-700 font-medium">
              Peach Cars is a Kenyan online marketplace that simplifies buying and selling used cars. My role as <br /> the UX/UI Designer involved leading research, design, and testing to create a user-friendly and <br /> trustworthy platform.
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
      </div>
    </div>
  );
}