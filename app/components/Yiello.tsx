'use client';

import Image from 'next/image';

export default function YiellohExperience() {
  return (
    <div className="flex flex-col w-[700px] p-3 md:p-6">
      <div className="flex flex-col space-y-6 mx-auto">
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/yiello.png"
              alt="Yielloh Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-[14px] font-extrabold">Yielloh</h2>
            <img
              src="/dot.png"
              alt="dot"
              className="w-4 h-4 rounded-full object-cover"
            />
          </div>
          <p className="text-gray-800 font-bold text-[14px] ml-4">Aug 2014 - Jan 2017</p>
        </div>

        {/* Role and Description */}
        <div>
          <p className="text-gray-500 font-medium text-[13px] mt-2.5">
            Role: <span className="font-medium text-gray-800">Designer</span>
          </p>
          <p className="text-gray-800 font-medium text-[13px] leading-tight max-w-[640px] mt-2.5 text-justify">
            Yielloh was a <strong>mobile-only microblogging platform</strong>, and my entry point into UI/UX design. As the sole designer, I was responsible for:
          </p>

          {/* Responsibilities */}
          <ul className="list-none mt-1">
            <li className="flex items-start font-medium text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><strong>UI Design</strong> – Crafting the app’s interface for a seamless user experience.</span>
            </li>
            <li className="flex items-start font-medium text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><strong>Graphic Design</strong> – Creating visuals to enhance branding and engagement.</span>
            </li>
            <li className="flex items-start font-medium text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><strong>App Testing</strong> – Ensuring usability and refining the final product.</span>
            </li>
          </ul>

          <p className="text-gray-800 font-medium text-[13px] leading-tight max-w-[640px] mt-2.5 text-justify">
            This experience gave me a strong foundation in <strong>end-to-end product design</strong>, from concept to launch.
          </p>
        </div>
      </div>
    </div>
  );
}