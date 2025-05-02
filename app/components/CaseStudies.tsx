'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  company: string;
  slug: string; // NEW
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Gapstack Case Study',
    company: 'Gapstack',
    slug: 'gapstack',
    description: 'Supply chain & trade financing platform...',
    image: '/Gapstack.jpg'
  },
  {
    id: 2,
    title: 'Solgates Case Study',
    company: 'Solgates',
    slug: 'solgates',
    description: 'A Second-Hand Clothing Marketplace...',
    image: '/solgates.jpg'
  },
  {
    id: 3,
    title: 'Peach Cars Case Study',
    company: 'Peach Cars',
    slug: 'peach', // 👈 This is your clean route
    description: 'Peach Cars is a rising startup aiming...',
    image: '/peacch.png'
  },
  {
    id: 4,
    title: 'Tukai Case Study',
    company: 'Tukai',
    slug: 'tukai',
    description: 'Tukai transforms how people explore...',
    image: '/tukai.jpg'
  },
];


const CaseStudies: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragStartTime, setDragStartTime] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setDragStartTime(Date.now());
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch event handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setDragStartTime(Date.now());
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Determine if the interaction is a click or a drag
  const isClickNotDrag = () => {
    return Date.now() - dragStartTime < 200; // Less than 200ms is considered a click
  };

  return (
    <div className="py-4 px-4 md:px-8 bg-gray-50 max-w-8xl mx-auto">
      <h2 className="text-[18px] text-gray-800 font-extrabold lg:px-44 mb-4">Case Studies</h2>
      <div
        ref={containerRef}
        className="flex overflow-x-auto pb-4 -mx-4 px-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {caseStudies.map((caseStudy) => (
          // Wrapping the card in a Link component
          <div
            key={caseStudy.id}
            className="flex items-center  px-4 cursor-pointer overflow-hidden flex-shrink-0 w-[85%] sm:w-[45%] md:w-[48%] lg:w-[30%]"
            onClick={(e) => {
              // Only navigate if it's a click, not a drag
              if (isDragging && !isClickNotDrag()) {
                e.preventDefault();
              }
            }}
          >
            <Link href={`/${caseStudy.slug}`} className="flex items-center w-full">
             
            
              <div className="flex-shrink-0">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={135}
                  height={70}
                  className="object-cover rounded-md w-[135px] h-[70px]"
                />
              </div>

              <div className="flex flex-col justify-between flex-grow p-3 overflow-hidden">
                <p className="text-gray-800 text-[14px] font-extrabold mb-1 line-clamp-2">
                  {caseStudy.description}
                </p>
                <div className="flex items-center text-orange-600 font-medium text-[13px]">
                  {caseStudy.company} <GoArrowUpRight size={14} className="ml-1 mb-1.5 hover:text-blue-700" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;