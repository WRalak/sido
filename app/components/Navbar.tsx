import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

export default function Header() {
  return (
    <header className="px-4 py-6 md:px-8 lg:px-16 xl:px-68 2xl:px-72 max-w-screen-2xl mx-auto flex justify-between items-center ">
      {/* Left side - Name */}
       <div className="font-inter font-black text-[20px] leading-[16px] tracking-[0%] text-center 2xl:text-[20px]">
  <span className="text-orange-600 font-inter">George</span>
  <span className="text-gray-800 font-inter">Ralak</span>
</div>

      {/* Right side - Work together CTA */}
         <Link 
  href="mailto:georgeralak@gmail.com" 
  className="flex items-center gap-2 group"
>
  <span className="text-orange-600 font-medium text-[12px] leading-[16px] font-satoshi border-b border-orange-600 2xl:text-[14px]">
    Let's work together
  </span>
  <GoArrowUpRight className="text-orange-500 group-hover:text-blue-600 transition duration-200 2xl:w-4 2xl:h-4" />
</Link>
    </header>
  );
}