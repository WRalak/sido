'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col  w-[660px] md:px-12 lg:ml-40 p-6 md:p-4">
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
            <h2 className="text-gray-800 text-[13px] font-bold">Goldman Sachs - CRG</h2>
            <img
              src="/dot.png"
              alt="dot"
              className="w-4 h-4 rounded-full object-cover"
            />
          </div>
          <p className="text-gray-800 font-bold text-[13px] ml-4">2021 - Jan, 2025</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-4">
          <p className="text-gray-500 text-[13px]">
            Role: <span className="font-normal text-gray-800">Senior Product Designer</span>
          </p>

          <p className="text-gray-800 text-sm">
            <span className="text-gray-500 text-[13px]">Task:</span> Redesigning the Conflicts and Resolutions System (CARS)
          </p>

          <p className="text-gray-800 text-[13px]">
            At Goldman Sachs, I led the redesign of the Conflicts and Resolutions System (CARS), 
            a critical <br /> internal tool ensuring that investment deals were free from conflicts of interest.
          </p>

          {/* Project Overview */}
          <div>
            <p className="text-gray-800 text-[13px] font-semibold">Project Overview:</p>
            <p className='text-gray-800 text-[13px]'>  CARS was primarily used by:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
  <li className="text-gray-800 text-[13px]">
    <strong>Bankers</strong> – Responsible for sourcing new deals and initiating them in the system as "Checks."
  </li>
  <li className="text-gray-800 text-[13px]">
    <strong>Clearers</strong> – Tasked with reviewing and approving these Checks to ensure compliance with regulatory and internal conflict policies.
  </li>
            </ul>
          </div>

          {/* My Role & Impact */}
          <div>
            <p className="text-gray-800 text-sm font-semibold">My Role & Impact:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li className="text-gray-800 text-sm">
                Conducted user research to understand pain points for both Bankers and Clearers,<br /> improving their workflow efficiency
              </li>
              <li className="text-gray-800 text-sm">
                Redesigned the system's user interface and experience, making it more intuitive and <br /> reducing friction in deal submissions and approvals
              </li>
              <li className="text-gray-800 text-sm">
                Streamlined processes to enhance compliance accuracy and speed, ensuring smoother <br /> operations for high-stakes financial transactions
              </li>
            </ul>
          </div>

          <p className="text-gray-800 text-sm">
            The redesigned CARS significantly improved usability, accuracy, and processing speed, <br />
            enabling Goldman Sachs' deal teams to operate with greater confidence and efficiency.
          </p>

          <p className="text-gray-500 text-sm">
            Note: No designs can be shared due to NDA.
          </p>
        </div>
      </div>
    </div>
  );
}