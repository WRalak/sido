'use client';

import { SetStateAction, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { HiArrowUpRight } from 'react-icons/hi2';

export default function TukaiShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDetailedSection, setShowDetailedSection] = useState(false);

  const images = [
    { src: "/tukai1.png", alt: "Tukai Adventure Discovery" },
    { src: "/tukai2.png", alt: "Community Hub Interface" },
    { src: "/tukai3.png", alt: "Trip Planning Dashboard" },
    { src: "/tukai4.png", alt: "Trip Planning Dashboard" },
    { src: "/tukai5.png", alt: "Trip Planning Dashboard" },
     { src: "/tukai6.png", alt: "Trip Planning Dashboard" },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToSlide = (idx: SetStateAction<number>) => setCurrentSlide(idx);

  return (
    <div className="max-w-[735px] mx-auto p-4 sm:p-6 bg-white font-sans relative">
      {/* Small Summary Section (Always visible) */}
                      <div 
  className="flex items-center gap-4 mb-6 p-4 cursor-pointer"
  onClick={() => setShowDetailedSection(true)}
>
  <div className="flex-shrink-0">
    <img 
      src="/tukai.jpg" 
      alt="Gapstack Preview" 
      className="w-[135px] h-[70px] object-cover rounded"
    />
  </div>

  <div className="flex flex-col justify-center overflow-hidden">
    <p className="text-[14px] font-bold text-gray-800 truncate whitespace-nowrap max-w-[180px]">
      Tukai transforms how <br />people explo...
    </p>
    <p className="text-[13px] font-medium mt-2 text-orange-600 flex items-center gap-1">
    Tukai
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
        <div className="p-4 sm:p-6 overflow-y-auto" style={{ maxHeight: '90vh' }}>
          {/* Close button removed */}

          {/* Header with Logo */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            <header className="flex flex-col mt-5 sm:flex-row items-start sm:items-center gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <img 
                  src="/IG Post 2.png" 
                  alt="tukai" 
                  className="w-16 h-16 sm:w-[75px] sm:h-[75px] object-contain"
                />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800">
                  Tukai transforms how people explore the outdoors,<br /> plan adventures, and build communities.
                </h1>
                <p className="text-blue-600 text-xs sm:text-sm mt-1 cursor-pointer underline inline-block">
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
          <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 w-full aspect-[16/9] sm:h-[280px] flex items-center justify-center bg-gradient-to-b from-[#007A87] to-[#007A87]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
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

          {/* Content */}
          <div className="prose max-w-none">
            <p className="mb-4 sm:mb-6 text-sm sm:text-[13px] font-medium text-gray-800">
              Tukai is a platform designed to transform how people explore the outdoors, plan adventures, and <br /> build communities. From hiking and camping to bike riding and scenic drives, Tukai offers an <br /> effortless way to access adventure spots, parks, mountains, and fun destinations. It also allows users <br /> to join like-minded communities based on their interests, making it more than just an activity hub— <br />it's a <strong>social experience</strong>.
            </p>

            <h2 className="font-bold text-lg sm:text-xl text-gray-700 mt-6 sm:mt-8 mb-3 sm:mb-4">My Role & Contributions</h2>

            <strong className="font-medium text-sm sm:text-[14px] text-gray-700 mb-3">1. Product Design – Crafting an Engaging and Intuitive Experience</strong>
            <p className="mt-3 sm:mb-4 text-sm sm:text-[13px] text-gray-800 font-medium">
              I led the end-to-end design of Tukai, ensuring that users could seamlessly discover activities,<br /> organize their experiences, and connect with others. My focus was on:
            </p>
            <ul className="list-disc pl-5 mb-4 sm:mb-6 space-y-2 font-medium text-[13px] sm:text-[13px] text-gray-700">
              <li>
                <strong>User-Centered Design:</strong> Conducted in-depth research to understand how users plan outdoor <br /> activities and what challenges they face.
              </li>
              <li>
                <strong>Information Architecture:</strong> Created a structured and easy-to-navigate platform that allows users <br /> to browse places and join communities effortlessly.
              </li>
              <li>
                <strong>Visual and Interaction Design:</strong> Developed a clean, modern, and inviting interface that enhances <br /> engagement and usability across devices.
              </li>
              <li>
                <strong>Design System:</strong> Built a scalable UI/UX design system to maintain consistency and speed up feature rollouts.
              </li>
            </ul>

            <h3 className="font-bold text-[14px] sm:text-[14px] text-gray-700 mt-6 sm:mt-8">2. Project Management – Driving Execution and Timelines</h3>
            <p className="text-sm sm:text-[13px] font-medium text-gray-700 mt-2 sm:mt-4">
              As a co-founder, I managed the roadmap, milestones, and team coordination to keep the project <br /> on track. My responsibilities included:
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
              Tukai represents a holistic approach to outdoor adventure planning, combining discovery <br /> tools with community features to create a unique ecosystem. As co-founder and design lead,<br /> I helped shape both the product vision and execution, resulting in a platform that <br /> makes outdoor exploration more accessible and social. The project reinforced the importance of balancing <br /> user needs with technical feasibility and business goals in early-stage startups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}