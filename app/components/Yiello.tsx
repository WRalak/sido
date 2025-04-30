'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col md:px-12 lg:ml-52 xl:ml-56 w-[660px] p-6 md:p-4">
      <div className="flex flex-col space-y-1  mx-auto">
        
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/yiello.png"
              alt="Yielloh Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-[14px] font-extrabold">Yielloh</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className="text-gray-800  font-bold text-[14px] leading-[16px] tracking-normal ml-4">Aug 2014 - 2017</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-1">
          <p className="text-gray-500 text-[13px]">
            Role: <span className="font-medium text-gray-800">Designer</span>
          </p>

          <p className="text-gray-800 font-medium text-[13px]">
            Yielloh was a <strong>mobile-only microblogging platform,</strong> and my entry point into UI/UX design. As the sole designer, I was responsible for:
          </p>

          {/* Responsibilities */}
          <ul className="list-none space-y-1">
            <li className="flex items-center font-medium text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <strong>UI Design</strong> – Crafting the app’s interface for a seamless user experience.
            </li>
            <li className="flex items-center font-medium text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <strong >Graphic Design</strong> – Creating visuals to enhance branding and engagement.
            </li>
            <li className="flex items-center font-medium text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <strong className="">App Testing</strong> – Ensuring usability and refining the final product.
            </li>
          </ul>

          <p className="text-gray-800 font-medium text-[13px]">
            This experience gave me a strong foundation in <strong>end-to-end product design,</strong> from concept to <br /> launch.
          </p>
        </div>
      </div>
    </div>
  );
}
