'use client';

import { SetStateAction, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function PeachCarsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetailedSection, setShowDetailedSection] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { src: "/peach0.jpg", alt: "Peach Cars Homepage" },
    { src: "/peach2.jpg", alt: "Car Listing Page" },
    { src: "/peach3.jpg", alt: "Seller Dashboard" },
    { src: "/peach4.jpg", alt: "Seller Dashboard" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToSlide = (idx: SetStateAction<number>) => {
    setCurrentSlide(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]);

  useEffect(() => {
    if (!showDetailedSection) {
      setIsAutoPlaying(false);
    } else {
      setIsAutoPlaying(true);
    }
  }, [showDetailedSection]);

  return (
    <div className="max-w-[355px] mx-auto p-2 sm:p-4 bg-[rgba(249,250,251,1)] font-sans relative">
      {/* Small Summary Section (Always visible) */}
      <div 
        className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 p-2 cursor-pointer"
        onClick={() => setShowDetailedSection(true)}
      >
        <div className="flex-shrink-0">
          <img 
            src="/peacch.png" 
            alt="Peach Cars Preview" 
            className="w-[135px] h-[70px] object-cover rounded-[6px]"
          />
        </div>

        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-[1p3x] sm:text-[13px] font-bold text-gray-800 mb-2 whitespace-nowrap max-w-[180px]">
            Peach Cars is a <br />rising startup aim...
          </p>
          <p className="text-[9px] sm:text-[12px] font-medium mb-2 text-orange-600 flex items-center gap-1">
            Peach Cars
            <HiArrowUpRight className="text-[11px] sm:text-[14px] hover:text-blue-800" />
          </p>
        </div>
      </div>

      {/* Modal Backdrop */}
      {showDetailedSection && (
        <div 
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10"
          onClick={() => setShowDetailedSection(false)}
        />
      )}
      
      {/* Detailed Section Modal */}
      <div className={`
        fixed bottom-0 left-1/2 transform -translate-x-1/2
        w-full max-w-[800px] bg-white z-50 rounded-t-2xl shadow-xl py-4 sm:py-8 sm:px-6 md:px-12 lg:px-20 lg:py-14
        transition-all duration-300 ease-in-out
        ${showDetailedSection ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ 
        maxHeight: '90vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="w-full">
          {/* Header with Logo */}
          <header className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="bg-red-50 rounded-md flex items-center justify-center w-14 h-14 sm:w-[75px] sm:h-[75px]">
                <img 
                  src="Group.png" 
                  alt="Peach Cars Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h1 className="text-[12px] sm:text-lg font-bold text-gray-800">
                <span className="text-[#ed3977]">Peach Cars</span> is a rising startup aiming to transform the <br />
                used car buying experience in Kenya by providing a <br />
                transparent, user-friendly online marketplace.
              </h1>

              <a href="https://peachcars.co.ke" target="_blank" rel="noopener noreferrer">
                <p className="text-blue-600 text-[9px] sm:text-[12px] font-medium mt-1 underline inline-block cursor-pointer">
                  www.peachcars.co.ke
                </p>
              </a>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-[8px] sm:text-[11px] mt-2">
                <div className="flex items-center text-gray-600">
                  <img src="search.png" alt="UX Research" className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-1 rounded-[6px]" />
                  <span className="font-medium">UX Research</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <img src="compass.png" alt="Design" className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-1 rounded-[6px]" />
                  <span className="font-medium">Design</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <img src="check.png" alt="Testing" className="w-2.5 h-2.5 sm:w-4 sm:h-4 mr-1 rounded-[6px]" />
                  <span className="font-medium">Testing</span>
                </div>
              </div>
            </div>
          </header>

          {/* Image Carousel */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative w-full max-w-[610px] aspect-[510/280] group">
              <div 
                className="absolute bg-[rgba(38,110,165,1)] z-0 rounded-t-[8px]" 
                style={{ top: 0, left: 0, right: 0, height: '36px' }} 
              />
              <div 
                className="absolute bg-[rgba(38,110,165,1)] z-0 rounded-l-[8px]" 
                style={{ top: 0, left: 0, bottom: 0, width: '36px' }} 
              />
              <div 
                className="absolute bg-[rgba(38,110,165,1)] z-0 rounded-r-[8px]" 
                style={{ top: 0, right: 0, bottom: 0, width: '36px' }} 
              />

              <div 
                className="absolute inset-0 z-10 overflow-hidden rounded-[8px]"
                style={{ top: '26px', left: '36px', right: '36px', bottom: 0 }}
              >
                <div className="w-full h-full relative overflow-hidden rounded-[8px]">
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{ 
                        opacity: currentSlide === index ? 1 : 0,
                        zIndex: currentSlide === index ? 1 : 0
                      }}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
                        style={{ objectPosition: 'top center' }}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className="absolute left-[54px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md opacity-70 z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} className="text-gray-900" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className="absolute right-[54px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 shadow-md opacity-70 z-20"
                aria-label="Next slide"
              >
                <ChevronRight size={16} className="text-gray-900" />
              </button>

              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20 bg-white/80 px-2 py-1 rounded-full">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(idx);
                    }}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                      currentSlide === idx ? 'bg-pink-600 w-2.5 sm:w-3' : 'bg-gray-300'
                    }`}
                    aria-label={`View slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none mt-4 sm:mt-8 px-1 sm:px-4">
            <p className="text-[9px] sm:text-[12px] font-medium mb-3 sm:mb-6">
              <span className="font-medium text-[10px] sm:text-[12px]">TL;DR:</span> I led the design and testing for Peach Cars, creating a user-friendly marketplace that <br className="hidden sm:block" /> simplifies buying and selling used cars in Kenya. By focusing on trust, intuitive search, and a <br className="hidden sm:block" /> seamless listing process, we improved user engagement, increased listings, and boosted business <br className="hidden sm:block" /> growth.
            </p>
            <hr className="text-gray-300" />
            <h2 className="font-bold text-[12px] sm:text-lg text-gray-700 mt-4 sm:mt-8 mb-2 sm:mb-4">Peach Cars Website – UX Case Study</h2>
            
            <h3 className="font-bold text-[10px] sm:text-[12px] text-gray-700 mb-2">Introduction</h3>
            <p className="mb-3 text-[9px] sm:text-[12px] text-gray-700 font-medium">
              Peach Cars is a Kenyan online marketplace that simplifies buying and selling used cars. My role as <br className="hidden sm:block" /> the UX/UI Designer involved leading research, design, and testing to create a user-friendly and <br className="hidden sm:block" /> trustworthy platform.
            </p>
            
            <h3 className="font-bold text-[10px] sm:text-[12px] text-gray-700 mt-2 mb-2">My Role & Process</h3>
            <p className="mb-2 text-[9px] sm:text-[12px] text-gray-700 font-medium">
              I handled user research, wireframing, prototyping, usability testing, and visual design using Figma. <br className="hidden sm:block" /> The goal was to improve trust, simplify search, and streamline the listing process for sellers.
            </p>

            <h3 className="font-bold text-[10px] sm:text-[12px] text-gray-700 mt-6 sm:mt-8 mb-2">Research & Key Insights</h3>
            <p className="mb-1 text-[9px] sm:text-[12px] text-gray-700 font-medium">
              Through interviews, surveys, and competitor analysis, I identified major pain points:
            </p>
            <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-4 text-[9px] sm:text-[12px] text-gray-700 font-medium">
              <li>Buyers lacked trust in listings and had difficulty finding the right cars.</li>
              <li>Sellers found existing platforms confusing and inefficient.</li>
            </ul>
            <p className="text-[9px] sm:text-[12px] text-gray-700 font-medium">
              This led to user personas guiding design decisions, ensuring the platform addressed these <br /> concerns.
            </p>

            <h3 className="font-medium text-[10px] sm:text-[12px] text-gray-700 mt-4 sm:mt-6 mb-2">Design & Usability Testing</h3>
            <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-4 text-[9px] sm:text-[12px] text-gray-700 font-medium">
              <li>
                I created wireframes, prototypes, and high-fidelity UI with a clean, modern look and easy <br /> navigation.
              </li>
              <li>Key features included robust filters, verified seller badges, and inspection reports, a guided <br /> selling process.</li>
              <li>Usability testing helped refine the experience, leading to simpler filters, clearer CTA labels,<br /> and mobile optimizations.</li>
            </ul>
           
            <h3 className="font-bold text-[10px] sm:text-[12px] text-gray-700 mb-2">Challenges & Solutions</h3>
            <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-4 text-[9px] sm:text-[12px] text-gray-700 font-medium space-y-1">
              <li><span>Establishing Trust:</span> Added verification badges and inspection reports.</li>
              <li><span>Balancing Buyer & Seller Needs:</span> Designed separate, intuitive pathways for both.</li>
              <li><span>Optimizing for Mobile & Low Bandwidth:</span> Used a mobile-first approach with lightweight images.</li>
            </ul>

            <h3 className="font-bold text-[10px] sm:text-[12px] text-gray-700 mb-2">Results & Impact</h3>
            <ul className="list-disc pl-4 sm:pl-5 text-[9px] sm:text-[12px] text-gray-700 font-medium mb-3 sm:mb-4 space-y-1">
              <li>User engagement improved (4+ min session duration, lower bounce rates).</li>
              <li>Listings and inquiries increased, exceeding initial targets.</li>
              <li>Positive feedback from users on ease of use and transparency.</li>
              <li>Business growth, contributing to increased funding and market traction.</li>
            </ul>

            <h3 className="font-bold text-[10px] sm:text-[12px] text-gray-800 mt-4 sm:mt-7">Conclusion</h3>
            <p className="mt-3 sm:mt-4 text-[9px] sm:text-[12px] text-gray-700 font-medium">
              This project reinforced the power of user-centered design and iterative testing in solving real-world <br /> pain points. By focusing on trust and simplicity, Peach Cars became a more accessible and effective <br /> car marketplace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}