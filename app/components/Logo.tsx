'use client';

import React from 'react';
import Image from 'next/image';

const LogoSection = () => {
  const logos = [
    { src: '/ned.png', alt: 'Nedbank' },
    { src: '/Group.png', alt: 'Goldman Sachs' },
    { src: '/IG Post 2.png', alt: 'Cytonn' },
    { src: '/image 13.png', alt: 'BRCK' },
    { src: '/image 14.png', alt: 'LYNK' },
    { src: '/image 15.png', alt: 'IMS Global Ventures' },
    { src: '/image 16.png', alt: 'Solgates' },
    { src: '/image 17.png', alt: 'Tukai' },
    { src: '/image 18.png', alt: 'Company 9' },
    { src: '/Layer 2.png', alt: 'Company 10' },
    { src: '/New Logo.png', alt: 'Company 11' },
  ];

  // Duplicate the logos array to create seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="hidden sm:block w-full mb-20     px-4  overflow-hidden">
      <div className="max-w-6xl mx-auto">
      

        {/* Infinite Scrolling Logo Row */}
        <div className="w-full overflow-hidden">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index}
                className="inline-flex items-center justify-center mx-2 lg:mx-3"
                style={{ width: '90px', height: '40px', flexShrink: 0 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={61}
                  height={32}
                  className="object-contain h-full w-full"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Add this to your global CSS or in a style tag */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoSection;