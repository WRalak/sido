'use client';

import Image from 'next/image';

// Client component for the gradient background
function GradientBackground() {
  return (
    <div
      className="absolute hidden lg:block"
      style={{
        background: 'linear-gradient(45deg, rgba(253, 224, 71, 0.15), rgba(250, 204, 21, 0.12), rgba(245, 158, 11, 0.1))',
        width: '400px',
        height: '400px',
        left: '70%',
        top: '0px',
        filter: 'blur(80px)',
        borderRadius: '100%',
      }}
    />
  );
}

export default function GoldmanSachsExperience() {
  return (
    <div className="flex py-1.5 w-[700px] md:px-12 p-6 md:p-4 relative">
      <GradientBackground />
      
      <div className="flex flex-col space-y-4 flex-grow">
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
          <p className="font-bold text-[14px] leading-[16px] tracking-normal">2021 - Jan, 2025</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-1">
          <p className="text-gray-600 font-medium text-[13px]">
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
            <p className="text-gray-800 text-[13px] font-bold">My Role & Impact:</p>
            <ul className="list-disc pl-5 mt-2">
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