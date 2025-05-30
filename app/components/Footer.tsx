import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="hidden md:flex w- md:px-8 lg:px-20 xl:px-68 2xl:px-72 max-w-screen-2xl  mx-auto flex-wrap justify-between items-center gap-4 py-15 px-6 bg-gray-50 text-[13px] text-gray-800">
      <div className="flex flex-wrap items-center gap-x-2 font-medium">
        <span>+254 716 909 815</span>
        <span className="text-blue-500 text-[10px]">|</span>
        <span>georgeralak@gmail.com</span>
        <span className="text-blue-500 text-[10px]">|</span>
        <a
          href="https://www.linkedin.com/in/george-s-ralak"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-800  transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-blue-500 text-[10px]">|</span>
        <a
          href="https://www.behance.net/georgeralak"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-800  transition-colors"
        >
          Behance
        </a>
        <span className="text-blue-500 text-[10px]">|</span>
        <a
          href="https://dribbble.com/sid_ralak"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-800  transition-colors"
        >
          Dribbble
        </a>
      </div>

      <div className="text-center md:text-right w-full md:w-auto mt-4 md:mt-0">
        <p className="font-medium">
          Developed by:{' '}
          <Link
            href="mailto:wallaceralak@gmail.com"
            className="text-orange-600 border-b border-orange-600 hover:text-orange-700 transition-colors"
          >
            Wallace Ralak
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;