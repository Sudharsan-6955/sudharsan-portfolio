'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ContactPage from '@/components/contact/ContactPage';
import AboutGrid from '@/components/about/AboutGrid';
import Navbar from './navs/Navbar';
import Bottomnav from './navs/Bottomnav';
import SnowCanvas from '@/components/Backgrounds/SnowCanvas';
import SVGFlakeFall from '@/components/Backgrounds/SVGFlakeFall'
export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <SnowCanvas />
      <SVGFlakeFall />
      <div className="min-h-screen bg-[#161B1C] z-10">
        <Navbar isVisible={isVisible} />
        <Bottomnav isVisible={isVisible} />
        {/* Main Content */}
        <main className="pt-28 max-w-7xl mx-auto   md:px-6 py-20 pb-10">
          <HeroSection />
          <section id="about" className="text-white py-5 px-1 md:px-10 min-h-auto flex flex-col items-center justify-center">
            <div className="mt-10 w-full flex justify-center">
              <AboutGrid />
            </div>
          </section>
          <ProjectsSection />
          <ContactPage />
        </main>
      </div>
    </>
  );
}