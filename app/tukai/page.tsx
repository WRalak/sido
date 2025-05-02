'use client'

import { useState } from 'react';
import { ChevronRight, ChevronLeft, Globe, Users, ClipboardList, Settings } from 'lucide-react';

export default function TukaiShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/tukai1.png",
      alt: "Tukai Adventure Discovery"
    },
    {
      src: "/tukai2.png",
      alt: "Community Hub Interface"
    },
    {
      src: "/tukai3.png",
      alt: "Trip Planning Dashboard"
    },
    {
      src: "/tukai4.png",
      alt: "Trip Planning Dashboard"
    },
    {
      src: "/tukai5.png",
      alt: "Trip Planning Dashboard"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-[735px] mx-auto p-6 bg-white font-sans">
      {/* Header with Logo */}
      <div className="flex flex-wrap gap-4 mb-8">
  {/* Header Section */}
  <header className="flex flex-wrap items-start gap-4 flex-1 min-w-[250px]">
    <div className="flex-shrink-0">
      <img src="/IG Post 2.png" alt="tukai" width={75} height={75} />
    </div>
    <div>
      <h1 className="text-[19px] font-bold text-gray-800">
        Tukai transforms how people explore the outdoors, <br /> plan adventures, and build communities.
      </h1>
      <p className="text-blue-600 text-[13px] mt-1 underline">
        www.tukai.co
      </p>
      <div className="flex flex-wrap gap-4 text-[13px] text-gray-600">
    <div className="flex items-center">
      <img src="/suit.png" alt="Co-founder" className="mr-1" />
      <span className="font-medium">Co-founder</span>
    </div>
    <div className="flex items-center">
      <img src="/search.png" alt="UX Research" className="mr-1" />
      <span className="font-medium">UX Research</span>
    </div>
    <div className="flex items-center">
      <img src="/calendar.png" alt="Project Management" className="mr-1" />
      <span className="font-medium">Project Management</span>
    </div>
    <div className="flex items-center">
      <img src="/compass.png" alt="Design" className="mr-1" />
      <span className="font-medium">Design</span>
    </div>
    <div className="flex items-center">
      <img src="/check.png" alt="Testing" className="mr-1" />
      <span className="font-medium">Testing</span>
    </div>
  </div>
    </div>
  </header>

  {/* Services Section */}
 
</div>


      {/* Image Carousel */}
      <div className="relative mb-8">
      <div
  className="w-full h-[280px] flex items-center justify-center overflow-hidden rounded-lg"
  style={{ background: 'linear-gradient(180deg, #007A87 0%, #007A87 100%)' }}
>
  <img
    src={images[currentSlide].src}
    alt={images[currentSlide].alt}
    className="w-[184px] h-[262px] object-cover"
  />
</div>

        
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-green-600' : 'bg-gray-300'}`} 
            />
          ))}
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="mb-6 text-[13px] font-medium text-gray-800">
          Tukai is a platform designed to transform how people explore the outdoors, plan adventures, and <br /> build communities.
          From hiking and camping to bike riding and scenic drives, Tukai offers an <br /> effortless way to access adventure spots,
          parks, mountains, and fun destinations. It also allows users <br /> to join like-minded communities based on their interests,
          making it more than just an activity hub— <br />it's a <strong>social experience.</strong>
        </p>

        <h2 className="font-bold text-[20px] text-gray-700 mt-8 mb-4">My Role & Contributions</h2>

        <h3 className="font-medium text-[14px] text-gray-700 mb-2">1. Product Design – Crafting an Engaging and Intuitive Experience</h3>
        <p className="mb-4 text-gray-800 font-medium text-[13px]">
          I led the end-to-end design of Tukai, ensuring that users could seamlessly discover activities, <br /> organize their experiences,
          and connect with others. My focus was on: <br />
        </p>
        <ul className="list-disc text-[13px] text-gray-700 pl-5 mb-6 space-y-2">
          <li className='text-[13px]'>
            <strong>User-Centered Design:</strong> Conducted in-depth research to understand how users plan outdoor <br /> activities
            and what challenges they face.
          </li>
          <li className='text-[13px]'>
            <strong>Information Architecture:</strong> Created a structured and easy-to-navigate platform that allows users <br /> to
            browse places and join communities effortlessly.
          </li>
          <li className='text-[13px]'>
            <strong>Visual and Interaction Design:</strong> Developed a clean, modern, and inviting interface that enhances <br />
            engagement and usability across devices.
          </li>
          <li>
            <strong>Design System:</strong> Built a scalable UI/UX design system to maintain consistency and speed up <br /> feature rollouts.
          </li>
        </ul>

        <h3 className="font-medium text-[14px] text-gray-700 mt-10">2. Project Management – Driving Execution and Timelines</h3>
        <p className="text-[13px] font-medium text-gray-700 mt-4">
          As a co-founder, I managed the roadmap, milestones, and team coordination to keep the project <br /> on track.
          My responsibilities included:
        </p>
        <ul className="list-disc text-[13px] font-medium text-gray-700 pl-5 mb-6 space-y-1">
          <li>
            Defining short-term sprints and long-term goals to ensure steady feature development.
          </li>
          <li>
            Collaborating with developers, content creators, and community managers to align objectives.
          </li>
          <li>
            Prioritizing feature releases based on user feedback and business strategy.
          </li>
          <li>
            Overseeing the integration of key functionalities like activity discovery, booking, and community <br /> engagement.
          </li>
        </ul>

        <h2 className="font-bold text-gray-800 text-[14px] mt-8 mb-4">Key Features & Impact</h2>
        <ul className="list-disc pl-5 mb-2 text-[13px] font-medium text-gray-800">
          <li>Created an intuitive adventure discovery system with personalized recommendations</li>
          <li>Built community features that increased user retention by 40%</li>
          <li>Developed a trip planning toolkit that reduced planning time by 60%</li>
          <li>Implemented a scalable design system that accelerated feature development</li>
        </ul>

        <h2 className="font-bold text-gray-800 text-[14px] mt-8 mb-4">Conclusion</h2>
        <p className="mb-4 font-medium text-gray-700 text-[13px]">
          Tukai represents a holistic approach to outdoor adventure planning,<br /> combining discovery tools with community features
          to create a unique ecosystem. <br /> As co-founder and design lead, I helped shape both the product vision and execution, <br />
          resulting in a platform that makes outdoor exploration more accessible and social. <br /> The project reinforced the importance
          of balancing user needs with technical feasibility <br /> and business goals in early-stage startups.
        </p>
      </div>
    </div>
  );
}