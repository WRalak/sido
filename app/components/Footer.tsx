import React from 'react'

const Footer = () => { 
    return (
      <footer className="w-full border-gray-300 py-4 px-6 lg:px-48  flex flex-col sm:flex-row justify-between items-center text-xs text-gray-800 bg-white">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-1">
          <span>+254 716 909 815</span>
          <span className="text-blue-500">|</span>
          <span>georgeralak@gmail.com</span>
          <span className="text-blue-500">|</span>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="">
            LinkedIn
          </a>
          <span className="text-blue-500">|</span>
          <a href="https://www.behance.net/your-profile" target="_blank" rel="noopener noreferrer" className="">
            Behance
          </a>
          <span className="text-blue-500">|</span>
          <a href="https://dribbble.com/your-profile" target="_blank" rel="noopener noreferrer" className="">
            Dribbble
          </a>
        </div>
  
        <div className="mt-2 sm:mt-0 text-center sm:text-right">
          <p>Developed by: <span className='text-orange-600 underline'>Wallace Ralak</span></p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  