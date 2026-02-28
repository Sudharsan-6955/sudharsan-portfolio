import React from 'react';

export default function Bottomnav({ isVisible }) {
  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full transition-transform duration-300 z-50 shadow-lg ${!isVisible ? 'translate-y-0' : 'translate-y-32'}`}>
      <div className="px-8 py-4 flex items-center justify-center gap-12">
        {/* Home Icon */}
        <a href="#home" className="relative group cursor-pointer">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Home</span>
        </a>

        {/* Search Icon */}
        <a href="#about" className="relative group cursor-pointer">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">About</span>
        </a>

        {/* Profile Icon */}
        <a href="#work" className="relative group cursor-pointer">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Work</span>
        </a>

        {/* Contact Icon */}
        <a href="#contact" className="relative group cursor-pointer">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.331 6.331l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Contact</span>
        </a>
      </div>
    </nav>
  );
}
