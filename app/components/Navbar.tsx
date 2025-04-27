
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

export default function Header() {
  return (
    <header className=" w-full px-4 py-12 md:px-8 lg:px-48 xl:px-48 flex justify-between items-center">
      {/* Left side - Name */}
      <div className="text-2xl text-[18px] leading-[16px] font-black text-center">
        <span className="text-orange-600">George</span>
        <span className="text-gray-800 ">Ralak</span>
      </div>

      {/* Right side - Work together CTA */}
      <Link 
        href="/contact" 
        className="flex items-center gap-2 group"
      >
        <span className= "text-orange-600 font-medium text-[12px] leading-[16px] font-satoshi">
          Let's work together
        </span>
        <GoArrowUpRight className="text-orange-500 hover:text-blue-600" />
      </Link>
    </header>
  );
}