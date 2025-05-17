'use client';

import { SetStateAction, useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { FiArrowRight } from 'react-icons/fi';
import { BsArrowUpRight } from 'react-icons/bs';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function GapstackShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetailedSection, setShowDetailedSection] = useState(false);

  const images = [
    { src: "/gap.png", alt: "Gapstack Dashboard Interface showing real-time trade finance analytics" },
    { src: "/gap1.jpg", alt: "Trade Financing Request Flow with automated approval steps" },
    { src: "/gap2.png", alt: "Compliance monitoring dashboard with risk indicators" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToSlide = (idx: SetStateAction<number>) => setCurrentSlide(idx);

  return (
    <div className="max-w-[735px] mx-auto p-4 sm:p-6 bg-white relative">
      {/* Small Summary Section (Always visible) */}
             <div 
  className="flex items-center gap-4 mb-6 p-4 cursor-pointer"
  onClick={() => setShowDetailedSection(true)}
>
  <div className="flex-shrink-0">
    <img 
      src="/Gapstack.jpg" 
      alt="Gapstack Preview" 
      className="w-[135px] h-[70px] object-cover rounded"
    />
  </div>

  <div className="flex flex-col justify-center overflow-hidden">
    <p className="text-[13px] font-extrabold text-gray-800 truncate whitespace-nowrap max-w-[180px]">
      Supply Chain & <br />Trade Financing Platform
    </p>
  <p className="text-[13px] font-medium mt-2 text-orange-600 flex items-center gap-1">
  Gapstack
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
        transition-all duration-300 ease-in-out overflow-y-auto
        ${showDetailedSection ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ maxHeight: '90vh' }}>
        <div className="p-4 sm:p-6">
          {/* Close button at top */}
          <button 
            onClick={() => setShowDetailedSection(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close modal"
          >
            <X size={20} className="text-gray-500" />
          </button>

          {/* Header with Logo */}
          <header className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full mb-6">
            {/* Logo on the far left */}
            <div className="flex-shrink-0 self-start">
              <img 
                src="/IG Post 2.png" 
                alt="tukai" 
                className="w-16 h-16 sm:w-[75px] sm:h-[75px] object-contain"
              />
            </div>

            {/* Text content aligned properly next to logo */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-[20px] sm:text-xl font-bold text-gray-800">
                Gapstack - Supply Chain & Trade Financing Platform
              </h1>
              <p className="text-blue-600 text-xs sm:text-sm cursor-pointer underline inline-block">
                www.gapstack.com
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
                {[
                  { icon: "/suit.png", label: "Senior Designer" },
                  { icon: "/search.png", label: "UX Research" },
                  { icon: "/compass.png", label: "Product Design" },
                  { icon: "/check.png", label: "User Testing" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <img src={item.icon} alt={item.label} className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    <span className="font-medium text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
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
            <div className="w-full aspect-video sm:h-[400px] overflow-hidden rounded-xl bg-sky-900">
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
      </div>
    </div>
  );
}