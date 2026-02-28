'use client';

import { useState } from 'react';
import MobileDesignCard from './MobileDesignCard';
import QuoteCard from './QuoteCard';
import NaturePhotoCard from './NaturePhotoCard';
import PrintOnWallCard from './PrintOnWallCard';
import TopRatedPhotographerCard from './TopRatedPhotographerCard';
import TestimonialsCard from './TestimonialsCard';
import SkillsServicesCard from './SkillsServicesCard';
import BrandShowcaseCard from './BrandShowcaseCard';

export default function ProjectsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Tom Mellows",
      role: "CEO",
      rating: 5,
      feedback: "Sudharsan was polite, courteous, and professional. He was also punctual. Highly recommend him and would work with him again. Cheers!",
      avatar: "👨‍💼",
      badge: "Client"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      feedback: "Exceptional work! The attention to detail and creative vision exceeded all expectations. A true professional.",
      avatar: "👩‍💼",
      badge: "Client"
    }
  ];

  return (
    <section id="work" className="md:py-20 py-5 px-4 md:px-6 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-unbounded md:text-5xl font-bold text-white mb-4">
          Featured <span className="bg-orange-500 bg-clip-text text-transparent">Work</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">A showcase of my creative projects and achievements</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
        <MobileDesignCard />
        <QuoteCard />
        <NaturePhotoCard />
        <PrintOnWallCard />
        <TopRatedPhotographerCard />
        <TestimonialsCard testimonials={testimonials} activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />
        <SkillsServicesCard />
        <BrandShowcaseCard />
      </div>
    </section>
  );
}
