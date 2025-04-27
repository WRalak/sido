// components/NedbankExperience.tsx
'use client';

import Image from 'next/image';

export default function NedbankExperience() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 md:p-12">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/nedd.png"
          alt="NedBank Logo"
          width={50}
          height={50}
          className="object-contain  "
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4 ">
        <div className='flex items-center gap-2 justify-between'>
          <h2 className="text-gray-800 text-sm font-bold flex gap-2 items-center">NedBank - Domestic Transactions 
            <img 
  src="/dot.png" 
  alt="dot" 
  className="w-4 h-4 rounded-full object-cover" 
/>
</h2>
          <p className="text-gray-800 font-bold text-sm">2023 - Present</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs ">Role: <span className="font-normal text-gray-800">Senior Product Designer</span></p>
        </div>

        <div className="space-y-2">
          
          <p className="text-gray-800 text-sm">
               <span className='text-gray-400'>Task:</span> Working with the Domestic Transactions team, focusing on Payments, Transfers, and <br /> Collections, improving how people and businesses move money.
          </p>
          <p className="text-gray-800 text-sm">
            Working on the design and optimization of Payments, Transfers, and Collections experiences. <br />  My work focuses on creating intuitive, efficient, and scalable transaction workflows that <br /> enhance both customer and internal banking operations.
          </p>
        </div>

        <div className="space-y-1 font-normal">
          <p className="text-gray-800 text-sm">Key Contributions</p>
          <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
            <li>Designing and refining payment and transfer workflows to improve efficiency and reduce <br /> user friction.</li>
            <li>Developing intuitive solutions for collections processes, ensuring accuracy and seamless <br /> usability.</li>
            <li>Collaborating closely with stakeholders to align transaction systems with business goals <br /> and user needs.</li>
          </ul>
        </div>

        <div>
         
        </div>
      </div>
    </div>
  );
}
