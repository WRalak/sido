'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight, MdClose } from 'react-icons/md';
import { ChevronRight, X } from 'lucide-react';

export default function BRCKExperience() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  const expImages = [
    
    "/br.jpg",
    "/brkk.jpg",
    
    '/bb.jpg',
    '/bbb.jpg',
  ];
  
  const nextImage = (totalImages: number) => {
    setCurrentSlide((prev) => (prev + 1) % totalImages);
  };
  
  const openModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col gap-6 p-6 md:p-10 w-[660px] md:px-12">
      {/* Logo, Company Name, and Year */}
      <div className="flex items-center justify-between w-full gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/brk.png"
            alt="BRCK Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h2 className="font-extrabold text-[15px] leading-4 tracking-normal flex items-center gap-2">
            BRCK
            <img
              src="/dot.png"
              alt="dot"
              className="w-4 h-4 rounded-full object-cover"
            />
          </h2>
        </div>
        <p className="text-gray-800 font-bold text-[15px]">March 2018 - October 2020</p>
      </div>
      
      {/* Dates and Role */}
      <div className="space-y-1.5">
        <p className="text-gray-600 font-medium text-[14px] leading-5 tracking-normal"> 
          Role: <span className="font-medium ">UI/UX Designer</span>
        </p>
        <p className="text-gray-800 font-medium text-[14px] leading-5 tracking-normal">
         <span className="text-gray-500 font-medium text-[14px]">Task:</span> Designing Digital Experiences Across Mobile, Web, and Internal Systems.
        </p>
      </div>
      
      {/* Image Slider with updated dimensions */}
      <div className="w-full max-w-3xl mx-auto mb-1 relative">
        {/* Image Display with Blue Background - Now Clickable */}
        <div 
          className="relative mt-4 w-[586px] bg-sky-900 rounded-t-lg cursor-pointer" 
          onClick={openModal}
          style={{ height: '280px' }}
        >
          {/* Image container showing only half of the image */}
          <div 
            className="relative overflow-hidden rounded-md mx-auto" 
            style={{ 
              width: '440px', 
              height: '248px', /* Half height to show only top portion */
              position: 'absolute', 
              top: '36px', 
              left: '36px',
              right: '36px'
            }}
          >
            <div style={{ 
              width: '440px', 
              height: '244px',
              position: 'relative'
            }}>
              <Image
                src={expImages[currentSlide]}
                alt="Experience Image"
                width={440}
                height={244}
                className="object-cover absolute top-0 left-0"
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage(expImages.length);
            }}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            <span className="text-3xl"><MdKeyboardArrowRight /></span>
          </button>
        </div>
      </div>
      
      <div className="w-full mx-auto">
        <p className="text-gray-800 font-medium text-[14px] leading-5 tracking-normal mt-2">
          I collaborated with researchers, designers, and front-end developers, reporting to the Creative 
          Director, to design mobile apps, internal systems, websites, and brand collateral. Beyond 
          design, I tested implementations and worked closely with developers to ensure a polished final 
          product.
        </p>
      </div>
      
      {/* Full Screen Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-2xl mx-auto h-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-white rounded-full p-2 z-10 shadow-lg"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="w-full h-full overflow-hidden">
              <Image
                src={expImages[currentSlide]}
                alt={`Experience Image ${currentSlide + 1}`}
                width={800}
                height={450}
                className="object-contain rounded-lg"
              />
            </div>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage(expImages.length);
              }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}