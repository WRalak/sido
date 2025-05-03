
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

export default function Header() {
  return (
    <header className="  px-4 py-6 md:px-8 lg:px-36 xl:px-66  flex justify-between items-center">
      {/* Left side - Name */}
      <div className=" text-[20px] leading-[16px] font-black text-center">
        <span className="text-orange-600">George</span>
        <span className="text-gray-800 ">Ralak</span>
      </div>

      {/* Right side - Work together CTA */}
      <Link 
  href="/contact" 
  className="flex items-center gap-2 group"
>
  <span className="text-orange-600 font-medium text-[12px] leading-[16px] font-satoshi border-b border-orange-600 ">
    Let's work together
  </span>
  <GoArrowUpRight className="text-orange-500 group-hover:text-blue-600 transition duration-200" />
</Link>

    </header>
  );
}