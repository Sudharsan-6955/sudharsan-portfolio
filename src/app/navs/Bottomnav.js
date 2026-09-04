import React from 'react';

export default function Bottomnav({ isVisible }) {
  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full transition-transform duration-300 z-50 shadow-lg ${!isVisible ? 'translate-y-0' : 'translate-y-32'}`}>
      <div className="px-8 py-4 flex items-center justify-center gap-12">
        {/* Home Icon */}
        <a href="#home" className="relative group cursor-pointer" aria-label="Home">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 1-1.06 1.06l-.91-.91V20.25a1.5 1.5 0 0 1-1.5 1.5H6.25a1.5 1.5 0 0 1-1.5-1.5V12.68l-.91.91a.75.75 0 0 1-1.06-1.06l8.69-8.69Z" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Home</span>
        </a>

        {/* About Icon (User Profile) */}
        <a href="#about" className="relative group cursor-pointer" aria-label="About">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">About</span>
        </a>

        {/* Work Icon (Briefcase / Projects) */}
        <a href="#work" className="relative group cursor-pointer" aria-label="Work">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.75H21A2.25 2.25 0 0 1 23.25 8.25v2.25a2.25 2.25 0 0 1-2.25 2.25h-18A2.25 2.25 0 0 1 .75 10.5V8.25A2.25 2.25 0 0 1 3 6h4.5v-.75Zm7.5.75V5.25a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V6h6ZM2.25 13.5v6A2.25 2.25 0 0 0 4.5 21.75h15A2.25 2.25 0 0 0 21.75 19.5v-6H2.25Z" clipRule="evenodd" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Work</span>
        </a>

        {/* Contact Icon (Mail / Message) */}
        <a href="#contact" className="relative group cursor-pointer" aria-label="Contact">
          <svg className="w-6 h-6 text-white hover:scale-110 transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Contact</span>
        </a>
      </div>
    </nav>
  );
}
