import Theme from './Theme';
import React from 'react';

const SocialBar: React.FC = () => {
  return (
    <main data-theme={Theme}>
      <div className="icon-bar fixed z-[100] flex flex-col items-center gap-2 p-2">
        {/* GitHub Icon */}
        <a 
          href="https://github.com/Matrix5674" 
          aria-label="GitHub" 
          target="_blank" 
          rel="noreferrer" 
          className="icon-link hover:bg-gray-800 p-1 rounded-full transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="feather feather-github w-5 h-5"
          >
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
        {/* Twitter Icon */}
        <a 
          href="https://twitter.com/SohamSahasrabu5" 
          aria-label="Twitter" 
          target="_blank" 
          rel="noreferrer" 
          className="icon-link hover:bg-blue-400 p-1 rounded-full transition-colors duration-300"
        >
          <i className="fa fa-twitter w-5 h-5" aria-hidden="true"></i>
        </a>
        {/* Instagram Icon */}
        <a 
          href="https://www.instagram.com/sohams_28/" 
          aria-label="Instagram" 
          target="_blank" 
          rel="noreferrer" 
          className="icon-link hover:bg-pink-400 p-1 rounded-full transition-colors duration-300"
        >
          <i className="fa fa-instagram w-5 h-5" aria-hidden="true"></i>
        </a>
        {/* Google Icon */}
        <a 
          href="mailto:sohamsah28@gmail.com" 
          aria-label="Google" 
          target="_blank" 
          rel="noreferrer" 
          className="icon-link hover:bg-red-400 p-1 rounded-full transition-colors duration-300"
        >
          <i className="fa fa-google w-5 h-5" aria-hidden="true"></i>
        </a>
        {/* LinkedIn Icon */}
        <a 
          href="https://www.linkedin.com/in/soham-sahasrabuddhe-07515328a/" 
          aria-label="LinkedIn" 
          target="_blank" 
          rel="noreferrer" 
          className="icon-link hover:bg-blue-700 p-1 rounded-full transition-colors duration-300"
        >
          <i className="fa fa-linkedin w-5 h-5" aria-hidden="true"></i>
        </a>
      </div>
    </main>
  );
}

export default SocialBar;
