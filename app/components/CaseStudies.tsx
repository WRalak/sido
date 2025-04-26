// components/CaseStudies.tsx
'use client';

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X, ChevronLeft, ChevronRight, Globe, SearchCode, PaintBucket, TestTube } from 'lucide-react';
import { GoArrowUpRight } from 'react-icons/go';

// Define types for case study data
interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  company: string;
  website: string;
  services: string[];
  tldr: string[];
  detailedContent: {
    overview: string;
    problem: string;
    goal: string;
    research: {
      understanding: string;
      analysis: string;
      insights: string;
    };
  };
  additionalImages: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Gapstack is a supply chain & trade financing platform built for banks & financial institutions.",
    company: "Gapstack",
    description: "Supply chain & trade financing platform...",
    image: "/Gapstack.jpg",
    website: "www.gapstack.com",
    services: ["UX Research", "Design", "Testing"],
    tldr: [
      "I designed an intuitive, scalable trade financing platform for banks, improving efficiency in the process.",
      "Conducted research, user testing, and iterative design to streamline workflows and enhance usability.",
      "Delivered a user-centric experience balancing automation, compliance, and operational needs."
    ],
    detailedContent: {
      overview: "Gapstack is a supply chain and trade financing platform designed to help banks and financial institutions streamline their trade financing processes. The platform aims to reduce manual inefficiencies, enhance automation, and provide a seamless experience for financial professionals managing trade finance operations.",
      problem: "Many banks rely on outdated, manual processes to handle trade financing, leading to inefficiencies, slow approval processes, and compliance challenges. The lack of an intuitive digital platform increases operational costs and customer dissatisfaction.",
      goal: "My objective was to design an intuitive, efficient, and scalable platform that enhances user experience, improves processing speed, and ensures regulatory compliance.",
      research: {
        understanding: "To design a user-centered solution, I conducted extensive research, including: User Interviews: I engaged with banking professionals, trade finance specialists, and SME clients to understand pain points. Surveys: I gathered data on current challenges in trade financing. Stakeholder Workshops: I collaborated with financial analysts and compliance teams to align design with regulatory requirements.",
        analysis: "Through my study of existing trade finance solutions, I identified key gaps: Complex interfaces that required extensive training. Lack of automation in approval workflows. Poor data visualization for trade financing requests.",
        insights: "Users needed a clear dashboard to track trade financing requests. Automation was crucial for speeding up approval processes. Security and compliance were major concerns, requiring a balance between usability and regulatory needs."
      }
    },
    additionalImages: [
"/gapstack1.jpg",
"/gapstack2.jpg",
"/gapstack3.jpg",
"/gapstack0.jpg",
    ]
  },
  {
    id: 2,
    title: "Solgates is a supply chain & trade financing platform built for banks & financial institutions.",
    company: "Solgates",
    description: "A Second-Hand Clothing Marketplace...",
    image: "/solgates.jpg",
    website: "www.solgates.com",
    services: ["UX Research", "UI Design", "Prototyping"],
    tldr: [
      "I created a sustainable fashion marketplace that connects buyers and sellers of quality second-hand clothing.",
      "Conducted market research and user interviews to identify pain points in the second-hand shopping experience.",
      "Designed an intuitive platform focusing on trust, quality verification, and seamless transactions."
    ],
    detailedContent: {
      overview: "Solgates is a digital marketplace connecting buyers and sellers of high-quality second-hand clothing, promoting sustainable fashion practices while creating economic opportunities.",
      problem: "The fast fashion industry creates enormous environmental waste, yet there was no efficient digital platform in the regional market for quality second-hand clothing exchange. Existing platforms lacked trust mechanisms and quality verification.",
      goal: "My goal was to design a user-friendly platform that builds trust between buyers and sellers while streamlining the buying and selling process for second-hand clothing.",
      research: {
        understanding: "I conducted user interviews with both potential buyers and sellers, analyzing pain points in their current second-hand shopping and selling experiences. I also studied sustainable fashion trends and consumer behavior.",
        analysis: "Competitive analysis revealed opportunities in verification processes, buyer protection, and visual presentation of second-hand items that were missing from existing platforms.",
        insights: "Users needed stronger trust signals when buying used clothing. Sellers wanted easier listing processes and fair pricing guidance. Both sides valued sustainability but wouldn't sacrifice convenience."
      }
    },
    additionalImages: [
      "/api/solgates1.jpg",
      "/api/solgates2.jpg",
      
    ]
  },
  {
    id: 3,
    title: "Peach Cars is a rising startup aiming to transform the used car buying experience in Kenya by providing a transparent, user-friendly online marketplace. ",
    company: "Peach Cars",
    description: "Peach Cars is a rising startup aiming...",
    image: "/peacch.png",
    website: "www.peachcars.com",
    services: ["User Research", "Interaction Design", "User Testing"],
    tldr: [
      "I designed a transparent used car marketplace that builds trust through verified vehicle histories and fair pricing.",
      "Conducted extensive research into user pain points in the traditional used car buying experience.",
      "Created an intuitive platform that simplifies the vehicle purchase process from browsing to financing."
    ],
    detailedContent: {
      overview: "Peach Cars is revolutionizing the used car market with a digital platform that provides transparent vehicle history, fair pricing, and seamless buying experiences.",
      problem: "The used car market has long been plagued by information asymmetry, leading to distrust between buyers and sellers. Consumers struggle with verifying vehicle condition and fair market value.",
      goal: "My objective was to design a digital ecosystem that verifies vehicle histories, standardizes pricing, and facilitates secure transactions to build confidence in the marketplace.",
      research: {
        understanding: "I interviewed car buyers, sellers, and dealerships to understand pain points in the traditional used car market. I also analyzed the customer journey to identify key friction points.",
        analysis: "Competitive analysis showed gaps in transparency, pricing consistency, and the digital purchase experience in existing platforms.",
        insights: "Users needed comprehensive vehicle information presented clearly. Price transparency was crucial for building trust. The digital purchase process needed to feel as secure as traditional methods."
      }
    },
    additionalImages: [
      "/peach0.png",
      "/peach2.png",
        "/peach3.png",
        "/peach4.png",
    ]
  },
  {
    id: 4,
    title: "Tukai transforms how people explore the outdoors, plan adventures, and build communities. ",
    company: "Tukai",
    description: "Tukai transforms how people explore...",
    image: "/tukai.jpg",
    website: "www.tukai.travel",
    services: ["Product Strategy", "UX Design", "User Testing"],
    tldr: [
      "I designed an AI-powered travel platform that personalizes experiences based on traveler preferences and behavior.",
      "Conducted extensive research on travel booking behaviors and personalization needs.",
      "Created an intuitive interface that simplifies complex preference matching while maintaining user control."
    ],
    detailedContent: {
      overview: "Tukai is a next-generation travel platform that uses AI to personalize travel experiences, connecting travelers with authentic local experiences and accommodations.",
      problem: "Despite the growth of online travel platforms, travelers still face overwhelming choices and generic experiences that fail to match their unique preferences.",
      goal: "My goal was to create a platform that truly understands individual travel styles and connects users with personalized options while maintaining transparency in the AI recommendation process.",
      research: {
        understanding: "I conducted user interviews with diverse travelers, analyzed travel planning behaviors, and studied how users make destination and activity decisions.",
        analysis: "Competitive analysis revealed gaps in personalization, local authenticity, and the balance between choice and curation in existing platforms.",
        insights: "Users wanted personalized recommendations but with transparency about why they were suggested. Travelers valued authentic local experiences over tourist traps. The planning process needed to be flexible enough to accommodate spontaneity."
      }
    },
    additionalImages: [
      "/tukai1.jpg",
      "/tukai2.jpg",    
        '/tukai3.jpg',
      "/tukai4.jpg",
        "/tukai5.jpg",
        "/tukai.jpg",
     
    ]
  }
];

