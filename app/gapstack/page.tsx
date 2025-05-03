'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, X, Globe, Users, BarChart3, ClipboardCheck } from 'lucide-react';

export default function GapstackShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: "/gap.png", alt: "Gapstack Dashboard Interface showing real-time trade finance analytics" },
    { src: "/gap1.jpg", alt: "Trade Financing Request Flow with automated approval steps" },
    { src: "/gap2.png", alt: "Compliance monitoring dashboard with risk indicators" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToSlide = (idx: number) => setCurrentSlide(idx);

  return (
    <div className="max-w-[735px] mx-auto p-4 sm:p-6 bg-white ">
      {/* Header with Logo */}
      <header className="flex items-start gap-4 sm:gap-6 mb-6">
  {/* Logo - Always on left */}
  <div className="flex-shrink-0">
    <img 
      src="New Logo.png" 
      alt="Gapstack Logo" 
      className="w-[75px] h-[75px] object-contain"
    />
  </div>

  {/* Text content - Always to the right of logo */}
  <div className="flex-1">
    <h1 className="text-[20px] font-bold text-gray-800 leading-tight">
      Gapstack is a supply chain & trade financing platform <br /> 
      built for banks & financial institutions.
    </h1>
    <p className="text-blue-600 text-[13px] underline mt-1 sm:mt-2">
      <a 
        href="https://www.gapstack.com" 
        className="hover:underline hover:text-blue-700 transition-colors flex items-center"
      >
       
        www.gapstack.com
      </a>
    </p>
  </div>
</header>

      {/* Services */}
      <div className="flex flex-row flex-wrap gap-3 sm:gap-4 mb-6">
  {[
    { icon: "search.png", label: "UX Research" },
    { icon: "compass.png", label: "Product Design" }, 
    { icon: "check.png", label: "User Testing" }
  ].map((service, index) => (
    <div 
      key={index}
      className="flex items-center text-[13px] font-medium text-gray-600"
    >
      <img 
        src={service.icon} 
        alt={service.label} 
        className="w-3 h-3 mr-2 object-contain"
      />
      <span>{service.label}</span>
    </div>
  ))}
</div>

      {/* Image Carousel */}
      <div className="relative mb-8 group">
        <div 
          className="w-full aspect-video sm:h-[400px] overflow-hidden rounded-xl  bg-sky-900 cursor-pointer border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={images[currentSlide].src} 
            alt={images[currentSlide].alt}
            className="w-full h-full object-contain p-4"
          />
        </div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-blue-600" />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-blue-600" />
        </button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/80 px-2 py-1 rounded-full">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
              className={`block w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
              aria-label={`View slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Full Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center">
            <img 
              src={images[currentSlide].src} 
              alt={images[currentSlide].alt}
              className="w-full h-auto max-h-full object-contain"
            />
            
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              aria-label="Close preview"
            >
              <X size={24} className="text-gray-800" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="text-gray-700 font-[Satoshi] leading-relaxed">
 
  <p className="text-[13px] font-medium mb-4">
  <span className="text-[14px] font-semibold mb-2">
    TL;DR:
  </span> I designed an intuitive, scalable trade financing platform for banks, improving efficiency in <br /> the process. Conducted research, user testing, and iterative design to streamline workflows and <br /> enhance usability. Delivered a user-centric experience balancing automation, compliance, and <br /> operational needs.
  </p>

  <p className="text-[20px] font-semibold mb-2">
    Project Overview
  </p>
  <div className="text-[13px] mb-4">
    <strong>About Gapstack:</strong>
    <p className='text-[13px] font-medium'> Gapstack is a supply chain and trade financing platform designed to help banks and financial <br />
     institutions streamline their trade financing processes. The platform aims to reduce manual <br /> inefficiencies, enhance automation, and provide a seamless experience for financial professionals <br /> managing trade finance operations.</p>
  </div>

  <p className="text-[14px] font-semibold mb-2">
    The Problem
  </p>
  <p className="text-[13px] font-medium mb-4">
    Many banks rely on outdated, manual processes to handle trade financing, leading to inefficiencies,<br /> slow approval processes, and compliance challenges. The lack of an intuitive digital platform <br /> increases operational costs and customer dissatisfaction.
  </p>

  <p className="text-[14px] font-semibold mb-2">
    The Goal
  </p>
  <p className="text-[13px] font-medium ">
    My objective was to design an intuitive, efficient, and scalable platform that enhances user experience, improves processing speed, and ensures regulatory compliance.
  </p>
</div>
<div className="text-gray-700 py-4 font-[Satoshi] leading-relaxed space-y-4">
  <h2 className="text-[14px] font-semibold">Research & Discovery</h2>

  <div>
    <h3 className="text-[14px] font-semibold mb-1">Understanding Users</h3>
    <p className="text-[13px] font-medium">
      To design a user-centered solution, I conducted extensive research, including:
    </p>
    <ul className="list-disc list-inside font-medium text-[13px] space-y-1">
      <li>
        <strong>User Interviews:</strong> Engaged with banking professionals, trade finance specialists, and SME clients <br /> to understand pain points.
      </li>
      <li>
        <strong>Surveys:</strong> Gathered data on current challenges in trade financing.
      </li>
      <li>
        <strong>Stakeholder Workshops:</strong> Collaborated with financial analysts and compliance teams to align <br /> design with regulatory requirements.
      </li>
    </ul>
  </div>

  <div>
    <h3 className="text-[14px] font-semibold mb-1">Competitive Analysis</h3>
    <p className="text-[13px] font-medium">Through my study of existing trade finance solutions, I identified key gaps:</p>
    <ul className="list-disc font-medium list-inside text-[13px] space-y-1">
      <li>Complex interfaces that required extensive training.</li>
      <li>Lack of automation in approval workflows.</li>
      <li>Poor data visualization for trade financing requests.</li>
    </ul>
  </div>

  <div>
    <h3 className="text-[14px] font-semibold mb-1">Key Insights</h3>
    <ul className="list-disc list-inside text-[13px] font-medium">
      <li>Users needed a clear dashboard to track trade financing requests.</li>
      <li>Automation was crucial for speeding up approval processes.</li>
      <li>Security and compliance were major concerns, requiring a balance between <br /> usability and regulatory needs.</li>
    </ul>
  </div>
</div>


    </div>
  );
}