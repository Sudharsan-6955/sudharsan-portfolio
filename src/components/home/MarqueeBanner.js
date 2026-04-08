'use client';

export default function MarqueeBanner() {
  const marqueeText = "∞ CODE BUILDER ∞ MERN DEV ∞ UI/UX CREATOR ∞ DREAMER EXPLORER ∞ TECH ∞ SUDHARSAN ∞";

  return (
    <div className="w-full bg-[#151417] overflow-hidden py-2.5 relative rounded-2xl">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Repeat the text multiple times for continuous scroll */}
        {[...Array(40)].map((_, index) => (
          <span
            key={index}
            className="text-base md:text-lg font-bold text-white mx-4 inline-flex items-center gap-2 tracking-wide"
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
}
