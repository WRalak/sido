// components/GoldmanSachsExperience.tsx
'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col md:flex-row items-start lg:px-40 gap-6 p-6 md:p-12">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/Andela.png"
          alt="Goldman Sachs Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        <div className='flex items-center justify-between'>
          <h2 className="text-gray-800 text-sm font-bold flex gap-2">Andela
          <img 
  src="/dot.png" 
  alt="dot" 
  className="w-4 h-4 rounded-full object-cover" 
/>
          </h2>
          <p className="text-gray-800 font-bold text-sm">2023 - Present</p>
        </div>

        <div>
<p className="text-gray-500 text-sm">
  Role: <span className="font-normal text-gray-800">Senior Product Designer</span>
</p>
<p className='text-gray-800 text-sm'>
Through Andela, a contracting firm, I have had the opportunity to collaborate with companies such as IMS <br /> Global Ventures and Goldman Sachs, contributing to impactful design solutions across diverse industries.
</p>
        </div>

       
      </div>
    </div>
  );
}