const ServiceIcon = ({ service }: { service: string }) => {
  switch (service.toLowerCase()) {
    case 'ux research':
      return <SearchCode size={18} />;
    case 'design':
    case 'ui design':
      return <PaintBucket size={18} />;
    case 'testing':
    case 'user testing':
      return <TestTube size={18} />;
    default:
      return null;
  }
};

const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy);
    setCurrentImageIndex(0); // Reset the image index when opening a new case study
  };

  const closeCaseStudy = () => {
    setSelectedCase(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCase) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex >= selectedCase.additionalImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCase) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex <= 0 ? selectedCase.additionalImages.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className="py-16 px-4 md:px-8  max-w-7xl mx-auto">
      <h2 className="text-sm font-bold lg:px-44 mb-10 ">Case Studies</h2>
<div className="flex gap-2">
  {caseStudies.map((caseStudy) => (
    <div 
      key={caseStudy.id} 
      className="flex items-center bg-white cursor-pointer overflow-hidden w-full"
      onClick={() => openCaseStudy(caseStudy)}
    >
      <div className="flex-shrink-0">
        <Image 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          width={135} 
          height={70} 
          className="object-cover rounded-md w-[135px] h-[70px]"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow p-4 overflow-hidden">
        <p className="text-gray-900 text-sm font-bold mb-2 line-clamp-2">
          {caseStudy.description}
        </p>
        <div className="flex items-center text-orange-500 font-medium text-xs">
          {caseStudy.company} <GoArrowUpRight size={16} className="ml-1" />
        </div>
      </div>
    </div>
  ))}
