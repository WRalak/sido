import Link from 'next/link';
import React from 'react'

const Footer = () => { 
    return (
      <footer className=" hidden md:flex w-full border-gray-300 py-20 px-3 md:px-24 lg:px-44  flex-col sm:flex-row justify-between items-center text-[13px] text-gray-800 bg-white ">
        <div className="flex flex-col sm:flex-row text-[13px] font-medium sm:items-center gap-1 sm:gap-1">
          <span>+254 716 909 815</span>
          <span className="text-blue-500 text-[8px]">|</span>
          <span>georgeralak@gmail.com</span>
          <span className="text-blue-500 text-[8px]">|</span>
          <a
  href="https://www.linkedin.com/in/george-s-ralak"
  target="_blank"
  rel="noopener noreferrer"
  className="border-b border-gray-800 text-gray-800"
>
  LinkedIn
</a>
<span className="text-blue-500 text-[8px] mx-1">|</span>

<a
  href="https://www.behance.net/georgeralak"
  target="_blank"
  rel="noopener noreferrer"
  className="border-b border-gray-800 text-gray-800 "
>
  Behance
</a>
<span className="text-blue-500 text-[8px] mx-1">|</span>

<a
  href="https://dribbble.com/sid_ralak"
  target="_blank"
  rel="noopener noreferrer"
  className="border-b border-gray-800 text-gray-800 "
>
  Dribbble
</a>

        </div>
  
        <div className="mt-2 sm:mt-0  text-center sm:text-right">
        <p className="text-[13px] font-medium">
  Developed by:{' '}
  <Link
    href="mailto:wallaceralak@gmail.com"
    className="text-orange-600 border-b border-orange-600"
  >
    Wallace Ralak
  </Link>
</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  