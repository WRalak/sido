'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

export default function SolgatesShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  return (
    <div className="max-w-[735px] px-6 mx-auto p-6 bg-white font-sans">
      {/* Header with Logo */}
      <header className="flex flex-wrap items-start gap-4 mb-6">
        <div className="h-24 w-24 md:h-28 md:w-28 rounded overflow-hidden border border-orange-300 flex items-center justify-center flex-shrink-0">
          <img src="Layer 2.png" alt="Solgates logo" className="object-contain max-h-full max-w-full" />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="text-[17px] md:text-[19px] font-bold text-gray-800 leading-snug">
            <span className="text-orange-600">Solgates</span> is a supply chain & trade financing platform <br /> built for banks & financial institutions.
          </h1>
          <p className="text-blue-600 mt-1 text-[12px] md:text-[13px] underline">
            www.solgates.com
          </p>

          <div className="flex items-center flex-wrap gap-2 md:gap-4 text-[12px] md:text-[13px] font-medium text-gray-600 mt-2">
            <div className="flex items-center gap-1 flex-nowrap">
              <img src="suit.png" alt="Co-founder icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="flex-1">Co-founder</span>
            </div>
            <div className="flex items-center gap-1 flex-nowrap">
              <img src="search.png" alt="UX Research icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="flex-1">UX Research</span>
            </div>
            <div className="flex items-center gap-1 flex-nowrap">
              <img src="compass.png" alt="Design icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="flex-1">Design</span>
            </div>
            <div className="flex items-center gap-1 flex-nowrap">
              <img src="check.png" alt="Testing icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="flex-1">Testing</span>
            </div>
          </div>
        </div>
      </header>

      {/* Image Carousel */}
      <div className="relative px-5 mb-8">
        {/* Cropped Image Container */}
        <div 
          className="w-full overflow-hidden rounded-lg cursor-pointer" 
          style={{
            width: '510px',
            height: '280px',
            borderRadius: '6px',
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={images[currentSlide].src} 
            alt={images[currentSlide].alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'top center' }}
          />
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
              className={`block w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-orange-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Full Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={images[currentSlide].src} 
              alt={images[currentSlide].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            
            <button 
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="prose max-w-none">
        <h2 className="font-bold text-gray-700 text-[20px] mt-2 mb-4">Project Overview</h2>
        
        <h3 className="text-gray-700 font-medium text-[13px] mb-2">About Solgates</h3>
        <p className="text-gray-700 text-[13px]">
          Solgates is an online marketplace that connects buyers and sellers of second-hand clothing, making <br /> sustainable 
          fashion more accessible. As a co-founder, I led the design and user experience of <br /> the platform, ensuring an intuitive 
          and engaging interface for users.
        </p>
        
        <p className="mb-3 text-gray-700 text-[13px]">My role encompassed:</p>
        <ul className="text-gray-700 text-[13px] leading-relaxed">
          <li className="flex mb-1">
            <span className="mr-2">•</span>
            <span>
              <strong>User Research & Strategy:</strong> Conducted extensive user research to understand the needs of both <br /> buyers and sellers, shaping the platform's features and user flow.
            </span>
          </li>
          <li className="flex mb-1">
            <span className="mr-2">•</span>
            <span>
              <strong>UX/UI Design:</strong> Designed a seamless browsing and purchasing experience, optimizing the <br /> interface for ease of navigation and engagement.
            </span>
          </li>
          <li className="flex mb-1">
            <span className="mr-2">•</span>
            <span>
              <strong>Prototyping & Usability Testing:</strong> Developed high-fidelity prototypes and conducted usability <br /> testing to refine the experience based on real user feedback.
            </span>
          </li>
          <li className="flex mb-1">
            <span className="mr-2">•</span>
            <span>
              <strong>Iterative Improvements:</strong> Continuously analyzed user behavior and iterated on the design to <br /> enhance performance, conversion rates, and accessibility.
            </span>
          </li>
        </ul>

        <p className='text-gray-700 text-[13px] mt-4'>Solgates empowers individuals to buy and sell second-hand clothing effortlessly while promoting a <br /> circular economy.</p>
      </div>
    </div>
  );
}