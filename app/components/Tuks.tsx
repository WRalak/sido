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

  // Calculate total slides (showing 2 images per slide)
  const totalSlides = Math.ceil(images.length / 2);

  const nextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goToSlide = (idx: SetStateAction<number>) => setCurrentSlide(idx);

  return (
    <div className="max-w-[350px] mx-auto p-3 sm:p-4 bg-[rgba(249,250,251,1)] relative">
      {/* Small Summary Section (Always visible) */}
      <div 
        className="flex items-center gap-3 mb-6 p-2 sm:p-3 cursor-pointer"
        onClick={() => setShowDetailedSection(true)}
      >
        <div className="flex-shrink-0">
          <img 
            src="/tukai.jpg" 
            alt="Tukai Preview" 
            className="w-[135px] h-[70px] object-cover rounded"
          />
        </div>

        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-[11px] sm:text-[13px] mb-2 font-extrabold text-gray-800 whitespace-nowrap max-w-full font-Satoshi">
            Tukai transforms how <br />people explo...
          </p>
          <p className="text-[11px] sm:text-[13px] font-medium mb-2 text-orange-600 flex items-center gap-1">
            Tukai
            <HiArrowUpRight className="text-[13px] sm:text-[15px] hover:text-blue-800" />
          </p>
        </div>
      </div>

      {/* Modal Backdrop */}
      {showDetailedSection && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          onClick={() => setShowDetailedSection(false)}
        />
      )}
      
      {/* Detailed Section Modal */}
      <div className={`
        fixed bottom-0 left-1/2 transform -translate-x-1/2
        w-full max-w-[735px] bg-white z-50 rounded-t-2xl shadow-xl
        transition-all duration-300 ease-in-out py-8 px-3 sm:px-6 md:px-12 lg:px-16 lg:py-16
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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            <header className="flex flex-col sm:flex-row items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="overflow-hidden flex items-center justify-center flex-shrink-0">
                <img 
                  src="/IG Post 2.png" 
                  alt="Tukai logo" 
                  className="max-w-full max-h-full object-contain w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-[8px]" 
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col flex-1 min-w-0">
                <h1 className="text-[13px] sm:text-[17px] md:text-[19px] font-extrabold text-gray-800 leading-snug">
                  <span>Tukai</span> transforms how people explore the outdoors,<br /> plan adventures, and build communities.
                </h1>

                <a 
                  href="https://www.tukai.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-1 text-[11px] sm:text-[13px] font-medium underline hover:text-blue-600 transition-colors"
                >
                  www.tukai.co
                </a>

                <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4 text-[9px] sm:text-[12px] md:text-[13px] font-medium text-gray-600 mt-2">
                  {[
                    { icon: "/suit.png", label: "Co-founder" },
                    { icon: "/search.png", label: "UX Research" },
                    { icon: "/calendar.png", label: "Project Management" },
                    { icon: "/compass.png", label: "Design" },
                    { icon: "/check.png", label: "Testing" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1 flex-nowrap">
                      <img 
                        src={item.icon} 
                        alt={`${item.label} icon`} 
                        className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 rounded-[8px]" 
                      />
                      <span className="text-[9px] sm:text-xs">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </header>
          </div>

          {/* Image Carousel - Dual View */}
          <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                <div key={slideIdx} className="flex-shrink-0 w-full flex gap-4 justify-center">
                  {images[slideIdx * 2] && (
                    <div className="w-[300px] h-[280px] flex items-center justify-center bg-gradient-to-b from-[#007A87] to-[#007A87] rounded-lg">
                      <img
                        src={images[slideIdx * 2].src}
                        alt={images[slideIdx * 2].alt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  {images[slideIdx * 2 + 1] && (
                    <div className="w-[300px] h-[280px] flex items-center justify-center bg-gradient-to-b from-[#007A87] to-[#007A87] rounded-lg">
                      <img
                        src={images[slideIdx * 2 + 1].src}
                        alt={images[slideIdx * 2 + 1].alt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  {images[slideIdx * 2 + 1] === undefined && slideIdx === totalSlides - 1 && (
                    <div className="w-[300px] h-[280px]"></div>
                  )}
                </div>
              ))}
            </div>
            
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
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <hr className="text-gray-300 p-2" />
            <p className="mb-4 sm:mb-6 text-[10px] sm:text-[13px] font-medium text-gray-800">
              Tukai is a platform designed to transform how people explore the outdoors, plan adventures, and <br className="hidden sm:block" /> build communities. From hiking and camping to bike riding and scenic drives, Tukai offers an <br className="hidden sm:block" /> effortless way to access adventure spots, parks, mountains, and fun destinations. It also allows users <br className="hidden sm:block" /> to join like-minded communities based on their interests, making it more than just an activity hub— <br className="hidden sm:block" /> it's a <strong>social experience</strong>.
            </p>
            <hr className="text-gray-300 p-2" />
            <h2 className="font-bold text-[14px] sm:text-xl text-gray-700 mt-6 sm:mt-8 sm:mb-1">My Role & Contributions</h2>

            <strong className="font-bold mb-3 text-[11px] sm:text-[13px] text-gray-800">1. Product Design – Crafting an Engaging and Intuitive Experience</strong>
            <p className="sm:mb-4 text-[10px] sm:text-[13px] text-gray-600 font-medium">
              I led the end-to-end design of Tukai, ensuring that users could seamlessly discover activities,<br className="hidden sm:block" /> organize their experiences, and connect with others. My focus was on:
            </p>
            <ul className="list-disc pl-5 mb-4 sm:mb-6 font-medium text-[10px] sm:text-[13px] text-gray-700">
              <li>
                <strong>User-Centered Design:</strong> Conducted in-depth research to understand how users plan outdoor <br className="hidden sm:block" /> activities and what challenges they face.
              </li>
              <li>
                <strong>Information Architecture:</strong> Created a structured and easy-to-navigate platform that allows users <br className="hidden sm:block" /> to browse places and join communities effortlessly.
              </li>
              <li>
                <strong>Visual and Interaction Design:</strong> Developed a clean, modern, and inviting interface that enhances <br className="hidden sm:block" /> engagement and usability across devices.
              </li>
              <li>
                <strong>Design System:</strong> Built a scalable UI/UX design system to maintain consistency and speed up <br /> feature rollouts.
              </li>
            </ul>
            <hr className="text-gray-300 p-2" />
            <h3 className="font-bold text-[11px] sm:text-[13px] text-gray-800 mt-6 sm:mt-8">2. Project Management – Driving Execution and Timelines</h3>
            <p className="mt-2 text-[10px] sm:text-[13px] font-medium text-gray-700">
              As a co-founder, I managed the <strong>roadmap, milestones, and team coordination</strong> to keep the project <br className="hidden sm:block" /> on track. My responsibilities included:
            </p>
            <ul className="list-disc pl-5 mb-4 sm:mb-6 space-y-1 text-[10px] sm:text-[13px] font-medium text-gray-700">
              <li>Defining short-term sprints and long-term goals to ensure steady feature development</li>
              <li>Collaborating with developers, content creators, and community managers to align objectives</li>
              <li>Prioritizing feature releases based on user feedback and business strategy</li>
              <li>Overseeing the integration of key functionalities like activity discovery, booking, and community <br /> engagement</li>
            </ul>
            <hr className="text-gray-300 p-2" />
            <strong className="font-bold text-[11px] md:text-[13px] text-gray-800 mb-2">3. Testing – Ensuring a Smooth User Experience</strong>
            <p className="sm:mb-4 text-[10px] sm:text-[13px] text-gray-600 font-medium">
              A great design is only as good as its real-world performance. I led user <strong> testing and quality <br /> assurance,</strong> ensuring the platform was not only beautiful but also functional and user-friendly. <br className="hidden sm:block" /> This involved:
            </p>
            <ul className="list-disc pl-5 mb-4 sm:mb-6 font-medium text-[10px] sm:text-[13px] text-gray-700">
              <li>Conducting usability tests to identify pain points and friction in the user journey.</li>
              <li>Running beta tests with early adopters and adventure enthusiasts.</li>
              <li>Analyzing data and feedback to optimize features, fix issues, and enhance overall user satisfaction.</li>
            </ul>
            <hr className="text-gray-300 p-2" />
            <h2 className="font-bold text-[12px] sm:text-[14px] text-gray-800 mt-6 sm:mt-8 mb-2 sm:mb-4">Key Features & Impact</h2>
            <ul className="list-disc pl-5 mb-2 text-[10px] sm:text-[13px] font-medium text-gray-800">
              <li>Created an intuitive adventure discovery system with personalized recommendations</li>
              <li>Built community features that increased user retention by 40%</li>
              <li>Developed a trip planning toolkit that reduced planning time by 60%</li>
              <li>Implemented a scalable design system that accelerated feature development</li>
            </ul>
            <hr className="text-gray-300 p-2 mt-4" />
            <h2 className="font-bold text-[12px] sm:text-[14px] text-gray-800 mt-6 sm:mt-8 mb-2 sm:mb-4">Conclusion</h2>
            <p className="mb-4 font-medium text-[10px] sm:text-[13px] text-gray-700">
              Tukai represents a holistic approach to outdoor adventure planning, combining discovery <br /> tools with community features to create a unique ecosystem. As co-founder and design lead,<br /> I helped shape both the product vision and execution, resulting in a platform that makes <br /> outdoor exploration more accessible and social. The project reinforced the importance of <br /> balancing user needs with technical feasibility and business goals in early-stage startups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}