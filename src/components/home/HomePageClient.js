'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import Navbar from '@/app/navs/Navbar';
import Bottomnav from '@/app/navs/Bottomnav';
import { SnowflakeProvider, useSnowflakes } from '@/contexts/SnowflakeContext';

const AboutGrid = dynamic(() => import('@/components/about/AboutGrid'));
const ProjectsSection = dynamic(() => import('@/components/projects/ProjectsSection'));
const ContactPage = dynamic(() => import('@/components/contact/ContactPage'));
const SnowCanvas = dynamic(() => import('@/components/Backgrounds/SnowCanvas'), {
  ssr: false,
});

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
  const lastScrollYRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        let nextIsVisible = isVisibleRef.current;

        if (currentScrollY < lastScrollYRef.current) {
          nextIsVisible = true;
        } else if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
          nextIsVisible = false;
        }

        if (nextIsVisible !== isVisibleRef.current) {
          isVisibleRef.current = nextIsVisible;
          setIsVisible(nextIsVisible);
        }

        lastScrollYRef.current = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SnowflakeProvider>
      <HomeContent isVisible={isVisible} />
    </SnowflakeProvider>
  );
}
