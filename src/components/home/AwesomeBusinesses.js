'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Loader from '../ui/Loader';
import './skillbutton.css'

const skillsData = {


  html: {
    name: 'HTML',
    color: 'orange-500',
    image: '/Assets/Skillslogos/html-5.svg',
    points: [
      'Semantic structure & accessibility',
      'Form validation & HTML5 APIs',
      'Responsive meta tags & SEO',
      'Web standards compliance'
    ]
  },
  css: {
    name: 'CSS',
    color: 'cyan-500',
    image: '/Assets/Skillslogos/css.svg',
    points: [
      'Flexbox & Grid layouts',
      'Responsive design principles',
      'CSS animations & transitions',
      'Cross-browser compatibility'
    ]
  },
  javascript: {
    name: 'JavaScript',
    color: 'yellow-500',
    image: '/Assets/Skillslogos/js.svg',
    points: [
      'ES6+ modern syntax & features',
      'Async/await & Promise handling',
      'DOM manipulation & events',
      'Algorithm & data structures'
    ]
  },
  react: {
    name: 'React',
    color: 'blue-400',
    image: '/Assets/Skillslogos/react-js.svg',
    points: [
      'Component composition & hooks',
      'State management (useState, Redux)',
      'Performance optimization',
      'React router & navigation'
    ]
  },
  nextjs: {
    name: 'Next.js',
    color: 'black',
    image: '/Assets/Skillslogos/next-js.png',
    points: [
      'Server-side rendering (SSR)',
      'Static generation (SSG)',
      'API routes & middleware',
      'Image optimization & performance'
    ]
  },
  boostrap: {
    name: 'Express.js',
    color: 'gray-700',
    image: '/Assets/Skillslogos/node-js.svg',
    height: '70px',
    points: [
      'REST API design & patterns',
      'Middleware & request handling',
      'Authentication & authorization',
      'Error handling & logging'
    ]
  },
  tailwind: {
    name: 'Tailwind CSS',
    color: 'teal-500',
    image: '/Assets/Skillslogos/tailwindcss.svg',
    points: [
      'Utility-first CSS framework',
      'Responsive design & classes',
      'Custom configuration & plugins',
      'Performance & file size optimization'
    ]
  },
  git: {
    name: 'Git',
    color: 'red-600',
    image: '/Assets/Skillslogos/git.svg',
    points: [
      'Version control & branching',
      'Commit history & rebasing',
      'Collaborative workflows',
      'GitHub & repository management'
    ]
  },
  framer: {
    name: 'Framer',
    color: 'blue-400',
    image: '/Assets/Skillslogos/FRAMER.png', // PNG fallback, no SVG found
    points: [
      'Prototyping & animation',
      'Interactive UI design',
      'Component-driven workflows',
      'Design to code handoff'
    ]
  },
  github: {
    name: 'GitHub',
    color: 'gray-700',
    image: '/Assets/Skillslogos/github.svg',
    points: [
      'Repository hosting',
      'Collaboration & PRs',
      'Actions & CI/CD',
      'Open source contributions'
    ]
  },
  mongo: {
    name: 'MongoDB',
    color: 'green-600',
    image: '/Assets/Skillslogos/mongo.svg',
    points: [
      'NoSQL database design',
      'Aggregation pipelines',
      'Schema-less data modeling',
      'Scalability & performance'
    ]
  },
  gsap: {
    name: 'GSAP',
    color: 'green-600',
    image: '/Assets/Skillslogos/GSAP.png', // PNG fallback, no SVG found
    points: [
      'Advanced animations',
      'Timeline control',
      'Scroll-based effects',
      'Performance optimization'
    ]
  }
};


