
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ExperienceItem {
  organization: string;
  logo: string;
  years: string;
  role: string;
  task: string;
  images?: string[];
}

const experiences: ExperienceItem[] = [
  {
    organization: "NedBank - Domestic Transactions",
    logo: "/nedd.png",
    years: "2023 - Present",
    role: "Senior Product Designer",
    task: ` Tasks:Working with the Domestic Transactions team, focusing on Payments, Transfers, and Collections, improving how people and businesses move money. My work focuses on creating intuitive, efficient, and scalable transaction workflows that enhance both customer and internal banking operations.

Key Contributions:
• Designing and refining payment and transfer workflows to improve efficiency and reduce user friction.
• Developing intuitive solutions for collections processes, ensuring accuracy and seamless usability.
• Collaborating closely with stakeholders to align transaction systems with business goals and user needs.

No designs can be shared due to NDA.`,
  },
  {
    "organization": "Goldman Sachs - Conflicts Resolutions Group (CRG)",
    "logo": "/image 18.png",
    "years": "2023 - Present",
    "role": "Senior Product Designer",
    "task": "At Goldman Sachs, I led the redesign of the Conflicts and Resolutions System (CARS), a critical internal tool ensuring that investment deals were free from conflicts of interest.\n\nProject Overview:\n• CARS was primarily used by:\n  • Bankers – Responsible for sourcing new deals and initiating them in the system as 'Checks.'\n  • Clearers – Tasked with reviewing and approving these Checks to ensure compliance with regulatory and internal conflict policies.\n\nMy Role & Impact:\n• Conducted user research to understand pain points for both Bankers and Clearers, improving their workflow efficiency.\n• Redesigned the system's user interface and experience, making it more intuitive and reducing friction in deal submissions and approvals.\n• Streamlined processes to enhance compliance accuracy and speed, ensuring smoother operations for high-stakes financial transactions.\n\nImpact:\n• The redesigned CARS significantly improved usability, accuracy, and processing speed.\n• Enabled Goldman Sachs' deal teams to operate with greater confidence and efficiency.\n\nNote: No designs can be shared due to NDA."
  },
  
  
  
  {
    organization: "IMS Global Ventures",
    logo: "/image 17.png",
    years: "Oct 2020 - Jun 2021",
    role: "Senior Product Designer",
    task: `As a Senior Product Designer contracted through Andela, I was tasked with designing a mobile wallet aimed at streamlining fare payments and digitizing South Africa’s public transport system.

Project Overview:
• Mobile Wallet - Enable users to pay fares and bills.
• Taxi Tracking System - Digitizing public transport.
• Tap-to-Pay System - Automatic fare deduction.

My Approach:
• Desk research and user interviews.
• User Stories, Information Architecture.
• Designed commuter & operator interfaces.

Deliverables:
• Mobile App
• Admin Dashboard
• Website

Impact: Improved commuter convenience, introduced transparency in public transport.`,
    images: [
      "/gapstack0.png",
      "/gapstack1.png",
      "/gapstack2.png",
      "/gapstack3.png",
    ],
  },
  {
    organization: "Andela",
    logo: "/andela.png",
    years: "Mar 2020 - Present",
    role: "Senior Product Designer",
    task: `Through Andela, a contracting firm, I have collaborated with companies such as IMS Global Ventures and Goldman Sachs, contributing to impactful design solutions across diverse industries.`,
  },
  {
    organization: "BRCK",
    logo: "/brk.png",
    years: "Mar 2018 - Oct 2020",
    role: "UI/UX Designer",
    task: `Task: Designing Digital Experiences Across Mobile, Web, and Internal Systems.

I collaborated with researchers, designers, and front-end developers to design mobile apps, internal systems, websites, and brand collateral. I also tested implementations and worked closely with developers for final product polishing.`,
    images: [
      "/IMS1.png",
      "/ims2.png",
      '/ims3.png',
    ],
  },
  {
    organization: "Cytonn Investments",
    logo: "/cyto.png",
    years: "Apr 2017 - Jan 2018",
    role: "Assistant UI/UX Designer",
    task: `This was my first role as a UX & UI Designer. I designed key internal systems:

• Board Management System
• CMS
• Cytonn Mobile App (on Play Store)

I conducted user interviews, designed mobile apps, and created admin dashboards. This shaped my user-centered design approach.`,
  },
  {
    organization: "Yielloh",
    logo: "/yiello.png",
    years: "Aug 2014 - 2017",
    role: "Designer",
    task: `At Yielloh, a mobile microblogging platform, I:

• Designed the app’s UI
• Created graphics for branding
• Tested the app for usability

This gave me a strong foundation in end-to-end product design.`,
  },
];

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextImage = (imagesLength: number) => {
    setCurrentSlide((prev) => (prev + 1) % imagesLength);
  };

  return (
    <div className="space-y-12 lg:px-44">
      {experiences.map((exp, idx) => (
        <div key={idx} className=" lg:px-10 pb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="hidden sm:block">
                <Image src={exp.logo} alt={exp.organization} width={30} height={30} />
              </div>
              <h2 className="text-sm font-bold">{exp.organization}</h2>
            </div>
            <span className="text-gray-800  font-bold text-sm">{exp.years}</span>
          </div>

          <p className="mt-4 text-gray-600 ">Role: {exp.role}</p>
          <p className="mt-2 text-sm text-gray-950 whitespace-pre-line">{exp.task}</p>

          {exp.images && (
            <div className="relative mt-6 w-full max-w-3xl">
              <Image
                src={exp.images[currentSlide]}
                alt="Experience Image"
                width={800}
                height={500}
                className="rounded-lg object-cover w-full h-80"
              />
              <button
                onClick={() => nextImage(exp.images!.length)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
