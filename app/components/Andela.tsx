'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col ml-40 w-[600px] p-6 md:p-12">
      <div className="flex flex-col space-y-4 mx-auto">
        
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/Andela.png"
              alt="Andela Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-sm font-bold">Andela</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className="text-gray-800 font-bold text-sm ml-4">2023 - Present</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-4">
          <p className="text-gray-500 text-sm">
            Role: <span className="font-normal text-gray-800">Senior Product Designer</span>
          </p>

          <p className="text-gray-800 text-sm">
            Through Andela, a contracting firm, I have had the opportunity to collaborate with companies such as IMS Global Ventures and Goldman Sachs, contributing to impactful design solutions across diverse industries.
          </p>

          {/* Responsibilities - Added to match structure */}
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Client Collaboration</span> – Working with multiple high-profile clients through Andela's contracting platform.
            </li>
            <li className="flex items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Cross-Industry Design</span> – Delivering solutions for diverse business domains and user needs.
            </li>
            <li className="flex items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Team Leadership</span> – Mentoring junior designers and collaborating with distributed teams.
            </li>
          </ul>

          <p className="text-gray-800 text-sm">
            This role has expanded my experience working with enterprise clients and complex design systems at scale.
          </p>
        </div>
      </div>
    </div>
  );
}