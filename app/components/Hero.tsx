import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { MdOutlinePhone } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="w-full py-4 lg:px-44 xl:px-56 flex flex-col lg:flex-row relative">
      {/* Container to restrict gradient within paddings */}
      <div className="absolute inset-0 overflow-hidden -z-10">
  {/* Desktop Gradient (right side, blurred) */}
  <div className="absolute inset-0 overflow-hidden -z-10">
  {/* Desktop Gradient (right side, blurred) */}
  <div
    className="absolute hidden lg:block"
    style={{
      background:
        'linear-gradient(45deg, rgba(253, 224, 71, 0.15) 0%, rgba(250, 204, 21, 0.12) 50%, rgba(245, 158, 11, 0.1) 100%)',
      width: '400px',
      height: '300px',
      right: '15%',
      top: '50px',
      filter: 'blur(80px)',
      borderRadius: '100%',
    }}
  />

  {/* Mobile Gradient (top center, blurred) */}
  <div
    className="absolute lg:hidden"
    style={{
      background:
        'linear-gradient(180deg, rgba(253, 224, 71, 0.12) 0%, rgba(250, 204, 21, 0.1) 50%, rgba(245, 158, 11, 0.08) 100%)',
      width: '250px',
      height: '250px',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      filter: 'blur(70px)',
      borderRadius: '50%',
    }}
  />
</div>

</div>



      {/* Right Section - Top on mobile, aligned top on lg */}
      <div className="w-full lg:w-[180px] xl:w-[200px] flex flex-col px-6 pt-8 pb-4 sm:px-12 lg:px-0 lg:py-8 lg:items-start lg:sticky lg:top-0 order-first lg:order-last">
        {/* Profile Image */}
        <div className="w-[90px] h-[90px] rounded-full mb-4 overflow-hidden relative">
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
        <h6 className="text-[13px] font-medium text-gray-950 lg:text-left whitespace-nowrap mb-4">
          Creator, Minimalist & Entrepreneur
        </h6>
        
        {/* Links */}
        <div className="w-full">
  <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-y-3 lg:items-start">
    {[
      { label: 'Read CV', url: '#' },
      { label: 'Send Email', url: '#' },
      { label: 'LinkedIn', url: '#' },
      { label: 'Behance', url: '#' },
    ].map((item, index) => (
      <a
        key={index}
        href={item.url}
        className="flex items-center text-[13px] font-medium group"
      >
        <GoArrowUpRight className="mr-1 text-gray-600" size={14} />
        <span className="text-blue-600 font-medium border-b border-blue-600 ">
          {item.label}
        </span>
      </a>
    ))}
  </div>
  <div className="flex items-center whitespace-nowrap font-light text-sm mt-3 text-gray-900">
    <img src={'/call.png'} className="mr-2" height={16} width={16} />
    <span className='font-medium'>+254 716 909 815</span>
  </div>
</div>

      </div>

      {/* Left Section - Bottom on mobile, aligned top on lg */}
      <div className="flex-1 px-6 lg:w-[510px] py-4 lg:py-8 lg:pr-8 order-first lg:order-first">
        <p className="font-satoshi font-black text-[23px] leading-[30px] tracking-normal text-base text-gray-800">
          I'm a Kenyan Product Designer with a <br />
          passion for minimalism and impactful <br /> aesthetics.
          I'm currently a Senior Product <br /> Designer
          at <span className='text-green-800'>NedBank</span>, previously
          at <br />
          <span className='text-blue-500'>Goldman Sachs</span>.
        </p>

        <div className="mt-4 text-[13px] leading-[20px] text-gray-800">
          <p className="mb-2 font-medium">
            I'm a <strong>Product Designer</strong> specializing in mobile, desktop, and web applications, with a <br />
            strong focus on <strong>usability, simplicity, and seamless user experiences.</strong> </p>
          <p className='font-medium'>  Throughout my career, I've had the opportunity to work with amazing companies,
            <br />shaping products that make a real impact: <br /> 
          </p>
          <div className="mt-2  ml-2">
  <div className="flex items-start">
    <span className="mr-2 text-lg leading-snug">•</span>
    <p className="font-medium">
      At <strong>Cytonn</strong>, I helped investors <strong>track their investments</strong> with ease.
    </p>
  </div>

  <div className="flex items-start">
    <span className="mr-2 text-lg leading-snug">•</span>
    <p className='font-medium'>
      At <strong>BRCK</strong>, I contributed to <strong>connecting people to free WiFi</strong>, expanding digital access.
    </p>
  </div>

  <div className="flex items-start">
    <span className="mr-2 text-lg leading-snug">•</span>
    <p className='font-medium'>
      At <strong>LYNK</strong>, I worked on <strong>bridging blue-collar workers with potential employers</strong>,<br />
      empowering livelihoods.
    </p>
  </div>
</div>

          <p className="mt-2 font-medium">Beyond Kenya, I've designed for global markets:</p>

          <p className="flex mb-1 ml-1">
  <span className="mr-2 text-lg leading-snug">•</span>
  <span>
    <strong>In South Africa</strong>, I helped <strong>IMS Global Ventures</strong> streamline 
    <strong> mobile wallet payments <br /></strong> for taxi fares.
  </span>
</p>

<p className="flex mb- ml-1 font-medium">
  <span className="mr-2 text-lg leading-snug">•</span>
  <span>
    <strong>At Goldman Sachs</strong> (Conflicts Resolution Group – New York), I helped bankers and <br />
    deal clearers navigate conflicts in high-stakes deals.
  </span>
</p>

<p className="flex ml-1 font-medium">
  <span className="mr-2 text-lg leading-snug">•</span>
  <span>
    Currently, at <strong>Nedbank (South Africa)</strong>, I'm working with the Domestic Transactions <br /> team, 
    focusing on <strong>Payments, Transfers, and Collections</strong>, improving how people <br /> and businesses move money.
  </span>
</p>

        </div>

        <p className="text-gray-800 font-medium mt-3 mr-4 text-[13px] leading-relaxed sm:mr-0 sm:text-[13px]">
  When I'm not working on these, I'm building{' '}
  <Link
    href="https://solgates.com"
    target="_blank"
    className="text-blue-700 border-b border-blue-600"
  >
    Solgates
  </Link>{' '}
  and{' '}
  <Link
    href="https://tukai.com"
    target="_blank"
    className="text-blue-700 border-b border-blue-600"
  >
    Tukai
  </Link>{' '}
  – passion projects that keep me innovating.
</p>

      </div>
    </div>
  );
};

export default HeroSection;