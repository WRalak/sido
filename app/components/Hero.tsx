'use client';

import React, { useState } from 'react';
import { MdOutlinePhone } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { RxArrowTopRight } from 'react-icons/rx';

const HeroSection = () => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="w-full mx-auto py-4 px-6 sm:px-12 lg:px-16 xl:px-68 2xl:px-72 flex flex-col lg:flex-row relative max-w-screen-2xl">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute hidden lg:block"
          style={{
            background: 'linear-gradient(45deg, rgba(253, 224, 71, 0.15), rgba(250, 204, 21, 0.12), rgba(245, 158, 11, 0.1))',
            width: '400px',
            height: '400px',
            right: '30%',
            top: '0px',
            filter: 'blur(80px)',
            borderRadius: '100%',
          }}
        />
        <div
          className="absolute lg:hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(253, 224, 71, 0.12), rgba(250, 204, 21, 0.1), rgba(245, 158, 11, 0.08))',
            width: '350px',
            height: '350px',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            filter: 'blur(70px)',
            borderRadius: '50%',
          }}
        />
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[180px] xl:w-[200px] flex flex-col pt-8 pb-4 lg:py-8 lg:items-start lg:sticky lg:top-0 order-first lg:order-last">
        <div className="w-[90px] h-[90px] rounded-full mb-4 overflow-hidden relative">
          <Image src="/sid.jpg" alt="Profile" fill className="object-cover" priority sizes="90px" />
        </div>
        <h6 className="text-xs font-medium text-gray-950 lg:text-left whitespace-nowrap mb-4">
          Creator, Minimalist & Entrepreneur
        </h6>
        <div className="w-full">
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-y-3 lg:items-start">
            {[
              { label: 'Read CV', url: 'https://read.cv/sidralak' },
              { label: 'Send Email', url: 'mailto:georgeralak@gmail.com' },
              { label: 'LinkedIn', url: 'https://www.linkedin.com/in/george-s-ralak-28051552/' },
              { label: 'Behance', url: 'https://www.behance.net/georgeralak' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex items-center text-xs font-medium group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxArrowTopRight className="mr-1 text-gray-600" size={16} />
                <span className="text-blue-600 font-medium border-b border-blue-600">{item.label}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center whitespace-nowrap font-light text-sm mt-3 text-gray-900">
            <MdOutlinePhone className="mr-2" size={16} />
            <span className="font-medium">+254 716 909 815</span>
          </div>
        </div>
      </div>

      {/* Left Panel */}
      <div className="flex-1 lg:max-w-[720px] xl:max-w-[820px] py-4 lg:py-8 lg:pr-8 order-first lg:order-first">
        <p className="font-black text-[19px] sm:text-[24.5px] leading-[32px] tracking-normal text-gray-800">
          I'm a Kenyan Product Designer with a{' '}
          <span className="hidden sm:inline"><br /></span>
          passion for minimalism and impactful{' '}
          <span className="hidden sm:inline"><br /></span>
          aesthetics. I'm currently a Senior Product{' '}
          <span className="hidden sm:inline"><br /></span>
          Designer at <span className="text-green-800">NedBank</span>, previously at{' '}
          <span className="hidden sm:inline"><br /></span>
          <span className="text-blue-500">Goldman Sachs</span>.
        </p>

        <div className="mt-4 text-[13px] leading-[21px] text-gray-800">
          <p className="mb-2 font-medium">
            I'm a <strong>Product Designer</strong> specializing in mobile, desktop, and web applications, with a{' '}
            <span className="hidden sm:inline"><br /></span>
            strong focus on <strong>usability, simplicity, and seamless user experiences.</strong>
          </p>
          <p className="font-medium">
            Throughout my career, I've had the opportunity to work with amazing companies,{' '}
            <span className="hidden sm:inline"><br /></span>
            shaping products that make a real impact:
          </p>
          <div className="mt-2 ml-2">
            <div className="flex items-start">
              <span className="mr-2 text-md leading-snug">•</span>
              <p className="font-medium">
                At <strong>Cytonn</strong>, I helped investors <strong>track their investments</strong> with ease.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-md leading-snug">•</span>
              <p className="font-medium">
                At <strong>BRCK</strong>, I contributed to <strong>connecting people to free WiFi</strong>, expanding digital
                access.
              </p>
            </div>
            <div className="flex items-start">
              <span className="mr-2 text-md leading-snug">•</span>
              <p className="font-medium">
                At <strong>LYNK</strong>, I worked on <strong>bridging blue-collar workers with potential employers</strong>,{' '}
                <span className="hidden sm:inline"><br /></span>
                empowering livelihoods.
              </p>
            </div>
          </div>

          <p className="mt-2 font-medium">Beyond Kenya, I've designed for global markets:</p>

          {/* Truncated South Africa Line with Inline "See more" (Visible on Mobile) */}
          <div className="sm:hidden">
            <p className="flex items-start mb-1 ml-1 font-medium">
              <span className="mr-2 text-md flex-shrink-0">•</span>
              <span onClick={() => setShowFullText(!showFullText)} className="cursor-pointer">
                {!showFullText ? (
                  <>
                    <strong>In South Africa</strong>, I helped <strong>IMS Global Ventures</strong> stre
                    <span className="inline">
                      ...{' '}
                      <span className="text-orange-600 text-[13px] font-medium inline">See more</span>
                    </span>
                  </>
                ) : (
                  <>
                    <strong>In South Africa</strong>, I helped <strong>IMS Global Ventures</strong> streamline{' '}
                    <strong>mobile wallet payments</strong> for taxi fares.
                  </>
                )}
              </span>
            </p>
          </div>

          {/* Full Text (Visible on Desktop or When Expanded on Mobile) */}
          <div className={showFullText ? 'block' : 'hidden sm:block'}>
            <p className="flex items-start mb-1 ml-1 font-medium sm:block">
              <span className="mr-2 text-md flex-shrink-0">•</span>
              <span>
                <strong>In South Africa</strong>, I helped <strong>IMS Global Ventures</strong> streamline{' '}
                <strong>mobile wallet payments</strong> for taxi fares.
              </span>
            </p>
            <p className="flex mb-1 ml-1 font-medium">
              <span className="mr-2 text-md flex-shrink-0">•</span>
              <span>
                At <strong>Goldman Sachs</strong> (Conflicts Resolution Group – New York), I helped bankers and{' '}
                <span className="hidden sm:inline"><br /></span>
                deal clearers navigate conflicts in high-stakes deals.
              </span>
            </p>
            <p className="ml-1 font-medium">
              <span className="mr-2 mt-[3px] text-md flex-shrink-0">•</span>
              <span>
                Currently, at <strong>Nedbank (South Africa)</strong>, I'm working with the Domestic Transactions{' '}
                <span className="hidden sm:inline"><br /></span>
                team, focusing on <strong>Payments, Transfers, and Collections</strong>, improving how people{' '}
                <span className="hidden sm:inline"><br /></span>
                and businesses move money.
              </span>
            </p>
            <p className="text-gray-800 font-medium mt-3 mr-4 text-[13px] leading-relaxed">
              When I'm not working on these, I'm building{' '}
              <Link href="https://solgates.com" target="_blank" className="text-blue-700 border-b border-blue-600">
                Solgates
              </Link>{' '}
              and{' '}
              <Link href="https://tukai.co" target="_blank" className="text-blue-700 border-b border-blue-600">
                Tukai
              </Link>{' '}
              – passion projects <span className="hidden sm:inline"><br /></span> that keep me innovating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;