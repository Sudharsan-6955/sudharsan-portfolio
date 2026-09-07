'use client';

export default function MarqueeBanner() {
  const items = [
    { label: "CODE BUILDER", special: false },
    { label: "MERN DEV", special: false },
    { label: "UI/UX CREATOR", special: false },
    { label: "DREAMER EXPLORER", special: false },
    { label: "TECH ENTHUSIAST", special: false },
    { label: "SUDHARSAN", special: true },
  ];

  // Repeat the list to ensure track width is sufficiently wide
  const sequence = [...items, ...items];

  const renderTrack = (ariaHidden = false) => (
    <div
      className="flex shrink-0 items-center gap-4 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap pl-4"
      aria-hidden={ariaHidden ? 'true' : undefined}
    >
      {sequence.map((item, idx) => (
        <span key={idx} className="inline-flex items-center gap-3">
          <span className="text-orange-500 font-bold text-sm select-none opacity-85">
            ∞
          </span>
          <span
            className={`text-xs md:text-sm tracking-wider uppercase font-syne font-semibold transition-colors duration-200 ${
              item.special
                ? 'bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent font-bold drop-shadow-[0_0_8px_rgba(255,153,0,0.3)]'
                : 'text-gray-200 hover:text-white'
            }`}
          >
            {item.label}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="group relative w-full bg-[#151417]/95 border border-white/10 rounded-2xl overflow-hidden py-2.5 shadow-lg backdrop-blur-md select-none">
      {/* Left & Right subtle edge fade mask */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-[#151417] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10 bg-gradient-to-l from-[#151417] to-transparent" />

      {/* Dual track for seamless infinite looping */}
      <div className="flex w-max cursor-default">
        {renderTrack(false)}
        {renderTrack(true)}
      </div>
    </div>
  );
}

