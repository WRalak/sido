'use client';

import { useState, useEffect, SetStateAction } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function SolgatesShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetailedSection, setShowDetailedSection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      src: "/solgate1.jpg",
      alt: "Solgates Marketplace Interface"
    },
    {
      src: "/solgate2.jpg",
      alt: "Second-hand Clothing Listings"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (idx: SetStateAction<number>) => {
    setCurrentSlide(idx);
  };

  // Auto-advance slides only when not in detailed view
  useEffect(() => {
    if (showDetailedSection) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide, showDetailedSection]);

  return (
    <div className="w-full max-w-[735px] mx-auto p-3 md:p-6 bg-white relative">
      {/* Small Summary Section (Always visible) */}
      <div 
        className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 p-2 md:p-4 cursor-pointer"
        onClick={() => setShowDetailedSection(true)}
      >
        <div className="flex-shrink-0">
          <img 
            src="/solgates.jpg" 
            alt="Solgates Preview" 
            className="w-[100px] md:w-[135px] h-[60px] md:h-[70px] object-cover rounded"
          />
        </div>

        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-[14px] md:text-[13px] font-extrabold text-gray-800 truncate whitespace-nowrap max-w-full">
            A Second-Hand <br /> Clothing Marketp...
          </p>
          <p className="text-xs md:text-[13px] font-medium mt-1 md:mt-2 text-orange-600 flex items-center gap-1">
            Solgates
            <HiArrowUpRight className="text-xs md:text-[13px] hover:text-blue-800" />
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
        overflow: 'hidden' // Remove scrollbar
      }}>
        <div className="p-3 md:p-6">
          {/* Header with Logo */}
          <header className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28 rounded overflow-hidden border border-orange-300 flex items-center justify-center flex-shrink-0">
              <img 
                src="Layer 2.png" 
                alt="Solgates logo" 
                className="object-contain max-h-full max-w-full" 
                loading="lazy"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <h1 className="text-sm sm:text-[17px] md:text-[19px] font-extrabold text-gray-800 leading-snug">
                <span className="text-orange-600">Solgates</span> is a supply chain & trade financing platform {!isMobile && <br />} built for banks & financial institutions.
              </h1>
              <a 
                href="https://www.solgates.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 mt-1 text-[11px] sm:text-[13px] underline hover:text-blue-800 transition-colors"
              >
                www.solgates.com
              </a>

              <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-[12px] md:text-[13px] font-medium text-gray-600 mt-2">
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="suit.png" alt="Co-founder icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span>Co-founder</span>
                </div>
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="search.png" alt="UX Research icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span>UX Research</span>
                </div>
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="compass.png" alt="Design icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span>Design</span>
                </div>
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="check.png" alt="Testing icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                  <span>Testing</span>
                </div>
              </div>
            </div>
          </header>

          {/* Image Carousel */}
          <div className="relative mb-4 md:mb-8">
            <div 
              className="w-full mx-auto overflow-hidden rounded-lg bg-gray-100"
              style={{
                height: isMobile ? '180px' : '280px',
                maxWidth: isMobile ? '100%' : '510px',
                borderRadius: '6px',
              }}
            >
              <img 
                src={images[currentSlide].src} 
                alt={images[currentSlide].alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'top center' }}
                loading="lazy"
              />
            </div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={isMobile ? 16 : 24} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={isMobile ? 16 : 24} />
            </button>
            
            <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
                  className={`block w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-orange-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <h2 className="font-bold text-gray-700 text-base sm:text-[20px] mt-2 mb-2 md:mb-4">Project Overview</h2>
            
            <h3 className="text-gray-700 font-medium text-[11px] sm:text-[13px] mb-1 md:mb-2">About Solgates</h3>
            <p className="text-gray-700 text-[11px] sm:text-[13px]">
              Solgates is an online marketplace that connects buyers and sellers of second-hand clothing, making {!isMobile && <br />} 
              sustainable fashion more accessible. As a co-founder, I led the design and user experience of {!isMobile && <br />} 
              the platform, ensuring an intuitive and engaging interface for users.
            </p>
            
            <p className="mb-2 md:mb-3 text-gray-700 text-[11px] sm:text-[13px]">My role encompassed:</p>
            <ul className="text-gray-700 text-[11px] sm:text-[13px] leading-relaxed">
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>User Research & Strategy:</strong> {!isMobile && <br />}Conducted extensive user research to understand the needs of both {!isMobile && <br />} buyers and sellers, shaping the platform's features and user flow.
                </span>
              </li>
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>UX/UI Design:</strong> {!isMobile && <br />}Designed a seamless browsing and purchasing experience, optimizing the {!isMobile && <br />} interface for ease of navigation and engagement.
                </span>
              </li>
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>Prototyping & Usability Testing:</strong> {!isMobile && <br />}Developed high-fidelity prototypes and conducted usability {!isMobile && <br />} testing to refine the experience based on real user feedback.
                </span>
              </li>
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>Iterative Improvements:</strong> {!isMobile && <br />}Continuously analyzed user behavior and iterated on the design to {!isMobile && <br />} enhance performance, conversion rates, and accessibility.
                </span>
              </li>
            </ul>

            <p className='text-gray-700 text-[11px] sm:text-[13px] mt-3 md:mt-4'>
              Solgates empowers individuals to buy and sell second-hand clothing effortlessly while promoting a {!isMobile && <br />} circular economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}