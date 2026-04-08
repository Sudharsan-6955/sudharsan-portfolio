'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ContactPage from '@/components/contact/ContactPage';
import AboutGrid from '@/components/about/AboutGrid';
import Navbar from '@/app/navs/Navbar';
import Bottomnav from '@/app/navs/Bottomnav';
import SnowCanvas from '@/components/Backgrounds/SnowCanvas';
import { SnowflakeProvider, useSnowflakes } from '@/contexts/SnowflakeContext';

function HomeContent({ isVisible }) {
  const { isActive } = useSnowflakes();

  return (
    <div className="min-h-screen bg-[#161B1C] z-10">
      {isActive ? <SnowCanvas /> : null}
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
  );
}

export default function HomePageClient() {
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
    <SnowflakeProvider>
      <HomeContent isVisible={isVisible} />
    </SnowflakeProvider>
  );
}
