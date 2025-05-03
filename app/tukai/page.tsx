'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

export default function TukaiShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: "/tukai1.png", alt: "Tukai Adventure Discovery" },
    { src: "/tukai2.png", alt: "Community Hub Interface" },
    { src: "/tukai3.png", alt: "Trip Planning Dashboard" },
    { src: "/tukai4.png", alt: "Trip Planning Dashboard" },
    { src: "/tukai5.png", alt: "Trip Planning Dashboard" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToSlide = (idx: number) => setCurrentSlide(idx);

  return (
    <div className="max-w-[735px] mx-auto p-4 sm:p-6 bg-white font-sans">
      {/* Header with Logo */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
        <header className="flex flex-col sm:flex-row items-start gap-4 flex-1 min-w-0">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <img 
              src="/IG Post 2.png" 
              alt="tukai" 
              className="w-16 h-16 sm:w-[75px] sm:h-[75px] object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-bold text-gray-800">
              Tukai transforms how people explore the outdoors, plan adventures, and build communities.
            </h1>
            <p className="text-blue-600 text-xs sm:text-sm mt-1 underline inline-block">
              www.tukai.co
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
              {[
                { icon: "/suit.png", label: "Co-founder" },
                { icon: "/search.png", label: "UX Research" },
                { icon: "/calendar.png", label: "Project Management" },
                { icon: "/compass.png", label: "Design" },
                { icon: "/check.png", label: "Testing" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <img src={item.icon} alt={item.label} className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-6 sm:mb-8">
        <div 
          className="w-full aspect-[16/9] sm:h-[280px] flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#007A87] to-[#007A87] cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            className="h-full w-auto object-contain"
          />
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 hover:bg-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 sm:p-2 hover:bg-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Pagination dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); goToSlide(idx); }}
              className={`w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-green-600' : 'bg-gray-300'}`}
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
          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <img 
              src={images[currentSlide].src} 
              alt={images[currentSlide].alt}
              className="w-full h-full object-contain"
            />
            
            <button 
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 text-white rounded-full p-1 sm:p-2"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 sm:p-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 sm:p-2"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="prose max-w-none">
        <p className="mb-4 sm:mb-6 text-sm sm:text-[13px] font-medium text-gray-800">
          Tukai is a platform designed to transform how people explore the outdoors, plan adventures, and build communities. From hiking and camping to bike riding and scenic drives, Tukai offers an effortless way to access adventure spots, parks, mountains, and fun destinations. It also allows users to join like-minded communities based on their interests, making it more than just an activity hub—it's a <strong>social experience</strong>.
        </p>

        <h2 className="font-bold text-lg sm:text-xl text-gray-700 mt-6 sm:mt-8 mb-3 sm:mb-4">My Role & Contributions</h2>

        <h3 className="font-medium text-sm sm:text-[14px] text-gray-700 mb-2">1. Product Design – Crafting an Engaging and Intuitive Experience</h3>
        <p className="mb-3 sm:mb-4 text-sm sm:text-[13px] text-gray-800 font-medium">
          I led the end-to-end design of Tukai, ensuring that users could seamlessly discover activities, organize their experiences, and connect with others. My focus was on:
        </p>
        <ul className="list-disc pl-5 mb-4 sm:mb-6 space-y-2 text-sm sm:text-[13px] text-gray-700">
          <li>
            <strong>User-Centered Design:</strong> Conducted in-depth research to understand how users plan outdoor activities and what challenges they face.
          </li>
          <li>
            <strong>Information Architecture:</strong> Created a structured and easy-to-navigate platform that allows users to browse places and join communities effortlessly.
          </li>
          <li>
            <strong>Visual and Interaction Design:</strong> Developed a clean, modern, and inviting interface that enhances engagement and usability across devices.
          </li>
          <li>
            <strong>Design System:</strong> Built a scalable UI/UX design system to maintain consistency and speed up feature rollouts.
          </li>
        </ul>

        {/* Rest of your content with responsive text sizes */}
        <h3 className="font-medium text-sm sm:text-[14px] text-gray-700 mt-6 sm:mt-8">2. Project Management – Driving Execution and Timelines</h3>
        <p className="text-sm sm:text-[13px] font-medium text-gray-700 mt-2 sm:mt-4">
          As a co-founder, I managed the roadmap, milestones, and team coordination to keep the project on track. My responsibilities included:
        </p>
        <ul className="list-disc pl-5 mb-4 sm:mb-6 space-y-1 text-sm sm:text-[13px] font-medium text-gray-700">
          <li>Defining short-term sprints and long-term goals to ensure steady feature development</li>
          <li>Collaborating with developers, content creators, and community managers to align objectives</li>
          <li>Prioritizing feature releases based on user feedback and business strategy</li>
          <li>Overseeing the integration of key functionalities like activity discovery, booking, and community engagement</li>
        </ul>

        <h2 className="font-bold text-sm sm:text-[14px] text-gray-800 mt-6 sm:mt-8 mb-2 sm:mb-4">Key Features & Impact</h2>
        <ul className="list-disc pl-5 mb-2 text-sm sm:text-[13px] font-medium text-gray-800">
          <li>Created an intuitive adventure discovery system with personalized recommendations</li>
          <li>Built community features that increased user retention by 40%</li>
          <li>Developed a trip planning toolkit that reduced planning time by 60%</li>
          <li>Implemented a scalable design system that accelerated feature development</li>
        </ul>

        <h2 className="font-bold text-sm sm:text-[14px] text-gray-800 mt-6 sm:mt-8 mb-2 sm:mb-4">Conclusion</h2>
        <p className="mb-4 font-medium text-sm sm:text-[13px] text-gray-700">
          Tukai represents a holistic approach to outdoor adventure planning, combining discovery tools with community features to create a unique ecosystem. As co-founder and design lead, I helped shape both the product vision and execution, resulting in a platform that makes outdoor exploration more accessible and social. The project reinforced the importance of balancing user needs with technical feasibility and business goals in early-stage startups.
        </p>
      </div>
    </div>
  );
}