</div>



 


      {selectedCase && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Header */}
            <div className="sticky top-0 bg-white p-6 border-b z-10">
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{selectedCase.company} is a {selectedCase.title}</h3>
                  <a 
                    href={`https://${selectedCase.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center text-sm mb-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Globe size={14} className="mr-1" /> {selectedCase.website}
                  </a>

                  <div className="flex flex-wrap gap-3 mb-2">
                    {selectedCase.services.map((service: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                      <span 
                        key={index}
                        className="flex items-center text-xs bg-gray-100 px-3 py-1 rounded-full"
                      >
                        {typeof service === 'string' && <ServiceIcon service={service} />}
                        <span className="ml-1">{service}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={closeCaseStudy}
                  className="p-1 rounded-full hover:bg-gray-100 flex-shrink-0"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Image Slider */}
              <div className="relative mb-8">
                <div className="relative h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image 
                      src={selectedCase.additionalImages[currentImageIndex]} 
                      alt={`${selectedCase.company} detail image ${currentImageIndex + 1}`} 
                      className="object-cover"
                      fill
                    />
                  </div>
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Slider indicator */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1}/{selectedCase.additionalImages.length}
                  </div>
                </div>
              </div>
              
              {/* TL;DR Section */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold mb-4">TL;DR:</h4>
                <ul className="space-y-2">
                  {selectedCase.tldr.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Project Overview */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
                
                <div className="space-y-6">
                  <section>
                    <h5 className="text-lg font-medium mb-2">About {selectedCase.company}</h5>
                    <p className="text-gray-700">{selectedCase.detailedContent.overview}</p>
                  </section>
                  
                  <section>
                    <h5 className="text-lg font-medium mb-2">The Problem</h5>
                    <p className="text-gray-700">{selectedCase.detailedContent.problem}</p>
                  </section>
                  
                  <section>
                    <h5 className="text-lg font-medium mb-2">The Goal</h5>
                    <p className="text-gray-700">{selectedCase.detailedContent.goal}</p>
                  </section>
                </div>
              </div>
              
              {/* Research & Discovery */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold mb-4">Research & Discovery</h4>
                
                <div className="space-y-6">
                  <section>
                    <h5 className="text-lg font-medium mb-2">Understanding Users</h5>
                    <p className="text-gray-700">{selectedCase.detailedContent.research.understanding}</p>
                  </section>
                  
                  <section>
                    <h5 className="text-lg font-medium mb-2">Competitive Analysis</h5>
                    <p className="text-gray-700">{selectedCase.detailedContent.research.analysis}</p>
                  </section>
                  
                  <section>
                    <h5 className="text-lg font-medium mb-2">Key Insights</h5>
                    <p className="text-gray-700">{selectedCase.detailedContent.research.insights}</p>
                  </section>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={closeCaseStudy}
                  className=""
                >
                  
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseStudies;
