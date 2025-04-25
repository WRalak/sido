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

  return (
    <section className="hidden sm:block w-full py-8 lg:py-12 px-4 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="lg:px-32 mb-6 lg:mb-8">
          <h2 className="font-satoshi font-bold text-sm lg:text-sm mb-2">Logos do tell tales</h2>
          <p className="font-satoshi text-gray-600 text-xs lg:text-sm">
            Below are some places I have been fortunate enough to work at, either on a full-time or contract basis.
          </p>
        </div>

        {/* Compact Logo Row */}
        <div className="w-full flex justify-center">
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-2 lg:gap-3">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="flex items-center justify-center"
                style={{ width: '90px', height: '40px' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={60}
                  height={40}
                  className="object-contain h-full w-full"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;