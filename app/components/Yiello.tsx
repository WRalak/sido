// components/YiellohExperience.tsx
'use client';

import Image from 'next/image';

export default function YiellohExperience() {
  return (
    <div className="flex flex-col gap-6 ">
      {/* Logo and Company Name in one line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/yiello.png" // Your Yielloh logo file
            alt="Yielloh Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h2 className="text-sm font-bold text-gray-800 flex gap-2 items-center">Yielloh           <img 
  src="/dot.png" 
  alt="dot" 
  className="w-4 h-4 rounded-full object-cover" 
/></h2>
        </div>

        {/* Date range in the right space */}
        <p className="text-gray-800 text-sm font-bold">Aug 2014 - 2017</p>
      </div>

      {/* Role and Description */}
      <div className="space-y-2">
        <p className="text-gray-500 text-sm">
          Role: <span className="font-normal text-gray-900">Designer</span>
        </p>

        <p className="text-gray-800 text-sm">
        Yielloh was a mobile-only microblogging platform, and my entry point into UI/UX design. <br /> As the sole designer, I was responsible for:
        </p>

        <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
    <li><span className='font-bold'>UI Design </span> – Crafting the app’s interface for a seamless user experience.</li>
    <li> <span className='font-bold'>Graphic Design</span> – Creating visuals to enhance branding and engagement.</li>
    <li><span className='font-bold'>App Testing</span> – Ensuring usability and refining the final product.</li>
  </ul>

        <p className="text-gray-800 text-sm">
        This experience gave me a strong foundation in end-to-end product design, from concept to <br /> launch.
        </p>
      </div>
    </div>
  );
}

