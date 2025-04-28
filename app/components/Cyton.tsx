'use client';

import Image from 'next/image';

export default function CytonnExperience() {
  return (
    <div className="flex flex-col ml-40 w-[600px] p-6 md:p-12">
      <div className="flex flex-col space-y-4 mx-auto">
        
        {/* Header: Logo, Name, Dot, and Dates */}
        <div className="flex items-center justify-between w-full gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src="/cyto.png"
              alt="Cytonn Investments Logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <h2 className="text-gray-800 text-sm font-bold">Cytonn Investments</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className="text-gray-800 font-bold text-sm ml-4">Apr 2017 - Jan 2018</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-4">
          <p className="text-gray-500 text-sm">
            Role: <span className="font-normal text-gray-800">Assistant UI/UX Designer</span>
          </p>

          <p className="text-gray-800 text-sm">
            This was my first role as a UX & UI Designer, where I honed my skills by learning from senior designers and gaining hands-on experience in user experience design.
          </p>

          <p className="text-gray-800 text-sm">
            At Cytonn, I was responsible for designing key internal systems, including:
          </p>

          {/* Responsibilities */}
          <ul className="list-none space-y-2">
            <li className=" items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Board Management System</span> – Designed the interface for executive decision-making tools
            </li>
            <li className=" items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Content Management System (CMS)</span> 
            </li>
            <li className=" items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Cytonn Mobile App</span> – The company's first mobile app enabling customers to track investments (available on Play Store)
            </li>
          </ul>

          {/* Deliverables Section */}
          <p className="text-gray-800 text-sm font-semibold pt-2">Deliverables:</p>

          <ul className="list-none space-y-2">
            <li className=" items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">User Interviews</span> – Conducted research to understand customer needs
            </li>
            <li className=" items-center text-gray-800 text-sm">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2"></span>
              <span className="font-bold">Mobile App Design</span> – Created interfaces for seamless investment experience
            </li>
            <li className="items-center text-gray-800 text-sm">
            
              <span className="font-bold">Admin Dashboard Design</span> – Built tools for internal investment management
            </li>
          </ul>

          <p className="text-gray-800 text-sm">
            This role was instrumental in shaping my approach to <span className="font-bold">user-centered design</span> and building impactful digital products.
          </p>
        </div>
      </div>
    </div>
  );
}