'use client';

import Image from 'next/image';

export default function CytonnExperience() {
  return (
    <div className="flex flex-col md:flex-row items-start ml-32 gap-6  md:p-12" style={{ maxWidth: '750px', width: '100%' }}>
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/cyto.png"
          alt="Cytonn Investments Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="space-y-6 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-gray-800 text-sm font-bold">
              Cytonn Investments
            </h2>
            <img 
              src="/dot.png"
              alt="dot" 
              className="w-4 h-4 object-cover"
            />
          </div>
          <p className="text-gray-800 font-bold text-sm">Apr 2017 - Jan 2018</p>
        </div>

        <div className="space-y-4">
          <p className="text-gray-400 text-sm">
            Role: <span className="text-gray-800">Assistant UI/UX Designer</span>
          </p>

          <p className="text-gray-800 text-sm">
            This was my first role as a UX & UI Designer, where I honed my skills by learning from senior <br /> designers and gaining hands-on experience in user experience design.
          </p>

          <p className="text-gray-800 text-sm">
            At Cytonn, I was responsible for designing key internal systems, including:
          </p>

          {/* Systems List */}
          <ul className="list-none space-y-2">
            <li className="text-gray-800 text-sm flex gap-2">
              <span className="font-bold">.</span>
              <span className="font-bold">Board Management System</span>
            </li>
            <li className="text-gray-800 text-sm flex gap-2">
              <span className="font-bold">.</span>
              <span className="font-bold">Content Management System (CMS)</span>
            </li>
            <li className="text-gray-800 text-sm flex gap-2">
              <span className="font-bold">.</span>
              <div>
                <span className="font-bold">Cytonn Mobile App</span> – The company's first mobile app, enabling customers to track their <br /> investments and savings (available on the Play Store).
              </div>
            </li>
          </ul>
        </div>

        {/* Deliverables Section */}
        <div className="space-y-4">
          <p className="text-gray-800 text-sm font-semibold">Deliverables:</p>

          <ul className="list-none space-y-2">
            <li className="text-gray-800 text-sm flex gap-2">
              <span className="font-bold">.</span>
              <div>
                <span className="font-bold">User Interviews</span> to understand customer needs
              </div>
            </li>
            <li className="text-gray-800 text-sm flex gap-2">
              <span className="font-bold">.</span>
              <div>
                <span className="font-bold">Mobile App Design</span> for a seamless investment experience
              </div>
            </li>
            <li className="text-gray-800 text-sm flex gap-2">
              <span className="font-bold">.</span>
              <div>
                <span className="font-bold">Admin Dashboard Design</span> for internal management
              </div>
            </li>
          </ul>

          <p className="text-gray-800 text-sm">
            This role was instrumental in shaping my approach to <span className="font-bold">user-centered design</span> and building <br /> impactful digital products.
          </p>
        </div>
      </div>
    </div>
  );
}
