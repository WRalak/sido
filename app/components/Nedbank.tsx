'use client';

import Image from 'next/image';

export default function NedbankExperience() {
  return (
    <div className="flex flex-col md:px-12 lg:ml-40 w-[620px] p-6 md:p-12">
      <div className="flex flex-col space-y-4 mx-auto">
        
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/nedd.png"
              alt="NedBank Logo"
              width={30}  // Matched size to other logos
              height={30}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-sm font-bold">NedBank - Domestic Transactions</h2>
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
          <p className="text-gray-400 text-sm">
            Role: <span className="font-normal text-gray-800">Senior Product Designer</span>
          </p>

          <p className="text-gray-800 text-sm">
            <span className="text-gray-400 text-sm">Task:</span> Working with the Domestic Transactions team, focusing on <strong>Payments, Transfers, and  Collections,</strong> improving how people and businesses move money.
          </p>

          <p className="text-gray-800 text-sm">
            Working on the design and optimization of Payments, Transfers, and Collections  experiences. <br /> My work focuses on creating intuitive, efficient, and scalable transaction workflows that  enhance both customer and internal banking operations.
          </p>

          {/* Responsibilities */}
          <div>
            <strong className="text-gray-800 text-sm">Key Contributions</strong>
            <div className="space-y-4">
  <ul className="list-none space-y-3">
    <li className="flex items-start">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2.5 mt-1 flex-shrink-0"></span>
      <p className="text-gray-800 text-sm">
        Designing and refining <strong>payment and transfer workflows</strong> to improve efficiency and reduce user friction.
      </p>
    </li>
    <li className="flex items-start">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2.5 mt-1 flex-shrink-0"></span>
      <p className="text-gray-800 text-sm">
        Developing intuitive solutions for <strong>collections processes,</strong> ensuring accuracy and seamless usability.
      </p>
    </li>
    <li className="flex items-start">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mr-2.5 mt-1 flex-shrink-0"></span>
      <p className="text-gray-800 text-sm">
        Collaborating closely with stakeholders to align transaction systems with business goals and user needs.
      </p>
    </li>
  </ul>
  
  <p className="text-gray-800 text-sm">
    Through user-centered design, I am enhancing Nedbank's transaction services, ensuring a more seamless, efficient, and engaging banking experience.
  </p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}