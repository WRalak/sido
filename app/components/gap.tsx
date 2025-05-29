'use client';

import { SetStateAction, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function GapstackShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetailedSection, setShowDetailedSection] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    { src: "/gap.png", alt: "Gapstack Dashboard Interface showing real-time trade finance analytics" },
    { src: "/gap1.jpg", alt: "Trade Financing Request Flow with automated approval steps" },
    { src: "/gap2.png", alt: "Compliance monitoring dashboard with risk indicators" }
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

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToSlide = (idx: SetStateAction<number>) => setCurrentSlide(idx);

  return (
    <div className="w-full max-w-[800px] mx-auto p-3 md:p-6 bg-[rgba(249,250,251,1)] relative">
      {/* Small Summary Section (Always visible) */}
      <div 
        className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6 p-2 md:p-4 cursor-pointer"
        onClick={() => setShowDetailedSection(true)}
      >
        <div className="flex-shrink-0">
          <div className="relative w-[100px] md:w-[135px] h-[60px] md:h-[70px] rounded-[8px] overflow-hidden">
            <img 
              src="/Gapstack.jpg" 
              alt="Gapstack Preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center leading-snug">
          <p className="text-[14px] md:text-[13px] mb-2 font-extrabold text-gray-800">
            Supply Chain & <br /> Trade Financing Platform
          </p>
          <p className="text-[13px] md:text-[13px] font-medium mb-1 md:mb-2 text-orange-600 flex items-center gap-1">
            Gapstack
            <HiArrowUpRight className="text-xs md:text-[13px] hover:text-blue-800" />
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
        w-full max-w-[800px] bg-white z-50 rounded-t-2xl shadow-xl
        transition-all duration-300 ease-in-out py-10 px-4 sm:px-6 md:px-12 lg:px-20 lg:py-14
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
          <header className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4 w-full mb-4 md:mb-6">
            {/* Logo on the far left */}
            <div className="flex-shrink-0 self-start">
              <div className="relative w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-[8px] overflow-hidden">
                <img 
                  src="/Gapstack.jpg" 
                  alt="Gapstack logo"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Text content aligned properly next to logo */}
            <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
              <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-800">
                <span className="" style={{ color: 'rgba(124, 96, 255, 1)' }}>Gapstack </span>
                is a supply chain & trade financing platform <br /> built for banks & financial institutions.
              </h1>
              <p className="text-blue-600 text-sm font-medium sm:text-sm cursor-pointer underline inline-block">
                www.gapstack.com
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 md:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
                {[
                  { icon: "/search.png", label: "UX Research" },
                  { icon: "/compass.png", label: "Product Design" },
                  { icon: "/check.png", label: "User Testing" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <img src={item.icon} alt={item.label} className="w-3 h-3 sm:w-4 sm:h-4 mr-1 rounded-[8px]" />
                    <span className="font-medium text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* Image Carousel with 36px background on 3 sides and 8px radius */}
          <div className="relative mt-4 md:mt-8 group">
            {/* Background frame for top, right, and left */}
            <div className="absolute inset-0 bg-sky-900 z-0 rounded-t-[8px]" 
                 style={{
                   top: 0,
                   left: 0,
                   right: 0,
                   bottom: 'auto',
                   height: '36px'
                 }} />
            <div className="absolute inset-0 bg-sky-900 z-0 rounded-l-[8px]" 
                 style={{
                   top: 0,
                   left: 0,
                   bottom: 0,
                   right: 'auto',
                   width: '36px'
                 }} />
            <div className="absolute inset-0 bg-sky-900 z-0 rounded-r-[8px]" 
                 style={{
                   top: 0,
                   right: 0,
                   bottom: 0,
                   left: 'auto',
                   width: '36px'
                 }} />
            
            {/* Image container */}
            <div className="relative z-10 w-full h-[300px] overflow-hidden rounded-[8px]">
              <div style={{
                marginTop: '36px',
                marginLeft: '36px',
                marginRight: '36px',
                width: 'calc(100% - 72px)',
                height: 'calc(100% - 36px)',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Render all images but only show the current one */}
                <div className="w-full h-full relative rounded-[8px]">
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
                        className="w-full h-full  object-cover"
                        style={{ objectPosition: 'center top' }}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-[54px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 hover:bg-gray-100 shadow-md opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} className="text-blue-600" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-[54px] top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-2 hover:bg-gray-100 shadow-md opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={16} className="text-blue-600" />
            </button>
            
            {/* Pagination indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/80 px-2 py-1 rounded-full z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
                  className={`block w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-blue-600 w-3 md:w-4' : 'bg-gray-300'}`}
                  aria-label={`View slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <hr className='mt-5 text-gray-200' />
          <div className="text-gray-700 font-[Satoshi] leading-relaxed mt-6">
            <div className="text-xs md:text-[13px] font-medium">

              <span className="text-[13px] md:text-[14px] font-semibold mt-2">
                TL;DR:
              </span> I designed an intuitive, scalable trade financing platform for banks, improving efficiency in <br />the process. Conducted research, user testing, and iterative design to streamline workflows and <br /> enhance usability. Delivered a user-centric experience balancing automation, compliance, and <br /> operational needs.
            </div>
            
            <hr className='mt-7 text-gray-200' />
            
            <p className="text-lg md:text-[20px] font-extrabold mb-2 mt-3">
              Project Overview
            </p>
            
            <div className="text-xs md:text-[13px] mb-6">
              <strong>About Gapstack:</strong>
              <p className="text-xs md:text-[13px] font-medium">Gapstack is a supply chain and trade financing platform designed to help banks and financial <br /> institutions streamline their trade financing processes. The platform aims to reduce manual <br /> inefficiencies, enhance automation, and provide a seamless experience for financial professionals <br /> managing trade finance operations.</p>
            </div>

            <p className="text-sm md:text-[14px] font-semibold mb-2">
              The Problem
            </p>
            <p className="text-xs md:text-[13px] font-medium mb-4">
              Many banks rely on outdated, manual processes to handle trade financing, leading to inefficiencies,<br /> slow approval processes, and compliance challenges. The lack of an intuitive digital platform <br /> increases operational costs and customer dissatisfaction.
            </p>

            <p className="text-sm md:text-[14px] font-semibold mb-2">
              The Goal
            </p>
            <p className="text-xs md:text-[13px] font-medium mb-6">
              My objective was to design an intuitive, efficient, and scalable platform that enhances user <br /> experience, improves processing speed, and ensures regulatory compliance.
            </p>
          </div>
            <hr className='mt-7 text-gray-200' />
          <div className="text-gray-700 py-4 font-[Satoshi] leading-relaxed space-y-3 md:space-y-4">
            <h2 className="text-[20px] font-extrabold">Research & Discovery</h2>

            <div>
              <h3 className="text-sm md:text-[14px] font-semibold mb-1">Understanding Users</h3>
              <p className="text-xs md:text-[13px] font-medium">
                To design a user-centered solution, I conducted extensive research, including:
              </p>
              <ul className="list-disc list-inside font-medium text-xs md:text-[13px] space-y-1">
                <li>
                  <>User Interviews:</> I engaged with banking professionals, trade finance specialists, and SME clients <br /> to understand pain points.
                </li>
                <li>
                  <>Surveys:</> I gathered data on current challenges in trade financing.
                </li>
                <li>
                  <>Stakeholder Workshops:</> I collaborated with financial analysts and compliance teams to align <br /> design with regulatory requirements.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-[14px] font-semibold mb-1">Competitive Analysis</h3>
              <p className="text-xs md:text-[13px] font-medium">Through my study of existing trade finance solutions, I identified key gaps:</p>
              <ul className="list-disc font-medium list-inside text-xs md:text-[13px] space-y-1">
                <li>Complex interfaces that required extensive training.</li>
                <li>Lack of automation in approval workflows.</li>
                <li>Poor data visualization for trade financing requests.</li>
              </ul>
            </div>

            <div className='mt-6'>
              <h3 className="text-sm md:text-[14px] font-semibold mb-1">Key Insights</h3>
              <ul className="list-disc list-inside text-xs md:text-[13px] font-medium space-y-1">
                <li>Users needed a clear dashboard to track trade financing requests.</li>
                <li>Automation was crucial for speeding up approval processes.</li>
                <li>Security and compliance were major concerns, requiring a balance between usability and <br /> regulatory needs.</li>
              </ul>
            </div>
                 <hr className='mt-7 text-gray-200' />
            <div className='mt-6'>
              <h2 className='text-[20px] font-extrabold mb-3'>Design Process</h2>
              
              <div className="mb-4">
                <h3 className="text-sm md:text-[14px] font-semibold mb-1">User Flow & Wireframing</h3>
                <p className="text-xs md:text-[13px] font-medium">Based on my research insights, I designed user flows to streamline the financing application <br /> process, ensuring an intuitive journey from request submission to approval.</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm md:text-[14px] font-semibold mb-1">UI Design</h3>
                <p className="text-xs md:text-[13px] font-medium mb-2">My visual design emphasized:</p>
                <ul className="list-disc list-inside text-xs md:text-[13px] font-medium ">
                  <li>A professional, trust-building aesthetic tailored for financial users.</li>
                  <li>A structured information hierarchy for quick decision-making.</li>
                  <li>Color-coded statuses and notifications for tracking financing requests easily.</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-sm md:text-[14px] font-semibold mb-1">Prototyping</h3>
                <p className="text-xs md:text-[13px] font-medium">I created interactive prototypes using Figma to simulate real-world interactions. These prototypes <br /> were tested with users to refine functionality before development.</p>
              </div>
            </div>
              <hr className='mt-7 text-gray-200' />
            <div className='mt-6'>
              <h2 className='text-[20px] font-extrabold mb-3'>Testing & Iterations</h2>
              
              <div className="">
                <h3 className="text-sm md:text-[14px] font-semibold mb-1">Usability Testing</h3>
                <p className="text-xs md:text-[13px] font-medium">I conducted multiple testing rounds with financial users to identify pain points and areas for <br /> improvement.</p>
              </div>

              <div className="">
                <h3 className="text-sm md:text-[14px] font-semibold mb-1">Findings & Improvements</h3>
                <ul className="list-disc list-inside text-xs md:text-[13px] font-medium space-y-1">
                  <p><>1. Simplified Navigation</> – I reduced the number of steps required for financing approvals.</p>
                  <p><>2. Improved Form Design</> – I enhanced form layouts for easier data entry and fewer errors.</p>
                  <p><>3. Enhanced Visual Cues</> – I introduced status indicators and progress tracking for transparency.</p>
                </ul>
              </div>
            </div>
                
            <div className='mt-6'>
              <h2 className='text-[13px] font-semibold mb-3'>Impact & Outcome</h2>
              <ul className="list-disc list-inside text-xs md:text-[13px] font-medium space-y-1">
                <li><>Improved Efficiency</> – I helped reduce processing time for financing applications by 30%.</li>
                <li><>Enhanced User Satisfaction</> – The feedback from banking professionals was overwhelmingly <br /> positive on ease of use.</li>
                <li><>Scalability</> – I designed the platform with flexibility to accommodate future features and <br /> integrations.</li>
              </ul>
            </div>
                    <hr className='mt-7 text-gray-200' />
            <div className='mt-6'>
              <h2 className='text-[20px] font-extrabold mb-3'>Final Screens & Key Features</h2>
              <div className="mb-4">
                <h3 className="text-sm md:text-[14px] font-semibold mb-1">Key UI Screens</h3>
                <ul className="list-disc list-inside text-xs md:text-[13px] font-medium space-y-1">
                  <li><>Dashboard:</> Overview of financing requests and status tracking.</li>
                  <li><>Application Flow:</> Step-by-step process for submitting financing requests.</li>
                  <li><>Approval Process:</> Streamlined workflow for reviewing and approving transactions.</li>
                  <li><>Reporting & Compliance:</> Visual insights into financing trends and regulatory compliance.</li>
                </ul>
              </div>
            </div>

            <div className='mt-6'>
              <strong className='text-[14px] font-bold text-gray-700 mb-3'>Key Learnings</strong>
              <ul className="list-disc list-inside text-xs md:text-[13px] font-medium space-y-1">
                <li>Designing for financial institutions required balancing usability with strict compliance <br /> requirements.</li>
                <li>Simplifying workflows through automation significantly enhanced efficiency.</li>
                <li>Iterative testing and user feedback were crucial in refining a complex platform.</li>
              </ul>
            </div>
        <hr className='text-gray-300 mt-5' />
            <div className='mt-8'>
              <h2 className='text-[20px] font-extrabold mb-3'>Conclusion</h2>
              <p className="text-xs md:text-[13px] font-medium">My redesign of Gapstack successfully optimized the trade financing process, improving operational <br /> efficiency for banks and financial institutions. By taking a user-centric approach, I ensured a <br /> seamless and intuitive experience while addressing key compliance concerns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}