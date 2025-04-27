// components/GoldmanSachsExperience.tsx
'use client';

import Image from 'next/image';

export default function GoldmanSachsExperience() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-12">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/image 18.png"
          alt="Goldman Sachs Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        <div className='flex items-center justify-between'>
          <h2 className="text-gray-800 text-sm font-bold flex gap-2">Goldman Sachs - Conflicts Resolutions Group (CRG)
          <img 
  src="/dot.png" 
  alt="dot" 
  className="w-4 h-4 rounded-full object-cover" 
/>
          </h2>
          <p className="text-gray-800 font-bold text-sm">2023 - Present</p>
        </div>

        <div>
        <p className="text-gray-500 text-sm ">Role: <span className="font-normal text-gray-800">Senior Product Designer</span></p>
        <p className="text-gray-800 text-sm"> <span className="text-gray-500 text-xs">Task:</span> Redesigning the Conflicts and Resolutions System(CARS) <br /> <br />
        At Goldman Sachs, I led the redesign of the Conflicts and Resolutions System (CARS), a critical <br /> internal tool ensuring that investment deals were free from conflicts of interest.
        </p>
        </div>

        <div className="space-y-2 text-xs">
          <p className="text-gray-800 text-sm  font-semibold">Project Overview:</p>
          <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
            <li>CARS was primarily used by:</li>
            <li>Bankers – Sourcing new deals and initiating them in the system as <br /> 'Checks.'</li>
            <li>Clearers – Reviewing and approving Checks to ensure compliance with <br /> conflict policies.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-gray-800 text-sm font-semibold">My Role & Impact:</p>
          <p className="list-disc list-inside text-gray-800 text-sm space-y-1">
           Conducted user research to understand pain points for both Bankers and Clearers, <br /> improving their workflow efficiency. <br />
Redesigned the system's user interface and experience, making it more intuitive and <br />reducing friction in deal submissions and approvals. <br />
Streamlined processes to enhance compliance accuracy and speed, ensuring smoother <br /> operations for high-stakes financial transactions.
</p>
        </div>

        <div className="space-y-2">
          <p className="text-gray-800 text-sm">The redesigned CARS significantly improved usability, accuracy, and processing speed,<br /> enabling Goldman Sachs' deal teams to operate with greater confidence and efficiency.</p>
          
        </div>

        <div>
          <p className="text-gray-500 text-sm">Note: No designs can be shared due to NDA.</p>
        </div>
      </div>
    </div>
  );
}
