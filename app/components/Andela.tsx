// components/AndelaExperience.tsx
'use client';

import Image from 'next/image';

export default function AndelaExperience() {
  return (
    <div className="flex flex-col gap-4 p-6 md:p-10">
      {/* Logo and company name in one line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/andela.png" // your Andela logo file
            alt="Andela Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h2 className="text-sm font-bold text-gray-800 flex gap-2 items-center">Andela  <img 
  src="/dot.png" 
  alt="dot" 
  className="w-4 h-4 rounded-full object-cover" 
/></h2>
        </div>

        {/* Date range in the right space */}
        <p className="text-gray-800 font-bold text-sm">Mar 2020 - Present</p>
      </div>

      {/* Role and description */}
      <div className="space-y-2">
        <p className="text-gray-500 text-sm">
          Role: <span className="font-normal text-sm text-gray-800">Senior Product Designer</span>
        </p>

        <p className="text-gray-800 text-sm">
          Through Andela, a contracting firm, I have collaborated with companies such as <span className='font-bold'>IMS <br />Global Ventures</span>   and <span className='font-bold'>Goldman Sachs</span>, contributing to impactful design solutions across diverse industries.
        </p>
      </div>
    </div>
  );
}

