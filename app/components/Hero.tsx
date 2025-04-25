import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { MdOutlinePhone } from 'react-icons/md';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-white lg:px-44 flex flex-col lg:flex-row relative">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10 mx-auto"
        style={{
          background: 'linear-gradient(277.08deg, rgba(99, 102, 241, 0.2) 0.62%, rgba(252, 211, 77, 0.2) 62.55%, rgba(59, 130, 246, 0.2) 100.47%)',
          width: '206px',
          height: '249px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Right Section - Top on mobile, aligned top on lg */}
      <div className="w-full lg:w-[206px] flex flex-col items- px-6 pt-8 pb-4 sm:px-12 lg:py-8 lg:items-start lg:sticky lg:top-0 order-first lg:order-last">
        {/* Profile Image */}
        <div className="w-[90px] h-[90px] rounded-full bg-gray-200 mb-4 overflow-hidden relative">
          <Image
            src="/sid.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
            sizes="90px"
          />
        </div>

        {/* Title */}
        <h6 className="text-xs font-semibold text-gray-800  lg:text-left whitespace-nowrap mb-4">
          Creator, Minimalist & Entrepreneur
        </h6>
        
        {/* Links */}
        <div className="w-full">
          <div className="flex flex-row flex-wrap  gap-x-4 gap-y-2 lg:flex-col lg:gap-y-3 lg:items-start">
            {[
              { label: 'Read CV', url: '#' },
              { label: 'Send Email', url: '#' },
              { label: 'LinkedIn', url: '#' },
              { label: 'Behance', url: '#' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex items-center text-gray-600 text-xs "
              >
                <GoArrowUpRight className="mr-1" size={14} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center whitespace-nowrap font-light text-xs text-gray-900">
  <MdOutlinePhone className="mr-2" size={17} />
  <span>+254 716 909 815</span>
</div>
        </div>
      </div>

      {/* Left Section - Bottom on mobile, aligned top on lg */}
      <div className="flex-1 px-6 py-8 lg:py-8 order-first lg:order-first">
        <h6 className="font-satoshi font-black text-[18px] leading-[24px] md:text-[24px] md:leading-[30px] mb-8">
          I'm a Kenyan Product Designer with a passion for minimalism and impactful aesthetics. I'm currently a Senior Product Designer at <span className='text-green-800'>NedBank</span>, previously at <span className='text-blue-400'>Goldman Sachs</span>.
        </h6>
        
        <p className="text-sm leading-[24px] text-gray-800 mb-8">
          I'm a Product Designer specializing in mobile, desktop, and web applications, with a strong focus on usability, simplicity, and seamless user experiences. Throughout my career, I've had the opportunity to work with amazing companies, shaping products that make a real impact:
          <br /><br />
          • <span className="font-medium">At Cytonn</span>, I helped investors track their investments with ease.
          <br />
          • <span className="font-medium">At BRCK</span>, I contributed to connecting people to free WiFi, expanding digital access.
          <br />
          • <span className="font-medium">At LYNK</span>, I worked on bridging blue-collar workers with potential employers, empowering livelihoods.
          <br /><br />
          Beyond Kenya, I've designed for global markets:
          <br />
          • <span className="font-medium">In South Africa</span>, I helped IMS Global Ventures streamline mobile wallet payments for taxi fares.
          <br />
          • <span className="font-medium">At Goldman Sachs (Conflicts Resolution Group – New York)</span>, I helped bankers and deal clearers navigate conflicts in high-stakes deals.
          <br />
          • <span className="font-medium">At Nedbank (South Africa)</span>, I'm working with the Domestic Transactions team, focusing on Payments, Transfers, and Collections, improving how people and businesses move money.
        </p>
        
        <p className='text-sm leading-[24px] text-gray-800'>
          When I'm not working on these, I'm building Solgates and Tukai - passion projects that keep me innovating.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;