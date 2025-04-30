'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col py-1.5  w-[660px] md:px-12 lg:ml-52 p-6 md:p-4">
      <div className="flex flex-col space-y-4">
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/image 18.png"
              alt="Goldman Sachs Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-[14px] font-extrabold">Goldman Sachs - Conflicts Resolutions Group (CRG)</h2>
            <img
              src="/dot.png"
              alt="dot"
              className="w-4 h-4 rounded-full object-cover"
            />
          </div>
          <p className=" font-bold text-[14px] leading-[16px] tracking-normal">2021 - Jan, 2025</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-1">
          <p className="text-gray-600 font-medium text-[14px]">
            Role: <span className="font-medium text-gray-800">Senior Product Designer</span>
          </p>

          <p className="text-gray-800 text-[13px] font-medium">
            <span className="text-gray-600 font-medium text-[13px]">Task:</span> Redesigning the Conflicts and Resolutions System (CARS)
          </p>

          <p className="text-gray-800 mt-1.5 font-medium text-[13px]">
            At Goldman Sachs, I led the redesign of the Conflicts and Resolutions System (CARS), 
            a critical <br /> internal tool ensuring that investment deals were free from conflicts of interest.
          </p>

          {/* Project Overview */}
          <div>
            <p className="text-gray-800 text-[13px] mt-2 font-medium">Project Overview:</p>
            <p className='text-gray-800 font-medium text-[13px] mt-1.5'>  CARS was primarily used by:</p>
            <ul className="list-disc pl-5 font-medium space-y-1 mt-2">
  <li className="text-gray-800 font-medium text-[13px]">
    <strong>Bankers</strong> – Responsible for sourcing new deals and initiating them in the system as <br /> "Checks."
  </li>
  <li className="text-gray-800 font-medium text-[13px]">
    <strong>Clearers</strong> – Tasked with reviewing and approving these Checks to ensure compliance with <br /> regulatory and internal conflict policies.
  </li>
            </ul>
          </div>

          {/* My Role & Impact */}
          <div>
            <p className="text-gray-800 text-[14px] font-bold">My Role & Impact:</p>
            <ul className="list-disc pl-5  mt-2">
              <li className="text-gray-800 font-medium text-[13px]">
                Conducted user research to understand pain points for both <strong>Bankers and Clearers,</strong><br /> improving their workflow efficiency
              </li>
              <li className="text-gray-800 font-medium text-[13px]">
                Redesigned the system's user <strong>interface and experience,</strong> making it more intuitive and <br /> reducing friction in deal submissions and approvals
              </li>
              <li className="text-gray-800 font-medium text-[13px]">
                Streamlined processes to enhance <strong>compliance accuracy and speed,</strong> ensuring smoother <br /> operations for high-stakes financial transactions
              </li>
            </ul>
          </div>

          <p className="text-gray-800 font-medium text-[13px]">
            The redesigned CARS significantly improved <strong>usability, accuracy, and processing speed,</strong> <br />
            enabling Goldman Sachs' deal teams to operate with greater confidence and efficiency.
          </p>

          <p className="text-gray-400 font-medium text-[13px]">
            Note: No designs can be shared due to NDA.
          </p>
        </div>
      </div>
    </div>
  );
}