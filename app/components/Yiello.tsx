'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col ml-40 w-[600px] p-6 md:p-12">
      <div className="flex flex-col space-y-4  mx-auto">
        
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
            <h2 className="text-gray-800 text-sm font-bold">Yielloh</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className="text-gray-800 font-bold text-sm ml-4">Aug 2014 - 2017</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-4">
          <p className="text-gray-500 text-sm">
            Role: <span className="font-normal text-gray-800">Designer</span>
          </p>

          <p className="text-gray-800 text-sm">
            Yielloh was a mobile-only microblogging platform, and my entry point into UI/UX design. As the sole designer, I was responsible for:
          </p>

          {/* Responsibilities */}
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">UI Design</span> – Crafting the app’s interface for a seamless user experience.
            </li>
            <li className="flex items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Graphic Design</span> – Creating visuals to enhance branding and engagement.
            </li>
            <li className="flex items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">App Testing</span> – Ensuring usability and refining the final product.
            </li>
          </ul>

          <p className="text-gray-800 text-sm">
            This experience gave me a strong foundation in end-to-end product design, from concept to launch.
          </p>
        </div>
      </div>
    </div>
  );
}