export default function AwesomeBusinesses() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // Track click count for each skill key
  const [btnClickCount, setBtnClickCount] = useState({});


  useEffect(() => {
    if (selectedSkill) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [selectedSkill]);


  // Handle logo click: alternate animation by click count (odd/even)
  const handleLogoClick = (key) => {
    setBtnClickCount((prev) => {
      const newCount = (prev[key] || 0) + 1;
      setSelectedSkill(key);
      return { ...prev, [key]: newCount };
    });
  };

  // Remove animation class after animation ends
  const handleAnimationEnd = (key) => {
    // No need to reset click count, just remove animation class by forcing re-render
    setBtnClickCount((prev) => ({ ...prev }));
  };

  const skill = selectedSkill ? skillsData[selectedSkill] : null;
  const colorMap = {
    'orange-500': 'bg-orange-500',
    'cyan-500': 'bg-cyan-500',
    'yellow-500': 'bg-yellow-500',
    'blue-400': 'bg-blue-400',
    'black': 'bg-black',
    'green-600': 'bg-green-600',
    'gray-700': 'bg-gray-700',
    'teal-500': 'bg-teal-500',
    'red-600': 'bg-red-600'
  };

  return (
    <div className="flex flex-col gap-4 border bg-[#151417] border-gray-700 rounded-lg px-4 py-6 md:px-8 md:pt-10 relative">
      {/* Marquee Header
      <div className="overflow-hidden bg-gray-900 border border-gray-700 rounded-lg py-2 px-4">
        <div className="animate-marquee inline-block whitespace-nowrap text-sm text-gray-400 font-[--font-space-grotesk]">
          DAD ∞ SKY DIVER ∞ HIKER ∞ NATURE LOVER ∞ HUSBAN ∞ GEEK ∞ CAT DAD ∞ SKY DIVER ∞ HIKER ∞ NATURE LOVER ∞ HUSBAN ∞ GEEK ∞ CAT DAD ∞ SKY DIVER ∞ HIKER ∞ NATURE LOVER ∞ HUSBAN ∞ GEEK
        </div>
      </div> Core Knowledge → Applied Development → Advanced Engineering*/}

      {/* Title */}
      <div>
        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm font-satoshi font-medium">
          <span>Core Knowledge</span>
          <span className="text-gray-600">∞</span>
          <span>Applied Development</span>
          <span className="text-gray-600">∞</span>
          <span>Advanced Engineering</span>
        </div>
        <div>
          <h2 className="text-3xl md:text-3xl font-bold font-bricolage text-[#F2F2F2] mb-2">
            Awesome skills I’ve mastered.
          </h2>
          <p className="text-gray-400 text-sm">
            My Journey as a Developer
          </p>
          <p className="text-gray-500 text-xs mt-2">
            From learning the fundamentals to building every step shaped my growth in web development.
          </p>
        </div>
      </div>

      {/* Google Collaboration Card & Logos Grid - Flex Row */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Skills About Card */}
        <div className="lg:flex-1 bg-opacity-50 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
          {selectedSkill ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 shrink-0 relative">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-white font-medium font-[--font-space-grotesk]">{skill.name}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-300 transition" onClick={() => setSelectedSkill(null)}>
                  <Image
                    src="/Assets/Brandinfo/reload.svg"
                    alt="Close"
                    width={20}
                    height={20}
                    className=" transition-transform duration-500 brightness-0 invert"
                  />
                </button>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader />
                </div>
              ) : (
                <div className="flex flex-col gap-3 text-gray-300 text-sm">
                  {skill.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full ${colorMap[skill.color]} mt-1.5 shrink-0`}></div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white font-satoshi">My Skills Philosophy</h3>
              <div className="flex flex-col gap-3 text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <span>Building scalable, maintainable applications with clean code</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                  <span>Constantly learning and adapting to new technologies</span>
                </div>

              </div>
              <p className="text-gray-400 text-xs">👉 Click any skill below to learn more details</p>
            </div>
          )}
        </div>

        {/* Skills Logos Grid */}
        <div className="lg:flex-1 grid grid-cols-4 grid-rows-3 gap-4">
          {Object.entries(skillsData).map(([key, skillData]) => {
            const count = btnClickCount[key] || 0;
            let animClass = '';
            if (count > 0) {
              animClass = count % 2 === 1 ? 'active-jello' : 'active-diagonal';
            }
            return (
              <div
                key={key}
                onClick={() => handleLogoClick(key)}
                className="flex items-center justify-center cursor-pointer group"
              >
                <div
                  className={`Btn w-16 h-16 bg-gray-80 rounded-lg flex items-center justify-center transition ${selectedSkill === key ? 'md:ring-1 ring-gray-500 ring-offset- ring-offset-gray-900' : ''} ${animClass} relative`}
                  onAnimationEnd={() => handleAnimationEnd(key)}
                >
                  <Image
                    src={skillData.image}
                    alt={skillData.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
