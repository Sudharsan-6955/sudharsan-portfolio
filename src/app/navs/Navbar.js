import React, { useRef, useState } from 'react';
import { useSnowflakes } from '@/contexts/SnowflakeContext';



function NavLinks() {
  const navItems = ['Home', 'About', 'Work', 'Contact'];
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const containerRef = useRef(null);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0, opacity: 0 });

  function handleMouseEnter(idx, e) {
    const el = e.currentTarget;
    const containerRect = containerRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setBarStyle({
      left: elRect.left - containerRect.left,
      width: elRect.width,
      opacity: 1,
    });
    setHoveredIdx(idx);
  }

  function handleMouseLeave() {
    setBarStyle((prev) => ({ ...prev, opacity: 0 }));
    setHoveredIdx(null);
  }

  return (
    <div
      ref={containerRef}
      className="hidden md:flex gap-8 bg-gray-800 px-8 py-2 rounded-full relative"
      style={{ minWidth: 0 }}
    >
      {/* Animated Slidebar */}
      <span
        className="absolute top-1 left-0 h-[calc(100%-0.5rem)] bg-gray-900 rounded-2xl z-0 transition-all duration-500"
        style={{
          width: barStyle.width,
          left: barStyle.left,
          opacity: barStyle.opacity,
          transitionTimingFunction: 'cubic-bezier(0.33, 0.83, 0.99, 0.98)',
        }}
      />
      {navItems.map((item, idx) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`relative z-10 text-gray-200 font-medium px-3 py-1 transition-colors duration-200 ${hoveredIdx === idx ? 'text-white' : ''}`}
          onMouseEnter={(e) => handleMouseEnter(idx, e)}
          onMouseLeave={handleMouseLeave}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

function DecryptedText({ text }) {
  const [display, setDisplay] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const intervalRef = useRef();

  // Animation function
  const animate = () => {
    let frame = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplay((prev) => {
        return text
          .split('')
          .map((char, i) => {
            if (i < frame) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });
      frame++;
      if (frame > text.length) {
        clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 70);
  };

  // On mount animate
  React.useEffect(() => {
    animate();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [text]);

  // On hover animate
  const handleMouseEnter = () => {
    setIsHovering(true);
    animate();
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setDisplay(text);
  };

  return (
    <span
      className="text-white text-2xl font-bold tracking-tight cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={text}
    >
      {display}
    </span>
  );
}

export default function Navbar({ isVisible }) {
  const { isActive, toggleSnowflakes } = useSnowflakes();

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 bg-[#151417]/60 backdrop-blur-sm shadow-2xl  transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-around items-center pb-1">
            {/* Logo and Name */}
            <div className="flex items-center gap-2" style={{ width: '145px', minWidth: '145px' }}>
              <DecryptedText text="SUDHARSAN." />
            </div>

            {/* Center Navigation Links */}
              {/* Animated Lubber/Slidebar Navigation */}
              <NavLinks />
            {/* Social Icons */}
            <div className="flex gap-3 items-center group">
              {/* Star Icon - Toggle Snowflakes */}
              <div className="relative">
                <button
                  onClick={toggleSnowflakes}
                  className={`transition-all duration-300 ${
                    isActive 
                      ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' 
                      : 'text-gray-400 hover:text-yellow-400'
                  }`}
                  aria-label="Toggle snowflakes"
                  title="Toggle snowflakes"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              </div>

              {/* Email Icon */}
              <div className="relative">
                <a
                  href="mailto:your.email@example.com"
                  className="peer text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>

              {/* Twitter Icon */}
              <div className="relative">
                <a
                  href="https://twitter.com"
                  className="peer text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>

              {/* Instagram Icon */}
              <div className="relative">
                <a
                  href="https://instagram.com"
                  className="peer text-gray-400 hover:text-pink-400 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}
