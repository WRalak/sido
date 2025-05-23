'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col py-1 md:px-12  w-[660px] p-3 md:p-12">
      <div className="flex flex-col space-y-3 mx-auto">
        
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
            <h2 className="text-gray-800 text-[15px] font-extrabold">Andela</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className="text-gray-800 font-bold text-[15px] ml-4">2023 - Present</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-5 text-gray-800 text-[14px]">
          Role: <span className="font-medium text-[14px] text-gray-800">Senior Product Designer</span>

          <p className="text-gray-800 font-medium mt-1 text-[14px] w-full">
  Through Andela, a contracting firm, I have had the opportunity to collaborate with companies such as <strong>IMS  Global Ventures</strong> and <strong>Goldman Sachs,</strong> contributing to impactful design solutions across diverse industries.
</p>

        </div>
      </div>
    </div>
  );
}