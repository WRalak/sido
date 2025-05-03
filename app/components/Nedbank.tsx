'use client';

import Image from 'next/image';

export default function NedbankExperience() {
  return (
    <div className="flex flex-col md:px-12  w-[660px] py-6 md:p-12">
      <div className="flex flex-col space-y- mx-auto">
        
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Image
              src="/nedd.png"
              alt="NedBank Logo"
              width={50}  // Matched size to other logos
              height={50}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-[14px] font-extrabold">NedBank - Domestic Transactions</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className=" font-bold text-[14px] leading-[18px] tracking-normal text-gray-800">2023 - Present</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-4">
          <p className="text-gray-500 font-medium text-[13px]">
            Role: <span className="font-medium text-gray-800">Senior Product Designer</span>
          </p>

          <p className="text-gray-800 font-medium text-[13px]">
            <span className="text-gray-400 text-[13px] ">Task:</span> Working with the Domestic Transactions team, focusing on <strong>Payments, Transfers, and  <br /> Collections,</strong> improving how people and businesses move money.
          </p>

          <p className="text-gray-800 text-[13px] font-medium">
            Working on the design and optimization of Payments, Transfers, and Collections  experiences. <br /> My work focuses on creating intuitive, efficient, and scalable transaction workflows that  enhance both customer and internal banking operations.
          </p>

          {/* Responsibilities */}
          <div>
            <strong className="text-gray-800 font-bold mb-3.5 text-[13px]">Key Contributions</strong>
            <div className="space-y-2 ml-2 mt-1.5">
            <ul className="list-none ">
  <li className="flex items-baseline">
    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2.5 mt-[6px] flex-shrink-0"></span>
    <p className="text-gray-800 text-[13px] font-medium">
      Designing and refining <strong>payment and transfer workflows</strong> to improve efficiency and reduce user friction.
    </p>
  </li>
  <li className="flex items-baseline">
    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2.5 mt-[6px] flex-shrink-0"></span>
    <p className="text-gray-800 font-medium text-[13px]">
      Developing intuitive solutions for <strong>collections processes,</strong> ensuring accuracy and seamless usability.
    </p>
  </li>
  <li className="flex items-baseline">
    <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2.5 mt-[6px] flex-shrink-0"></span>
    <p className="text-gray-800 font-medium text-[13px]">
      Collaborating closely with stakeholders to align transaction systems with business <br /> goals and user needs.
    </p>
  </li>
</ul>

  
  <p className="text-gray-800 text-[13px] font-medium">
    Through user-centered design, I am enhancing Nedbank's transaction services, ensuring a <br />  more seamless, efficient, and engaging banking experience.
  </p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}