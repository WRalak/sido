'use client';

import { useState, useEffect, SetStateAction } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { FaCircle } from 'react-icons/fa';

export default function SolgatesShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetailedSection, setShowDetailedSection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    {
      src: "/slg.jpg",
      alt: "Solgates Marketplace Interface"
    },
    {
      src: "/solg.jpg",
      alt: "Second-hand Clothing Listings"
    },
     {
      src: "/solgg.jpg",
      alt: "Second-hand Clothing Listings"
    },
  ];

  // Preload images to ensure they're available for pagination
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = image.src;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Failed to preload images:", error);
        // Fall back to showing images anyway
        setImagesLoaded(true);
      }
    };
    
    preloadImages();
  }, []);

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
    <div className="w-full max-w-[353px] mx-auto p-3 md:p- bg-[rgba(249,250,251,1)] relative">
      {/* Small Summary Section (Always visible) */}
      <div 
        className="flex items-center gap-x-1 md:gap-3 mb-4 md:mb- p-2 md:p-4 cursor-pointer"
        onClick={() => setShowDetailedSection(true)}
      >
        <div className="flex-shrink-0">
          <img 
            src="/solgates.jpg" 
            alt="Solgates Preview" 
            className="w-[135px] md:w-[135px] h-[70px] md:h-[70px] object-cover rounded-[8px]"
          />
        </div>

        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-[13px] mb-2 font-extrabold text-gray-800 whitespace-nowrap max-w-full font-Satoshi">
            A Second-Hand <br /> Clothing Marketpl...
          </p>
          <p className="text-[13px] font-medium mb-2 md:mb-2 text-orange-600 flex items-center gap-1">
            Solgates
            <HiArrowUpRight className="text-[15px] hover:text-blue-800" />
          </p>
        </div>
      </div>
      
      {/* Modal Backdrop */}
      {showDetailedSection && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 backdrop-blur-"
          onClick={() => setShowDetailedSection(false)}
        />
      )}
      
      {/* Detailed Section Modal */}
      <div className={`
        fixed bottom-0 left-1/2 transform -translate-x-1/2
        w-full max-w-[735px] bg-white z-50 rounded-t-2xl shadow-xl 
        transition-all duration-300 ease-in-out py-10 px-4 sm:px-8 md:px-12 lg:px-20 lg:py-14
        ${showDetailedSection ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ 
        maxHeight: '90vh',
        overflowX: 'hidden',
        overflowY: 'auto',
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none' /* IE and Edge */
      }}>
        {/* Custom CSS to hide scrollbar for Chrome, Safari and Opera */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="w-full">
          {/* Header with Logo */}
          <header className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-[8px] overflow-hidden bg-orange-600 flex items-center justify-center flex-shrink-0">
              <img 
                src="Layer 2.png" 
                alt="Solgates logo" 
                className="max-w-full max-h-full object-contain" 
                loading="eager"
              />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <h1 className="text-sm sm:text-[17px] md:text-[19px] font-extrabold text-gray-800 leading-snug">
                <span className="text-orange-600">Solgates</span>  is a supply chain & trade financing  <br /> built for banks & financial institutions.

                
              </h1>
              <a 
                href="https://www.solgates.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 mt-1 font-medium text-[13px] sm:text-[13px] underline hover:text-blue-800 transition-colors"
              >
                www.solgates.com
              </a>

              <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-[12px] md:text-[13px] font-medium text-gray-600 mt-2">
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="suit.png" alt="Co-founder icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 rounded-[8px]" />
                  <span className='font-medium'>Co-founder</span>
                </div>
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="search.png" alt="UX Research icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 rounded-[8px]" />
                  <span>UX Research</span>
                </div>
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="compass.png" alt="Design icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 rounded-[8px]" />
                  <span>Design</span>
                </div>
                <div className="flex items-center gap-1 flex-nowrap">
                  <img src="check.png" alt="Testing icon" className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 rounded-[8px]" />
                  <span>Testing</span>
                </div>
              </div>
            </div>
          </header>

          {/* Image Carousel with orange-300 background on 3 sides */}
 <div className="relative mb-4 md:mb-8">
  {/* Background frame for top, right, and left */}
  <div className="absolute inset-0 bg-orange-600 z-0 rounded-t-[8px]" 
       style={{ top: 0, left: 0, right: 0, bottom: 'auto', height: '36px' }} />
  <div className="absolute inset-0 bg-orange-600 z-0 rounded-l-[8px]" 
       style={{ top: 0, left: 0, bottom: 0, right: 'auto', width: '36px' }} />
  <div className="absolute inset-0 bg-orange-600 z-0 rounded-r-[8px]" 
       style={{ top: 0, right: 0, bottom: 0, left: 'auto', width: '36px' }} />
  
  {/* Image container */}
  <div className="relative z-10 w-full h-[300px] overflow-hidden rounded-[8px]">
    <div className="absolute" style={{ 
      marginTop: '30px',
      marginLeft: '36px',
      marginRight: '36px',
      width: 'calc(100% - 72px)',
      height: 'calc(100% - 36px)',
      overflow: 'hidden',
      borderRadius: '8px'
    }}>
      {images.map((image, index) => (
        <div 
          key={index}
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-300"
          style={{ 
            opacity: currentSlide === index ? 1 : 0,
            zIndex: currentSlide === index ? 1 : 0
          }}
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover rounded-[8px]"
            style={{ objectPosition: 'center top' }}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
    
    {/* Right arrow */}
    <div 
      className="absolute right-12 top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer"
      onClick={(e) => { e.stopPropagation(); nextSlide(); }}
    >
      <div className="bg-black/20 hover:bg-black/20 rounded-full p-2 transition-colors">
        <ChevronRight size={24} className="text-white" />
      </div>
    </div>
    
    {/* Left arrow */}
    <div 
      className="absolute left-12 top-1/2 transform -translate-y-1/2 z-30 flex items-center justify-center cursor-pointer"
      onClick={(e) => { e.stopPropagation(); prevSlide(); }}
    >
      <div className="bg-black/20 hover:bg-black/20 rounded-full p-2 transition-colors">
        <ChevronLeft size={24} className="text-white" />
      </div>
    </div>
  </div>

  {/* Updated Pagination Dots */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 px-2 py-1 rounded-full z-20 bg-white/70">
    {images.map((_, idx) => (
      <button
        key={idx}
        onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
        className={`block h-1.5 md:h-2 rounded-full transition-all duration-300 ${
          currentSlide === idx
            ? 'w-3 md:w-4 bg-orange-600'
            : 'w-1.5 md:w-2 bg-gray-300'
        }`}
        aria-label={`View slide ${idx + 1}`}
      />
    ))}
  </div>
</div>


          {/* Content */}
          <div className="prose max-w-none">
            <h2 className="font-extrabold text-gray-700 text-[20px] sm:text-[20px] mt-2 mb-2 md:mb-4">Project Overview</h2>
            
            <h3 className="text-gray-900 font-bold text-[14px] sm:text-[13px] mb-1 md:mb-2">About Solgates</h3>
            <p className="text-gray-700 text-[13px] font-medium ">
              Solgates is an online marketplace that connects buyers and sellers of second-hand clothing, making 
              <br />
              sustainable fashion more accessible. As a co-founder, I led the design and user experience of 
              <br />
              the platform, ensuring an intuitive and engaging interface for users.
            </p>
            
            <p className="mb-2 md:mb-3 text-gray-700 font-medium text-[14px] sm:text-[13px]">My role encompassed:</p>
            <ul className="text-gray-700 text-[13px] font-medium  leading-relaxed">
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>User Research & Strategy:</strong> {!isMobile && <br />}
                  Conducted extensive user research to understand the needs of both 
                  {!isMobile && <br />} 
                  buyers and sellers, shaping the platform's features and user flow.
                </span>
              </li>
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>UX/UI Design:</strong> {!isMobile && <br />}
                  Designed a seamless browsing and purchasing experience, optimizing the 
                  {!isMobile && <br />} 
                  interface for ease of navigation and engagement.
                </span>
              </li>
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>Prototyping & Usability Testing:</strong> {!isMobile && <br />}
                  Developed high-fidelity prototypes and conducted usability 
                  {!isMobile && <br />} 
                  testing to refine the experience based on real user feedback.
                </span>
              </li>
              <li className="flex mb-1">
                <span className="mr-2">•</span>
                <span>
                  <strong>Iterative Improvements:</strong> {!isMobile && <br />}
                  Continuously analyzed user behavior and iterated on the design to 
                  {!isMobile && <br />} 
                  enhance performance, conversion rates, and accessibility.
                </span>
              </li>
            </ul>

            <p className='text-gray-700 text-[13px] font-medium  mt-3 md:mt-4'>
              Solgates empowers individuals to buy and sell second-hand clothing effortlessly while promoting a 
              {isSmallScreen && <br />}
              {!isMobile && <br />} 
              circular economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}