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

  const sequence = [...items, ...items];

  const renderTrack = (ariaHidden = false) => (
    <div
      className="flex shrink-0 items-center gap-4 md:mt-2 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap pl-4"
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
    <div className="group relative w-full bg-transparent overflow-hidden py-2 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Dual track for seamless infinite looping */}
      <div className="flex w-max cursor-default">
        {renderTrack(false)}
        {renderTrack(true)}
      </div>
    </div>
  );
}