// components/CytonnExperience.tsx
'use client';

import Image from 'next/image';

export default function CytonnExperience() {
  return (
    <div className="flex flex-col gap-6 py-6 ">
      {/* Logo and Company Name in one line */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/cyto.png" // your Cytonn logo file
            alt="Cytonn Investments Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h2 className="text-sm font-bold text-gray-800">Cytonn Investments</h2>
        </div>

        {/* Date range in the right space */}
        <p className="text-gray-600 font-bold text-sm">Apr 2017 - Jan 2018</p>
      </div>

      {/* Role and Description */}
      <div className="space-y-2">
        <p className="text-gray-500 text-sm"> 
          Role: <span className=" text-gray-900">Assistant UI/UX Designer</span>
        </p>

        <p className="text-gray-800 text-sm">
        This was my first role as a UX & UI Designer, where I honed my skills by learning from senior designers <br /> and gaining hands-on experience in user experience design.
        </p>
        <p className="text-gray-600 text-sm">
      At Cytonn, I was responsible for designing key internal systems, including:
    </p>

    
    <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
      <li className='font-bold'>Board Management System</li>
      <li className='font-bold'>Content Management System (CMS)</li>
      <li className='text-gray-800'><span className='font-bold'>Cytonn Mobile App</span> – The company's first mobile app, enabling customers to track their <br /> investments and savings (available on the Play Store).</li>
    </ul>
  </div>

  {/* Deliverables */}
  <div className="space-y-2">
    <p className="text-gray-800  text-sm font-semibold">Deliverables:</p>

    <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
      <li> <span className='font-bold'>User Interviews</span> to understand customer needs</li>
      <li><span className='font-bold'>Mobile App Design</span> for a seamless investment experience</li>
      <li><span className='font-bold'>Admin Dashboard Design</span> for internal management</li>
    </ul>

    
    <p className="text-gray-800 text-sm">
      This role was instrumental in shaping my approach to <span className="text-gray-800 font-bold">user-centered design</span> and building <br /> impactful digital products.
    </p>
        
      </div>
    </div>
  );
}

