'use client';

import { useState, useEffect } from 'react';

const PROJECTS = [
  {
    id: "01",
    title: "Devtackle Developer Platform",
    category: "Full Stack React 19 & AI Engineering",
    description: "High-performance developer collaboration platform where engineers solve real-world coding bugs, share verified solutions, build daily activity streaks, and access AI-powered step-by-step debugging assistance powered by Google Gemini.",
    image: "/Assets/Projects/Devtackle.webp",
    liveUrl: "https://devtackle.in/",
    githubUrl: "https://github.com/Sudharsan-6955/devtackle",
    tags: ["React 19", "Vite", "Tailwind CSS v4", "TanStack Query v5", "Express 5", "MongoDB", "Google Gemini API", "Razorpay"],
    highlights: [
      "AI Copilot (Gemini 3.6 Flash) with In-DB Cached Debugging Blueprints",
      "Double-Token JWT Auth (Access Token + HttpOnly Refresh Cookie)",
      "Zero-Leakage Backend Paywall & Razorpay HMAC SHA-256 Verification",
      "Express 5 Recursive NoSQL Injection Sanitizer & Helmet Security"
    ],
  },
  {
    id: "02",
    title: "Job Portal Platform",
    category: "Full Stack Next.js & Commercial Recruitment",
    description: "Delivered commercial recruitment platform connecting regional job seekers with industry opportunities, featuring a high-performance candidate portal and an enterprise-grade administrative management system.",
    image: "/Assets/Projects/Job-portal.webp",
    liveUrl: "https://bhairavajobs.com/",
    githubUrl: "https://github.com/Sudharsan-6955/job-portal-platform",
    tags: ["Next.js 16", "React 19", "Tailwind CSS v4", "Node.js", "Express.js", "MongoDB Atlas", "Cloudinary"],
    highlights: [
      "OWASP Security Layer (Helmet, Rate Limiting, NoSQL Sanitization)",
      "Secure Admin Portal with Account Lockout Protection & Full CRUD",
      "Automated Media Upload & Optimization via Cloudinary CDN",
      "Decoupled Full-Stack Monorepo Architecture with Runtime API Resolver"
    ],
  },
  {
    id: "03",
    title: "Full-Stack LMS Platform",
    category: "Full Stack MERN Architecture",
    description: "Comprehensive digital learning management platform featuring student enrollment, instructor course publishing, interactive video curriculum delivery, and Razorpay payment integration.",
    image: "/Assets/Projects/LMS.webp",
    liveUrl: "https://lms-frontend-omega-eight.vercel.app/",
    githubUrl: "https://github.com/Sudharsan-6955/LMS-Frontend",
    tags: ["React 18", "Bootstrap", "Node.js", "Express 5", "MongoDB", "Mongoose", "JWT", "Razorpay", "Multer"],
    highlights: [
      "JWT Authentication & Role-Based Access Control (Student / Instructor)",
      "Curriculum Content Delivery & Media Upload Pipeline via Multer",
      "Integrated Razorpay Secure Payment Gateway Processing",
      "Express-Validator Request Sanitization & Centralized Error Handling"
    ],
  },
  {
    id: "04",
    title: "Raj Surgical Healthcare Portal",
    category: "Next.js & Frontend Engineering",
    description: "Modern medical supplies and healthcare equipment catalog platform featuring structured multi-category exploration, dynamic product specification views, animated product carousels, and responsive mobile filter drawers.",
    image: "/Assets/Projects/rajsurgical.webp",
    liveUrl: "https://rajsurgical.vercel.app/",
    githubUrl: "https://github.com/Sudharsan-6955/Rajsurgical",
    tags: ["Next.js 14", "React 18", "Tailwind CSS", "Framer Motion", "HeroUI", "React Feather", "Axios"],
    highlights: [
      "Multi-Facet Product Filtering by Healthcare Category & Equipment Name",
      "Next.js 14 Dynamic Routing (/productDetails/[id]) for Equipment Specs",
      "Smooth Product Showcase Carousels using Framer Motion & HeroUI",
      "Instant Client-Side Search Across Surgical Equipment Catalog"
    ],
  },
  {
    id: "05",
    title: "Modern E-Commerce Store",
    category: "Frontend Engineering & UI/UX",
    description: "Responsive modern retail storefront featuring categorized collection browsing, dynamic shopping product showcases, smooth jQuery navigation, and mobile hamburger drawer interactions.",
    image: "/Assets/Projects/E-Com.webp",
    liveUrl: "https://e-commerce-tau-six-31.vercel.app/",
    githubUrl: "https://github.com/Sudharsan-6955/E-commerce",
    tags: ["HTML5", "CSS3 (Flexbox/Grid)", "JavaScript (ES6+)", "jQuery", "Cloudinary CDN", "Boxicons"],
    highlights: [
      "Responsive Mobile-First Multi-Section Catalog Layout",
      "Smooth-Scroll Hash Navigation & Mobile Off-Canvas Drawer",
      "Cloudinary CDN Optimized Image Delivery Pipeline",
      "Interactive Product Showcase with Clean UI Hierarchy"
    ],
  },
  {
    id: "06",
    title: "Interactive Seat Booking App",
    category: "React 19 & Interactive State Architecture",
    description: "Interactive cinema reservation application featuring multi-tier seat allocation (Regular, Premium, VIP), real-time pricing computation, dynamic custom color theme picker, and persistent booked seat states.",
    image: "/Assets/Projects/seatbooking.webp",
    liveUrl: "https://seat-booking-app-six.vercel.app/",
    githubUrl: "https://github.com/Sudharsan-6955/Seat-booking-app",
    tags: ["React 19", "Vite", "Tailwind CSS v4", "React Router v7", "JavaScript (ES6+)"],
    highlights: [
      "Matrix Seat Grid (Rows A–H, Columns 1–12) with Occupancy State",
      "Dynamic Tiered Pricing Calculation (Regular ₹150, Premium ₹250, VIP ₹350)",
      "Real-Time Custom Color Theme State Synchronizer",
      "Multi-Movie Catalog Selection & Smooth Booking State Transition"
    ],
  },
];

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(2);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 2, PROJECTS.length));
  };

  const handleShowLess = () => {
    setVisibleCount(2);
  };

  const testimonials = [
    {
      name: "Sundar",
      rating: 5,
      feedback: "Thanks!! Optimized website that easily handles 200+ concurrent users without any lag. Highly recommended for any web development project!",
      avatar: "👨‍💼",
      badge: "Client ( job-portal )",
      link: "https://bhairavajobs.com"
    },
    {
      name: "anoopcodehack",
      role: "Maintainer & Owner",
      badge: "DevBoard (Open Source)",
      rating: 5,
      feedback: "Hey @Sudharsan-6955, your PR has been merged! You're officially a DevBoard contributor now. Feel free to pick up another issue anytime — always happy to have you here! 🙌",
      avatar: "🚀",
      link: "https://github.com/anoopcodehack/DevBoard/pull/346#issuecomment-5359585446"
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

  // Auto-change testimonial every 10 seconds, pause on hover/focus (WCAG 2.2.2)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <section id="work" aria-label="Featured Projects Section" className="py-12 md:py-24 px-3 sm:px-6 w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-unbounded text-white mb-3 tracking-tight">
          Featured <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Projects</span>
          <span className="text-orange-500">.</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg font-bricolage max-w-2xl mx-auto">
          Full-stack web applications, scalable architectures, and interactive digital experiences.
        </p>
      </div>

      {/* Horizontal Feature Stream (Concept 2: Linear / Vercel Style) */}
      <div className="flex flex-col gap-6 md:gap-10">
        {visibleProjects.map((project, index) => (
          <article
            key={project.id}
            aria-label={`${project.title} - ${project.category}`}
            className="group relative w-full rounded-2xl md:rounded-3xl bg-[#151417]/95 border border-white/10 hover:border-orange-500/40 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-orange-500/10 animate-slide-in-bottom motion-reduce:transition-none motion-reduce:animate-none"
          >
            {/* Ambient Orange Radial Glow on Hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              style={{
                background: 'radial-gradient(600px circle at 50% 50%, rgba(255, 128, 0, 0.12), transparent 70%)',
              }}
            />

            {/* ============================================================ */}
            {/* MOBILE VIEW (< md): Only card with Eye icon & GitHub icon    */}
            {/* ============================================================ */}
            <div className="block md:hidden relative p-3">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0d0c0f] border border-white/10 flex items-center justify-center p-1.5">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot preview`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  width={800}
                  height={500}
                  className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500 motion-reduce:transform-none"
                />

                {/* Gradient overlay for readability */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                {/* Top Badge: Project Number */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="text-orange-400 font-unbounded text-xs font-bold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-orange-500/30">
                    {project.id}
                  </span>
                </div>

                {/* Bottom Bar: Title on Left, Eye & GitHub on Right */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between gap-2">
                  <div className="min-w-0 pr-2">
                    <h3 className="text-white font-syne font-bold text-sm truncate">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-[11px] font-paragraph truncate opacity-85">
                      {project.category}
                    </p>
                  </div>

                  {/* Action Icons */}
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Eye Icon (Live Demo) */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live website for ${project.title} (opens in a new tab)`}
                      className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      title="View Live Site"
                    >
                      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>

                    {/* GitHub Icon (Source Code) */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                      className="w-10 h-10 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-gray-200 hover:text-white border border-white/20 flex items-center justify-center shadow-lg active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      title="View Source Code"
                    >
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* DESKTOP & TABLET VIEW (md: and above): Full Concept 2 Split  */}
            {/* ============================================================ */}
            <div className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 p-6 lg:p-8 items-center">
              {/* Left Column: UI Preview (Modern Browser Window Mockup) */}
              <div className="md:col-span-5 lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#111014] border border-white/10 group-hover:border-orange-500/30 transition-all duration-500 shadow-2xl flex flex-col">
                {/* Browser Mockup Top Bar */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-black/50 border-b border-white/5 select-none">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <div
                    aria-label={`Live domain: ${project.liveUrl}`}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] text-gray-400 font-mono truncate max-w-[180px]"
                  >
                    {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </div>
                  <div className="w-6" aria-hidden="true" />
                </div>

                {/* Screenshot Display (Natural Edge-to-Edge Fit) */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0d0c0f]">
                  <img
                    src={project.image}
                    alt={`${project.title} live interface preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out motion-reduce:transform-none"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Deep Engineering Highlights & Actions */}
              <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-between h-full space-y-4">
                {/* Top Meta */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-400 font-unbounded text-sm font-bold tracking-widest">
                      {project.id}
                    </span>
                    <span className="text-xs uppercase font-syne font-medium tracking-wider text-gray-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold font-syne text-white group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm lg:text-base font-paragraph leading-relaxed mt-2.5">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium font-syne px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10 group-hover:border-orange-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-orange-400/90 mb-2 font-syne">
                    Architecture Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-300 font-paragraph">
                    {project.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live website for ${project.title} (opens in a new tab)`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-syne font-semibold text-sm transition-all duration-300 shadow-md shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151417]"
                  >
                    <span>View Live Project</span>
                    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-gray-300 hover:text-white font-syne font-medium text-sm transition-all duration-300 border border-white/10 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151417]"
                  >
                    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Show More Projects Button (displayed while more projects can be loaded) */}
      {hasMore && (
        <div className="mt-8 md:mt-12 flex justify-center">
          <button
            onClick={handleShowMore}
            aria-expanded="false"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#151417] hover:bg-[#1c1a20] text-gray-200 hover:text-white font-syne font-medium text-sm sm:text-base border border-orange-500/30 hover:border-orange-500/60 shadow-lg shadow-orange-500/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151417]"
          >
            <span>Show More Projects</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/25 font-unbounded">
              +{Math.min(2, PROJECTS.length - visibleCount)}
            </span>
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-orange-400/80 group-hover:text-orange-400 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}

      {/* On the last click of Show More: Render GitHub Explore Div FIRST, then Show Less Button */}
      {!hasMore && (
        <>
          {/* GitHub Repository Exploration Link Banner */}
          <div className="mt-10 md:mt-14 relative rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#121114] via-[#18161c] to-[#121114] border border-white/10 hover:border-orange-500/40 p-6 sm:p-8 overflow-hidden shadow-2xl transition-all duration-500 group animate-slide-in-bottom">
            {/* Ambient Orange Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <div aria-hidden="true" className="w-14 h-14 rounded-2xl bg-black/60 border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:scale-105 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-300 shadow-xl">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-1 justify-center sm:justify-start">
                    <span aria-hidden="true" className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-orange-400 font-syne">
                      Open Source & Repositories
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-syne text-white">
                    Want to explore more projects & repositories?
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-paragraph mt-1 max-w-xl">
                    Check out active code repositories, experiments, full-stack prototypes, and open-source contributions directly on my GitHub profile.
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/Sudharsan-6955"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sudharsan's GitHub profile to explore all repositories (opens in a new tab)"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-syne font-semibold text-sm transition-all duration-300 shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121114]"
              >
                <span>Explore GitHub Profile</span>
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Show Less Button (placed BELOW the GitHub exploration banner) */}
          {visibleCount > 2 && (
            <div className="mt-8 flex justify-center animate-slide-in-bottom">
              <button
                onClick={handleShowLess}
                aria-label="Show fewer projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-gray-300 hover:text-white font-syne text-xs sm:text-sm border border-white/10 transition-all duration-300 hover:border-white/25 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151417]"
              >
                <span>Show Less (Show 2)</span>
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 rotate-180 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </>
      )}

      {/* Client Testimonials Section */}
      <div className="mt-16 md:mt-24 pt-12 border-t border-white/10">
        <div className="text-center mb-8">
          <p className="text-orange-400 font-unbounded text-xs uppercase tracking-widest font-semibold mb-1">
            Endorsements
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold font-syne text-white">
            Client <span className="text-orange-500">Testimonials</span>
          </h3>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="relative rounded-2xl bg-[#151417] p-6 sm:p-8 border border-white/10 shadow-xl flex flex-col justify-between min-h-[220px] sm:min-h-[200px]"
          >
            <div className="flex items-center justify-between mb-4 gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <div aria-hidden="true" className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-xl shadow-md shrink-0">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-white font-syne font-bold text-base truncate">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    {testimonials[activeTestimonial].link && (
                      <a
                        href={testimonials[activeTestimonial].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${testimonials[activeTestimonial].name}'s merged PR comment on GitHub (opens in a new tab)`}
                        className="text-[10px] text-orange-400 hover:text-orange-300 font-syne px-2 inline-flex items-center gap-1 shrink-0 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-400"
                        title="View GitHub PR Comment"
                      >
                        <span>GitHub PR</span>
                        <svg aria-hidden="true" className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 font-paragraph truncate">
                    {testimonials[activeTestimonial].role
                      ? `${testimonials[activeTestimonial].role} • ${testimonials[activeTestimonial].badge}`
                      : testimonials[activeTestimonial].badge}
                  </p>
                </div>
              </div>
              <div className="text-amber-400 text-sm shrink-0">
                <span role="img" aria-label={`${testimonials[activeTestimonial].rating} out of 5 stars`}>
                  {'⭐'.repeat(testimonials[activeTestimonial].rating)}
                </span>
              </div>
            </div>

            {/* Testimonial Quote with consistent min-height to prevent card resizing */}
            <blockquote aria-live="polite" aria-atomic="true" className="min-h-[72px] sm:min-h-[64px] flex items-center">
              <p
                key={activeTestimonial}
                className="text-gray-300 text-sm sm:text-base font-paragraph leading-relaxed italic animate-slide-in-bottom motion-reduce:animate-none"
              >
                &ldquo;{testimonials[activeTestimonial].feedback}&rdquo;
              </p>
            </blockquote>

            {/* Dots */}
            <div className="flex gap-2 justify-center mt-6" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((t, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Select testimonial ${index + 1} of ${testimonials.length} from ${t.name}`}
                  aria-current={activeTestimonial === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                    activeTestimonial === index ? 'bg-orange-500 w-6' : 'bg-gray-700 w-2 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
