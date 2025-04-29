'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col md:px-12 lg:ml-40 w-[660px] p-6 md:p-12">
      <div className="flex flex-col space-y-4 mx-auto">
        
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/andela.png"
              alt="Andela Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-[13px] font-bold">Andela</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className="text-gray-800 font-bold text-[13px] ml-4">2023 - Present</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-4">
          <p className="text-gray-500 text-sm">
            Role: <span className="font-normal text-gray-800">Senior Product Designer</span>
          </p>

          <p className="text-gray-800 text-[13px]">
  Through Andela, a contracting firm, I have had the opportunity to collaborate with companies such as IMS Global Ventures and Goldman Sachs, contributing to impactful design solutions across diverse industries.
</p>

        </div>
      </div>
    </div>
  );
}