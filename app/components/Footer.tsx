import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="hidden md:flex w-full flex-wrap justify-between lg:px-44 xl:px-56 items-center gap-4  py-10 px-6 bg-white text-[13px] text-gray-800">
      <div className="flex flex-wrap items-center gap-2 font-medium">
        <span>+254 716 909 815</span>
        <span className="text-blue-500 text-[10px]">|</span>
        <span>georgeralak@gmail.com</span>
        <span className="text-blue-500 text-[10px]">|</span>
        <a
          href="https://www.linkedin.com/in/george-s-ralak"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-800 "
        >
          LinkedIn
        </a>
        <span className="text-blue-500 text-[10px]">|</span>
        <a
          href="https://www.behance.net/georgeralak"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-800 "
        >
          Behance
        </a>
        <span className="text-blue-500 text-[10px]">|</span>
        <a
          href="https://dribbble.com/sid_ralak"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-800 "
        >
          Dribbble
        </a>
      </div>

      <div className="text-center md:text-right w-full md:w-auto">
        <p className="font-medium">
          Developed by:{' '}
          <Link
            href="mailto:wallaceralak@gmail.com"
            className="text-orange-600 border-b border-orange-600 "
          >
            Wallace Ralak
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
