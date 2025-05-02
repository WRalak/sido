'use client';


import { useState } from 'react';
import { ChevronRight, ChevronLeft, Globe, Users, BarChart3, ClipboardCheck } from 'lucide-react';

export default function GapstackShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: "/api/placeholder/586/280",
      alt: "Gapstack Dashboard Interface"
    },
    {
      src: "/api/placeholder/586/280",
      alt: "Trade Financing Request Flow"
    },
    {
      src: "/api/placeholder/586/280",
      alt: "Analytics and Reporting Dashboard"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white font-sans">
      {/* Header with Logo */}
      <header className="flex items-center mb-6">
        <div className="mr-4">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            GS
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Gapstack is a supply chain & trade financing platform built for banks & financial institutions.
          </h1>
          <p className="text-gray-600 mt-1">
            <Globe className="inline-block mr-1" size={16} />
            www.gapstack.com
          </p>
        </div>
      </header>

      {/* Services */}
      <div className="flex space-x-6 mb-8">
        <div className="flex items-center text-blue-600">
          <Users className="mr-2" />
          <span className="font-medium">UX Research</span>
        </div>
        <div className="flex items-center text-blue-600">
          <BarChart3 className="mr-2" />
          <span className="font-medium">Design</span>
        </div>
        <div className="flex items-center text-blue-600">
          <ClipboardCheck className="mr-2" />
          <span className="font-medium">Testing</span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="relative mb-8">
        <div className="w-full h-70 overflow-hidden rounded-lg">
          <img 
            src={images[currentSlide].src} 
            alt={images[currentSlide].alt}
            className="w-full h-full object-cover"
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
              className={`block w-2 h-2 rounded-full ${currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="prose max-w-none">
        <h2 className="font-bold text-xl mb-4">TL;DR:</h2>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>I designed an intuitive, scalable trade financing platform for banks, improving efficiency in the process.</li>
          <li>Conducted research, user testing, and iterative design to streamline workflows and enhance usability.</li>
          <li>Delivered a user-centric experience balancing automation, compliance, and operational needs.</li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-4">Project Overview</h2>
        
        <h3 className="font-bold text-xl mb-2">About Gapstack</h3>
        <p className="mb-4">
          Gapstack is a supply chain and trade financing platform designed to help banks and financial institutions streamline 
          their trade financing processes. The platform aims to reduce manual inefficiencies, enhance automation, and provide 
          a seamless experience for financial professionals managing trade finance operations.
        </p>
        
        <h3 className="font-bold text-xl mb-2">The Problem</h3>
        <p className="mb-4">
          Many banks rely on outdated, manual processes to handle trade financing, leading to inefficiencies, slow approval 
          processes, and compliance challenges. The lack of an intuitive digital platform increases operational costs and customer dissatisfaction.
        </p>

        <h3 className="font-bold text-xl mb-2">The Goal</h3>
        <p className="mb-4">
          My objective was to design an intuitive, efficient, and scalable platform that enhances user experience, improves processing speed, 
          and ensures regulatory compliance.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-4">Research & Discovery</h2>
        
        <h3 className="font-bold text-xl mb-2">Understanding Users</h3>
        <p className="mb-2">
          To design a user-centered solution, I conducted extensive research, including:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>User Interviews: I engaged with banking professionals, trade finance specialists, and SME clients to understand pain points.</li>
          <li>Surveys: I gathered data on current challenges in trade financing.</li>
          <li>Stakeholder Workshops: I collaborated with financial analysts and compliance teams to align design with regulatory requirements.</li>
        </ul>

        <h3 className="font-bold text-xl mb-2">Competitive Analysis</h3>
        <p className="mb-2">
          Through my study of existing trade finance solutions, I identified key gaps:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Complex interfaces that required extensive training.</li>
          <li>Lack of automation in approval workflows.</li>
          <li>Poor data visualization for trade financing requests.</li>
        </ul>

        <h3 className="font-bold text-xl mb-2">Key Insights</h3>
        <ul className="list-disc pl-5 mb-6 space-y-1">
          <li>Users needed a clear dashboard to track trade financing requests.</li>
          <li>Automation was crucial for speeding up approval processes.</li>
          <li>Security and compliance were major concerns, requiring a balance between usability and regulatory needs.</li>
        </ul>
      </div>
    </div>
  );
}