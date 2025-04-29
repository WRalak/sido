'use client';

import Image from 'next/image';

export default function CytonnExperience() {
  return (
    <div className="flex flex-col md:px-12 lg:ml-40 w-[660px] p-6 md:p-12">
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
            <h2 className="text-gray-800 text-[13px] font-bold">Cytonn Investments</h2>
            <img 
              src="/dot.png" 
              alt="dot" 
              className="w-4 h-4 rounded-full object-cover" 
            />
          </div>
          <p className="text-gray-800 font-bold text-[13px] ml-4">Apr 2017 - Jan 2018</p>
        </div>

        {/* Role and Description */}
        <div className="space-y-4">
          <p className="text-gray-500 text-[13px]">
            Role: <span className="font-normal text-gray-800">Assistant UI/UX Designer</span>
          </p>

          <p className="text-gray-800 text-[13px]">
            This was my first role as a UX & UI Designer, where I honed my skills by learning from senior designers <br className="hidden md:inline" /> 
            and gaining hands-on experience in user experience design.
          </p>

          <p className="text-gray-800 text-[13px]">
            At Cytonn, I was responsible for designing key internal systems, including:
          </p>

          <ul className="list-none space-y-2">
            <li className="flex items-start text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><span className="font-bold">Board Management System</span></span>
            </li>
            <li className="flex items-start text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><span className="font-bold">Content Management System (CMS)</span></span>
            </li>
            <li className="flex items-start text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span>
                <span className="font-bold">Cytonn Mobile App</span> – The company's first mobile app, enabling customers to track their investments <br className="hidden md:inline" /> 
                and savings (available on the Play Store).
              </span>
            </li>
          </ul>

          <p className="text-gray-800 text-[13px] font-semibold pt-2">
            Deliverables:
          </p>

          <ul className="list-none space-y-2">
            <li className="flex items-start text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><span className="font-bold">User Interviews</span> – to understand customer needs</span>
            </li>
            <li className="flex items-start text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><span className="font-bold">Mobile App Design</span> – for a seamless investment experience</span>
            </li>
            <li className="flex items-start text-gray-800 text-[13px]">
              <span className="w-1 h-1 rounded-full bg-gray-800 mr-2 mt-2 flex-shrink-0"></span>
              <span><span className="font-bold">Admin Dashboard Design</span> – for internal management</span>
            </li>
          </ul>

          <p className="text-gray-800 text-[13px]">
            This role was instrumental in shaping my approach to <span className="font-bold">user-centered design</span> <br className="hidden md:inline" /> 
            and building impactful digital products.
          </p>

        </div>
      </div>
    </div>
  );
}
